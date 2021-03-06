<template>
  <div>
    <v-card>
      <v-card-title>Seleksi Administrasi</v-card-title>
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
          <template v-slot:[`item.submit_form`]="{ item }">
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <a :href="item.submit_form" target="_blank">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>
                      mdi-file-find
                    </v-icon>
                  </v-btn>
                </a>
              </template>
              <span>Unduh Formulir Beasiswa</span>
            </v-tooltip>
          </template>
          <template v-slot:[`item.brs`]="{ item }">
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <a :href="item.brs" target="_blank">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>
                      mdi-file-find
                    </v-icon>
                  </v-btn>
                </a>
              </template>
              <span>Unduh BRS</span>
            </v-tooltip>
          </template>
          <template v-slot:[`item.raport`]="{ item }">
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <a :href="item.raport" target="_blank">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>
                      mdi-file-find
                    </v-icon>
                  </v-btn>
                </a>
              </template>
              <span>Unduh Transkrip Nilai</span>
            </v-tooltip>
          </template>
          <template v-slot:[`item.cv`]="{ item }">
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <a :href="item.cv" target="_blank">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>
                      mdi-file-find
                    </v-icon>
                  </v-btn>
                </a>
              </template>
              <span>Unduh CV</span>
            </v-tooltip>
          </template>
          <template v-slot:[`item.papers`]="{ item }">
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <a :href="item.papers" target="_blank">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>
                      mdi-file-find
                    </v-icon>
                  </v-btn>
                </a>
              </template>
              <span>Unduh Karya Tulis</span>
            </v-tooltip>
          </template>
          <template v-slot:[`item.other_requirements`]="{ item }">
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-card-text
                  v-if="
                    item.other_requirements == null ||
                      item.other_requirements == ''
                  "
                >
                  Tidak Ada
                </v-card-text>
                <v-card-text v-else>
                  <a :href="item.other_requirements" target="_blank">
                    <v-btn icon v-bind="attrs" v-on="on">
                      <v-icon>
                        mdi-file-find
                      </v-icon>
                    </v-btn>
                  </a>
                </v-card-text>
              </template>
              <span>Unduh lainnya</span>
            </v-tooltip>
          </template>
          <template v-slot:[`item.pilihan`]="{ item }">
            <v-checkbox></v-checkbox>
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
          text: "Nama Mahasiswa",
          value: "student.name"
        },
        {
          text: "Formulir Beasiswa",
          value: "submit_form",
          align: "center"
        },
        {
          text: "BRS",
          value: "brs",
          align: "center"
        },
        {
          text: "Transkrip Nilai",
          value: "raport",
          align: "center"
        },
        {
          text: "CV",
          value: "cv",
          align: "center"
        },
        {
          text: "Karya Tulis",
          value: "papers",
          align: "center"
        },
        {
          text: "Bukti Prestasi/Surat Permohonan Rektor",
          value: "other_requirements",
          align: "center"
        },
        {
          text: "Penilaian Karya Tulis",
          value: "paper_assessments",
          align: "center"
        },
        {
          text: "Lolos Administrasi",
          value: "pilihan",
          align: "center"
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
      });
    },

    async onChangeFilter() {
      await this.getUploadScholarshipList({
        period_id: this.selectedPeriod,
        next_stage: null
      });
    }
  }
};
</script>
