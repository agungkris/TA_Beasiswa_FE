<template>
  <div>
    <v-card>
      <v-card-title
        >{{ title }}
        <v-btn icon :to="{ name: 'TermConditionCreate' }">
          <v-icon>
            mdi mdi-database-plus
          </v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-data-table :headers="headers" :items="kategorilingkupList">
          <!-- <template v-slot:item.total="{ item }">
            {{ formatRupiah(item.total) }}
          </template> -->
          <template v-slot:[`item.action`]="{ item }">
            <!-- {{ item }} -->
            <v-btn icon @click="onEditService(item.service_no)">
              <v-icon>
                mdi mdi-database-edit
              </v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>
                mdi mdi-database-remove
              </v-icon>
            </v-btn>
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
      title: "Terms & Conditions",
      headers: [
        {
          text: "ID",
          value: "id"
        },
        {
          text: "Name",
          value: "name"
        },
        {
          text: "Description",
          value: "description"
        },
        {
          text: "Action",
          value: "action"
        }
      ]
    };
  },
  computed: {
    ...mapState("kategorilingkup", ["kategorilingkupList"])
  },
  async mounted() {
    await this.getKategoriLingkupList();
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Setting", route: "alert" },
      { title: this.title }
    ]);
  },
  methods: {
    ...mapActions("kategorilingkup", ["getKategoriLingkupList"]),
    onEditKategoriLingkup(id) {
      this.$router.push({
        name: "kategorilingkupDetail",
        params: { id: id }
      });
    }
    // onDeleteService(id) {}
  }
};
</script>
