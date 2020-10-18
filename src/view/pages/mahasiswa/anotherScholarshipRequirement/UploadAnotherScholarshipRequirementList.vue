<template>
  <div>
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
              <v-icon>
                mdi-note-plus
              </v-icon>
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
          <template v-slot:item.action="{ item }">
            <v-tooltip
              right
            >
              <template v-slot:activator="{ on, attrs }">
                <a :href="item.khs" v-if="item.khs != null">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>
                      mdi-download
                    </v-icon>
                  </v-btn>
                </a>
              </template>
              <span>Unduh KHS</span>
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  :to="{ name: 'AcademicEdit', params: { id: item.id } }"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>
                    mdi-pencil
                  </v-icon>
                </v-btn>
              </template>
              <span>Edit</span>
            </v-tooltip>

            <v-dialog
              v-model="dialog"
              persistent
              max-width="290"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon color="red darken-4">
                    mdi-delete
                  </v-icon>
                </v-btn>
              </template>

              <v-card>
                <v-card-title class="headline"
                  >Hapus</v-card-title
                >
                <v-card-text
                  >Apakah Anda yakin ingin menghapus laporan
                  ini?</v-card-text
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="disable" text @click="dialog = false"
                    >Kembali</v-btn
                  >
                  <v-btn
                    color="red darken-4"
                    text
                    icon
                    @click="onDeleteAcademic(item.id)"
                    class="mr-2"
                    >Hapus</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>

    <!-- NON AKADEMIK/KOMPETISI -->
    <v-card class="mb-6">
      <v-card-title
        >Laporan Prestasi Non Akademik
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              :to="{ name: 'CompetitionCreate' }"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>
                mdi-note-plus
              </v-icon>
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
          <template v-slot:item.action="{ item }">
            <v-tooltip
              right
            >
              <template v-slot:activator="{ on, attrs }">
                <a :href="item.document" v-if="item.document != null">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>
                      mdi-download
                    </v-icon>
                  </v-btn>
                </a>
              </template>
              <span>Unduh Dokumen</span>
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  :to="{ name: 'CompetitionEdit', params: { id: item.id } }"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>
                    mdi-pencil
                  </v-icon>
                </v-btn>
              </template>
              <span>Edit</span>
            </v-tooltip>

            <v-dialog
              v-model="dialog"
              persistent
              max-width="290"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon color="red darken-4">
                    mdi-delete
                  </v-icon>
                </v-btn>
              </template>

              <v-card>
                <v-card-title class="headline"
                  >Hapus</v-card-title
                >
                <v-card-text
                  >Apakah Anda yakin ingin menghapus laporan
                  ini?</v-card-text
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="disable" text @click="dialog = false"
                    >Kembali</v-btn
                  >
                  <v-btn
                    color="red darken-4"
                    text
                    icon
                    @click="onDeleteCompetition(item.id)"
                    class="mr-2"
                    >Hapus</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>

    <!-- ORGANISASI -->
    <v-card class="mb-6">
      <v-card-title
        >Laporan Kegiatan Organisasi Kemahasiswaan
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              :to="{ name: 'OrganizationCreate' }"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>
                mdi-note-plus
              </v-icon>
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
          <template v-slot:item.action="{ item }">
            <v-tooltip
              right
            >
              <template v-slot:activator="{ on, attrs }">
                <a :href="item.document" v-if="item.document != null">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>
                      mdi-download
                    </v-icon>
                  </v-btn>
                </a>
              </template>
              <span>Unduh Dokumen</span>
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  :to="{ name: 'OrganizationEdit', params: { id: item.id } }"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>
                    mdi-pencil
                  </v-icon>
                </v-btn>
              </template>
              <span>Edit</span>
            </v-tooltip>

            <v-dialog
              v-model="dialog"
              persistent
              max-width="290"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon color="red darken-4">
                    mdi-delete
                  </v-icon>
                </v-btn>
              </template>

              <v-card>
                <v-card-title class="headline"
                  >Hapus</v-card-title
                >
                <v-card-text
                  >Apakah Anda yakin ingin menghapus laporan
                  ini?</v-card-text
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="disable" text @click="dialog = false"
                    >Kembali</v-btn
                  >
                  <v-btn
                    color="red darken-4"
                    text
                    icon
                    @click="onDeleteCompetition(item.id)"
                    class="mr-2"
                    >Hapus</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>

    <!-- ACARA/EVENT -->
    <v-card class="mb-6">
      <v-card-title
        >Laporan Keikutsertaan Kepanitiaan
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              :to="{ name: 'EventCreate' }"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>
                mdi-note-plus
              </v-icon>
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
          <template v-slot:item.action="{ item }">
            <v-tooltip
              right
            >
              <template v-slot:activator="{ on, attrs }">
                <a :href="item.document" v-if="item.document != null">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>
                      mdi-download
                    </v-icon>
                  </v-btn>
                </a>
              </template>
              <span>Unduh Dokumen</span>
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  :to="{ name: 'EventEdit', params: { id: item.id } }"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>
                    mdi-pencil
                  </v-icon>
                </v-btn>
              </template>
              <span>Edit</span>
            </v-tooltip>

            <v-dialog
              v-model="dialog"
              persistent
              max-width="290"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon color="red darken-4">
                    mdi-delete
                  </v-icon>
                </v-btn>
              </template>

              <v-card>
                <v-card-title class="headline"
                  >Hapus</v-card-title
                >
                <v-card-text
                  >Apakah Anda yakin ingin menghapus laporan
                  ini?</v-card-text
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="disable" text @click="dialog = false"
                    >Kembali</v-btn
                  >
                  <v-btn
                    color="red darken-4"
                    text
                    icon
                    @click="onDeleteCompetition(item.id)"
                    class="mr-2"
                    >Hapus</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>

    <!-- PAPER/KARYA TULIS -->
    <v-card class="mb-6">
      <v-card-title
        >Laporan Publikasi Ilmiah/Karya Tulis/PKM
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              :to="{ name: 'PaperCreate' }"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>
                mdi-note-plus
              </v-icon>
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
          <template v-slot:item.action="{ item }">
            <v-tooltip
              right
            >
              <template v-slot:activator="{ on, attrs }">
                <a :href="item.document" v-if="item.document != null">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>
                      mdi-download
                    </v-icon>
                  </v-btn>
                </a>
              </template>
              <span>Unduh Dokumen</span>
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  :to="{ name: 'PaperEdit', params: { id: item.id } }"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>
                    mdi-pencil
                  </v-icon>
                </v-btn>
              </template>
              <span>Edit</span>
            </v-tooltip>

            <v-dialog
              v-model="dialog"
              persistent
              max-width="290"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon color="red darken-4">
                    mdi-delete
                  </v-icon>
                </v-btn>
              </template>

              <v-card>
                <v-card-title class="headline"
                  >Hapus</v-card-title
                >
                <v-card-text
                  >Apakah Anda yakin ingin menghapus laporan
                  ini?</v-card-text
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="disable" text @click="dialog = false"
                    >Kembali</v-btn
                  >
                  <v-btn
                    color="red darken-4"
                    text
                    icon
                    @click="onDeleteCompetition(item.id)"
                    class="mr-2"
                    >Hapus</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>

    <!-- LAPORAN KEUANGAN -->
    <v-card class="mb-6">
      <v-card-title
        >Laporan Keuangan Biaya Pendidikan
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              :to="{ name: 'FinancialCreate' }"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>
                mdi-note-plus
              </v-icon>
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
          <template v-slot:item.action="{ item }">
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  :to="{ name: 'FinancialEdit', params: { id: item.id } }"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>
                    mdi-pencil
                  </v-icon>
                </v-btn>
              </template>
              <span>Edit</span>
            </v-tooltip>

            <v-dialog
              v-model="dialog"
              persistent
              max-width="290"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon color="red darken-4">
                    mdi-delete
                  </v-icon>
                </v-btn>
              </template>

              <v-card>
                <v-card-title class="headline"
                  >Hapus</v-card-title
                >
                <v-card-text
                  >Apakah Anda yakin ingin menghapus laporan
                  ini?</v-card-text
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="disable" text @click="dialog = false"
                    >Kembali</v-btn
                  >
                  <v-btn
                    color="red darken-4"
                    text
                    icon
                    @click="onDeleteCompetition(item.id)"
                    class="mr-2"
                    >Hapus</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
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
      dialog: false,
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
          value: "level"
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
  },

  async mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Setting", route: "alert" },
      { title: this.title }
    ]);
    await this.onFetchData();
  },
  methods: {
    ...mapActions("academic", [
      "getAcademicList","deleteAcademic"
    ]),
    ...mapActions("competition", [
      "getCompetitionList","deleteCompetition"
    ]),
    ...mapActions("organization", [
      "getOrganizationList","deleteOrganization"
    ]),
    ...mapActions("event", [
      "getEventList","deleteEvent"
    ]),
    ...mapActions("paper", [
      "getPaperList","deletePaper"
    ]),
    ...mapActions("financial", [
      "getFinancialList","deleteFinancial"
    ]),
    async onFetchData() {
      await this.getAcademicList();
      await this.getCompetitionList();
      await this.getOrganizationList();
      await this.getEventList();
      await this.getPaperList();
      await this.getFinancialList();
    },
    
    async onDeleteAcademic(id) {
      try {
        this.dialog = true;
        await this.deleteAcademic({ id: id });
        await this.onFetchData();
        this.dialog = false;
      } catch (error) {
        alert(error);
      }
    },

    async onDeleteCompetition(id) {
      try {
        this.dialog = true;
        await this.deleteCompetition({ id: id });
        await this.onFetchData();
        this.dialog = false;
      } catch (error) {
        alert(error);
      }
    },
  }
};
</script>
