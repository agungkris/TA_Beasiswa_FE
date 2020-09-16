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

              <v-text-field
                v-model="usersData.profile.prodi"
                :rules="usernameRules"
                label="Program Studi"
                required
              ></v-text-field>

              <v-text-field
                v-model="usersData.profile.generation"
                :rules="usernameRules"
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
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
              >
                Confirm
              </v-btn>

              <v-btn color="error" class="mr-4" @click="reset">
                Reset Form
              </v-btn>
            </v-form>
          </v-card-text>
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
      id: this.$route.params.id,
      valid: false,
      name: "",
      nameRules: [v => !!v || "Name is required"],
      username: "",
      usernameRules: [v => !!v || "Username is required"],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      password: "",
      passwordRules: [v => !!v || "Password is required"]
    };
  },

  computed: {
    ...mapState("users", ["usersData"])
  },
  async mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vuetify", route: "alerts" },
      { title: "Form Inputs & Control", route: "autocompletes" },
      { title: "Fileinptus" }
    ]);
    await this.onFetchData();
  },

  methods: {
    ...mapActions("users", ["updateUsers", "getUsers"]),
    // code 1
    async onFetchData() {
      await this.getUsers({ id: this.id });
    },
    async validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        await this.updateUsers({
          id: this.id,
          payload: this.usersData
        });
        this.usersData = {};
        this.$router.push({ name: "StudentsAkun" });
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>
