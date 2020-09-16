<template>
  <div>
    <v-card>
      <v-card-title>{{ title }} </v-card-title>
      <v-card-text>
        <p>
          KETERANGAN: Seluruh dokumen yang dikirimkan WAJIB menggunakan format
          PDF
        </p>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-overflow-btn
            class="my-2"
            label="Periode Pengajuan Beasiswa"
            target="#dropdown-example"
            v-model="uploadscholarshipData.period_id"
            :items="periodList"
            item-value="id"
            item-text="name"
            required
            :rules="periode"
          ></v-overflow-btn>

          <v-file-input
            v-model="uploadscholarshipData.submit_form"
            :rules="submitform"
            label="Formulir Beasiswa"
            placeholder="Unggah Dokumen"
            prepend-icon="mdi-paperclip"
            outlined
            :show-size="1000"
            required
          >
            <template v-slot:selection="{ text }">
              <v-chip dark label small>
                {{ text }}
              </v-chip>
            </template>
          </v-file-input>

          <v-file-input
            v-model="uploadscholarshipData.brs"
            :rules="brs"
            label="BRS"
            placeholder="Unggah Dokumen"
            prepend-icon="mdi-paperclip"
            outlined
            :show-size="1000"
            required
          >
            <template v-slot:selection="{ text }">
              <v-chip dark label small>
                {{ text }}
              </v-chip>
            </template>
          </v-file-input>

          <v-file-input
            v-model="uploadscholarshipData.raport"
            :rules="raport"
            label="Transkrip Nilai"
            placeholder="Unggah Dokumen"
            prepend-icon="mdi-paperclip"
            outlined
            :show-size="1000"
            required
          >
            <template v-slot:selection="{ text }">
              <v-chip dark label small>
                {{ text }}
              </v-chip>
            </template>
          </v-file-input>

          <v-file-input
            v-model="uploadscholarshipData.cv"
            :rules="cv"
            label="CV"
            placeholder="Unggah Dokumen"
            prepend-icon="mdi-paperclip"
            outlined
            :show-size="1000"
            required
          >
            <template v-slot:selection="{ text }">
              <v-chip dark label small>
                {{ text }}
              </v-chip>
            </template>
          </v-file-input>

          <v-file-input
            v-model="uploadscholarshipData.papers"
            :rules="papers"
            placeholder="Unggah Dokumen"
            prepend-icon="mdi-paperclip"
            label="Karya Tulis"
            outlined=""
            :show-size="1000"
            required
          >
            <template v-slot:selection="{ text }">
              <v-chip dark label small>
                {{ text }}
              </v-chip>
            </template>
          </v-file-input>

          <v-file-input
            v-model="uploadscholarshipData.other_requirements"
            :rules="other"
            placeholder="Unggah Dokumen"
            prepend-icon="mdi-paperclip"
            label="Bukti Prestasi / Surat Permohonan Rektor *Optional"
            outlined=""
            :show-size="1000"
          >
            <template v-slot:selection="{ text }">
              <v-chip dark label small>
                {{ text }}
              </v-chip>
            </template>
          </v-file-input>

          <v-btn
            dark
            v-bind="attrs"
            v-on="on"
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Kirim
          </v-btn>

          <v-btn color="error" @click="reset">
            Reset
          </v-btn>

          <template>
            <div class="text-center">
              <v-dialog v-model="dialog" width="390">
                <v-card>
                  <v-card-text> </v-card-text>
                  <v-list-item-title class="text-center"
                    >Pengajuan Beasiswa Pembangunan Jaya berhasil
                    dikirim.</v-list-item-title
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="success" text @click="dialog = false">
                      Selesai
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </template>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  data() {
    return {
      title: "Pengumpulan Dokumen Beasiswa Pembangunan Jaya",
      valid: true,
      dialog: false,
      periode: [v => !!v || "Periode Pengajuan Beasiswa harus diisi"],
      submitform: [
        v => !!v || "Formulir Beasiswa harus diisi",
        value =>
          !value ||
          value.size < 500000 ||
          "Formulir Beasiswa harus berukuran maksimal 500 KB!"
      ],
      brs: [
        v => !!v || "BRS harus diisi",
        value =>
          !value ||
          value.size < 500000 ||
          "BRS harus berukuran maksimal 500 KB!"
      ],
      raport: [
        v => !!v || "Transkrip Nilai harus diisi",
        value =>
          !value ||
          value.size < 500000 ||
          "Trankrip Nilai harus berukuran maksimal 500 KB!"
      ],
      cv: [
        v => !!v || "CV harus diisi",
        value =>
          !value || value.size < 500000 || "CV harus berukuran maksimal 500 KB!"
      ],
      papers: [
        v => !!v || "Karya Tulis harus diisi",
        value =>
          !value ||
          value.size < 500000 ||
          "Karya Tulis harus berukuran maksimal 500 KB!"
      ],
      other: [
        value =>
          !value ||
          value.size < 500000 ||
          "Dokumen harus berukuran maksimal 500 KB!"
      ]
    };
  },
  computed: {
    ...mapState("uploadscholarship", ["uploadscholarshipData"]),
    ...mapState("period", ["periodList"]),
    ...mapState(["auth"])
  },
  async mounted() {
    // await this.getuploadscholarshipList();
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Setting", route: "alert" },
      { title: this.title }
    ]);
    this.getPeriodList();
    console.log(this.user);
  },
  methods: {
    ...mapActions("uploadscholarship", ["createUploadScholarship"]),
    ...mapActions("period", ["getPeriodList"]),
    async validate() {
      if (this.$refs.form.validate()) {
        this.dialog = true;
        this.snackbar = true;
        let formData = new FormData();
        formData.append("period_id", this.uploadscholarshipData.period_id);
        formData.append("submit_form", this.uploadscholarshipData.submit_form);
        formData.append("brs", this.uploadscholarshipData.brs);
        formData.append("raport", this.uploadscholarshipData.raport);
        formData.append("cv", this.uploadscholarshipData.cv);
        formData.append("papers", this.uploadscholarshipData.papers);
        formData.append(
          "other_requirements",
          this.uploadscholarshipData.other_requirements
        );
        await this.createUploadScholarship({ payload: formData });
        // this.uploadscholarshipData = {};
        this.$router.push({ name: "UploadScholarshipRequirementList" });
      }
    },
    reset() {
      this.$refs.form.reset();
    }
    // onDeleteService(id) {}
  }
};
</script>
