<template>
  <div>
    <v-card>
      <v-card-title
        >{{ title }}
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              :to="{ name: 'PeriodsCreate' }"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>
                mdi-calendar-plus
              </v-icon>
            </v-btn>
          </template>
          <span>Buat Periode</span>
        </v-tooltip>
      </v-card-title>
      <v-card-text>
        <v-data-table :headers="headers" :items="periodList">
          <template v-slot:item.total="{ item }">
            {{ formatRupiah(item.total) }}
          </template>
          <template v-slot:item.action="{ item }">
            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  :to="{ name: 'PeriodsEdit', params: { id: item.id } }"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>
                    mdi-calendar-clock
                  </v-icon>
                </v-btn>
              </template>
              <span>Edit Periode</span>
            </v-tooltip>

            <v-dialog v-model="dialog" persistent max-width="290">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon color="red darken-4">
                    mdi-calendar-remove
                  </v-icon>
                </v-btn>
              </template>

              <v-card>
                <v-card-title class="headline">Hapus Periode</v-card-title>
                <v-card-text
                  >Apakah Anda yakin ingin menghapus periode beasiswa
                  ini?</v-card-text
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
      <v-dialog v-model="isLoading" persistent width="300">
        <v-card color="primary" dark>
          <v-card-text>
            Please Wait...
            <v-progress-linear
              indeterminate
              color="white"
              class="mb-0"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-card>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
// import moment from "moment";
export default {
  data() {
    return {
      title: "Periode List",
      isLoading: false,
      dialog: false,
      headers: [
        {
          text: "Nama Periode",
          value: "name"
        },
        {
          text: "Pembukaan Beasiswa",
          value: "start_date"
        },
        {
          text: "Batas Akhir Pengumpulan File",
          value: "due_date_file"
        },
        {
          text: "Penutupan Beasiswa",
          value: "end_date"
        },
        {
          text: "Action",
          value: "action"
        }
      ]
    };
  },
  computed: {
    ...mapState("period", ["periodList"])
  },
  async mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Setting", route: "alert" },
      { title: this.title }
    ]);
    await this.onFetchData();
  },
  methods: {
    ...mapActions("period", ["getPeriodList", "deletePeriod"]),
    async onFetchData() {
      this.isLoading = true;
      await this.getPeriodList();
      // this.periodList.start_Date = moment(this.periodList.start_Date).format(
      //   "dd-MM-yyyy"
      // );
      this.isLoading = false;
    },
    onEditPeriodeList(id) {
      this.$router.push({
        name: "periodelistDetail",
        params: { id: id }
      });
    },
    async onDelete(id) {
      try {
        this.dialog = true;
        await this.deletePeriod({ id: id });
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
