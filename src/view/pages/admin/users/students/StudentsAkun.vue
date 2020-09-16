<template>
  <div>
    <v-card class="mb-6">
      <v-card-title
        >Daftar Akun Mahasiswa

        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="searchakun"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="usersList"
          :search="searchakun"
          :footer-props="{
            'items-per-page-options': [5, 10, 25, 50]
          }"
          :items-per-page="5"
        >
          <template v-slot:item.total="{ item }">
            {{ formatRupiah(item.total) }}
          </template>
          <template v-slot:item.action="{ item }">
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  :to="{ name: 'StudentsAkunEdit', params: { id: item.id } }"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>
                    mdi-account-edit
                  </v-icon>
                </v-btn>
              </template>
              <span>Edit Akun</span>
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
      searchakun: "",
      headers: [
        {
          text: "NIM",
          value: "username"
        },
        {
          text: "Program Studi",
          value: "profile.prodi"
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
    ...mapState("users", ["usersList"])
  },

  async mounted() {
    // await this.getCreateJuryList();
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Setting", route: "alert" },
      { title: this.title }
    ]);
    await this.onFetchData();
  },
  methods: {
    ...mapActions("users", ["getUsersList"]),
    async onFetchData() {
      await this.getUsersList();
    },
    onEditUsers(id) {
      this.$router.push({
        name: "usersDetail",
        params: { id: id }
      });
    }
  }
};
</script>
