<template>
  <div>
    <v-card class="mb-6">
      <v-card-title>
        <span class="title font-weight-light" style="padding-right:5px;"
          >Mahasiswa</span
        >
        <span class="title font-weight-light" style="padding-right:5px;"
          >Pendapat</span
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
          v-model="searchfinal"
          class="my-2"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
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
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex lg3 sm3 xs12 md6 style="display:flex;" class="justify-center">
          <v-card>
            <v-card-title>
              <span class="title font-weight-light" style="padding-right:5px;"
                >Fakultas</span
              >
              <span class="title font-weight-light" style="padding-right:5px;"
                >Humaniora</span
              >
              <span class="title font-weight-light" style="padding-right:5px;"
                >dan</span
              >
              <span class="title font-weight-light">Bisnis</span>
            </v-card-title>
            <v-card-text>
              <p>Akuntansi: {{ reportData.prodiAkun }} Orang</p>
              <p>Manajemen: {{ reportData.prodiMene }} Orang</p>
              <p>Ilmu Komunikasi: {{ reportData.prodiIlkom }} Orang</p>
              <p>Psikologi: {{ reportData.prodiPsi }} Orang</p>
              <b>Total FHB: {{ reportData.totalfhb }} Orang</b>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex lg3 sm3 xs12 md6 style="display:flex;" class="justify-center">
          <v-card>
            <v-card-title>
              <span class="title font-weight-light" style="padding-right:5px;"
                >Fakultas</span
              >
              <span class="title font-weight-light" style="padding-right:5px;"
                >Teknologi</span
              >
              <span class="title font-weight-light" style="padding-right:5px;"
                >dan</span
              >
              <span class="title font-weight-light">Desain</span>
            </v-card-title>
            <v-card-text>
              <p>Desain Komunikasi Visual: {{ reportData.prodiDkv }} Orang</p>
              <p>Desain Produk: {{ reportData.prodiDp }} Orang</p>
              <p>Informatika: {{ reportData.prodiInformatika }} Orang</p>
              <p>Sistem Informasi: {{ reportData.prodiSif }} Orang</p>
              <p>Arsitektur: {{ reportData.prodiArsi }} Orang</p>
              <p>Teknik Sipil: {{ reportData.prodiTeksip }} Orang</p>
              <b>Total FTD: {{ reportData.totalftd }} Orang</b>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex lg3 sm3 xs12 md6 style="display:flex;" class="justify-center">
          <v-card>
            <v-card-title>
              <!-- <span class="title font-weight-light" style="padding-right:5px;"
                >Daftar</span
              > -->
              <span class="title font-weight-light" style="padding-right:5px;"
                >Mahasiswa</span
              >
              <span class="title font-weight-light" style="padding-right:5px;"
                >Per</span
              >
              <span class="title font-weight-light">Angkatan</span>
            </v-card-title>
            <v-card-text>
              <ul v-for="(generation, key) in reportNewList" :key="key">
                <li>Angkatan {{ key }} : {{ generation.length }} Orang</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex lg3 sm3 xs12 md6 style="display:flex;" class="justify-center">
          <v-card>
            <v-card-title>
              <span class="title font-weight-light" style="padding-right:5px;"
                >Total</span
              >
              <span class="title font-weight-light">Keseluruhan</span>
            </v-card-title>
            <v-card-text>
              <b>Jumlah Mahasiswa: {{ reportData.total }} Orang</b>
              <p>
                Jumlah dana beasiswa yang dikeluarkan: <br />
                {{ reportData.total }} Orang x Rp 3.500.000,00 =
                {{ reportData.hasil | formatRupiah }}
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
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
          value: "student.profile.prodi.name"
        },
        {
          text: "NIM",
          value: "student.username"
        },
        {
          text: "Nama",
          value: "student.name"
        }
      ]
    };
  },
  computed: {
    ...mapState("uploadscholarship", [
      "uploadscholarshipFgd",
      "reportData",
      "reportNewList"
    ]),
    ...mapState("period", ["periodList"])
  },
  async mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      {
        title: "Setting",
        route: "alert"
      },
      {
        title: this.title
      }
    ]);
    this.getPeriodList();
    await this.onFetchData();
  },
  methods: {
    ...mapActions("uploadscholarship", [
      "getUploadScholarshipFgd",
      "report",
      "reportNew"
    ]),
    ...mapActions("period", ["getPeriodList"]),
    async onFetchData() {
      // this.loading = true;
      await this.report({
        period_id: this.selectedPeriod
      });
      await this.reportNew({
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
      await this.getUploadScholarshipFgd({
        period_id: this.selectedPeriod,
        final_stage: 1
      });

      await this.report({
        period_id: this.selectedPeriod
      });
      await this.reportNew({
        period_id: this.selectedPeriod
      });
    }
    // onDeleteService(id) {}
  }
};
</script>
