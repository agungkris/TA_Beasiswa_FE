<template>
  <div>
    <v-card>
      <v-card-title>Edit Akun</v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            :rules="nameRules"
            label="Nama Lengkap"
            required
            prepend-icon="mdi-format-title"
            outlined
          ></v-text-field>
          <v-text-field
            :rules="nimRules"
            label="NIM"
            required
            prepend-icon="mdi-format-title"
            outlined
          ></v-text-field>
          <v-text-field
            :rules="prodiRules"
            label="Program Studi"
            required
            prepend-icon="mdi-format-title"
            outlined
          ></v-text-field>
          <v-text-field
            :rules="angkatanRules"
            label="Tahun Angkatan"
            required
            prepend-icon="mdi-format-title"
            outlined
          ></v-text-field>
          <v-text-field
            :rules="emailRules"
            label="Email"
            required
            prepend-icon="mdi-format-title"
            outlined
          ></v-text-field>
          <v-text-field
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
      nameRules: [v => !!v || "Periode harus diisi"],
      nimRules: [v => !!v || "Tanggal pembukaan beasiswa harus diisi"]
    };
  },

  computed: {
    ...mapState(["auth"])
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vuetify", route: "alerts" },
      { title: "Form Inputs & Control", route: "autocompletes" },
      { title: "Fileinptus" }
    ]);
    this.onFetchData();
  },

  methods: {
    ...mapActions("auth", ["updatePeriod", "getPeriod"]),
    // code 1
    async onFetchData() {
      await this.getPeriod({ id: this.id });
    },
    async validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;

        await this.updatePeriod({ id: this.id, payload: this.periodData });
        this.periodData = {};
        this.$router.push({ name: "dashboard" });
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style></style>
