<template>
  <div class="row">
    <div class="row justify-center">
      <v-card-title class="col-md-12 justify-center"
        >LEMBAR PENILAIAN FORUM GRUP DISKUSI</v-card-title
      >
      <v-card class="mb-5 col-md-5">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="9">
              <v-subheader>Kemampuan menyampaikan pendapat</v-subheader>
            </v-col>
            <v-col cols="3">
              <v-text-field
                v-model="fgdassessmentData.score_A"
                label="Skor"
                required
                :rules="score_A"
                type="number"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="9">
              <v-subheader>Kemampuan dalam menggali informasi</v-subheader>
            </v-col>
            <v-col cols="3">
              <v-text-field
                v-model="fgdassessmentData.score_B"
                label="Skor"
                required
                :rules="score_B"
                type="number"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="9">
              <v-subheader
                >Berpartisipas aktif dalam memberikan ide</v-subheader
              >
            </v-col>
            <v-col cols="3">
              <v-text-field
                v-model="fgdassessmentData.score_C"
                label="Skor"
                required
                :rules="score_C"
                type="number"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="9">
              <v-subheader>Tenang dalam menyampaikan informasi</v-subheader>
            </v-col>
            <v-col cols="3">
              <v-text-field
                v-model="fgdassessmentData.score_D"
                label="Skor"
                required
                :rules="score_D"
                type="number"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="9">
              <v-subheader
                >Memberikan feedback atau saran yang kreatif dan
                konstruktif</v-subheader
              >
            </v-col>
            <v-col cols="3">
              <v-text-field
                v-model="fgdassessmentData.score_E"
                label="Skor"
                required
                :rules="score_E"
                type="number"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="9">
              <v-subheader
                >Mendorong anggota kelompok (pasif) untuk memberikan
                ide</v-subheader
              >
            </v-col>
            <v-col cols="3">
              <v-text-field
                v-model="fgdassessmentData.score_F"
                label="Skor"
                required
                :rules="score_F"
                type="number"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="9">
              <v-subheader>Menggunakan bahasa yang santun</v-subheader>
            </v-col>
            <v-col cols="3">
              <v-text-field
                v-model="fgdassessmentData.score_G"
                label="Skor"
                required
                :rules="score_G"
                type="number"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="9">
              <v-subheader>Inisiatif dalam memulai diskusi</v-subheader>
            </v-col>
            <v-col cols="3">
              <v-text-field
                v-model="fgdassessmentData.score_H"
                label="Skor"
                required
                :rules="score_H"
                type="number"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="9">
              <v-subheader
                >Memimpin proses diskusi (awal s.d akhir)</v-subheader
              >
            </v-col>
            <v-col cols="3">
              <v-text-field
                v-model="fgdassessmentData.score_I"
                label="Skor"
                required
                :rules="score_I"
                type="number"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="9">
              <v-subheader
                >Membuat keputusan dan kesimpulan saat diskusi</v-subheader
              >
            </v-col>
            <v-col cols="3">
              <v-text-field
                v-model="fgdassessmentData.score_J"
                label="Skor"
                required
                :rules="score_J"
                type="number"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-btn
                :loading="isLoading"
                :disabled="!valid"
                color="success"
                class="mb-2"
                @click="validate"
              >
                Selesai
              </v-btn>
            </v-col>
          </v-row>
          <v-row class="text-center"> </v-row>
        </v-form>
      </v-card>
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
      id: this.$route.params.id,
      score_A: [v => !!v || "Nilai harus diisi dari 0-100"],
      score_B: [v => !!v || "Nilai harus diisi dari 0-100"],
      score_C: [v => !!v || "Nilai harus diisi dari 0-100"],
      score_D: [v => !!v || "Nilai harus diisi dari 0-100"],
      score_E: [v => !!v || "Nilai harus diisi dari 0-100"],
      score_F: [v => !!v || "Nilai harus diisi dari 0-100"],
      score_G: [v => !!v || "Nilai harus diisi dari 0-100"],
      score_H: [v => !!v || "Nilai harus diisi dari 0-100"],
      score_I: [v => !!v || "Nilai harus diisi dari 0-100"],
      score_J: [v => !!v || "Nilai harus diisi dari 0-100"]
    };
  },
  computed: {
    ...mapState("fgdassessment", ["fgdassessmentData"]),
    ...mapState(["auth"])
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vuetify", route: "alerts" },
      { title: "Form Inputs & Control", route: "autocompletes" },
      { title: "Fileinptus" }
    ]);
  },

  methods: {
    ...mapActions("fgdassessment", ["createFgdAssessment"]),
    // code 1
    async onFetchData() {},
    async validate() {
      this.isLoading = true;
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.fgdassessmentData.period_id = this.$route.params.period;
        this.fgdassessmentData.jury_id = this.auth.user.id;
        this.fgdassessmentData.student_id = this.$route.params.student_id;
        await this.createFgdAssessment({
          id: this.id,
          payload: this.fgdassessmentData
        });
        this.fgdassessmentData = {};
        this.isLoading = false;
        this.$router.push({ name: "FgdAssessmentList" });
      }
    }
  }
};
</script>
