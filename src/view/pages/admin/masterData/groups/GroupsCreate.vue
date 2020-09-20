<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <v-card>
          <v-card-title>Buat Grup</v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-overflow-btn
                class="my-2"
                label="Periode Grup Beasiswa"
                target="#dropdown-example"
                v-model="groupData.period_id"
                :items="periodList"
                item-value="id"
                item-text="name"
                required
                :rules="periode"
              ></v-overflow-btn>
              <v-text-field
                v-model="groupData.group_name"
                :rules="nameRules"
                label="Nama Kelompok"
                required
              ></v-text-field>

              <v-text-field
                v-model="groupData.topic"
                :rules="topicRules"
                label="Topik"
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
      valid: true,
      periode: [v => !!v || "Periode grup beasiswa harus diisi"],
      name: "",
      nameRules: [v => !!v || "Nama Kelompok harus diisi"],
      topic: "",
      topicRules: [v => !!v || "Topik harus diisi"]
    };
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
