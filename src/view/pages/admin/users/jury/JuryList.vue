<template>
  <div>
    <v-card>
      <v-card-title
        >Daftar Juri Beasiswa Pembangunan Jaya
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon :to="{ name: 'JuryCreate' }" v-bind="attrs" v-on="on">
              <v-icon>
                mdi-account-plus
              </v-icon>
            </v-btn>
          </template>
          <span>Buat Akun Juri</span>
        </v-tooltip>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="searchdaftarjury"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="createjuryList"
          :search="searchdaftarjury"
          :footer-props="{
            'items-per-page-options': [5, 10, 25, 50]
          }"
          :items-per-page="5"
        >
          <template v-slot:[`item.karya_tulis`]="{ item }">
            <v-checkbox
              v-model="item.category_jury.karya_tulis"
              :disabled="true"
            />
          </template>
          <template v-slot:[`item.fgd`]="{ item }">
            <v-checkbox v-model="item.category_jury.fgd" :disabled="true" />
          </template>
          <template v-slot:[`item.action`]="{ item }">
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  :to="{ name: 'JuryEdit', params: { id: item.id } }"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>
                    mdi-account-edit
                  </v-icon>
                </v-btn>
              </template>
              <span>Edit Juri</span>
            </v-tooltip>

            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  :to="{
                    name: 'JuryPaperCreate',
                    params: { id: item.id }
                  }"
                  v-bind="attrs"
                  v-on="on"
                  v-if="item.category_jury.karya_tulis != null"
                >
                  <v-icon>
                    mdi-account-multiple-plus
                  </v-icon>
                </v-btn>
              </template>
              <span>Pilih Mahasiswa</span>
            </v-tooltip>

            <v-dialog v-model="dialog" persistent max-width="290">
              <!-- <v-tooltip right> -->
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon color="red darken-4">
                    mdi-delete
                  </v-icon>
                </v-btn>
              </template>
              <!-- <span>Hapus Akun</span>
              </v-tooltip> -->

              <v-card>
                <v-card-title class="headline">Hapus Akun Juri</v-card-title>
                <v-card-text
                  >Apakah Anda yakin ingin menghapus akun juri ini?</v-card-text
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="disable" text @click="dialog = false"
                    >Kembali</v-btn
                  >
                  <v-btn
                    color="red darken-4"
                    text
                    icon
                    @click="onDelete(item.id)"
                    class="mr-2"
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
      searchdaftarjury: "",
      searchkaryatulis: "",
      searchfgd: "",
      dialog: false,
      headers: [
        {
          text: "Nama Lengkap",
          value: "name"
        },
        {
          text: "NIDN",
          value: "username"
        },
        {
          text: "Email",
          value: "email"
        },
        {
          text: "Juri Karya Tulis",
          value: "karya_tulis"
        },
        {
          text: "Juri FGD",
          value: "fgd"
        },
        {
          text: "Action",
          value: "action"
        }
      ],

      headers2: [
        {
          text: "Nama Lengkap",
          value: "name"
        },
        {
          text: "NIDN",
          value: "username"
        },
        {
          text: "Email",
          value: "email"
        },
        {
          text: "Juri Karya Tulis",
          value: "karya_tulis"
        },
        {
          text: "Action",
          value: "action"
        }
      ]
    };
  },
  computed: {
    ...mapState("createjury", ["createjuryList"]),
    ...mapState("categoryjury", ["categoryJuryList"])
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
    ...mapActions("createjury", ["getCreateJuryList", "deleteCreateJury"]),
    ...mapActions("categoryjury", ["getCategoryJuryList"]),
    async onFetchData() {
      await this.getCreateJuryList();
      await this.getCategoryJuryList();
    },
    onEditCreateJuryList(id) {
      this.$router.push({
        name: "createjurylistDetail",
        params: { id: id }
      });
    },
    async onDelete(id) {
      try {
        this.dialog = true;
        await this.deleteCreateJury({ id: id });
        await this.onFetchData();
        this.dialog = false;
      } catch (error) {
        alert(error);
      }
    }
    // onDeleteService(id) {}
  }
};
</script>
