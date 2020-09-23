<template>
  <div>
    <!--begin::Content header-->
    <div
      class="position-absolute top-0 right-0 text-right mt-5 mb-15 mb-lg-0 flex-column-auto justify-content-center py-5 px-10"
    >
      <span class="font-weight-bold font-size-3 text-dark-60">
        Belum memiliki Akun?
      </span>
      <router-link
        class="font-weight-bold font-size-3 ml-2 text-success"
        :to="{ name: 'register' }"
      >
        Daftar!
      </router-link>
    </div>
    <!--end::Content header-->

    <!--begin::Signin-->
    <div class="login-form login-signin">
      <div class="text-center">
        <h3 class="font-size-h1">MASUK</h3>
        <p class="text-muted font-weight-semi-bold">
          Masukan Nama Pengguna dan Kata Sandi
        </p>
      </div>

      <!--begin::Form-->
      <b-form class="form" @submit.stop.prevent="onSubmit">
        <!-- <div role="alert" class="alert alert-info">
          <div class="alert-text">
            Use account <strong>admin@demo.com</strong> and password
            <strong>demo</strong> to continue.
          </div>
        </div> -->

        <b-alert variant="danger" v-if="loginError" show
          >Username atau Password yang dimasukkan salah</b-alert
        >

        <div
          role="alert"
          v-bind:class="{ show: errors.length }"
          class="alert fade alert-danger"
        >
          <div class="alert-text" v-for="(error, i) in errors" :key="i">
            {{ error }}
          </div>
        </div>

        <b-form-group
          id="example-input-group-1"
          label=""
          label-for="example-input-1"
        >
          <b-form-input
            class="form-control form-control-solid h-auto py-5 px-6"
            id="example-input-1"
            name="example-input-1"
            v-model="$v.form.username.$model"
            :state="validateState('username')"
            aria-describedby="input-1-live-feedback"
            placeholder="Email"
          ></b-form-input>

          <b-form-invalid-feedback id="input-1-live-feedback">
            username wajib diisi dan menggunakan format username.
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          id="example-input-group-2"
          label=""
          label-for="example-input-2"
        >
          <b-form-input
            class="form-control form-control-solid h-auto py-5 px-6"
            type="password"
            id="example-input-2"
            name="example-input-2"
            v-model="$v.form.password.$model"
            :state="validateState('password')"
            aria-describedby="input-2-live-feedback"
            placeholder="Password"
          ></b-form-input>

          <b-form-invalid-feedback id="input-2-live-feedback">
            Password wajib diisi.
          </b-form-invalid-feedback>
        </b-form-group>

        <!--begin::Action-->
        <div
          class="form-group d-flex flex-wrap justify-content-center align-items-center"
        >
          <button
            ref="kt_login_signin_submit"
            class="btn btn-outline-success font-weight-bold px-9 py-4 my-3 font-size-3"
          >
            Masuk
          </button>
        </div>
        <!--end::Action-->
      </b-form>
      <!--end::Form-->
    </div>
    <!--end::Signin-->
  </div>
</template>

<style lang="scss" scoped>
.spinner.spinner-right {
  padding-right: 3.5rem !important;
}
</style>

<script>
import { mapState } from "vuex";
import { LOGIN, LOGOUT } from "@/core/services/store/auth.module";

import { validationMixin } from "vuelidate";
import { minLength, required } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  name: "login",
  data() {
    return {
      // Remove this dummy login info
      loginError: false,
      loginErrors: [],
      form: {
        username: "",
        password: ""
      }
    };
  },
  validations: {
    form: {
      username: {
        required
      },
      password: {
        required,
        minLength: minLength(3)
      }
    }
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        username: null,
        password: null
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      const username = this.$v.form.username.$model;
      const password = this.$v.form.password.$model;

      // clear existing errors
      this.$store.dispatch(LOGOUT);

      // set spinner to submit button
      const submitButton = this.$refs["kt_login_signin_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      // dummy delay
      // setTimeout(() => {
      // send login request
      this.$store
        .dispatch(LOGIN, { username, password })
        // go to which page after successfully login
        .then(() => {
          // console.log(data);
          submitButton.classList.remove(
            "spinner",
            "spinner-light",
            "spinner-right"
          );
          this.$router.push({ name: "dashboard" });
        })
        .catch(() => {
          // console.log(error.response);
          // let errors = error.response.data
          submitButton.classList.remove(
            "spinner",
            "spinner-light",
            "spinner-right"
          );
          this.loginError = true;
        });

      // }, 2000);
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  }
};
</script>
