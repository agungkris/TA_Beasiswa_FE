<template>
  <div>
    <v-card>
      <v-card-title>{{ title }} </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          disable-pagination
          hide-default-footer=""
          :items="scholarshipformList"
          disable-sort=""
          hide-default-header=""
        >
          <template v-slot:item.scholarship_form="{ item }">
            <a :href="item.scholarship_form"
              >UNDUH FILE FORMULIR BEASISWA PEMBANGUNAN JAYA</a
            >
          </template>
          <template v-slot:item.total="{ item }">
            {{ formatRupiah(item.total) }}
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
      title: "Formulir Beasiswa Pembangunan Jaya",
      headers: [
        {
          value: "scholarship_form"
        }
      ]
    };
  },
  computed: {
    ...mapState("scholarshipform", ["scholarshipformList"])
  },
  async mounted() {
    await this.getScholarshipFormList();
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Setting", route: "alert" },
      { title: this.title }
    ]);
  },
  methods: {
    ...mapActions("scholarshipform", ["getScholarshipFormList"]),
    async onFetchData() {
      await this.getScholarshipFormList();
    }
    // onDeleteService(id) {}
  }
};
</script>
