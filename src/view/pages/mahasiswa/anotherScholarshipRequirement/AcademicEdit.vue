<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <v-card>
          <v-card-title>Edit Laporan Prestasi Akademik</v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-overflow-btn
                v-model="academicData.semester_id"
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
                v-model="academicData.ip"
                :rules="ipRules"
                label="IP"
                required
                prepend-icon="mdi-format-title"
                outlined
              ></v-text-field>
              <v-text-field
                v-model="academicData.sks"
                :rules="sksRules"
                label="SKS"
                required
                prepend-icon="mdi-format-title"
                outlined
              ></v-text-field>
              <v-text-field
                v-model="academicData.ipk"
                :rules="ipkRules"
                label="IPK"
                required
                prepend-icon="mdi-format-title"
                outlined
              ></v-text-field>

              <v-textarea
                v-model="academicData.description"
                label="Keterangan"
                :rules="keteranganRules"
                outlined
                prepend-icon="mdi-clipboard-text"
                required
              ></v-textarea>

              <v-file-input
                v-model="academicData.khs"
                :rules="dokumenRules"
                placeholder="Dokumen KHS"
                prepend-icon="mdi-file-pdf"
                counter
                outlined
                :show-size="1000"
                required
              >
                <template v-slot:selection="{ text }">
                  <v-chip label small>{{ text }}</v-chip>
                </template>
              </v-file-input>

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
          </v-card-text>
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
      id: this.$route.params.id,
      valid: false,
      semester: [v => !!v || "Semester wajib diisi"],
      ip: "",
      ipRules: [v => !!v || "IP wajib diisi"],
      sks: "",
      sksRules: [v => !!v || "SKS wajib diisi"],
      ipk: "",
      ipkRules: [v => !!v || "IPK wajib diisi"],
      keterangan: "",
      keteranganRules: [v => !!v || "Keterangan wajib diisi"],
      dokumen: "",
      dokumenRules: [
        v => !!v || "Dokumen KHS wajib diisi",
        value =>
          !value ||
          value.size < 500000 ||
          "Dokumen KHS harus berukuran maksimal 500 KB!"
      ]
    };
  },
  computed: {
    ...mapState("academic", ["academicData"]),
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
    ...mapActions("academic", ["getAcademic", "updateAcademic"]),
    ...mapActions("semester", ["getSemesterList"]),
    // code 1
    async onFetchData() {
      this.isLoading = true;
      await this.getAcademic({ id: this.id });
      this.isLoading = false;
    },
    async validate() {
      this.loadingButton = true;
      if (this.$refs.form.validate()) {
        this.snackbar = true;

        let formData = new FormData();
        formData.append("semester_id", this.academicData.semester_id);
        formData.append("ip", this.academicData.ip);
        formData.append("sks", this.academicData.sks);
        formData.append("ipk", this.academicData.ipk);
        formData.append("description", this.academicData.description);
        formData.append("khs", this.academicData.khs);
        if (this.academicData.khs != null) {
          formData.append("khs", this.academicData.khs);
        }

        await this.updateAcademic({
          id: this.id,
          payload: formData
        });
        this.loadingButton = false;
        this.$router.push({ name: "AnotherScholarshipRequirementList" });
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>
