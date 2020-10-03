<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <v-card class="mb-5">
          <v-card-title>Pemilihan Karya Tulis Mahasiswa</v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="createjuryData.name"
                :rules="nameRules"
                disabled
              ></v-text-field>
              <v-card-text>
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
                  <template v-slot:[`item.pilihan`]="{ item }">
                    <v-checkbox
                      :value="item.id"
                      v-model="paperjuryData.submission_id"
                    ></v-checkbox>
                  </template>
                </v-data-table>
              </v-card-text>

              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
              >
                Selesai
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>

        <v-card>
          <v-card-title>Mahasiswa Terpilih</v-card-title>
          <v-card-text>
            <v-data-table :headers="headers2" :items="paperjuryList">
              <template v-slot:item.action="{ item }">
                <v-btn
                  color="red darken-4"
                  text
                  icon
                  @click="onRemove(item.id)"
                  class="mr-2"
                  >Hapus</v-btn
                >
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </div>
    </div>
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
      headers: [
        {
          text: "Nama Mahasiswa",
          value: "student.name"
        },
        { text: "Program Studi", value: "student.profile.prodi" },
        { text: "Pilihan", value: "pilihan" }
      ],
      headers2: [
        {
          text: "Nama Lengkap",
          value: "student.name"
        },
        {
          text: "Program Studi",
          value: "student.profile.prodi"
        },

        {
          text: "Action",
          value: "action"
        }
      ]
    };
  },
  computed: {
    ...mapState("createjury", ["createjuryData"]),
    ...mapState("uploadscholarship", ["uploadscholarshipList"]),
    ...mapState("period", ["periodList"]),
    ...mapState("paperjury", ["paperjuryData", "paperjuryList"])
  },

  async mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vuetify", route: "alerts" },
      { title: "Form Inputs & Control", route: "atocompletes" },
      { title: "Fileinptus" }
    ]);
    this.getPeriodList();
    this.getSubmissionMember();
    await this.onFetchData();
  },

  methods: {
    ...mapActions("createjury", ["updateCreateJury", "getCreateJury"]),
    ...mapActions("uploadscholarship", ["getUploadScholarshipList"]),
    ...mapActions("period", ["getPeriodList"]),
    ...mapActions("paperjury", [
      "createPaperJury",
      "getSubmissionMember",
      "deletePaperJury"
    ]),
    async onFetchData() {
      await this.getCreateJury({ id: this.id });
      await this.getUploadScholarshipList({
        period_id: null,
        next_stage: null,
        submission_member: true
      });
      await this.getPeriodList();
      await this.getSubmissionMember({ id: this.id });
    },

    async onChangeFilter() {
      await this.getUploadScholarshipList({
        period_id: this.selectedPeriod,
        next_stage: null,
        submission_member: true
      });
    },

    async validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.createjuryData.level = "juri";
        await this.createPaperJury({
          id: this.id,
          payload: this.paperjuryData
        });
        this.paperjuryData = {};
        this.$router.push({ name: "JuryList" });
      }
    },
    async onRemove(submission_id) {
      try {
        await this.deletePaperJury({
          id: this.id,
          submission_id: submission_id
        });
        await this.onFetchData();
      } catch (error) {
        alert(error);
      }
    }
  }
};
</script>
