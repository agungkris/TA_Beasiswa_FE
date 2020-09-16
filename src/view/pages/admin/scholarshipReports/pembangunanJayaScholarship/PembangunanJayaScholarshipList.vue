<template>
  <div>
    <v-card class="mb-6">
      <v-card-title
        >Mahasiswa Pendapat Beasiswa Pembangunan Jaya
        <v-spacer></v-spacer>
        <v-select
          class="my-2"
          label="Periode Pengajuan Beasiswa"
          target="#dropdown-example"
          v-model="selectedPeriod"
          :items="periodList"
          item-value="id"
          @change="onChangeFilter"
          item-text="name"
        ></v-select>
        <v-spacer></v-spacer>
        <v-text-field
          class="my-2"
          v-model="searchfinal"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field
      ></v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="uploadscholarshipFgd"
          :search="searchfinal"
          :footer-props="{
            'items-per-page-options': [5, 10, 25, 50]
          }"
          :items-per-page="5"
        >
        </v-data-table>
      </v-card-text>
    </v-card>

    <v-row>
      <v-col cols="8">
        <v-card>
          <v-card-title>Daftar Mahasiswa Per Prodi</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="6">
                <v-card-title>Fakultas Humaniora dan Bisnis</v-card-title>
                <v-card-text>
                  <p>Akuntansi: {{ reportData.prodiAkun }} Orang</p>
                  <p>Manajemen: {{ reportData.prodiMene }} Orang</p>
                  <p>Ilmu Komunikasi: {{ reportData.prodiIlkom }} Orang</p>
                  <p>Psikologi: {{ reportData.prodiPsi }} Orang</p>
                  <p>Total FHB: {{ reportData.totalfhb }} Orang</p>
                </v-card-text>
              </v-col>
              <v-col cols="6">
                <v-card-title>Fakultas Teknologi dan Desain</v-card-title>
                <v-card-text>
                  <p>
                    Desain Komunikasi Visual: {{ reportData.prodiDkv }} Orang
                  </p>
                  <p>Desain Produk: {{ reportData.prodiDp }} Orang</p>
                  <p>Informatika: {{ reportData.prodiInformatika }} Orang</p>
                  <p>Sistem Informasi: {{ reportData.prodiSif }} Orang</p>
                  <p>Arsitektur: {{ reportData.prodiArsi }} Orang</p>
                  <p>Teknik Sipil: {{ reportData.prodiTeksip }} Orang</p>
                  <p>Total FTD: {{ reportData.totalftd }} Orang</p>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card>
          <v-card-title>Daftar Mahasiswa Per Angkatan</v-card-title>
          <v-card-text>
            <p>Total Mahasiswa: {{ reportData.total }} Orang</p>
            <p>Angkatan 2017: {{ reportData.angkatan17 }} Orang</p>
            <p>Angkatan 2018: {{ reportData.angkatan18 }} Orang</p>
            <p>Angkatan 2019: {{ reportData.angkatan19 }} Orang</p>
            <p>Angkatan 2020: {{ reportData.angkatan20 }} Orang</p>
            <p>
              Jumlah dana beasiswa yang dikeluarkan: {{ reportData.total }} x
              3.500.000 =
              {{ reportData.hasil }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  data() {
    return {
      loading: false,
      searchfinal: "",
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
          value: "student.profile.prodi"
        },
        {
          text: "NIM",
          value: "student.username"
        },
        {
          text: "Nama",
          value: "student.name"
        }
      ],

      ilkom: [
        {
          id: 1,
          name: "PRODI ILMU KOMUNIKASI : 10 ORANG",
          children: [
            {
              id: 2,
              name: "Angkatan 2017: 3 Orang",
              value: "student.name"
            },
            {
              id: 3,
              name: "Angkatan 2018: 5 Orang",
              value: "student.username"
            },
            { id: 4, name: "Angkatan 2019: 1 Orang", value: "student.prodi" },
            {
              id: 5,
              name: "Angkatan 2020 : 1 Orang",
              value: "student.generation"
            }
          ]
        }
      ],
      dkv: [
        {
          id: 1,
          name: "PRODI DESAIN KOMUNIKASI VISUAL : 10 ORANG",
          children: [
            {
              id: 2,
              name: "Angkatan 2017: 3 Orang",
              value: "student.name"
            },
            {
              id: 3,
              name: "Angkatan 2018: 5 Orang",
              value: "student.username"
            },
            { id: 4, name: "Angkatan 2019: 1 Orang", value: "student.prodi" },
            {
              id: 5,
              name: "Angkatan 2020 : 1 Orang",
              value: "student.generation"
            }
          ]
        }
      ],
      inf: [
        {
          id: 1,
          name: "PRODI INFORMATIKA : 10 ORANG",
          children: [
            {
              id: 2,
              name: "Angkatan 2017: 3 Orang",
              value: "student.name"
            },
            {
              id: 3,
              name: "Angkatan 2018: 5 Orang",
              value: "student.username"
            },
            { id: 4, name: "Angkatan 2019: 1 Orang", value: "student.prodi" },
            {
              id: 5,
              name: "Angkatan 2020 : 1 Orang",
              value: "student.generation"
            }
          ]
        }
      ],
      sipil: [
        {
          id: 1,
          name: "PRODI TEKNIK SIPIL : 10 ORANG",
          children: [
            {
              id: 2,
              name: "Angkatan 2017: 3 Orang",
              value: "student.name"
            },
            {
              id: 3,
              name: "Angkatan 2018: 5 Orang",
              value: "student.username"
            },
            { id: 4, name: "Angkatan 2019: 1 Orang", value: "student.prodi" },
            {
              id: 5,
              name: "Angkatan 2020 : 1 Orang",
              value: "student.generation"
            }
          ]
        }
      ]
    };
  },
  computed: {
    ...mapState("uploadscholarship", ["uploadscholarshipFgd", "reportData"]),
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
    ...mapActions("uploadscholarship", ["getUploadScholarshipFgd", "report"]),
    ...mapActions("period", ["getPeriodList"]),
    async onFetchData() {
      // this.loading = true;
      await this.report({
        period_id: this.selectedPeriod
      });
      await this.getUploadScholarshipFgd({
        period_id: null,
        final_stage: 1
      });
      await this.getPeriodList();
      // this.loading = false;
    },
    async onChangeFilter() {
      console.log("asdasd");
      await this.getUploadScholarshipFgd({
        period_id: this.selectedPeriod,
        final_stage: 1
      });

      await this.report({
        period_id: this.selectedPeriod
      });
    }
    // onDeleteService(id) {}
  }
};
</script>
