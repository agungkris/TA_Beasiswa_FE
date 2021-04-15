<template>
  <div>
    <v-card>
      <v-card-title>Seleksi FGD</v-card-title>
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
          :items="beasiswaMahasiswa"
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
          <template v-slot:[`item.other_requirements`]="{ item }">
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <a :href="item.other_requirements" target="_blank">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>
                      mdi-download
                    </v-icon>
                  </v-btn>
                </a>
              </template>
              <span>Unduh Prestasi</span>
            </v-tooltip>
          </template>
          <template v-slot:[`item.final_stage`]="{ item }">
            <v-checkbox v-model="item.final_stage"></v-checkbox>
          </template>
        </v-data-table>
        <v-btn
          outlined
          color="indigo"
          class="mt-2 mr-4"
          @click="selectionAcak()"
          >Seleksi Acak</v-btn
        >
        <v-btn
          :loading="isLoading"
          color="success"
          class="mt-2 mr-4"
          @click="onFinish()"
          >Selesai</v-btn
        >
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import { mapState, mapActions } from "vuex";

// const clusterMaker = require("clusters");
const kmeans = require("node-kmeans");
const deepCopy = require("lodash.clonedeep");

export default {
  data() {
    return {
      isLoading: false,
      id: this.$route.params.id,
      valid: false,
      search: "",
      selectedPeriod: "",
      beasiswaMahasiswa: [],

      headers: [
        {
          text: "Nama Mahasiswa",
          value: "student.name",
          align: "justify"
        },
        {
          text: "Karya Tulis",
          value: "paper_assessments",
          align: "center"
        },
        {
          text: "FGD",
          value: "presentation_assessments",
          align: "center"
        },
        {
          text: "IPK",
          value: "ipk",
          align: "center"
        },
        {
          text: "Bukti Prestasi/Surat Permohonan Rektor",
          value: "other_requirements",
          align: "center"
        },
        {
          text: "Nilai Akhir",
          value: "final_score",
          align: "center"
        },
        {
          text: "Lulus",
          value: "final_stage",
          align: "center"
        }
      ]
    };
  },
  computed: {
    ...mapState("uploadscholarship", ["kmeansData"]),
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
    ...mapActions("uploadscholarship", ["kmeans", "submitScholarship"]),
    ...mapActions("period", ["getPeriodList"]),

    async onFetchData() {
      await this.getPeriodList();
      // await this.kmeans();
      // await this.mapKmeans();
    },

    mapKmeans() {
      const response = this.kmeansData.map(value => {
        let copyObject = deepCopy(value);
        copyObject.final_stage = false;

        return copyObject;
      });
      // console.log("ini map kmeans", response);
      this.beasiswaMahasiswa = response;
    },

    async onChangeFilter() {
      // await this.getUploadScholarshipList({
      //   period_id: this.selectedPeriod,
      //   next_stage: 1
      // });
      await this.kmeans({
        period_id: this.selectedPeriod
      });
      await this.mapKmeans();
    },

    async onFinish() {
      this.isLoading = true;
      const beasiswa_list = this.beasiswaMahasiswa;
      await this.submitScholarship({ beasiswa_list: beasiswa_list });
      this.isLoading = false;
      this.$router.push({ name: "PembangunanJayaScholarshipList" });
    },

    // clearfinal_stage(){
    //   this.beasiswaMahasiswa.map
    // },

    async selectionAcak() {
      // console.log("asda");
      // this.kmeansData
      // clusterMaker.k(2);

      // clusterMaker.iterations();

      // console.log(this.kmeansData);

      this.mapKmeans();

      const mapData = this.kmeansData.map(value => {
        return [
          value.submit_score,
          value.brs_score,
          value.raport_score,
          value.cv_score,
          value.paper_assessments,
          value.presentation_assessments,
          value.ipk * 25
        ];
      });

      // [
      //   [100,100,100,85],
      //   [100,100,100,85],
      //   [100,100,100,85],
      // ]

      // clusterMaker.data(mapData);

      // const getClusters = clusterMaker.clusters();

      // console.log(mapData);
      let mahasiswaBeasiswa = [];
      let self = this;
      let selectedCluster;
      kmeans.clusterize(mapData, { k: 2 }, (err, res) => {
        if (err);
        else {
          // console.log("%o", res);
          // ini pembagian menjadi 2 cluster dimana nantinya nilai tertinggi atau terendah akan masuk ke cluster dibawah ini dan otomatis kepilah sendiri
          const clusterOne = res[0].centroid.reduce((previous, current) => {
            // console.log(previous);
            // console.log(current);
            return previous + current;
          });

          const clusterTwo = res[1].centroid.reduce((previous, current) => {
            // console.log(previous);
            // console.log(current);
            return previous + current;
          });

          // ini untuk memberikan true/1 pada cluster yang memiliki nilai tertinggi
          selectedCluster = clusterOne > clusterTwo ? 0 : 1;

          // console.log(clusterOne);
          // console.log(clusterTwo);
          // ini untuk mengecek jumlah array/data yang ada pada cluster nilai tertinggi yang udah di dapet di atas
          for (let i = 0; i < res[selectedCluster].clusterInd.length; i++) {
            // let
            // console.log(res[0], "testing");
            // console.log(mapData[this.kmeansData[i].clusterInd]);
            // let testing = this.kmeansData[res[0].clusterInd[i]];
            // console.log(testing);

            console.log(res[0].clusterInd[i]);

            // abis itu ini untuk memberikan ceklis pada data yang masuk kecluster dengan nilai tertinggi
            self.beasiswaMahasiswa[
              res[selectedCluster].clusterInd[i]
            ].final_stage = true;

            console.log(self.beasiswaMahasiswa);

            // mahasiswaBeasiswa.push()
          }
        }
      });

      // let data = mapData.find(value => {

      //   // return getClusters.forEach((cluster, index) => {
      //   //   return cluster.point == value ? index : null;
      //   // });
      //   // console.log(value);
      // });

      // console.log(data);
      // console.dir(getClusters);
    }
  }
};
</script>
