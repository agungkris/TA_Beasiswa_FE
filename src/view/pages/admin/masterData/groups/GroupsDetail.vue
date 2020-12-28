<template>
  <div>
    <v-card class="mb-6">
      <v-card-title>Anggota {{ this.groupData.group_name }}</v-card-title>
      <v-card-text>
        <v-data-table :headers="headers" :items="groupData.member">
          <!-- <template v-slot:[`item.action`]="{ item }"> -->
            <!-- {{ item }} -->
          <!-- </template> -->
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
      id: this.$route.params.id,
      headers: [
        {
          text: "Nama Mahasiswa",
          value: "name"
        },
        {
          text: "Program Studi",
          value: "profile.prodi"
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
      await this.getGroup({ id: this.id });
    }
    // onEditUploadScholarship(id) {
    //   this.$router.push({
    //     name: "uploadscholarshipDetail",
    //     params: { id: id }
    //   });
    // }
    // onDeleteService(id) {}
  }
};
</script>
