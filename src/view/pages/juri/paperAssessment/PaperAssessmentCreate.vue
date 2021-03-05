<template>
  <div>
    <v-card-title class="justify-center col-md-12"
      >INFORMASI PENILAIAN KARYA TULIS</v-card-title
    >
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex lg3 sm3 xs12 md6 style="display:flex;" class="justify-center">
          <v-card>
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
        </v-flex>

        <v-flex lg3 sm3 xs12 md6 style="display:flex;" class="justify-center">
          <v-card>
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
        </v-flex>

        <v-flex lg3 sm3 xs12 md6 style="display:flex;" class="justify-center">
          <v-card>
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
        </v-flex>

        <v-flex lg3 sm3 xs12 md6 style="display:flex;" class="justify-center">
          <v-card>
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
        </v-flex>

        <v-flex
          lg12
          sm12
          xs12
          md12
          style="display:flex;"
          class="justify-center"
        >
          <v-card>
            <v-card-text>
              <p class="font-weight-bold text-center">
                5. Pembahasan dan simpulan (Bobot: 15%)
              </p>
              <p class="text-decoration-underline">
                Parameter Penilaian:
              </p>
              <p>
                - Kemampuan menganalisa dan mensintesa pembahasan serta
                merumuskan simpulan
              </p>
              <p>- Prediksi transfer gagasan dan proses adopsi</p>
              <p>- Tingkat ketercapaian hasil dengan tujuan</p>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-card-title class="col-md-12 justify-center mt-5">
          <span class="title font-weight-light" style="padding-right:5px;"
            >LEMBAR PENILAIAN</span
          >
          <span class="title font-weight-light">KARYA TULIS</span></v-card-title
        >
        <v-flex
          lg12
          sm12
          xs12
          md12
          style="display:flex;"
          class="justify-center"
        >
          <v-card class="mb-5 col-md-5">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-row>
                <v-col cols="9">
                  <v-subheader>Format Artikel Ilmiah (Bobot: 10%)</v-subheader>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                    v-model="paperassessmentReport.format_papers"
                    label="Skor"
                    required
                    :rules="papers"
                    type="number"
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
                    v-model="paperassessmentReport.creativity"
                    label="Skor"
                    required
                    :rules="creativity"
                    type="number"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="9">
                  <v-subheader
                    >Kebermanfaatan/ Kontribusi (Bobot: 25%)</v-subheader
                  >
                </v-col>
                <v-col cols="3">
                  <v-text-field
                    v-model="paperassessmentReport.contribution"
                    label="Skor"
                    required
                    :rules="contribution"
                    type="number"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="9">
                  <v-subheader
                    >Data dan Sumber Informasi (Bobot: 20%)</v-subheader
                  >
                </v-col>
                <v-col cols="3">
                  <v-text-field
                    v-model="paperassessmentReport.information"
                    label="Skor"
                    required
                    :rules="information"
                    type="number"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="9">
                  <v-subheader
                    >Pembahasan dan simpulan (Bobot: 15%)</v-subheader
                  >
                </v-col>
                <v-col cols="3">
                  <v-text-field
                    v-model="paperassessmentReport.conclusion"
                    label="Skor"
                    required
                    :rules="conclusion"
                    type="number"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-textarea
                    v-model="paperassessmentReport.comment"
                    outlined
                    name="input-7-4"
                    label="Komentar"
                  ></v-textarea>
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
        </v-flex>
      </v-layout>
    </v-container>
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
      papers: [v => !!v || "Nilai harus diisi dari 0-100"],
      creativity: [v => !!v || "Nilai harus diisi dari 0-100"],
      contribution: [v => !!v || "Nilai harus diisi dari 0-100"],
      information: [v => !!v || "Nilai harus diisi dari 0-100"],
      conclusion: [v => !!v || "Nilai harus diisi dari 0-100"]
    };
  },
  computed: {
    ...mapState("paperassessment", ["paperassessmentReport"]),
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
      this.isLoading = true;
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.paperassessmentReport.student_id = this.$route.params.id;
        this.paperassessmentReport.period_id = this.$route.params.period;
        this.paperassessmentReport.jury_id = this.auth.user.id;
        await this.createPaperAssessment({
          id: this.id,
          payload: this.paperassessmentReport
        });
        this.paperassessmentReport = {};
        this.isLoading = false;
        this.$router.push({ name: "PaperAssessmentList" });
      }
    }
  }
};
</script>
