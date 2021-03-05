<template>
  <div>
    <v-card>
      <v-card-title>{{ title }} </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-file-input
            v-model="scholarshipformData.scholarship_form"
            :rules="rules"
            placeholder="Dokumen Formulir Beasiswa"
            prepend-icon="mdi-file-pdf"
            counter
            outlined=""
            :show-size="1000"
          >
            <template v-slot:selection="{ text }">
              <v-chip dark label small class=" text-center text-wrap">
                {{ text }}
              </v-chip>
            </template>
          </v-file-input>

          <v-btn
            dark
            v-bind="attrs"
            :disabled="!valid"
            color="success"
            class="mr-4"
            v-on="on"
            @click="validate"
          >
            Unggah
          </v-btn>

          <v-btn color="error" @click="reset">
            Reset
          </v-btn>

          <template>
            <div>
              <v-dialog v-model="dialog" width="290">
                <v-card>
                  <v-card-text> </v-card-text>
                  <v-list-item-title class="text-center"
                    >Formulir Beasiswa berhasil diunggah.</v-list-item-title
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
      title: "Unggah Formulir Beasiswa",
      valid: true,
      dialog: false,

      rules: [
        v => !!v || "Formulir Beasiswa harus diisi",
        value =>
          !value ||
          value.size < 100000 ||
          "Formulir Beasiswa harus berukuran maksimal 100 KB!"
      ]
    };
  },
  computed: {
    ...mapState("scholarshipform", ["scholarshipformData"])
  },
  async mounted() {
    // await this.getKategoriLingkupList();
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Setting", route: "alert" },
      { title: this.title }
    ]);
  },
  methods: {
    ...mapActions("scholarshipform", ["createScholarshipForm"]),
    async validate() {
      if (this.$refs.form.validate()) {
        this.dialog = true;
        this.snackbar = true;
        let formData = new FormData();
        formData.append(
          "scholarship_form",
          this.scholarshipformData.scholarship_form
        );
        await this.createScholarshipForm({ payload: formData });
        this.scholarshipformData = {};
        this.$router.push({ name: "ScholarshipFormCreate" });
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>
