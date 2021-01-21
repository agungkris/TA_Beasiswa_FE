<template>
  <div>
    <v-card>
      <v-card-title>
        <span class="title font-weight-light" style="padding-right:5px;"
          >Syarat</span
        >
        <span class="title font-weight-light" style="padding-right:5px;"
          >Ketentuan</span
        >
        <span class="title font-weight-light" style="padding-right:5px;"
          >Beasiswa</span
        >
        <span class="title font-weight-light" style="padding-right:5px;"
          >Pembangunan</span
        >
        <span class="title font-weight-light">Jaya</span>
      </v-card-title>
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
          <template v-slot:[`item.scholarship_term_condition`]="{ item }">
            <a :href="item.scholarship_term_condition">
              UNDUH FILE SYARAT DAN KETENTUAN BEASISWA PEMBANGUNAN JAYA
            </a>
          </template>
          <!-- <template v-slot:item.action="{ item }">
            {{ item }}
          </template> -->
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
