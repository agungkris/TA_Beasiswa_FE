<template>
  <div>
    <v-card>
      <v-card-title>Daftar Karya Tulis Mahasiswa</v-card-title>
      <v-card-text>
        <v-select
          v-model="selectedPeriod"
          class="my-2"
          label="Periode Pengajuan Beasiswa"
          target="#dropdown-example"
          :items="periodList"
          item-value="id"
          item-text="name"
          @change="onChangeFilter"
        ></v-select>
        <v-data-table :headers="headers" :items="uploadscholarshipList">
          <template v-slot:[`item.action`]="{ item }">
            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <a target="_blank" :href="item.papers" v-bind="attrs" v-on="on">
                  <v-btn icon>
                    <v-icon>
                      mdi-download
                    </v-icon>
                  </v-btn>
                </a>
              </template>
              <span>Unduh dokumen karya tulis</span>
            </v-tooltip>

            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  :to="{
                    name: 'PaperAssessmentCreate',
                    params: { id: item.student_id, period: item.period_id }
                  }"
                  v-on="on"
                >
                  <v-icon>
                    mdi-file-find
                  </v-icon>
                </v-btn>
              </template>
              <span>Lembar Penilaian</span>
            </v-tooltip>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  data() {
    return {
      headers: [
        {
          text: "Angkatan",
          value: "student.profile.generation"
        },
        {
          text: "Program Studi",
          value: "student.profile.prodi.name"
        },
        {
          text: "NIM",
          value: "student.username"
        },
        {
          text: "Nama",
          value: "student.name"
        },
        {
          text: "Action",
          value: "action"
        }
      ]
    };
  },
  computed: {
    ...mapState("uploadscholarship", [
      "uploadscholarshipList",
      "uploadscholarshipData"
    ]),
    ...mapState("period", ["periodList"]),
    ...mapState(["auth"])
  },
  async mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Setting", route: "alert" },
      { title: this.title }
    ]);
    this.getPeriodList();
    await this.onFetchData();
  },
  methods: {
    ...mapActions("uploadscholarship", ["getUploadScholarshipList"]),
    ...mapActions("period", ["getPeriodList"]),
    async onFetchData() {
      await this.getUploadScholarshipList({
        period_id: null,
        next_stage: null,
        jury_id: this.auth.user.id
      });
    },
    async onChangeFilter() {
      await this.getUploadScholarshipList({
        period_id: this.selectedPeriod,
        next_stage: null,
        jury_id: this.auth.user.id
      });
    },

    onEditUploadScholarship(id) {
      this.$router.push({
        name: "uploadscholarshipDetail",
        params: { id: id }
      });
    }
    // onDeleteService(id) {}
  }
};
</script>
