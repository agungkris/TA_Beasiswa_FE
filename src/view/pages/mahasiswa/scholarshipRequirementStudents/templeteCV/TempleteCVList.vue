<template>
  <div>
    <v-card>
      <v-card-title>
        <span class="title font-weight-light" style="padding-right:5px;"
          >Format</span
        >
        <span class="title font-weight-light" style="padding-right:5px;"
          >CV</span
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
          :items="cvtempleteList"
          disable-sort=""
          hide-default-header=""
        >
          <template v-slot:[`item.cv_templete`]="{ item }">
            <a target="_blank" :href="item.cv_templete"
              >UNDUH FILE KETENTUAN CV BEASISWA PEMBANGUNAN JAYA</a
            >
          </template>
        </v-data-table>
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
</template>
<script>
import { mapState, mapActions } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  data() {
    return {
      isLoading: false,
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
      this.isLoading = true;
      await this.getCvTempleteList();
      this.isLoading = false;
    }
    // onDeleteService(id) {}
  }
};
</script>
