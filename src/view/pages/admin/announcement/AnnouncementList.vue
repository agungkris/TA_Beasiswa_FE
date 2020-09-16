<template>
  <div>
    <v-card class="mb-6">
      <v-card-title
        >Daftar Pengumuman
        <v-tooltip right v-if="auth.user.level == 'admin'">
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
          class="mt-6"
          label="Periode Pengumuman Beasiswa"
          target="#dropdown-example"
          v-model="selectedPeriod"
          :items="periodList"
          item-value="id"
          @change="onChangeFilter"
          item-text="name"
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
        <v-data-table
          :headers="headers"
          :items="announcementList"
          :search="searchpengumuman"
          :footer-props="{
            'items-per-page-options': [5, 10, 25, 50]
          }"
          :items-per-page="5"
        >
          <!-- <template v-slot:item.total="{ item }">
            {{ formatRupiah(item.total) }}
          </template> -->
          <template v-slot:item.action="{ item }">
            <v-tooltip left v-if="auth.user.level == 'student' || 'admin'">
              <template v-slot:activator="{ on, attrs }">
                <a :href="item.document">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>
                      mdi-download
                    </v-icon>
                  </v-btn>
                </a>
              </template>
              <span>Unduh Pengumuman</span>
            </v-tooltip>
            <v-tooltip left v-if="auth.user.level == 'admin'">
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

            <v-tooltip right v-if="auth.user.level == 'admin'">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon @click="onDelete(item.id)" v-bind="attrs" v-on="on">
                  <v-icon>
                    mdi-delete
                  </v-icon>
                </v-btn>
              </template>
              <span>Hapus Pemberitahuan</span>
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
      searchpengumuman: "",
      headers: [
        {
          text: "Periode Pengumuman",
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
      await this.getAnnouncementList();
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
    async onDelete(id) {
      try {
        await this.deleteAnnouncement({ id: id });
        await this.onFetchData();
      } catch (error) {
        alert(error);
      }
    }
    // onDeleteService(id) {}
  }
};
</script>
