<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <v-card>
          <v-card-title>Pemilihan Mahasiswa</v-card-title>
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
                  <template v-slot:item.pilihan="{ item }">
                    <v-simple-checkbox
                      v-model="item.pilihan"
                    ></v-simple-checkbox>
                  </template>
                </v-data-table>
              </v-card-text>

              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
              >
                Confirm
              </v-btn>
            </v-form>
          </v-card-text>
          <template v-slot:html>
            {{ createjuryData.html }}
          </template>
          <template v-slot:js>
            {{ createjuryData.js }}
          </template>
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
      ]
    };
  },
  computed: {
    ...mapState("createjury", ["createjuryData"]),
    ...mapState("uploadscholarship", ["uploadscholarshipList"]),
    ...mapState("period", ["periodList"])
  },

  async mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vuetify", route: "alerts" },
      { title: "Form Inputs & Control", route: "autocompletes" },
      { title: "Fileinptus" }
    ]);
    this.getPeriodList();
    await this.onFetchData();
  },

  methods: {
    ...mapActions("createjury", ["updateCreateJury", "getCreateJury"]),
    ...mapActions("uploadscholarship", ["getUploadScholarshipList"]),
    ...mapActions("period", ["getPeriodList"]),
    async onFetchData() {
      await this.getCreateJury({ id: this.id });
      await this.getUploadScholarshipList({
        period_id: null,
        next_stage: null
      });
      await this.getPeriodList();
    },

    async onChangeFilter() {
      await this.getUploadScholarshipList({
        period_id: this.selectedPeriod,
        next_stage: null
      });
    },

    async validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.createjuryData.level = "juri";
        await this.updateCreateJury({
          id: this.id,
          payload: this.createjuryData
        });
        this.createjuryData = {};
        this.$router.push({ name: "JuryList" });
      }
    }
  }
};
</script>
