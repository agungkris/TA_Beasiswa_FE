<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <v-card>
          <v-card-title>Edit Laporan Prestasi Non Akademik</v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-overflow-btn
                v-model="competitionData.semester_id"
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
                v-model="competitionData.activity"
                :rules="activityRules"
                label="Kegiatan"
                required
                prepend-icon="mdi-format-title"
                outlined
              ></v-text-field>
              <v-overflow-btn
                v-model="competitionData.level_id"
                class="my-2"
                label="Tingkat"
                target="#dropdown-example2"
                :items="levelList"
                item-value="id"
                item-text="level"
                required
                :rules="level"
              ></v-overflow-btn>
              <v-text-field
                v-model="competitionData.realization"
                :rules="realizationRules"
                label="Waktu Pelaksanaan"
                required
                prepend-icon="mdi-format-title"
                outlined
              ></v-text-field>
              <v-text-field
                v-model="competitionData.result"
                :rules="resultRules"
                label="Hasil"
                required
                prepend-icon="mdi-format-title"
                outlined
              ></v-text-field>

              <v-file-input
                v-model="competitionData.document"
                :rules="dokumenRules"
                placeholder="Dokumen Sertifikat/Piagam"
                prepend-icon="mdi-file-pdf"
                counter
                outlined
                :show-size="1000"
                required
              >
                <template v-slot:selection="{ text }">
                  <v-chip label small class=" text-center text-wrap">{{
                    text
                  }}</v-chip>
                </template>
              </v-file-input>

              <v-btn
                :loading="buttonLoading"
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
                >Selesai</v-btn
              >
              <v-btn color="error" class="mr-4" @click="reset">Reset</v-btn>
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
      isLoading: false,
      buttonLoading: false,
      id: this.$route.params.id,
      valid: false,
      semester: [v => !!v || "Semester wajib diisi"],
      activity: "",
      activityRules: [v => !!v || "Kegiatan wajib diisi"],
      level: "",
      levelRules: [v => !!v || "Tingkat wajib diisi"],
      realization: "",
      realizationRules: [v => !!v || "Waktu Pelaksanaan wajib diisi"],
      result: "",
      resultRules: [v => !!v || "Hasil wajib diisi"],
      dokumen: "",
      dokumenRules: [
        v => !!v || "Dokumen Sertifikat/Piagam wajib diisi",
        value =>
          !value ||
          value.size < 500000 ||
          "Dokumen Sertifikat/Piagam harus berukuran maksimal 500 KB!"
      ]
    };
  },
  computed: {
    ...mapState("competition", ["competitionData"]),
    ...mapState("semester", ["semesterList"]),
    ...mapState("level", ["levelList"])
  },

  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vuetify", route: "alerts" },
      { title: "Form Inputs & Control", route: "autocompletes" },
      { title: "Fileinptus" }
    ]);
    this.getSemesterList();
    this.getLevelList();
    this.onFetchData();
  },

  methods: {
    ...mapActions("competition", ["getCompetition", "updateCompetition"]),
    ...mapActions("semester", ["getSemesterList"]),
    ...mapActions("level", ["getLevelList"]),
    async onFetchData() {
      this.isLoading = true;
      await this.getCompetition({ id: this.id });
      this.isLoading = false;
    },
    async validate() {
      this.buttonLoading = true;
      if (this.$refs.form.validate()) {
        this.snackbar = true;

        let formData = new FormData();
        formData.append("semester_id", this.competitionData.semester_id);
        formData.append("activity", this.competitionData.activity);
        formData.append("level_id", this.competitionData.level_id);
        formData.append("realization", this.competitionData.realization);
        formData.append("result", this.competitionData.result);
        if (this.competitionData.document != null) {
          formData.append("document", this.competitionData.document);
        }
        await this.updateCompetition({
          id: this.id,
          payload: formData
        });
        this.buttonLoading = false;
        this.$router.push({ name: "AnotherScholarshipRequirementList" });
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>
