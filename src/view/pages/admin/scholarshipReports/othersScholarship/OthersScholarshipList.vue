<template>
  <div>
    <v-card class="mb-6">
      <v-card-title
        >Laporan Mahasiswa Bidikmisi/ASAK/Dikti
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="searchfinal"
          class="my-2"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field
      ></v-card-title>
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
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <a v-if="item.khs != null" :href="item.khs">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon> mdi-download </v-icon>
                  </v-btn>
                </a>
              </template>
              <span>Unduh KHS</span>
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
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  data() {
    return {
      dialogAcademic: false,
      academicId: "",
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
      ]
    };
  },
  computed: {
    ...mapState("academic", ["academicList"])
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
    async onFetchData() {
      await this.getAcademicList();
    }
  }
};
</script>
