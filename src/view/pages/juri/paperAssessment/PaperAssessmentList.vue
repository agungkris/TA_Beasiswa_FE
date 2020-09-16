<template>
  <div>
    <v-card>
      <v-card-title>Daftar Karya Tulis Mahasiswa</v-card-title>
      <v-card-text>
        <v-data-table :headers="headers" :items="uploadscholarshipList">
          <template v-slot:item.action="{ item }">
            <!-- {{ item }} -->

            <!-- :to="{ params: { id: item.id } }" -->
            <a :href="item.papers">
              <v-btn icon>
                <v-icon>
                  mdi-download
                </v-icon>
              </v-btn>
            </a>

            <v-btn
              icon
              :to="{
                name: 'PaperAssessmentCreate',
                params: { id: item.student_id, period: item.period_id }
              }"
            >
              <v-icon>
                mdi-file-find
              </v-icon>
            </v-btn>
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
          value: "student.profile.prodi"
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
    ])
  },
  async mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Setting", route: "alert" },
      { title: this.title }
    ]);
    await this.onFetchData();
  },
  methods: {
    ...mapActions("uploadscholarship", ["getUploadScholarshipList"]),
    async onFetchData() {
      await this.getUploadScholarshipList({
        period_id: null,
        next_stage: null
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
