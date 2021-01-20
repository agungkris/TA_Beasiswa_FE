<template>
  <div class="d-flex flex-column flex-root">
    <div
      class="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-row-fluid bg-white"
      id="kt_login"
    >
      <!--begin::Aside-->
      <div
        class="login-aside d-flex flex-row-auto bgi-size-cover bgi-no-repeat p-10 p-lg-15"
        :style="{ backgroundImage: `url(${backgroundImage})` }"
      >
        <!--begin: Aside Container -->
        <div class="d-flex flex-row-fluid flex-column justify-content-between">
          <!--begin: Aside content -->
          <div
            class="flex-column-fluid d-flex flex-column justify-content-center"
          >
            <h3 class="font-size-h1 text-white ">
              WELCOME TO BEASISWA PEMBANGUNAN JAYA
            </h3>
            <p class="font-size-h5 font-weight-lighter text-white opacity-80">
              Beasiswa Pembangunan Jaya dikhususkan untuk mahasiswa dan
              mahasiswi aktif berprestasi di lingkungan Universitas Pembangunan
              Jaya.
            </p>
          </div>
          <!--end: Aside content -->
          <!--begin: Aside footer for desktop -->
          <!--end: Aside footer for desktop -->
        </div>
        <!--end: Aside Container -->
      </div>
      <!--begin::Aside-->

      <!--begin::Content-->
      <div
        class="flex-row-fluid d-flex flex-column position-relative p-7 overflow-hidden"
      >
        <div class="d-flex flex-column-fluid flex-center mt-30 mt-lg-0">
          <router-view></router-view>
        </div>
      </div>
      <!--end::Content-->
    </div>
  </div>
</template>

<!-- Load login custom page styles -->
<style lang="scss">
@import "@/assets/sass/pages/login/login-1.scss";
</style>

<script>
import { mapState } from "vuex";

export default {
  name: "auth",
  methods: {},
  computed: {
    ...mapState({
      errors: (state) => state.auth.errors,
    }),
    backgroundImage() {
      return process.env.BASE_URL + "media/bg/gedungUPJ.jpg";
    },
  },
};
</script>
