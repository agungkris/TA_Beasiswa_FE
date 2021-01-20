<template>
  <div>
    <v-card class="mb-6">
      <v-card-title>
        <span class="title font-weight-light" style="padding-right:5px;"
          >Mahasiswa</span
        >
        <span class="title font-weight-light" style="padding-right:5px;"
          >Pendaftar</span
        >
        <span class="title font-weight-light" style="padding-right:5px;"
          >Beasiswa</span
        >
        <span class="title font-weight-light" style="padding-right:5px;"
          >Pembangunan</span
        >
        <span class="title font-weight-light">Jaya</span>
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
          <template v-slot:[`item.action`]="{ item }">
            <!-- {{ item }} -->
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  :to="{
                    name: 'StudentsEdit',
                    params: { id: item.id, period: item.period_id }
                  }"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>
                    mdi-file-find
                  </v-icon>
                </v-btn>
              </template>
              <span>Data Mahasiswa</span>
            </v-tooltip>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>

    <v-card>
      <v-card-title
        >{{ title2 }}
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="searchfgd"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field
      ></v-card-title>
      <v-card-text>
        <v-data-table
          :items="uploadscholarshipFgd"
          :search="searchfgd"
          :headers="headers2"
          :footer-props="{
            'items-per-page-options': [5, 10, 25, 50]
          }"
          :items-per-page="5"
        >
          <template v-slot:[`item.action`]="{ item }">
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  :to="{
                    name: 'StudentsFgd',
                    params: { id: item.id, period: item.period_id }
                  }"
                  v-on="on"
                >
                  <v-icon>
                    mdi-file-find
                  </v-icon>
                </v-btn>
              </template>
              <span>Data Mahasiswa</span>
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
      loading: false,
      searchpendaftar: "",
      searchfgd: "",
      headers: [
        {
          text: "Periode Pengajuan Beasiswa",
          value: "period.name"
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
          text: "NIM",
          value: "student.username"
        },
        {
          text: "Nama",
          value: "student.name"
        },
        {
          text: "Pilihan",
          value: "action"
        }
      ],

      title2: "Mahasiswa FGD",
      headers2: [
        {
          text: "Periode Pengajuan",
          value: "period.name"
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
          text: "NIM",
          value: "student.username"
        },
        {
          text: "Nama",
          value: "student.name"
        },
        {
          text: "Pilihan",
          value: "action"
        }
      ]
    };
  },
  computed: {
    ...mapState("uploadscholarship", [
      "uploadscholarshipList",
      "uploadscholarshipFgd"
    ]),
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
    ...mapActions("uploadscholarship", [
      "getUploadScholarshipList",
      "getUploadScholarshipFgd"
    ]),
    ...mapActions("period", ["getPeriodList"]),
    async onFetchData() {
      // this.loading = true;
      await this.getUploadScholarshipList({
        period_id: null,
        next_stage: null
      });
      await this.getUploadScholarshipFgd({
        period_id: null,
        next_stage: 1
      });
      await this.getPeriodList();
      // this.loading = false;
    },
    async onChangeFilter() {
      await this.getUploadScholarshipList({
        period_id: this.selectedPeriod,
        next_stage: null
      });
      await this.getUploadScholarshipFgd({
        period_id: this.selectedPeriod,
        next_stage: 1
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
