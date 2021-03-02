<template>
  <div>
    <v-card>
      <v-card-title>IPK Mahasiswa</v-card-title>
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
        <v-data-table
          :items="uploadscholarshipList"
          :headers="headers"
          item-key="name"
          :search="search"
          class="elevation-1"
          :footer-props="{
            'items-per-page-options': [5, 10, 25, 50]
          }"
          :items-per-page="5"
        >
          <template v-slot:top>
            <v-text-field
              v-model="search"
              label="Search"
              class="mx-4"
            ></v-text-field>
          </template>

          <template v-slot:[`item.pilihan`]="{ item }">
            <v-btn icon>
              <v-icon>
                mdi-pencil
              </v-icon>
            </v-btn>
          </template>
        </v-data-table>

        <v-btn color="success" class="mt-2 mr-4" @click="validate(1)"
          >Selesai</v-btn
        >
        <v-btn color="depressed" class="mt-2 mr-4" @click="validate(0)"
          >Batal</v-btn
        >
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      id: this.$route.params.id,
      valid: false,
      search: "",
      selectedPeriod: "",

      headers: [
        {
          text: "Periode Beasiswa",
          value: "period.name"
        },
        {
          text: "Nama Mahasiswa",
          value: "student.name"
        },
        {
          text: "Angkatan",
          value: "student.profile.generation"
        },
        {
          text: "Program Studi",
          value: "student.profile.prodi.name"
        },
        {
          text: "IPK",
          value: "pilihan"
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
      {
        title: "Vuetify",
        route: "alerts"
      },
      {
        title: "Form Inputs & Control",
        route: "atocompletes"
      },
      {
        title: "Fileinptus"
      }
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
        next_stage: null
        // submission_member: true
      });
    },

    async onChangeFilter() {
      await this.getUploadScholarshipList({
        period_id: this.selectedPeriod,
        next_stage: 1
      });
    }
  }
};
</script>
