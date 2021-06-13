<template>
  <div class="row justify-center">
    <div class="col-md-6">
      <v-card class="mb-6">
        <v-card-title>DATA MAHASISWA</v-card-title>
        <v-card-text v-if="uploadscholarshipData.student">
          <p>Nama Mahasiswa : {{ uploadscholarshipData.student.name }}</p>
          <!-- {{ student.profile.prodi }} -->
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
        <v-card-text v-if="paperassessmentReport.jury">
          <p>NAMA JURI : {{ paperassessmentReport.jury.name }}</p>
          <p>
            PENILAIAN KARYA TULIS : {{ paperassessmentReport.papers_score }}
          </p>
          <!-- <p>KOMENTAR JURI : {{ paperassessmentReport.comment }}</p> -->
        </v-card-text>
      </v-card>
    </div>

    <div class="col-md-6">
      <v-card>
        <v-card-title>FILE MAHASISWA</v-card-title>
        <v-card-text>
          FORMULIR BEASISWA :
          <a target="_blank" :href="uploadscholarshipData.submit_form">Unduh</a>
        </v-card-text>
        <v-card-text>
          BRS :
          <a target="_blank" :href="uploadscholarshipData.brs">Unduh</a>
        </v-card-text>
        <v-card-text>
          TRANSKRIP NILAI :
          <a target="_blank" :href="uploadscholarshipData.raport">Unduh</a>
        </v-card-text>
        <v-card-text>
          CURRICULUM VITAE :
          <a target="_blank" :href="uploadscholarshipData.cv">Unduh</a>
        </v-card-text>
        <v-card-text>
          KARYA TULIS :
          <a target="_blank" :href="uploadscholarshipData.papers">Unduh</a>
        </v-card-text>
        <v-card-text
          v-if="
            uploadscholarshipData.other_requirements == null ||
              uploadscholarshipData.other_requirements == ''
          "
        >
          BUKTI PRESTASI / SURAT PERMOHONAN REKTOR : Tidak Ada
        </v-card-text>
        <v-card-text v-else>
          BUKTI PRESTASI / SURAT PERMOHONAN REKTOR :
          <a target="_blank" :href="uploadscholarshipData.other_requirements"
            >Unduh</a
          >
        </v-card-text>
      </v-card>
    </div>

    <v-card-text class="text-center">
      <v-btn
        :loading="loadingButton"
        color="success"
        class="mr-4"
        @click="validate(1)"
        >Lolos Administrasi</v-btn
      >

      <v-btn color="error" class="mr-4" @click="validate(0)">Gagal</v-btn>
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
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  data() {
    return {
      isLoading: false,
      loadingButton: false,
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
      this.isLoading = true;
      await this.getUploadScholarship({ id: this.id });
      await this.report({
        student_id: this.uploadscholarshipData.student_id,
        period_id: this.$route.params.period
      });
      this.isLoading = false;
    },
    async validate(data) {
      this.loadingButton = true;
      await this.NextStage({ id: this.id, next_stage: data });
      this.uploadscholarshipData = {};
      this.loadingButton = false;
      this.$router.push({ name: "StudentsList" });
    }
    // onDeleteService(id) {}
  }
};
</script>
