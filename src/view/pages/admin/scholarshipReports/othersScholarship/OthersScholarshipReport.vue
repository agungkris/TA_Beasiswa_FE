<template>
  <div>
    <h3 style="text-align: center; padding-bottom: 5px">
      Laporan Beasiswa ASAK/DIKTI/BIDIKMISI
    </h3>
    <!-- AKADEMIK -->
    <v-card class="mb-6">
      <v-card-title
        >Laporan Prestasi Akademik
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              :to="{ name: 'AcademicCreate' }"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon> mdi-note-plus </v-icon>
            </v-btn>
          </template>
          <span>Buat</span>
        </v-tooltip>
      </v-card-title>
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
            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  :to="{ name: 'AcademicEdit', params: { id: item.id } }"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon> mdi-pencil </v-icon>
                </v-btn>
              </template>
              <span>Edit</span>
            </v-tooltip>
            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  @click="onOpenDeleteAcademic(item.id)"
                  v-on="on"
                >
                  <v-icon color="red darken-4"> mdi-delete </v-icon>
                </v-btn>
              </template>
              <span>Hapus</span>
            </v-tooltip>
          </template>
        </v-data-table>

        <v-dialog v-model="dialogAcademic" persistent max-width="290">
          <v-card>
            <v-card-title class="headline">Hapus</v-card-title>
            <v-card-text
              >Apakah Anda yakin ingin menghapus laporan ini?</v-card-text
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="disable" text @click="dialogAcademic = false"
                >Kembali</v-btn
              >
              <v-btn
                :loading="loadingAcademic"
                color="red darken-4"
                text
                icon
                class="mr-2"
                @click="onDeleteAcademic(academicId)"
                >Hapus</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
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
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              :to="{ name: 'CompetitionCreate' }"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon> mdi-note-plus </v-icon>
            </v-btn>
          </template>
          <span>Buat</span>
        </v-tooltip>
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
            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  :to="{ name: 'CompetitionEdit', params: { id: item.id } }"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon> mdi-pencil </v-icon>
                </v-btn>
              </template>
              <span>Edit</span>
            </v-tooltip>
            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  @click="onOpenDeleteCompetition(item.id)"
                  v-on="on"
                >
                  <v-icon color="red darken-4"> mdi-delete </v-icon>
                </v-btn>
              </template>
              <span>Hapus</span>
            </v-tooltip>
          </template>
        </v-data-table>

        <v-dialog v-model="dialogCompetition" persistent max-width="290">
          <v-card>
            <v-card-title class="headline">Hapus</v-card-title>
            <v-card-text
              >Apakah Anda yakin ingin menghapus laporan ini?</v-card-text
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="disable" text @click="dialogCompetition = false"
                >Kembali</v-btn
              >
              <v-btn
                :loading="loadingCompetition"
                color="red darken-4"
                text
                icon
                class="mr-2"
                @click="onDeleteCompetition(competitionId)"
                >Hapus</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
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

        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              :to="{ name: 'OrganizationCreate' }"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon> mdi-note-plus </v-icon>
            </v-btn>
          </template>
          <span>Buat</span>
        </v-tooltip>
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
            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  :to="{ name: 'OrganizationEdit', params: { id: item.id } }"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon> mdi-pencil </v-icon>
                </v-btn>
              </template>
              <span>Edit</span>
            </v-tooltip>
            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  @click="onOpenDeleteOrganization(item.id)"
                  v-on="on"
                >
                  <v-icon color="red darken-4"> mdi-delete </v-icon>
                </v-btn>
              </template>
              <span>Hapus</span>
            </v-tooltip>
          </template>
        </v-data-table>

        <v-dialog v-model="dialogOrganization" persistent max-width="290">
          <v-card>
            <v-card-title class="headline">Hapus</v-card-title>
            <v-card-text
              >Apakah Anda yakin ingin menghapus laporan ini?</v-card-text
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="disable" text @click="dialogOrganization = false"
                >Kembali</v-btn
              >
              <v-btn
                :loading="loadingOrganization"
                color="red darken-4"
                text
                icon
                class="mr-2"
                @click="onDeleteOrganization(organizationId)"
                >Hapus</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
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
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon :to="{ name: 'EventCreate' }" v-bind="attrs" v-on="on">
              <v-icon> mdi-note-plus </v-icon>
            </v-btn>
          </template>
          <span>Buat</span>
        </v-tooltip>
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
            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  :to="{ name: 'EventEdit', params: { id: item.id } }"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon> mdi-pencil </v-icon>
                </v-btn>
              </template>
              <span>Edit</span>
            </v-tooltip>
            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  @click="onOpenDeleteEvent(item.id)"
                  v-on="on"
                >
                  <v-icon color="red darken-4"> mdi-delete </v-icon>
                </v-btn>
              </template>
              <span>Hapus</span>
            </v-tooltip>
          </template>
        </v-data-table>
      </v-card-text>
      <v-dialog v-model="dialogEvent" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">Hapus</v-card-title>
          <v-card-text
            >Apakah Anda yakin ingin menghapus laporan ini?</v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="disable" text @click="dialogEvent = false"
              >Kembali</v-btn
            >
            <v-btn
              :loading="loadingEvent"
              color="red darken-4"
              text
              icon
              class="mr-2"
              @click="onDeleteEvent(eventId)"
              >Hapus</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
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
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon :to="{ name: 'PaperCreate' }" v-bind="attrs" v-on="on">
              <v-icon> mdi-note-plus </v-icon>
            </v-btn>
          </template>
          <span>Buat</span>
        </v-tooltip>
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
            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  :to="{ name: 'PaperEdit', params: { id: item.id } }"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon> mdi-pencil </v-icon>
                </v-btn>
              </template>
              <span>Edit</span>
            </v-tooltip>
            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  @click="onOpenDeletePaper(item.id)"
                  v-on="on"
                >
                  <v-icon color="red darken-4"> mdi-delete </v-icon>
                </v-btn>
              </template>
              <span>Hapus</span>
            </v-tooltip>
          </template>
        </v-data-table>
        <v-dialog v-model="dialogPaper" persistent max-width="290">
          <v-card>
            <v-card-title class="headline">Hapus</v-card-title>
            <v-card-text
              >Apakah Anda yakin ingin menghapus laporan ini?</v-card-text
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="disable" text @click="dialogPaper = false"
                >Kembali</v-btn
              >
              <v-btn
                :loading="loadingPaper"
                color="red darken-4"
                text
                icon
                class="mr-2"
                @click="onDeletePaper(paperId)"
                >Hapus</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
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
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              :to="{ name: 'FinancialCreate' }"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon> mdi-note-plus </v-icon>
            </v-btn>
          </template>
          <span>Buat</span>
        </v-tooltip>
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
          <template v-slot:[`item.action`]="{ item }">
            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  :to="{ name: 'FinancialEdit', params: { id: item.id } }"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon> mdi-pencil </v-icon>
                </v-btn>
              </template>
              <span>Edit</span>
            </v-tooltip>
            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  @click="onOpenDeleteFinancial(item.id)"
                  v-on="on"
                >
                  <v-icon color="red darken-4"> mdi-delete </v-icon>
                </v-btn>
              </template>
              <span>Hapus</span>
            </v-tooltip>
          </template>
          <template v-slot:[`item.amount`]="{ item }">
            {{ item.amount | formatRupiah }}
          </template>
        </v-data-table>
        <v-dialog v-model="dialogFinancial" persistent max-width="290">
          <v-card>
            <v-card-title class="headline">Hapus</v-card-title>
            <v-card-text
              >Apakah Anda yakin ingin menghapus laporan ini?</v-card-text
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="disable" text @click="dialogFinancial = false"
                >Kembali</v-btn
              >
              <v-btn
                :loading="loadingFinancial"
                color="red darken-4"
                text
                icon
                class="mr-2"
                @click="onDeleteFinancial(financialId)"
                >Hapus</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card-text>

      <!-- <v-dialog
        v-if="auth.user.is_achievement == 0"
        v-model="dialog"
        persistent
        max-width="290"
      >
        <v-card>
          <v-card-title class="headline">Konfirmasi</v-card-title>
          <v-card-text
            >Apakah Anda ingin memberikan laporan untuk keperluan beasiswa
            ASAK/Dikti/Bidikmisi?</v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="disable" text @click="cancel">Tidak</v-btn>
            <v-btn color="success" text class="mr-2" @click="accept">Ya</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog> -->
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  data() {
    return {
      //   dialog: "",
      loadingAcademic: false,
      dialogAcademic: false,
      academicId: "",
      loadingCompetition: false,
      dialogCompetition: false,
      competitionId: "",
      loadingOrganization: false,
      dialogOrganization: false,
      organizationId: "",
      loadingEvent: false,
      dialogEvent: false,
      eventId: "",
      loadingPaper: false,
      dialogPaper: false,
      paperId: "",
      loadingFinancial: false,
      dialogFinancial: false,
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
    },

    onOpenDeleteAcademic(id) {
      this.dialogAcademic = true;
      this.academicId = id;
    },
    async onDeleteAcademic(id) {
      try {
        this.dialogAcademic = true;
        this.loadingAcademic = true;
        await this.deleteAcademic({ id: id });
        await this.onFetchData();
        this.loadingAcademic = false;
        this.dialogAcademic = false;
      } catch (error) {
        alert(error);
      }
    },

    onOpenDeleteCompetition(id) {
      this.dialogCompetition = true;
      this.competitionId = id;
    },
    async onDeleteCompetition(id) {
      try {
        this.dialogCompetition = true;
        this.loadingCompetition = true;
        await this.deleteCompetition({ id: id });
        await this.onFetchData();
        this.loadingCompetition = false;
        this.dialogCompetition = false;
      } catch (error) {
        alert(error);
      }
    },

    onOpenDeleteOrganization(id) {
      this.dialogOrganization = true;
      this.organizationId = id;
    },
    async onDeleteOrganization(id) {
      try {
        this.dialogOrganization = true;
        this.loadingOrganization = true;
        await this.deleteOrganization({ id: id });
        await this.onFetchData();
        this.loadingOrganization = false;
        this.dialogOrganization = false;
      } catch (error) {
        alert(error);
      }
    },

    onOpenDeleteEvent(id) {
      this.dialogEvent = true;
      this.eventId = id;
    },
    async onDeleteEvent(id) {
      try {
        this.dialogEvent = true;
        this.loadingEvent = true;
        await this.deleteEvent({ id: id });
        await this.onFetchData();
        this.loadingEvent = false;
        this.dialogEvent = false;
      } catch (error) {
        alert(error);
      }
    },

    onOpenDeletePaper(id) {
      this.dialogPaper = true;
      this.paperId = id;
    },
    async onDeletePaper(id) {
      try {
        this.dialogPaper = true;
        this.loadingPaper = true;
        await this.deletePaper({ id: id });
        await this.onFetchData();
        this.loadingPaper = false;
        this.dialogPaper = false;
      } catch (error) {
        alert(error);
      }
    },

    onOpenDeleteFinancial(id) {
      this.dialogFinancial = true;
      this.financialId = id;
    },
    async onDeleteFinancial(id) {
      try {
        this.dialogFinancial = true;
        this.loadingFinancial = true;
        await this.deleteFinancial({ id: id });
        await this.onFetchData();
        this.loadingFinancial = false;
        this.dialogFinancial = false;
      } catch (error) {
        alert(error);
      }
    }

    // Open() {
    //   this.dialog = true;
    // },
    // async cancel() {
    //   try {
    //     await this.updateAchievementUsers({
    //       id: this.auth.user.id,
    //       payload: {
    //         is_achievement: 0
    //       }
    //     });
    //     this.getUsersList = {};
    //     this.dialog = false;
    //     this.$router.push({
    //       name: "dashboard"
    //     });
    //   } catch (error) {
    //     alert(error);
    //   }
    // },
    // async accept() {
    //   try {
    //     await this.updateAchievementUsers({
    //       id: this.auth.user.id,
    //       payload: {
    //         is_achievement: 1
    //       }
    //     });
    //     this.getUsersList = {};

    //     this.dialog = false;
    //   } catch (error) {
    //     alert(error);
    //   }
    // }
  }
};
</script>
