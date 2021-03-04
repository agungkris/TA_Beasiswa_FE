<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <v-card>
          <v-card-title
            >Buat Laporan Publikasi Ilmiah/Karya Tulis/PKM</v-card-title
          >
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-overflow-btn
                v-model="paperData.semester_id"
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
                v-model="paperData.title"
                :rules="titleRules"
                label="Judul Karya Tulis/lmiah"
                required
                prepend-icon="mdi-format-title"
                outlined
              ></v-text-field>

              <v-file-input
                v-model="paperData.document"
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
      title: "",
      titleRules: [v => !!v || "Judul Karya Tulis/Ilmiah wajib diisi"],
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
    ...mapState("paper", ["paperData"]),
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
    ...mapActions("paper", ["createPaper"]),
    ...mapActions("semester", ["getSemesterList"]),
    async validate() {
      this.isLoading = true;
      if (this.$refs.form.validate()) {
        this.snackbar = true;

        let formData = new FormData();
        formData.append("semester_id", this.paperData.semester_id);
        formData.append("title", this.paperData.title);
        formData.append("document", this.paperData.document);

        await this.createPaper({ payload: formData });
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
