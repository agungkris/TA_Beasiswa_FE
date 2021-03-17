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
          fixed-header
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

          <template v-slot:item.name="props">
            <v-edit-dialog
              :return-value.sync="props.item.name"
              @save="save"
              @cancel="cancel"
              @open="open"
              @close="close"
            >
              {{ props.item.name }}
              <template v-slot:input>
                <v-text-field
                  v-model="props.item.name"
                  label="Edit"
                  single-line
                  counter
                ></v-text-field>
              </template>
            </v-edit-dialog>
          </template>
          <template v-slot:item.initial_ipk="props">
            <v-edit-dialog
              :return-value.sync="props.item.initial_ipk"
              large
              persistent
              @save="save"
              @cancel="cancel"
              @open="open"
              @close="close"
            >
              <div>{{ props.item.initial_ipk }}</div>
              <template v-slot:input>
                <div class="mt-4 title">
                  Update IPK
                </div>
                <v-text-field
                  v-model="props.item.initial_ipk"
                  label="Edit"
                  single-line
                  counter
                  autofocus
                ></v-text-field>
              </template>
            </v-edit-dialog>
          </template>
        </v-data-table>

        <v-btn color="success" class="mt-2 mr-4" @click="validate"
          >Selesai</v-btn
        >
        <v-btn color="depressed" class="mt-2 mr-4">Batal</v-btn>
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
      ipkMahasiswa: [],

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
          value: "initial_ipk"
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
    ...mapActions("uploadscholarship", [
      "getUploadScholarshipList",
      "submitIpk"
    ]),
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
    },
    async validate() {
      const ipk_list = this.ipkMahasiswa;
      await this.submitIpk({ ipk_list: this.uploadscholarshipList });
      this.$router.push({ name: "SelectionFgd" });
    }
  }
};
</script>
