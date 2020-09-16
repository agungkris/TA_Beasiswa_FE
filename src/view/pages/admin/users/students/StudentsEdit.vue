<template>
  <div class="row justify-center">
    <div class="col-md-6">
      <v-card>
        <!-- <v-card-text>
          <p item-value="id" item-text="name">
            Nama Mahasiswa : {{ uploadscholarshipData.student_id }}
          </p>
        </v-card-text> -->
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
        <!-- <v-card-text v-model="paperassessmentData.score">
          NILAI KARYA TULIS :
        </v-card-text>-->
        <v-text-field
          v-model="paperassessmentData.papers_score"
          disabled
        ></v-text-field>

        <v-textarea
          outlined
          name="input-7-4"
          label="Komentar"
          v-model="paperassessmentData.comment"
          disabled
        ></v-textarea>
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
    ...mapState("paperassessment", ["paperassessmentData"])
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
    ...mapActions("paperassessment", ["getPaperAssessment"]),
    async onFetchData() {
      await this.getUploadScholarship({ id: this.id });
      await this.getPaperAssessment({ id: this.id });
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
