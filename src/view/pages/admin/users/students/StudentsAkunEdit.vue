<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <v-card>
          <v-card-title>Edit Akun Mahasiswa</v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="usersData.name"
                :rules="nameRules"
                label="Nama Lengkap"
                required
              ></v-text-field>

              <v-text-field
                v-model="usersData.username"
                :rules="usernameRules"
                label="NIM"
                required
              ></v-text-field>

              <v-select
                v-model="usersData.profile.prodi_id"
                class="my-2"
                label="Program Studi"
                target="#dropdown-example"
                :items="prodiList"
                item-value="id"
                item-text="name"
                :rules="prodiRules"
                @change="onChangeFilter"
              ></v-select>

              <v-text-field
                v-model="usersData.profile.generation"
                :rules="angkatanRules"
                label="Angkatan"
                required
              ></v-text-field>

              <v-text-field
                v-model="usersData.email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>

              <v-text-field
                v-model="usersData.password"
                :rules="passwordRules"
                label="Kata Sandi"
                required
              ></v-text-field>

              <v-btn
                :loading="buttonLoading"
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
              >
                Selesai
              </v-btn>

              <v-btn color="error" class="mr-4" @click="reset">
                Reset
              </v-btn>
            </v-form>
          </v-card-text>
          <v-dialog v-model="isLoading" persistent width="300">
            <v-card dark>
              <v-card-text>
                Mohon Menunggu...
                <v-progress-linear
                  indeterminate
                  color="white"
                  class="mb-0 mt-1"
                ></v-progress-linear>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      isLoading: false,
      buttonLoading: false,
      id: this.$route.params.id,
      valid: false,
      name: "",
      nameRules: [v => !!v || "Nama wajib diisi"],
      username: "",
      usernameRules: [v => !!v || "NIM wajib diisi"],
      prodi: "",
      prodiRules: [v => !!v || "Program studi wajib diisi"],
      angkatan: "",
      angkatanRules: [v => !!v || "Angkatan wajib diisi"],
      email: "",
      emailRules: [
        v => !!v || "E-mail wajib diisi",
        v => /.+@.+\..+/.test(v) || "E-mail wajib diisi"
      ],
      password: "",
      passwordRules: [v => !!v || "Password wajib diisi"]
    };
  },

  computed: {
    ...mapState("users", ["usersData"]),
    ...mapState("prodi", ["prodiList"])
  },
  async mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vuetify", route: "alerts" },
      { title: "Form Inputs & Control", route: "autocompletes" },
      { title: "Fileinptus" }
    ]);
    await this.getProdiList();
    await this.onFetchData();
  },

  methods: {
    ...mapActions("users", ["updateUsers", "getUsers"]),
    ...mapActions("prodi", ["getProdiList"]),
    // code 1
    async onFetchData() {
      this.isLoading = true;
      await this.getUsers({ id: this.id });
      this.isLoading = false;
    },
    async validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.usersData.generation = this.usersData.profile.generation;
        this.usersData.prodi_id = this.usersData.profile.prodi_id;
        this.buttonLoading = true;
        await this.updateUsers({
          id: this.id,
          payload: this.usersData
        });
        this.usersData = {};
        this.buttonLoading = false;
        this.$router.push({ name: "StudentsAkun" });
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>
