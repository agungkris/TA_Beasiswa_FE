<template>
  <div>
    <v-card class="mb-6">
      <v-card-title>Anggota {{ this.groupData.group_name }}</v-card-title>
      <v-card-text>
        <v-data-table :headers="headers" :items="groupData.member">
          <template v-slot:[`item.action`]="{ item }">
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  :to="{
                    name: 'FgdAssessmentEdit',
                    params: {
                      student_id: item.id,
                      period: groupData.period_id
                    }
                  }"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>
                    mdi-account-edit
                  </v-icon>
                </v-btn>
              </template>
              <span>Penilaian</span>
            </v-tooltip>
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
      id: this.$route.params.id,
      headers: [
        {
          text: "Nama Mahasiswa",
          value: "name"
        },
        {
          text: "Program Studi",
          value: "profile.prodi_id"
        },
        {
          text: "Angkatan",
          value: "profile.generation_id"
        },
        {
          text: "Action",
          value: "action"
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
