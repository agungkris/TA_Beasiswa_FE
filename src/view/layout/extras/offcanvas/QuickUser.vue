<template>
  <div class="topbar-item">
    <div
      id="kt_quick_user_toggle"
      class="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2"
      style="margin-right:2px;"
    >
      <span
        class="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3 name"
      >
        {{ auth.user.name }}
      </span>
      <span class="symbol symbol-35 symbol-light-success">
        <img v-if="false" alt="Pic" :src="picture" />
        <span v-if="true" class="symbol-label font-size-h6 font-weight-bold">
          UPJ
        </span>
      </span>
    </div>

    <div
      id="kt_quick_user"
      ref="kt_quick_user"
      class="offcanvas offcanvas-right p-10"
    >
      <!--begin::Header-->
      <div
        class="offcanvas-header d-flex align-items-center justify-content-between pb-5"
      >
        <!-- <h3 class="font-weight-bold m-0">
          {{ auth.user.name }}
        </h3> -->
        <a
          id="kt_quick_user_close"
          href="#"
          class="btn btn-xs btn-icon btn-light btn-hover-danger"
        >
          <i class="ki ki-close icon-xs text-muted"></i>
        </a>
      </div>
      <!--end::Header-->

      <!--begin::Content-->
      <perfect-scrollbar
        class="offcanvas-content pr-5 mr-n5 scroll"
        style="max-height: 90vh; position: relative;"
      >
        <!--begin::Header-->
        <div class="d-flex align-items-center mt-5">
          <div class="symbol symbol-100 mr-5">
            <img class="symbol-label" :src="picture" alt="" />
            <i class="symbol-badge bg-success"></i>
          </div>
          <div class="d-flex flex-column">
            <a
              class="font-weight-bold font-size-h5 text-dark-75 text-hover-success"
            >
              {{ auth.user.username }}
            </a>
            <div class="navi mt-2">
              <a href="#" class="navi-item">
                <span class="navi-link p-0 pb-2">
                  <span class="navi-icon mr-1">
                    <span class="svg-icon svg-icon-lg svg-icon-success">
                      <!--begin::Svg Icon-->
                      <inline-svg
                        src="media/svg/icons/Communication/Mail-notification.svg"
                      />
                      <!--end::Svg Icon-->
                    </span>
                  </span>
                  <span
                    class="navi-text text-muted text-hover-success name text-break"
                  >
                    {{ auth.user.email }}
                  </span>
                </span>
              </a>
            </div>
            <button class="btn btn-light-success btn-bold" @click="onLogout">
              Keluar
            </button>
          </div>
        </div>
        <!--end::Header-->
        <div class="separator separator-dashed mt-8 mb-5"></div>
        <!--begin::Nav-->
        <div class="navi navi-spacer-x-0 p-0">
          <!--begin::Item-->
          <router-link
            v-if="auth.user.level == 'student'"
            :to="{ name: 'ProfileEdit' }"
            href="#"
            class="navi-item"
            @click.native="closeOffcanvas"
          >
            <div class="navi-link">
              <div class="symbol symbol-40 bg-light mr-3">
                <div class="symbol-label">
                  <span class="svg-icon svg-icon-md svg-icon-success">
                    <!--begin::Svg Icon-->
                    <inline-svg
                      src="media/svg/icons/General/Notification2.svg"
                    />
                    <!--end::Svg Icon-->
                  </span>
                </div>
              </div>
              <div class="navi-text">
                <div class="font-weight-bold">Profil Saya</div>
                <div class="text-muted">
                  Pengaturan Akun
                  <!-- <span
                    class="label label-light-danger label-inline font-weight-bold"
                  >
                    update
                  </span> -->
                </div>
              </div>
            </div>
          </router-link>
          <!--end:Item-->

          <router-link
            :to="{ name: 'AnnouncementList' }"
            href="#"
            class="navi-item"
            @click.native="closeOffcanvas"
          >
            <div v-if="auth.user.level == 'student'" class="navi-link">
              <div class="symbol symbol-40 bg-light mr-3">
                <div class="symbol-label">
                  <span class="svg-icon svg-icon-md svg-icon-success">
                    <!--begin::Svg Icon-->
                    <inline-svg
                      src="media/svg/icons/Communication/Mail-opened.svg"
                    />
                    <!--end::Svg Icon-->
                  </span>
                </div>
              </div>
              <div class="navi-text">
                <div class="font-weight-bold">
                  Pemberitahuan
                </div>
                <div class="text-muted">Informasi Terbaru</div>
              </div>
            </div>
          </router-link>
          <!--end:Item-->
        </div>
        <!--end::Nav-->
        <div class="separator separator-dashed my-7"></div>
      </perfect-scrollbar>
      <!--end::Content-->
    </div>
  </div>
</template>

<style lang="scss" scoped>
#kt_quick_user {
  overflow: hidden;
}
</style>

<style lang="css" scoped>
@media screen and (max-width: 900px) {
  .name {
    font-size: 10px !important;
  }
}
</style>

<script>
import { LOGOUT } from "@/core/services/store/auth.module";
import KTLayoutQuickUser from "@/assets/js/layout/extended/quick-user.js";
import KTOffcanvas from "@/assets/js/components/offcanvas.js";
import { mapState } from "vuex";

export default {
  name: "KTQuickUser",
  data() {
    return {
      id: this.$route.params.id,
      list: [
        {
          title: "Another purpose persuade",
          desc: "Due in 2 Days",
          alt: "+28%",
          svg: "media/svg/icons/Home/Library.svg",
          type: "warning"
        },
        {
          title: "Would be to people",
          desc: "Due in 2 Days",
          alt: "+50%",
          svg: "media/svg/icons/Communication/Write.svg",
          type: "success"
        },
        {
          title: "Purpose would be to persuade",
          desc: "Due in 2 Days",
          alt: "-27%",
          svg: "media/svg/icons/Communication/Group-chat.svg",
          type: "danger"
        },
        {
          title: "The best product",
          desc: "Due in 2 Days",
          alt: "+8%",
          svg: "media/svg/icons/General/Attachment2.svg",
          type: "info"
        }
      ]
    };
  },
  computed: {
    // ...mapState("users", ["usersList"]),
    ...mapState(["auth"]),
    picture() {
      return process.env.BASE_URL + "media/users/logo-upj.png";
    }
  },
  async mounted() {
    // Init Quick User Panel
    KTLayoutQuickUser.init(this.$refs["kt_quick_user"]);
    // this.getUsersList();
    await this.onFetchData();
  },

  methods: {
    async onFetchData() {},
    onLogout() {
      this.$store
        .dispatch(LOGOUT)
        .then(() => this.$router.push({ name: "login" }));
    },
    closeOffcanvas() {
      new KTOffcanvas(KTLayoutQuickUser.getElement()).hide();
    }
  }
};
</script>
