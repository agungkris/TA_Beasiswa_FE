<template>
  <div>
    <v-card class="mb-6">
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
            <v-tooltip left>
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
                <v-btn icon @click="onDelete(item.id)" v-bind="attrs" v-on="on">
                  <v-icon>
                    mdi-delete
                  </v-icon>
                </v-btn>
              </template>
              <span>Hapus Akun</span>
            </v-tooltip>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>

    <v-card>
      <v-card-title
        >Daftar Juri Karya Tulis
        <v-spacer></v-spacer>
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
          :headers="headers2"
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
          <template v-slot:[`item.action`]="{ item }">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  :to="{ name: 'JuryPaperCreate', params: { id: item.id } }"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>
                    mdi-account-multiple-plus
                  </v-icon>
                </v-btn>
              </template>
              <span>Pilih Mahasiswa</span>
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
      searchdaftarjury: "",
      searchkaryatulis: "",
      searchfgd: "",
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
        await this.deleteCreateJury({ id: id });
        await this.onFetchData();
      } catch (error) {
        alert(error);
      }
    }
    // onDeleteService(id) {}
  }
};
</script>
