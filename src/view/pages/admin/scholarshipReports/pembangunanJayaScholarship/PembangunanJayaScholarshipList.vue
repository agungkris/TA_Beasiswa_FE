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
    <v-card class="mb-6">
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
        <span class="title font-weight-light" style="padding-right:5px;"
          >Bisnis</span
        >
        <span class="title font-weight-light">
          : {{ reportData.totalfhb }} Orang</span
        >
      </v-card-title>
      <v-card-text>
        <p>
          Akuntansi : {{ reportData.prodiAkun }} Orang <br />
          Subsidi Beasiswa : {{ reportData.prodiAkun }} Orang *
          {{ reportData.subsidiAkun | formatRupiah }} =
          {{ reportData.hasilAkun | formatRupiah }}
        </p>
        <p>
          Manajemen : {{ reportData.prodiMene }} Orang <br />
          Subsidi Beasiswa : {{ reportData.prodiMene }} Orang *
          {{ reportData.subsidiMene | formatRupiah }} =
          {{ reportData.hasilMene | formatRupiah }}
        </p>
        <p>
          Ilmu Komunikasi : {{ reportData.prodiIlkom }} Orang <br />
          Subsidi Beasiswa : {{ reportData.prodiIlkom }} Orang *
          {{ reportData.subsidiIlkom | formatRupiah }} =
          {{ reportData.hasilIlkom | formatRupiah }}
        </p>
        <p>
          Psikologi : {{ reportData.prodiPsi }} Orang <br />
          Subsidi Beasiswa : {{ reportData.prodiPsi }} Orang *
          {{ reportData.subsidiPsi | formatRupiah }} =
          {{ reportData.hasilPsi | formatRupiah }}
        </p>
        <b
          >Total Subsidi Beasiswa FHB =
          {{ reportData.totalSubsidiFhb | formatRupiah }}
        </b>
      </v-card-text>
    </v-card>
    <v-card class="mb-6">
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
        <span class="title font-weight-light" style="padding-right:5px;"
          >Desain</span
        >
        <span class="title font-weight-light">
          : {{ reportData.totalftd }} Orang</span
        >
      </v-card-title>
      <v-card-text>
        <p>
          Desain Komunikasi Visual : {{ reportData.prodiDkv }} Orang
          <br />
          Subsidi Beasiswa : {{ reportData.prodiDkv }} Orang *
          {{ reportData.subsidiDkv | formatRupiah }} =
          {{ reportData.hasilDkv | formatRupiah }}
        </p>
        <p>
          Desain Produk : {{ reportData.prodiDp }} Orang <br />
          Subsidi Beasiswa : {{ reportData.prodiDp }} Orang *
          {{ reportData.subsidiDp | formatRupiah }} =
          {{ reportData.hasilDp | formatRupiah }}
        </p>
        <p>
          Informatika : {{ reportData.prodiInformatika }} Orang <br />
          Subsidi Beasiswa : {{ reportData.prodiInformatika }} Orang *
          {{ reportData.subsidiInf | formatRupiah }} =
          {{ reportData.hasilInf | formatRupiah }}
        </p>
        <p>
          Sistem Informasi : {{ reportData.prodiSif }} Orang <br />
          Subsidi Beasiswa : {{ reportData.prodiSif }} Orang *
          {{ reportData.subsidiSi | formatRupiah }} =
          {{ reportData.hasilSi | formatRupiah }}
        </p>
        <p>
          Teknik Sipil : {{ reportData.prodiTeksip }} Orang <br />
          Subsidi Beasiswa : {{ reportData.prodiTeksip }} Orang *
          {{ reportData.subsidiTsp | formatRupiah }} =
          {{ reportData.hasilTsp | formatRupiah }}
        </p>
        <p>
          Arsitektur : {{ reportData.prodiArsi }} Orang <br />
          Subsidi Beasiswa : {{ reportData.prodiArsi }} Orang *
          {{ reportData.subsidiArsi | formatRupiah }} =
          {{ reportData.hasilArsi | formatRupiah }}
        </p>
        <b
          >Total Subsidi Beasiswa FTD =
          {{ reportData.totalSubsidiFtd | formatRupiah }}
        </b>
      </v-card-text>
    </v-card>
    <v-card class="mb-6">
      <v-card-title>
        <span class="title font-weight-light" style="padding-right:5px;"
          >Sebaran</span
        >
        <span class="title font-weight-light" style="padding-right:5px;"
          >Angkatan</span
        >
        <span class="title font-weight-light" style="padding-right:5px;"
          >Penerima</span
        >
        <span class="title font-weight-light"> Beasiswa</span>
      </v-card-title>
      <v-card-text>
        <ul v-for="(generation, key) in reportNewList" :key="key">
          <li>Angkatan {{ key }} = {{ generation.length }} Orang</li>
        </ul>
      </v-card-text>
    </v-card>

    <v-card>
      <v-card-title>
        <span class="title font-weight-light" style="padding-right:5px;"
          >Laporan</span
        >
        <span class="title font-weight-light" style="padding-right:5px;"
          >Akhir</span
        >
        <span class="title font-weight-light" style="padding-right:5px;"
          >Penerima</span
        >
        <span class="title font-weight-light"> Beasiswa</span>
      </v-card-title>
      <v-card-text>
        <p>
          Jumlah mahasiswa penerima beasiswa pembangunan jaya =
          {{ reportData.total }} Orang
        </p>
        <p>
          Total subsidi beasiswa pembangunan jaya =
          {{ reportData.totalSubsidiKeseluruhan | formatRupiah }}
        </p>
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
