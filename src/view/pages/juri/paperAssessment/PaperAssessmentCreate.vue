<template>
  <div class="row">
    <div class="row justify-center">
      <v-card-title class="justify-center col-md-12"
        >INFORMASI PENILAIAN KARYA TULIS</v-card-title
      >
      <v-card class="mb-5 col-md-4">
        <v-card-text>
          <p class="font-weight-bold text-center">
            1. Format Artikel Ilmiah (Bobot: 10%)
          </p>
          <p class="text-decoration-underline">
            Parameter Penilaian:
          </p>
          <p>- Sistematika penulisan</p>
          <p>- Tata bahasa dan ragam bahasa ilmiah</p>
          <p>- Ketepatan dan kejelasan tulisan</p>
          <p>- Daftar Pustaka</p>
        </v-card-text>
      </v-card>
      <v-card class="mb-5 col-md-4 ml-2">
        <v-card-text>
          <p class="font-weight-bold text-center">
            2. Kreatifitas dan Inovasi terhadap Topik/Gagasan (Bobot: 30%)
          </p>
          <p class="text-decoration-underline">
            Parameter Penilaian:
          </p>
          <p>- Sistematika penulisan</p>
          <p>- Tata bahasa dan ragam bahasa ilmiah</p>
          <p>- Ketepatan dan kejelasan tulisan</p>
          <p>- Daftar Pustaka</p>
        </v-card-text>
      </v-card>
      <v-card class="mb-5 col-md-4">
        <v-card-text>
          <p class="font-weight-bold text-center">
            3. Kebermanfaatan/Kontribusi (Bobot: 25%)
          </p>
          <p class="text-decoration-underline">
            Parameter Penilaian:
          </p>
          <p>- Nilai tambah kreatifitas gagasan/ide</p>
          <p>- Nilai tambah implementasi ide/gagasan</p>
          <p>- Nilai tambah dalam upaya penerapannya</p>
        </v-card-text>
      </v-card>
      <v-card class="mb-5 col-md-4 ml-2">
        <v-card-text>
          <p class="font-weight-bold text-center">
            4. Data dan Sumber Informasi (Bobot: 20%)
          </p>
          <p class="text-decoration-underline">
            Parameter Penilaian:
          </p>
          <p>- Relevansi data dan informasi yang diacu</p>
          <p>- Keakuratan dan integritas data dan informasi</p>
          <p>- Kemampuan menghubungkan berbagai data dan informasi</p>
        </v-card-text>
      </v-card>
      <v-card class="mb-5 col-md-4">
        <v-card-text>
          <p class="font-weight-bold text-center">
            5. Pembahasan dan simpulan (Bobot: 15%)
          </p>
          <p class="text-decoration-underline">
            Parameter Penilaian:
          </p>
          <p>
            - Kemampuan menganalisa dan mensintesa pembahasan serta merumuskan
            simpulan
          </p>
          <p>- Prediksi transfer gagasan dan proses adopsi</p>
          <p>- Tingkat ketercapaian hasil dengan tujuan</p>
        </v-card-text>
      </v-card>
    </div>

    <div class="row justify-center">
      <v-card-title class="col-md-12 justify-center"
        >LEMBAR PENILAIAN KARYA TULIS</v-card-title
      >
      <v-card class="mb-5 col-md-5">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="9">
              <v-subheader>Format Artikel Ilmiah (Bobot: 10%)</v-subheader>
            </v-col>
            <v-col cols="3">
              <v-text-field
                label="Skor"
                v-model="paperassessmentData.format_papers"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="9">
              <v-subheader
                >Kreatifitas dan Inovasi terhadap topik/gagasan (Bobot:
                30%)</v-subheader
              >
            </v-col>
            <v-col cols="3">
              <v-text-field
                label="Skor"
                v-model="paperassessmentData.creativity"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="9">
              <v-subheader>Kebermanfaatan/ Kontribusi (Bobot: 25%)</v-subheader>
            </v-col>
            <v-col cols="3">
              <v-text-field
                label="Skor"
                v-model="paperassessmentData.contribution"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="9">
              <v-subheader>Data dan Sumber Informasi (Bobot: 20%)</v-subheader>
            </v-col>
            <v-col cols="3">
              <v-text-field
                label="Skor"
                v-model="paperassessmentData.information"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="9">
              <v-subheader>Pembahasan dan simpulan (Bobot: 15%)</v-subheader>
            </v-col>
            <v-col cols="3">
              <v-text-field
                label="Skor"
                v-model="paperassessmentData.conclusion"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-textarea
                outlined
                name="input-7-4"
                label="Komentar"
                v-model="paperassessmentData.comment"
              ></v-textarea>
              <v-btn :disabled="!valid" color="success" @click="validate">
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
    return { id: this.$route.params.id };
  },
  computed: {
    ...mapState("paperassessment", ["paperassessmentData"]),
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
    ...mapActions("paperassessment", ["createPaperAssessment"]),
    // code 1
    async onFetchData() {},
    async validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.paperassessmentData.period_id = this.$route.params.period;
        this.paperassessmentData.jury_id = this.auth.user.id;
        await this.createPaperAssessment({
          id: this.id,
          payload: this.paperassessmentData
        });
        this.paperassessmentData = {};
        this.$router.push({ name: "PaperAssessmentList" });
      }
    }
  }
};
</script>
