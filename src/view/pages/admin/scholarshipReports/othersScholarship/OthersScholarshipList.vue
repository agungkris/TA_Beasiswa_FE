<template>
  <div>
    <v-card class="mb-6">
      <v-card-title
        >Laporan Mahasiswa Bidikmisi/ASAK/Dikti
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
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  data() {
    return {
      headers: [
        {
          text: "Semester",
          value: "id"
        },
        {
          text: "NIM",
          value: "id"
        },
        {
          text: "Nama Mahasiswa",
          value: "name"
        },
        {
          text: "Program Studi",
          value: "description"
        },
        {
          text: "Angkatan",
          value: "description"
        },
        {
          text: "Action",
          value: "action"
        }
      ]
    };
  },
  computed: {
    ...mapState("kategorilingkup", ["kategorilingkupList"])
  },
  async mounted() {
    await this.getKategoriLingkupList();
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Setting", route: "alert" },
      { title: this.title }
    ]);
  },
  methods: {
    ...mapActions("kategorilingkup", ["getKategoriLingkupList"]),
    onEditKategoriLingkup(id) {
      this.$router.push({
        name: "kategorilingkupDetail",
        params: { id: id }
      });
    }
    // onDeleteService(id) {}
  }
};
</script>
