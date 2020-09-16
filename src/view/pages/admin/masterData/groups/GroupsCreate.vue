<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <KTCodePreview v-bind:title="'Create Group'">
          <template v-slot:preview>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-overflow-btn
                class="my-2"
                label="Periode Group Beasiswa"
                target="#dropdown-example"
                v-model="groupData.period_id"
                :items="periodList"
                item-value="id"
                item-text="name"
                required
                :rules="period"
              ></v-overflow-btn>
              <v-text-field
                v-model="groupData.group_name"
                :rules="nameRules"
                label="Group Name"
                required
              ></v-text-field>

              <v-text-field
                v-model="groupData.topic"
                :rules="topicRules"
                label="Topic"
                required
              ></v-text-field>

              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
              >
                Confirm
              </v-btn>

              <v-btn color="error" class="mr-4" @click="reset">
                Reset Form
              </v-btn>
            </v-form>
          </template>
        </KTCodePreview>
      </div>
    </div>
  </div>
</template>

<script>
import KTCodePreview from "@/view/content/CodePreview.vue";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      valid: true,
      periode: [v => !!v || "Periode Pengajuan Beasiswa harus diisi"],
      name: "",
      nameRules: [v => !!v || "Name is required"],
      topic: "",
      topicRules: [v => !!v || "Topic is required"]
    };
  },
  components: {
    KTCodePreview
  },

  computed: {
    ...mapState("group", ["groupData"]),
    ...mapState("period", ["periodList"])
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vuetify", route: "alerts" },
      { title: "Form Inputs & Control", route: "autocompletes" },
      { title: "Fileinptus" }
    ]);
    this.getPeriodList();
  },

  methods: {
    ...mapActions("group", ["createGroup"]),
    ...mapActions("period", ["getPeriodList"]),
    // code 1
    async validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        await this.createGroup({ payload: this.groupData });
        this.groupData = {};
        this.$router.push({ name: "GroupsList" });
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>
