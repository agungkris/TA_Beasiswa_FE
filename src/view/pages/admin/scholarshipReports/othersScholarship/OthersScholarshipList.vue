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
          :headers="users"
          :items="usersAchievementList"
          :footer-props="{
            'items-per-page-options': [5, 10, 25, 50]
          }"
          :items-per-page="5"
        >
          <template v-slot:[`item.action`]="{ item }">
            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  :to="{
                    name: 'AnotherScholarshipRequirementList',
                    params: { id: item.id }
                  }"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon> mdi-file-find </v-icon>
                </v-btn>
              </template>
              <span>Lihat</span>
            </v-tooltip>
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
      // dialogAcademic: false,
      // academicId: "",
      users: [
        {
          text: "NIM",
          value: "username"
        },
        {
          text: "Program Studi",
          value: "profile.prodi.name"
        },
        {
          text: "Angkatan",
          value: "profile.generation"
        },
        {
          text: "Nama Lengkap",
          value: "name"
        },
        {
          text: "Action",
          value: "action"
        }
      ]
    };
  },
  computed: {
    ...mapState("users", ["usersAchievementList"])
  },
  async mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Setting", route: "alert" },
      { title: this.title }
    ]);
    await this.onFetchData();
  },
  methods: {
    ...mapActions("users", ["getUsersAchievementList"]),
    async onFetchData() {
      await this.getUsersAchievementList({ is_achievement: 1 });
    }
  }
};
</script>
