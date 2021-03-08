<template>
  <div>
    <v-card class="mb-6">
      <v-card-title
        >Daftar Pengumuman
        <v-tooltip v-if="auth.user.level == 'admin'" right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              :to="{ name: 'AnnouncementCreate' }"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>
                mdi-bell-plus
              </v-icon>
            </v-btn>
          </template>
          <span>Buat Pengumuman</span>
        </v-tooltip>
        <v-spacer></v-spacer>
        <v-overflow-btn
          v-model="selectedPeriod"
          class="mt-6"
          label="Periode Pengumuman Beasiswa"
          target="#dropdown-example"
          :items="periodList"
          item-value="id"
          item-text="name"
          @change="onChangeFilter"
        ></v-overflow-btn>

        <v-spacer></v-spacer>
        <v-text-field
          v-model="searchpengumuman"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-card-text>
        <!-- Ini untuk loading table item-key="name"
          class="elevation-1"
          :loading="isLoading"
          loading-text="Loading... Please wait" -->
        <v-data-table
          :headers="headers"
          :items="announcementList"
          :search="searchpengumuman"
          :footer-props="{
            'items-per-page-options': [5, 10, 25, 50]
          }"
          :items-per-page="5"
        >
          <template v-slot:[`item.action`]="{ item }">
            <v-tooltip
              v-if="
                (auth.user.level == 'student' || 'admin') &&
                  item.document !== null
              "
              left
            >
              <template v-slot:activator="{ on, attrs }">
                <a
                  v-if="item.document != null"
                  target="_blank"
                  :href="item.document"
                >
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>
                      mdi-download
                    </v-icon>
                  </v-btn>
                </a>
              </template>
              <span>Unduh Pengumuman</span>
            </v-tooltip>
            <v-tooltip v-if="auth.user.level == 'admin'" left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  :to="{ name: 'AnnouncementEdit', params: { id: item.id } }"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>
                    mdi-pencil
                  </v-icon>
                </v-btn>
              </template>
              <span>Edit Pengumuman</span>
            </v-tooltip>

            <v-tooltip v-if="auth.user.level == 'admin'" left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-if="auth.user.level == 'admin'"
                  icon
                  v-bind="attrs"
                  @click="onOpenDelete(item.id)"
                  v-on="on"
                >
                  <v-icon color="red darken-4">
                    mdi-delete
                  </v-icon>
                </v-btn>
              </template>
              <span>Hapus Pengumuman</span>
            </v-tooltip>
          </template>
        </v-data-table>
        <v-dialog
          v-if="auth.user.level == 'admin'"
          v-model="dialog"
          persistent
          max-width="290"
        >
          <v-card>
            <v-card-title class="headline">Hapus Pemberitahuan</v-card-title>
            <v-card-text
              >Apakah Anda yakin ingin menghapus pemberitahuan ini?</v-card-text
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="disable" text @click="dialog = false"
                >Kembali</v-btn
              >
              <v-btn
                :loading="isLoading"
                color="red darken-4"
                text
                icon
                class="mr-2"
                @click="onDelete(announcementId)"
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
      searchpengumuman: "",
      dialog: false,
      announcementId: "",
      isLoading: false,
      headers: [
        {
          text: "Periode",
          value: "period.name"
        },
        {
          text: "Judul",
          value: "title"
        },
        {
          text: "Deskripsi",
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
    ...mapState("announcement", ["announcementList"]),
    ...mapState("period", ["periodList"]),
    ...mapState(["auth"])
  },

  async mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Setting", route: "alert" },
      { title: this.title }
    ]);
    this.getPeriodList();
    await this.onFetchData();
  },
  methods: {
    ...mapActions("announcement", [
      "getAnnouncementList",
      "deleteAnnouncement"
    ]),
    ...mapActions("period", ["getPeriodList"]),
    async onFetchData() {
      this.isLoading = true;
      await this.getAnnouncementList({ period_id: null });
      this.isLoading = false;
      await this.getPeriodList();
    },
    async onChangeFilter() {
      await this.getAnnouncementList(this.selectedPeriod);
    },
    onEditAnnouncementList(id) {
      this.$router.push({
        name: "announcementlistDetail",
        params: { id: id }
      });
    },

    onOpenDelete(id) {
      this.dialog = true;
      this.announcementId = id;
    },

    async onDelete(id) {
      try {
        this.dialog = true;
        await this.deleteAnnouncement({ id: id });
        await this.onFetchData();
        this.dialog = false;
      } catch (error) {
        alert(error);
      }
    }
  }
};
</script>
