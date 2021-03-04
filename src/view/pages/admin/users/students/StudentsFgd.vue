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
          <p>PENILAIAN FGD :</p>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    Name
                  </th>
                  <th class="text-left">
                    Final Score
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(fgd, fgdKey) in fgdassessmentReport" :key="fgdKey">
                  <td>
                    {{ fgd.jury.name }}
                  </td>
                  <td>
                    {{ fgd.final_score }}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>Total</td>
                  <td class="font-weight-bold ">{{ totalFGDScore }}</td>
                </tr>
              </tfoot>
            </template>
          </v-simple-table>
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

    <v-card-text class="text-center"
      ><v-btn
        :loading="loadingButton"
        color="success"
        class="mr-4"
        @click="validate(1)"
      >
        Mendapat Beasiswa
      </v-btn>

      <v-btn color="error" class="mr-4" @click="validate(0)">
        Gagal
      </v-btn>
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
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import { mapState, mapActions } from "vuex";

export default {
  components: {},
  data() {
    return {
      loadingButton: false,
      isLoading: false,
      id: this.$route.params.id
    };
  },
  computed: {
    ...mapState("uploadscholarship", ["uploadscholarshipData"]),
    ...mapState("paperassessment", ["paperassessmentReport"]),
    ...mapState("fgdassessment", ["fgdassessmentReport"]),
    totalFGDScore: function() {
      const getTotalScore = this.fgdassessmentReport.reduce((prev, current) => {
        return prev + current.final_score;
      }, 0);
      const fgdLength = this.fgdassessmentReport.length;

      return getTotalScore / fgdLength;
    }
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
      this.isLoading = true;
      await this.getUploadScholarship({ id: this.id });
      await this.report({
        student_id: this.uploadscholarshipData.student_id,
        period_id: this.$route.params.period
      });
      await this.reportFgd({
        student_id: this.uploadscholarshipData.student_id,
        period_id: this.$route.params.period
      });
      this.isLoading = false;
      //   await this.getFgdAssessment({ id: this.id });
    },
    async validate(data) {
      this.loadingButton = true;
      await this.FinalStage({ id: this.id, final_stage: data });
      this.uploadscholarshipData = {};
      this.loadingButton = false;
      this.$router.push({ name: "StudentsList" });
    }
  }
};
</script>
