<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <v-card>
          <v-card-title>Edit Pengumuman</v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-overflow-btn
                class="my-2"
                label="Periode Pemberitahuan"
                target="#dropdown-example"
                v-model="announcementData.period_id"
                :items="periodList"
                item-value="id"
                item-text="name"
                required
                :rules="periode"
              ></v-overflow-btn>

              <v-text-field
                v-model="announcementData.title"
                :rules="judulRules"
                label="Judul"
                required
                prepend-icon="mdi-format-title"
                outlined=""
              ></v-text-field>

              <v-textarea
                v-model="announcementData.description"
                label="Deskripsi"
                :rules="deskripsiRules"
                outlined
                prepend-icon="mdi-clipboard-text"
                required
              ></v-textarea>

              <v-file-input
                v-model="announcementData.document"
                :rules="dokumenRules"
                placeholder="Dokumen Pengumuman"
                prepend-icon="mdi-file-pdf"
                counter
                outlined
                :show-size="1000"
                required
              >
                <template v-slot:selection="{ text }">
                  <v-chip label small>
                    {{ text }}
                  </v-chip>
                </template>
              </v-file-input>

              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
              >
                Publikasi
              </v-btn>

              <v-btn color="error" class="mr-4" @click="reset">
                Reset
              </v-btn>
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
      periode: [v => !!v || "Periode pemberitahuan harus diisi"],
      judul: "",
      judulRules: [v => !!v || "Judul wajib diisi"],
      deskripsi: "",
      deskripsiRules: [v => !!v || "Deskripsi wajib diisi"],
      dokumen: "",
      dokumenRules: [
        // v => !!v || "Dokumen wajib diisi",
        value =>
          !value ||
          value.size < 500000 ||
          "Dokumen harus berukuran maksimal 500 KB!"
      ]
    };
  },
  computed: {
    ...mapState("announcement", ["announcementData"]),
    ...mapState("period", ["periodList"])
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vuetify", route: "alerts" },
      { title: "Form Inputs & Control", route: "autocompletes" },
      { title: "Fileinptus" }
    ]);
    this.getPeriodList();
    this.onFetchData();
  },

  methods: {
    ...mapActions("announcement", ["getAnnouncement", "updateAnnouncement"]),
    ...mapActions("period", ["getPeriodList"]),
    // code 1
    async onFetchData() {
      await this.getAnnouncement({ id: this.id });
    },
    async validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;

        let formData = new FormData();
        formData.append("period_id", this.announcementData.period_id);
        formData.append("title", this.announcementData.title);
        formData.append("description", this.announcementData.description);
        if (this.announcementData.document != null) {
          formData.append("document", this.announcementData.document);
        }

        await this.updateAnnouncement({
          id: this.id,
          payload: formData
        });
        this.$router.push({ name: "AnnouncementList" });
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>
