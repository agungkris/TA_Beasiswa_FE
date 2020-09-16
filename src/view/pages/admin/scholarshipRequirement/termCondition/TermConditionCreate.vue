<template>
  <div>
    <v-card>
      <v-card-title>{{ title }} </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-file-input
            v-model="termconditionData.scholarship_terms_condition"
            :rules="rules"
            placeholder="Dokumen Syarat dan Ketentuan"
            prepend-icon="mdi-file-pdf"
            counter
            outlined=""
            :show-size="1000"
          >
            <template v-slot:selection="{ text }">
              <v-chip label small>
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
                    >Syarat dan Ketentuan berhasil diunggah.</v-list-item-title
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
      title: "Unggah Syarat dan Ketentuan",
      valid: true,
      dialog: false,

      rules: [
        v => !!v || "Syarat dan ketentuan harus diisi",
        value =>
          !value ||
          value.size < 100000 ||
          "Syarat dan Ketentuan harus berukuran maksimal 100 KB!"
      ]
    };
  },
  computed: {
    ...mapState("termcondition", ["termconditionData"])
  },
  async mounted() {
    // await this.getKategoriLingkupList();
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Setting", route: "alert" },
      { title: this.title }
    ]);
  },
  methods: {
    ...mapActions("termcondition", ["createTermCondition"]),
    async validate() {
      if (this.$refs.form.validate()) {
        this.dialog = true;
        this.snackbar = true;
        let formData = new FormData();
        formData.append(
          "scholarship_terms_condition",
          this.termconditionData.scholarship_terms_condition
        );
        await this.createTermCondition({ payload: formData });
        this.termconditionData = {};
        this.$router.push({ name: "TermConditionCreate" });
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>
