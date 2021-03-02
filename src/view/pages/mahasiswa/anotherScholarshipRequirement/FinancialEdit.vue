<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <v-card>
          <v-card-title>Edit Laporan Keuangan Biaya Pendidikan</v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-overflow-btn
                v-model="financialData.semester_id"
                class="my-2"
                label="Semester"
                target="#dropdown-example"
                :items="semesterList"
                item-value="id"
                item-text="semester"
                required
                :rules="semester"
              ></v-overflow-btn>

              <v-text-field
                v-model="financialData.spp"
                :rules="sppRules"
                label="Biaya SPP"
                required
                prepend-icon="mdi-format-title"
                outlined
              ></v-text-field>
              <v-text-field
                v-model="financialData.sks"
                :rules="sksRules"
                label="Biaya SKS"
                required
                prepend-icon="mdi-format-title"
                outlined
              ></v-text-field>
              <v-text-field
                v-model="financialData.result"
                :rules="resultRules"
                label="Total"
                required
                prepend-icon="mdi-format-title"
                outlined
              ></v-text-field>
              <v-text-field
                v-model="financialData.amount"
                :rules="amountRules"
                label="Besaran Beasiswa"
                required
                prepend-icon="mdi-format-title"
                outlined
              ></v-text-field>

              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
                >Selesai</v-btn
              >
              <v-btn color="error" class="mr-4" @click="reset">Reset</v-btn>
            </v-form>
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
      id: this.$route.params.id,
      valid: false,
      semester: [v => !!v || "Semester wajib diisi"],
      spp: "",
      sppRules: [v => !!v || "Biaya SPP wajib diisi"],
      sks: "",
      sksRules: [v => !!v || "Biaya SKS wajib diisi"],
      result: "",
      resultRules: [v => !!v || "Total wajib diisi"],
      amount: "",
      amountRules: [v => !!v || "Besaran Beasiswa wajib diisi"]
    };
  },
  computed: {
    ...mapState("financial", ["financialData"]),
    ...mapState("semester", ["semesterList"])
  },

  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vuetify", route: "alerts" },
      { title: "Form Inputs & Control", route: "autocompletes" },
      { title: "Fileinptus" }
    ]);
    this.getSemesterList();
    this.onFetchData();
  },

  methods: {
    ...mapActions("financial", ["updateFinancial", "getFinancial"]),
    ...mapActions("semester", ["getSemesterList"]),
    async onFetchData() {
      await this.getFinancial({ id: this.id });
    },
    async validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        await this.updateFinancial({
          id: this.id,
          payload: this.financialData
        });
        this.financialData = {};
        this.$router.push({ name: "AnotherScholarshipRequirementList" });
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>
