<template>
  <div>
    <v-card>
      <v-card-title>{{ title }} </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          disable-pagination
          hide-default-footer=""
          :items="termconditionList"
          disable-sort=""
          hide-default-header=""
          h
        >
          <template v-slot:item.scholarship_term_condition="{ item }">
            <a :href="item.scholarship_term_condition">
              UNDUH FILE SYARAT DAN KETENTUAN BEASISWA PEMBANGUNAN JAYA
            </a>
          </template>
          <template v-slot:item.action="{ item }">
            <!-- {{ item }} -->
          </template>
        </v-data-table>
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
      title: "Syarat Ketentuan Beasiswa Pembangunan Jaya",
      headers: [
        {
          value: "scholarship_term_condition"
        }
      ]
    };
  },
  computed: {
    ...mapState("termcondition", ["termconditionList"])
  },
  async mounted() {
    await this.getTermConditionList();
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Setting", route: "alert" },
      { title: this.title }
    ]);
  },
  methods: {
    ...mapActions("termcondition", ["getTermConditionList"]),
    async onFetchData() {
      await this.getTermConditionList();
    }
    // onDeleteService(id) {}
  }
};
</script>
