<template>
  <div>
    <h3 style="text-align: center; padding-bottom: 5px">
      Laporan Beasiswa ASAK/DIKTI/BIDIKMISI
    </h3>
    <!-- AKADEMIK -->
    <v-card class="mb-6">
      <v-card-title>Laporan Prestasi Akademik </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="academic"
          :items="academicList"
          :footer-props="{
            'items-per-page-options': [5, 10, 25, 50]
          }"
          :items-per-page="5"
        >
          <template v-slot:[`item.action`]="{ item }">
            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <a v-if="item.khs != null" target="_blank" :href="item.khs">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon> mdi-download </v-icon>
                  </v-btn>
                </a>
              </template>
              <span>Unduh KHS</span>
            </v-tooltip>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>

    <!-- NON AKADEMIK/KOMPETISI -->
    <v-card class="mb-6">
      <v-card-title>
        <span class="title font-weight-light" style="padding-right: 5px"
          >Laporan</span
        >
        <span class="title font-weight-light" style="padding-right: 5px"
          >Prestasi</span
        >
        <span class="title font-weight-light" style="padding-right: 5px"
          >Non</span
        >
        <span class="title font-weight-light">Akademik</span>
      </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="competition"
          :items="competitionList"
          :footer-props="{
            'items-per-page-options': [5, 10, 25, 50]
          }"
          :items-per-page="5"
        >
          <template v-slot:[`item.action`]="{ item }">
            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <a
                  v-if="item.document != null"
                  target="_blank"
                  :href="item.document"
                >
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon> mdi-download </v-icon>
                  </v-btn>
                </a>
              </template>
              <span>Unduh Dokumen</span>
            </v-tooltip>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>

    <!-- ORGANISASI -->
    <v-card class="mb-6">
      <v-card-title>
        <span class="title font-weight-light" style="padding-right: 5px"
          >Laporan</span
        >
        <span class="title font-weight-light" style="padding-right: 5px"
          >Kegiatan</span
        >
        <span class="title font-weight-light" style="padding-right: 5px"
          >Organisasi</span
        >
        <span class="title font-weight-light">Kemahasiswaan</span>
      </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="organization"
          :items="organizationList"
          :footer-props="{
            'items-per-page-options': [5, 10, 25, 50]
          }"
          :items-per-page="5"
        >
          <template v-slot:[`item.action`]="{ item }">
            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <a
                  v-if="item.document != null"
                  target="_blank"
                  :href="item.document"
                >
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon> mdi-download </v-icon>
                  </v-btn>
                </a>
              </template>
              <span>Unduh Dokumen</span>
            </v-tooltip>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>

    <!-- ACARA/EVENT -->
    <v-card class="mb-6">
      <v-card-title>
        <span class="title font-weight-light" style="padding-right: 5px"
          >Laporan</span
        >
        <span class="title font-weight-light" style="padding-right: 5px"
          >Keikutsertaan</span
        >
        <span class="title font-weight-light">Kepanitiaan</span>
      </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="event"
          :items="eventList"
          :footer-props="{
            'items-per-page-options': [5, 10, 25, 50]
          }"
          :items-per-page="5"
        >
          <template v-slot:[`item.action`]="{ item }">
            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <a
                  v-if="item.document != null"
                  target="_blank"
                  :href="item.document"
                >
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon> mdi-download </v-icon>
                  </v-btn>
                </a>
              </template>
              <span>Unduh Dokumen</span>
            </v-tooltip>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>

    <!-- PAPER/KARYA TULIS -->
    <v-card class="mb-6">
      <v-card-title>
        <span class="title font-weight-light" style="padding-right: 5px"
          >Laporan</span
        >
        <span class="title font-weight-light" style="padding-right: 5px"
          >Publikasi</span
        >
        <span class="title font-weight-light">Ilmiah/Karya Tulis/PKM</span>
      </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="paper"
          :items="paperList"
          :footer-props="{
            'items-per-page-options': [5, 10, 25, 50]
          }"
          :items-per-page="5"
        >
          <template v-slot:[`item.action`]="{ item }">
            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <a
                  v-if="item.document != null"
                  target="_blank"
                  :href="item.document"
                >
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon> mdi-download </v-icon>
                  </v-btn>
                </a>
              </template>
              <span>Unduh Dokumen</span>
            </v-tooltip>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>

    <!-- LAPORAN KEUANGAN -->
    <v-card class="mb-6">
      <v-card-title>
        <span class="title font-weight-light" style="padding-right: 5px"
          >Laporan</span
        >
        <span class="title font-weight-light" style="padding-right: 5px"
          >Keuangan</span
        >
        <span class="title font-weight-light" style="padding-right: 5px"
          >Biaya</span
        >
        <span class="title font-weight-light">Pendidikan</span>
      </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="financial"
          :items="financialList"
          :footer-props="{
            'items-per-page-options': [5, 10, 25, 50]
          }"
          :items-per-page="5"
        >
          <template v-slot:[`item.spp`]="{ item }">
            {{ item.spp | formatRupiah }}
          </template>
          <template v-slot:[`item.sks`]="{ item }">
            {{ item.sks | formatRupiah }}
          </template>
          <template v-slot:[`item.action`]="{ item }"> </template>
          <template v-slot:[`item.amount`]="{ item }">
            {{ item.amount | formatRupiah }}
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
      academicId: "",
      competitionId: "",
      organizationId: "",
      eventId: "",
      paperId: "",
      financialId: "",
      academic: [
        {
          text: "Semester",
          value: "semester.semester"
        },
        {
          text: "IP",
          value: "ip"
        },
        {
          text: "SKS",
          value: "sks"
        },
        {
          text: "IPK",
          value: "ipk"
        },
        {
          text: "Keterangan",
          value: "description"
        },
        {
          text: "Action",
          value: "action"
        }
      ],
      competition: [
        {
          text: "Semester",
          value: "semester.semester"
        },
        {
          text: "Kegiatan",
          value: "activity"
        },
        {
          text: "Tingkat",
          value: "level.level"
        },
        {
          text: "Waktu Pelaksanaan",
          value: "realization"
        },
        {
          text: "Hasil",
          value: "result"
        },
        {
          text: "Action",
          value: "action"
        }
      ],
      organization: [
        {
          text: "Semester",
          value: "semester.semester"
        },
        {
          text: "Nama Organisasi",
          value: "name"
        },
        {
          text: "Periode Aktif",
          value: "period"
        },
        {
          text: "Jabatan",
          value: "position"
        },
        {
          text: "Action",
          value: "action"
        }
      ],
      event: [
        {
          text: "Semester",
          value: "semester.semester"
        },
        {
          text: "Kegiatan",
          value: "activity"
        },
        {
          text: "Waktu Pelaksanaan",
          value: "realization"
        },
        {
          text: "Action",
          value: "action"
        }
      ],
      paper: [
        {
          text: "Semester",
          value: "semester.semester"
        },
        {
          text: "Judul Karya Tulis/Ilmiah",
          value: "title"
        },
        {
          text: "Action",
          value: "action"
        }
      ],
      financial: [
        {
          text: "Semester",
          value: "semester.semester"
        },
        {
          text: "Biaya SPP",
          value: "spp"
        },
        {
          text: "Biaya SKS",
          value: "sks"
        },
        {
          text: "Total",
          value: "result"
        },
        {
          text: "Besaran Beasiswa",
          value: "amount"
        },
        {
          text: "Action",
          value: "action"
        }
      ]
    };
  },
  computed: {
    ...mapState("academic", ["academicList"]),
    ...mapState("competition", ["competitionList"]),
    ...mapState("organization", ["organizationList"]),
    ...mapState("event", ["eventList"]),
    ...mapState("paper", ["paperList"]),
    ...mapState("financial", ["financialList"]),
    ...mapState(["auth"]),
    ...mapState("users", ["usersData"])
  },

  async mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Setting", route: "alert" },
      { title: this.title }
    ]);
    await this.onFetchData();
  },
  methods: {
    ...mapActions("academic", ["getAcademicList", "deleteAcademic"]),
    ...mapActions("competition", ["getCompetitionList", "deleteCompetition"]),
    ...mapActions("organization", [
      "getOrganizationList",
      "deleteOrganization"
    ]),
    ...mapActions("event", ["getEventList", "deleteEvent"]),
    ...mapActions("paper", ["getPaperList", "deletePaper"]),
    ...mapActions("financial", ["getFinancialList", "deleteFinancial"]),
    ...mapActions("achievement", ["getAchievementList", "createAchievement"]),
    ...mapActions("users", ["updateAchievementUsers"]),
    async onFetchData() {
      this.dialog = true;
      const id = this.$route.params.id;

      await this.getAcademicList({ student_id: id });
      await this.getCompetitionList({ student_id: id });
      await this.getOrganizationList({ student_id: id });
      await this.getEventList({ student_id: id });
      await this.getPaperList({ student_id: id });
      await this.getFinancialList({ student_id: id });
    }
  }
};
</script>
