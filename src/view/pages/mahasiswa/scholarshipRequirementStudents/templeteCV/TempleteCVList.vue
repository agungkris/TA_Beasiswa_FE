<template>
  <div>
    <v-card>
      <v-card-title>{{ title }} </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          disable-pagination
          hide-default-footer=""
          :items="cvtempleteList"
          disable-sort=""
          hide-default-header=""
        >
          <template v-slot:item.cv_templete="{ item }">
            <a :href="item.cv_templete"
              >UNDUH FILE KETENTUAN CV BEASISWA PEMBANGUNAN JAYA</a
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
      title: "Format CV Beasiswa Pembangunan Jaya",
      headers: [
        {
          value: "cv_templete"
        }
      ]
    };
  },
  computed: {
    ...mapState("cvtemplete", ["cvtempleteList"])
  },
  async mounted() {
    await this.getCvTempleteList();
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Setting", route: "alert" },
      { title: this.title }
    ]);
  },
  methods: {
    ...mapActions("cvtemplete", ["getCvTempleteList"]),
    async onFetchData() {
      await this.getCvTempleteList();
    }
    // onDeleteService(id) {}
  }
};
</script>
