<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <v-card>
          <v-card-title
            >Buat Laporan Kegiatan Organisasi Kemahasiswaan</v-card-title
          >
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-overflow-btn
                v-model="organizationData.semester_id"
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
                v-model="organizationData.name"
                :rules="nameRules"
                label="Nama Organisasi"
                required
                prepend-icon="mdi-format-title"
                outlined
              ></v-text-field>
              <v-text-field
                v-model="organizationData.period"
                :rules="periodRules"
                label="Periode Aktif"
                required
                prepend-icon="mdi-format-title"
                outlined
              ></v-text-field>
              <v-text-field
                v-model="organizationData.position"
                :rules="positionRules"
                label="Jabatan"
                required
                prepend-icon="mdi-format-title"
                outlined
              ></v-text-field>
              <v-file-input
                v-model="organizationData.document"
                :rules="dokumenRules"
                placeholder="Dokumen"
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
      name: "",
      nameRules: [v => !!v || "Nama Organisasi wajib diisi"],
      period: "",
      periodRules: [v => !!v || "Periode Aktif wajib diisi"],
      position: "",
      positionRules: [v => !!v || "Jabatan wajib diisi"],
      dokumen: "",
      dokumenRules: [
        v => !!v || "Dokumen Sertifikat/Piagam wajib diisi",
        value =>
          !value ||
          value.size < 500000 ||
          "Dokumen harus berukuran maksimal 500 KB!"
      ]
    };
  },
  computed: {
    ...mapState("organization", ["organizationData"]),
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
    ...mapActions("organization", ["createOrganization"]),
    ...mapActions("semester", ["getSemesterList"]),
    async validate() {
      this.isLoading = true;
      if (this.$refs.form.validate()) {
        this.snackbar = true;

        let formData = new FormData();
        formData.append("semester_id", this.organizationData.semester_id);
        formData.append("name", this.organizationData.name);
        formData.append("period", this.organizationData.period);
        formData.append("position", this.organizationData.position);
        formData.append("document", this.organizationData.document);

        await this.createOrganization({ payload: formData });
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
