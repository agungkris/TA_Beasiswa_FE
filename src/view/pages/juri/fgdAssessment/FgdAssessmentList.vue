<template>
  <div>
    <v-card class="mb-6">
      <v-card-title
        >Kelompok FGD

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
            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  :to="{
                    name: 'FgdAssessmentDetail',
                    params: { id: item.id, period: item.period_id }
                  }"
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
      await this.getGroupList({ period_id: null });
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
