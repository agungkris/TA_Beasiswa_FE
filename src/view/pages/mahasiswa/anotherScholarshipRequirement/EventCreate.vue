<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <v-card>
          <v-card-title>Buat Laporan Keikutsertaan Kepanitiaan</v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-overflow-btn
                v-model="eventData.semester_id"
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
                v-model="eventData.activity"
                :rules="activityRules"
                label="Kegiatan"
                required
                prepend-icon="mdi-format-title"
                outlined
              ></v-text-field>
              <v-text-field
                v-model="eventData.realization"
                :rules="realizationRules"
                label="Waktu Pelaksanaan"
                required
                prepend-icon="mdi-format-title"
                outlined
              ></v-text-field>
              <v-file-input
                v-model="eventData.document"
                :rules="dokumenRules"
                placeholder="Dokumen"
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
                :loading="isLoading"
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
      isLoading: false,
      valid: false,
      semester: [v => !!v || "Semester wajib diisi"],
      activity: "",
      activityRules: [v => !!v || "Kegiatan wajib diisi"],
      realization: "",
      realizationRules: [v => !!v || "Waktu pelaksanaan wajib diisi"],
      dokumen: "",
      dokumenRules: [
        v => !!v || "Dokumen wajib diisi",
        value =>
          !value ||
          value.size < 500000 ||
          "Dokumen harus berukuran maksimal 500 KB!"
      ]
    };
  },
  computed: {
    ...mapState("event", ["eventData"]),
    ...mapState("semester", ["semesterList"])
  },

  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vuetify", route: "alerts" },
      { title: "Form Inputs & Control", route: "autocompletes" },
      { title: "Fileinptus" }
    ]);
    this.getSemesterList();
  },

  methods: {
    ...mapActions("event", ["createEvent"]),
    ...mapActions("semester", ["getSemesterList"]),
    async validate() {
      this.isLoading = true;
      if (this.$refs.form.validate()) {
        this.snackbar = true;

        let formData = new FormData();
        formData.append("semester_id", this.eventData.semester_id);
        formData.append("activity", this.eventData.activity);
        formData.append("realization", this.eventData.realization);
        formData.append("document", this.eventData.document);

        await this.createEvent({ payload: formData });
        this.isLoading = false;
        this.$router.push({ name: "AnotherScholarshipRequirementList" });
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>
