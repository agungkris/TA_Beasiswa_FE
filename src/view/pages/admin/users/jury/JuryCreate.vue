<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <v-card>
          <v-card-title>Buat Akun Juri</v-card-title>
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
                label="Password"
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
      karyatulis: false,
      fgd: false,
      valid: false,
      name: "",
      nameRules: [v => !!v || "Name is required"],
      username: "",
      usernameRules: [v => !!v || "NIK is required"],
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
    ...mapState("createjury", ["createjuryData"])
  },

  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vuetify", route: "alerts" },
      { title: "Form Inputs & Control", route: "autocompletes" },
      { title: "Fileinptus" }
    ]);
  },

  methods: {
    ...mapActions("createjury", ["createCreateJury"]),
    // code 1
    async validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.createjuryData.level = "juri";
        await this.createCreateJury({ payload: this.createjuryData });
        this.createjuryData = {};
        this.$router.push({ name: "JuryList" });
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>
