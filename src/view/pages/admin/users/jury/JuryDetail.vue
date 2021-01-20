<template>
  <div>
    <v-card class="mb-6">
      <v-card-title
        >Detail mahasiswa
        <v-spacer></v-spacer>
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
        <v-spacer></v-spacer>
        <v-text-field
          v-model="searchpendaftar"
          class="my-2"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field
      ></v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="uploadscholarshipList"
          :search="searchpendaftar"
          :footer-props="{
            'items-per-page-options': [5, 10, 25, 50]
          }"
          :items-per-page="5"
        >
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
      loading: false,
      searchpendaftar: "",
      searchfgd: "",
      headers: [
        {
          text: "Nama",
          value: "student.name"
        },
        {
          text: "Program Studi",
          value: "student.profile.prodi"
        }
      ]
    };
  },
  computed: {
    ...mapState("uploadscholarship", ["uploadscholarshipList"]),
    ...mapState("period", ["periodList"])
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
      // this.loading = true;
      await this.getUploadScholarshipList({
        period_id: null,
        next_stage: null
      });
      await this.getPeriodList();
      // this.loading = false;
    },
    async onChangeFilter() {
      await this.getUploadScholarshipList({
        period_id: this.selectedPeriod,
        next_stage: null
      });
    }
    // onDeleteService(id) {}
  }
};
</script>
