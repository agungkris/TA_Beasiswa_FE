<template>
  <div>
    <v-card class="mb-6">
      <v-card-title>Anggota {{ groupData.group_name }}</v-card-title>
      <v-card-text>
        <v-data-table :headers="headers" :items="groupData.member">
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
      id: this.$route.params.id,
      headers: [
        {
          text: "Nama Mahasiswa",
          value: "name"
        },
        {
          text: "Program Studi",
          value: "profile.prodi.name"
        },
        {
          text: "Angkatan",
          value: "profile.generation"
        }
      ]
    };
  },
  computed: {
    ...mapState("group", ["groupData"])
  },
  async mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Setting", route: "alert" },
      { title: this.title }
    ]);
    await this.onFetchData();
  },
  methods: {
    ...mapActions("group", ["getGroup"]),

    async onFetchData() {
      this.isLoading = true;
      await this.getGroup({ id: this.id });
      this.isLoading = false;
    }
  }
};
</script>
