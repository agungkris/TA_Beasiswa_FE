<template>
  <!-- begin::Page loader -->
  <div class="page-loader page-loader-logo">
    <img alt="Logo" src="media/logos/logo-upj.png" width="80" />
    <div class="spinner" :class="spinnerClass || 'spinner-primary'"></div>
  </div>
  <!-- end::Page Loader -->
</template>

<script>
export default {
  name: "Loader",
  props: {
    logo: {
      type: String,
      default: ""
    },
    spinnerClass: {
      type: String,
      default: ""
    }
  }
};
</script>
