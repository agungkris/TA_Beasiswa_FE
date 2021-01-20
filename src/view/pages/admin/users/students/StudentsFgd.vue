<template>
  <div class="row justify-center">
    <div class="col-md-6">
      <v-card class="mb-6">
        <v-card-title>DATA MAHASISWA</v-card-title>
        <v-card-text>
          <p>Nama Mahasiswa : {{ uploadscholarshipData.student.name }}</p>
          <p>
            Program Studi :
            {{ uploadscholarshipData.student.profile.prodi.name }}
          </p>
          <p>
            Angkatan : {{ uploadscholarshipData.student.profile.generation }}
          </p>
        </v-card-text>
      </v-card>

      <v-card>
        <v-card-title>PENILAIAN JURI</v-card-title>
        <v-card-text>
          <p>PENILAIAN KARYA TULIS :{{ paperassessmentReport.papers_score }}</p>
          <p>KOMENTAR JURI :{{ paperassessmentReport.comment }}</p>
          <p>PENILAIAN FGD :{{ fgdassessmentReport.final_score }}</p>
        </v-card-text>
      </v-card>
    </div>

    <div class="col-md-6">
      <v-card>
        <v-card-title>FILE MAHASISWA</v-card-title>
        <v-card-text>
          FORMULIR BEASISWA :
          <a :href="uploadscholarshipData.submit_form">DOWNLOAD</a>
        </v-card-text>
        <v-card-text>
          BRS :
          <a :href="uploadscholarshipData.brs">DOWNLOAD</a>
        </v-card-text>
        <v-card-text>
          TRANSKRIP NILAI :
          <a :href="uploadscholarshipData.raport">DOWNLOAD</a>
        </v-card-text>
        <v-card-text>
          CURRICULUM VITAE :
          <a :href="uploadscholarshipData.cv">DOWNLOAD</a>
        </v-card-text>
        <v-card-text>
          KARYA TULIS :
          <a :href="uploadscholarshipData.papers">DOWNLOAD</a>
        </v-card-text>
        <v-card-text>
          BUKTI PRESTASI / SURAT PERMOHONAN REKTOR :
          <a :href="uploadscholarshipData.other_requirement">DOWNLOAD</a>
        </v-card-text>
      </v-card>
    </div>

    <v-card-text class="text-center"
      ><v-btn color="success" class="mr-4" @click="validate(1)">
        Mendapat Beasiswa
      </v-btn>

      <v-btn color="error" class="mr-4" @click="validate(0)">
        Gagal
      </v-btn>
    </v-card-text>
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import { mapState, mapActions } from "vuex";

export default {
  components: {},
  data() {
    return { id: this.$route.params.id };
  },
  computed: {
    ...mapState("uploadscholarship", ["uploadscholarshipData"]),
    ...mapState("paperassessment", ["paperassessmentReport"]),
    ...mapState("fgdassessment", ["fgdassessmentReport"])
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
    ...mapActions("uploadscholarship", ["getUploadScholarship", "FinalStage"]),
    ...mapActions("paperassessment", ["report"]),
    ...mapActions("fgdassessment", ["reportFgd"]),
    // code 1
    async onFetchData() {
      await this.getUploadScholarship({ id: this.id });
      await this.report({
        student_id: this.uploadscholarshipData.student_id,
        period_id: this.$route.params.period
      });
      await this.reportFgd({
        student_id: this.uploadscholarshipData.student_id,
        period_id: this.$route.params.period
      });
      //   await this.getFgdAssessment({ id: this.id });
    },
    async validate(data) {
      await this.FinalStage({ id: this.id, final_stage: data });
      this.uploadscholarshipData = {};
      this.$router.push({ name: "StudentsList" });
    }
  }
};
</script>
