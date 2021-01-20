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
          :headers="header"
          :items="usersList"
          :search="searchakun"
          :footer-props="{
            'items-per-page-options': [5, 10, 25, 50]
          }"
          :items-per-page="5"
        >
          <template v-slot:[`item.action`]="{ item }">
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  :to="{ name: 'StudentsAkunEdit', params: { id: item.id } }"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon> mdi-account-edit </v-icon>
                </v-btn>
              </template>
              <span>Edit Akun</span>
            </v-tooltip>

            <v-dialog v-model="dialogAkun" persistent max-width="290">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon color="red darken-4"> mdi-account-remove </v-icon>
                </v-btn>
              </template>

              <v-card>
                <v-card-title class="headline">Hapus</v-card-title>
                <v-card-text
                  >Apakah Anda yakin ingin menghapus akun ini?</v-card-text
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="disable" text @click="dialogAkun = false"
                    >Kembali</v-btn
                  >
                  <v-btn
                    color="red darken-4"
                    text
                    icon
                    class="mr-2"
                    @click="onDeleteUsers(item.id)"
                    >Hapus</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
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
      dialogAkun: false,
      header: [
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
    ...mapActions("users", ["getUsersList", "deleteUsers"]),
    async onFetchData() {
      await this.getUsersList();
    },
    onEditUsers(id) {
      this.$router.push({
        name: "usersDetail",
        params: { id: id }
      });
    },
    async onDeleteUsers(id) {
      try {
        this.dialogAkun = true;
        await this.deleteUsers({ id: id });
        await this.onFetchData();
        this.dialogAkun = false;
      } catch (error) {
        alert(error);
      }
    }
  }
};
</script>
