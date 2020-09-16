<template>
  <div>
    <v-text-field label="Penilaian FGD" outlined disabled></v-text-field>

    <v-card-text class="text-center"
      ><v-btn color="success" class="mr-4" @click="validate(1)">
        Mendapat Beasiswa
      </v-btn>

      <v-btn color="error" class="mr-4" @click="validate(0)">
        Gagal
      </v-btn>
    </v-card-text>
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return { id: this.$route.params.id };
  },
  computed: {
    ...mapState("uploadscholarship", ["uploadscholarshipData"])
    // ...mapState("fgdassessment", ["fgdassessmentData"])
  },
  components: {},
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vuetify", route: "alerts" },
      { title: "Form Inputs & Control", route: "autocompletes" },
      { title: "Fileinptus" }
    ]);
    this.onFetchData();
  },

  methods: {
    ...mapActions("uploadscholarship", ["getUploadScholarship", "FinalStage"]),
    // ...mapActions("fgdassessment", ["getFgdAssessment"]),
    // code 1
    async onFetchData() {
      await this.getUploadScholarship({ id: this.id });
      //   await this.getFgdAssessment({ id: this.id });
    },
    async validate(data) {
      await this.FinalStage({ id: this.id, final_stage: data });
      this.uploadscholarshipData = {};
      this.$router.push({ name: "StudentsList" });
    }
  }
};
</script>
