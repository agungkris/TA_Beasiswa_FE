<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <v-card>
          <v-card-title>
            Edit Periode
          </v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="periodData.name"
                label="Nama Periode"
                required
                :rules="namaperiode"
              ></v-text-field>

              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-menu
                    v-model="startDate"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="periodData.start_date"
                        label="Pembukaan Beasiswa"
                        prepend-icon="mdi-calendar-today"
                        readonly
                        v-bind="attrs"
                        required
                        :rules="startdate"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="periodData.start_date"
                      @input="startDate = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="12" sm="6" md="4">
                  <v-menu
                    v-model="endFileDate"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="periodData.due_date_file"
                        label="Batas Pengumpulan Dokumen Beasiswa"
                        prepend-icon="mdi-calendar-today"
                        readonly
                        v-bind="attrs"
                        required
                        :rules="endfile"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="periodData.due_date_file"
                      @input="endFileDate = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-menu
                    v-model="endDate"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="periodData.end_date"
                        label="Penutupan Beasiswa"
                        prepend-icon="mdi-calendar-today"
                        readonly
                        v-bind="attrs"
                        required
                        :rules="enddate"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="periodData.end_date"
                      @input="endDate = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
                <v-spacer></v-spacer>
              </v-row>

              <v-btn
                :loading="loadingButton"
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
              >
                Selesai
              </v-btn>

              <v-btn color="error" class="mr-4" @click="reset">
                Reset
              </v-btn>
            </v-form>
            <v-dialog v-model="isLoading" persistent width="300">
              <v-card dark>
                <v-card-text>
                  Mohon Menunggu...
                  <v-progress-linear
                    indeterminate
                    color="white"
                    class="mb-0 mt-1"
                  ></v-progress-linear>
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      loadingButton: false,
      isLoading: false,
      date: new Date().toISOString().substr(0, 10),
      id: this.$route.params.id,
      startDate: false,
      endDate: false,
      endFileDate: false,
      menu: false,
      valid: false,

      namaperiode: [v => !!v || "Nama Periode harus diisi"],
      startdate: [v => !!v || "Tanggal pembukaan beasiswa harus diisi"],
      endfile: [
        v => !!v || "Tanggal batas pengumpulan dokumen beasiswa harus diisi"
      ],
      enddate: [v => !!v || "Tanggal penutupan beasiswa harus diisi"]
    };
  },
  computed: {
    ...mapState("period", ["periodData"])
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vuetify", route: "alerts" },
      { title: "Form Inputs & Control", route: "autocompletes" },
      { title: "Fileinptus" }
    ]);
    this.onFetchData();
  },

  methods: {
    ...mapActions("period", ["updatePeriod", "getPeriod"]),
    // code 1
    async onFetchData() {
      this.isLoading = true;
      await this.getPeriod({ id: this.id });
      this.isLoading = false;
    },
    async validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.loadingButton = true;
        await this.updatePeriod({ id: this.id, payload: this.periodData });
        this.periodData = {};
        this.loadingButton = false;
        this.$router.push({ name: "PeriodsList" });
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>
