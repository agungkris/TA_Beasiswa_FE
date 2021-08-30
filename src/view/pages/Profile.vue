<template>
  <div>
    <v-card>
      <v-card-title>Edit Akun</v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="auth.user.name"
            :rules="nameRules"
            label="Nama Lengkap"
            required
            prepend-icon="mdi-format-title"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="auth.user.username"
            :rules="usernameRules"
            label="NIM"
            required
            prepend-icon="mdi-format-title"
            outlined
          ></v-text-field>

          <v-select
            v-model="auth.user.profile.prodi_id"
            prepend-icon="mdi-format-title"
            class="my-2"
            label="Program Studi"
            target="#dropdown-example"
            :items="prodiList"
            item-value="id"
            item-text="name"
            outlined
            :rules="prodiRules"
            @change="onChangeFilter"
          ></v-select>
          <!-- <v-text-field
            v-model="auth.user.profile.prodi_id"
            :rules="prodiRules"
            label="Program Studi"
            required
            prepend-icon="mdi-format-title"
            outlined
          ></v-text-field> -->
          <v-text-field
            v-model="auth.user.profile.generation"
            :rules="angkatanRules"
            label="Tahun Angkatan"
            required
            prepend-icon="mdi-format-title"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="auth.user.email"
            :rules="emailRules"
            label="Email"
            required
            prepend-icon="mdi-format-title"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="auth.user.password"
            :rules="passwordRules"
            label="Password"
            required
            prepend-icon="mdi-format-title"
            outlined
          ></v-text-field>

          <v-btn
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
    </v-card>
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
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
    ...mapState(["auth"]),
    ...mapState("prodi", ["prodiList"])
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vuetify", route: "alerts" },
      { title: "Form Inputs & Control", route: "autocompletes" },
      { title: "Fileinptus" }
    ]);
    this.getProdiList();
    this.onFetchData();
  },

  methods: {
    // ...mapActions("auth", ["updatePeriod", "getPeriod"]),
    ...mapActions("prodi", ["getProdiList"]),
    ...mapActions("users", ["updateUsers"]),
    // code 1
    async onFetchData() {
      // await this.getPeriod({ id: this.id });
    },
    async validate() {
      // this.buttonLoading = true;
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.auth.user.generation = this.auth.user.profile.generation;
        this.auth.user.prodi_id = this.auth.user.profile.prodi_id;

        await this.updateUsers({
          id: this.auth.user.id,
          payload: this.auth.user
        });
        // this.buttonLoading = false;
        this.$router.push({ name: "dashboard" });
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    validateState(name) {
      const { $dirty, $error } = this.$v.usersData[name];
      return $dirty ? !$error : null;
    },
    async onChangeFilter() {
      await this.getUploadScholarshipList({
        period_id: this.selectedPeriod,
        next_stage: null
      });
    }
  }
};
</script>

<style></style>
