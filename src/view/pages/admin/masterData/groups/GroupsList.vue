<template>
  <div>
    <v-card class="mb-6">
      <v-card-title
        >Kelompok FGD
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon :to="{ name: 'GroupsCreate' }" v-bind="attrs" v-on="on">
              <v-icon>
                mdi-account-multiple-plus
              </v-icon>
            </v-btn>
          </template>
          <span>Buat Kelompok</span>
        </v-tooltip>
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" @click="onRandom()" v-on="on">
              <v-icon>
                mdi-reload
              </v-icon>
            </v-btn>
          </template>
          <span>Acak Anggota Kelompok</span>
        </v-tooltip>
        <v-spacer></v-spacer>
        <v-overflow-btn
          v-model="selectedPeriod"
          class="mt-6"
          label="Periode Pengajuan Beasiswa"
          target="#dropdown-example"
          :items="periodList"
          item-value="id"
          item-text="name"
          @change="onChangeFilter"
        ></v-overflow-btn>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="groupList"
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
                  :to="{ name: 'GroupsDetail', params: { id: item.id } }"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>
                    mdi-information-outline
                  </v-icon>
                </v-btn>
              </template>
              <span>Detail</span>
            </v-tooltip>

            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  :to="{ name: 'GroupsEdit', params: { id: item.id } }"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>
                    mdi-account-edit
                  </v-icon>
                </v-btn>
              </template>
              <span>Edit Kelompok</span>
            </v-tooltip>

            <v-dialog v-model="dialog" persistent max-width="290">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon color="red darken-4">
                    mdi-account-remove
                  </v-icon>
                </v-btn>
              </template>

              <v-card>
                <v-card-title class="headline">Hapus Kelompok</v-card-title>
                <v-card-text
                  >Apakah Anda yakin ingin menghapus kelompok ini?</v-card-text
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
                    class="mr-2"
                    @click="onDelete(item.id)"
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
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      selectedPeriod: "",
      dialog: false,
      headers: [
        {
          text: "Periode Beasiswa",
          value: "period.name"
        },
        {
          text: "Nama Kelompok",
          value: "group_name"
        },
        {
          text: "Topik",
          value: "topic"
        },
        {
          text: "Action",
          value: "action"
        }
      ]
    };
  },
  computed: {
    ...mapState("group", ["groupList"]),
    ...mapState("period", ["periodList"])
  },
  async mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vuetify", route: "alerts" },
      { title: "Tables", route: "simple-tables" },
      { title: "Data Tables" }
    ]);
    this.getPeriodList();
    await this.onFetchData();
  },
  methods: {
    ...mapActions("group", ["getGroupList", "deleteGroup", "randomMember"]),
    ...mapActions("period", ["getPeriodList"]),
    async onFetchData() {
      await this.getGroupList();
      await this.getPeriodList();
    },
    async onChangeFilter() {
      await this.getGroupList(this.selectedPeriod);
    },
    onEditGroupList(id) {
      this.$router.push({
        name: "grouplistDetail",
        params: { id: id }
      });
    },
    async onDelete(id) {
      try {
        this.dialog = true;
        await this.deleteGroup({ id: id });
        await this.onFetchData();
        this.dialog = false;
      } catch (error) {
        alert(error);
      }
    },
    async onRandom() {
      try {
        await this.randomMember({ period: this.selectedPeriod });
        await this.onFetchData();
      } catch (error) {
        alert(error);
      }
    }
    // onDeleteService(id) {}
  }
};
</script>
