<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <v-card>
          <v-card-title>Edit Juri</v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="createjuryData.name"
                :rules="nameRules"
                label="Nama Lengkap"
                required
              ></v-text-field>

              <v-text-field
                v-model="createjuryData.username"
                :rules="usernameRules"
                label="NIDN"
                required
              ></v-text-field>

              <v-text-field
                v-model="createjuryData.email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>

              <v-text-field
                v-model="createjuryData.password"
                :rules="passwordRules"
                label="Kata Sandi"
                required
              ></v-text-field>

              <v-container fluid>
                <v-checkbox
                  v-model="createjuryData.karya_tulis"
                  :label="`Juri Karya Tulis`"
                ></v-checkbox>
                <v-checkbox
                  v-model="createjuryData.fgd"
                  :label="`Juri FGD`"
                ></v-checkbox>
              </v-container>

              <v-btn
                :loading="loadingButton"
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
      loadingButton: false,
      isLoading: false,
      karyatulis: false,
      fgd: false,
      id: this.$route.params.id,
      valid: false,
      name: "",
      nameRules: [v => !!v || "Nama wajib diisi"],
      username: "",
      usernameRules: [v => !!v || "NIDN wajib diisi"],
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
    ...mapState("createjury", ["createjuryData"])
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
    ...mapActions("createjury", ["updateCreateJury", "getCreateJury"]),
    // code 1
    async onFetchData() {
      this.isLoading = true;
      await this.getCreateJury({ id: this.id });
      this.isLoading = false;
    },
    async validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.loadingButton = true;
        await this.updateCreateJury({
          id: this.id,
          payload: this.createjuryData
        });
        this.loadingButton = false;
        this.$router.push({ name: "JuryList" });
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>
