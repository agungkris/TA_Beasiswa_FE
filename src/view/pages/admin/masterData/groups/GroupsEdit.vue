<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <v-card>
          <v-card-title>Edit Grup</v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-overflow-btn
                v-model="groupData.period_id"
                class="my-2"
                label="Periode Grup Beasiswa"
                target="#dropdown-example"
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
                :loading="loadingButton"
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
              >
                Selesai
              </v-btn>

              <v-btn color="error" class="mr-4" @click="reset">
                Reset
              </v-btn>
            </v-form>
          </v-card-text>
          <v-dialog v-model="isLoading" persistent width="300">
            <v-card dark>
              <v-card-text>
                Mohon Menunggu...
                <v-progress-linear
                  indeterminate
                  color="white"
                  class="mb-0 mt-1"
                ></v-progress-linear>
              </v-card-text>
            </v-card>
          </v-dialog>
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
      loadingButton: false,
      isLoading: false,
      id: this.$route.params.id,
      valid: true,
      periode: [v => !!v || "Periode grup beasiswa harus diisi"],
      name: "",
      nameRules: [v => !!v || "Nama kelompok harus diisi"],
      topic: "",
      topicRules: [v => !!v || "Topik harus diisi"]
    };
  },

  computed: {
    ...mapState("group", ["groupData"]),
    ...mapState("period", ["periodList"])
  },
  async mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Vuetify", route: "alerts" },
      { title: "Form Inputs & Control", route: "autocompletes" },
      { title: "Fileinptus" }
    ]);
    await this.onFetchData();
  },

  methods: {
    ...mapActions("group", ["updateGroup", "getGroup"]),
    ...mapActions("period", ["getPeriodList"]),
    // code 1
    async onFetchData() {
      this.isLoading = true;
      await this.getGroup({ id: this.id });
      this.isLoading = false;
    },
    async validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.loadingButton = true;
        await this.updateGroup({ id: this.id, payload: this.groupData });
        this.groupData = {};
        this.loadingButton = false;
        this.$router.push({ name: "GroupsList" });
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>
