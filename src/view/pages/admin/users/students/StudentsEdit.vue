<template>
  <div class="row justify-center">
    <div class="col-md-6">
      <v-card class="mb-6">
        <v-card-title>DATA MAHASISWA</v-card-title>
        <v-card-text>
          <p>Nama Mahasiswa : {{ uploadscholarshipData.student.name }}</p>
          <!-- {{ student.profile.prodi }} -->
          <p>
            Program Studi : {{ uploadscholarshipData.student.profile.prodi.name }}
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

    <v-card-text class="text-center">   
      <v-btn color="success" class="mr-4" @click="validate(1)"
        >Lolos Administrasi</v-btn
      >

      <v-btn color="error" class="mr-4" @click="validate(0)">Gagal</v-btn>
    </v-card-text>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  computed: {
    ...mapState("uploadscholarship", ["uploadscholarshipData"]),
    ...mapState("paperassessment", ["paperassessmentReport"])
  },
  async mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Setting", route: "alert" },
      { title: this.title }
    ]);
    await this.onFetchData();
  },
  methods: {
    ...mapActions("uploadscholarship", ["getUploadScholarship", "NextStage"]),
    ...mapActions("paperassessment", ["report"]),
    async onFetchData() {
      await this.getUploadScholarship({ id: this.id });
      await this.report({
        student_id: this.uploadscholarshipData.student_id,
        period_id: this.$route.params.period
      });
    },
    async validate(data) {
      await this.NextStage({ id: this.id, next_stage: data });
      this.uploadscholarshipData = {};
      this.$router.push({ name: "StudentsList" });
    }
    // onDeleteService(id) {}
  }
};
</script>
