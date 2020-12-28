<template>
  <div>
    <v-card>
      <v-card-title>
        <span class="title font-weight-light" style="padding-right:5px;">Format</span>
        <span class="title font-weight-light" style="padding-right:5px;">CV</span>
        <span class="title font-weight-light" style="padding-right:5px;">Beasiswa</span>
        <span class="title font-weight-light" style="padding-right:5px;">Pembangunan</span>
        <span class="title font-weight-light">Jaya</span>
      </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          disable-pagination
          hide-default-footer=""
          :items="cvtempleteList"
          disable-sort=""
          hide-default-header=""
        >
          <template v-slot:[`item.cv_templete`]="{ item }">
            <a :href="item.cv_templete"
              >UNDUH FILE KETENTUAN CV BEASISWA PEMBANGUNAN JAYA</a
            >
          </template>
          <!-- <template v-slot:[`item.total`]="{ item }">
            {{ formatRupiah(item.total) }}
          </template>
          <template v-slot:[`item.action`]="{ item }">
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
