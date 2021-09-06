<template>
  <div>
    <!--begin::Content header-->
    <div
      class="position-absolute top-0 right-0 text-right mt-5 mb-15 mb-lg-0 flex-column-auto justify-content-center py-5 px-10"
    >
      <span class="font-weight-bold font-size-3 text-dark-60">
        Sudah memiliki Akun?
      </span>
      <router-link
        class="font-weight-bold font-size-3 ml-2 text-success"
        :to="{ name: 'login' }"
      >
        Masuk!
      </router-link>
    </div>
    <!--end::Content header-->

    <!--begin::Signup-->
    <div class="login-form login-signin">
      <div class="text-center mb-10 mb-lg-10">
        <h3 class="font-size-h1">DAFTAR</h3>
        <p class="text-muted font-weight-semi-bold">
          Isi data di bawah ini untuk membuat Akun
        </p>
        <p class="text-muted font-weight-semi-bold">
          PERINGATAN!! Pendaftaran Beasiswa Anda akan gagal apabila data dibawah
          ini tidak sesuai dengan semestinya.
        </p>
      </div>
      <div>
        <!-- {{ errors }} -->
      </div>

      <!--begin::Form-->
      <b-form ref="usersData" class="usersData" @submit.stop.prevent="onSubmit">
        <b-form-group>
          <b-form-input
            id="example-input-0"
            v-model="usersData.name"
            class="form-control form-control-solid h-auto py-5 px-6"
            name="example-input-0"
            :state="validateState('name')"
            aria-describedby="input-0-live-feedback"
            placeholder="Nama Lengkap"
          ></b-form-input>

          <b-form-invalid-feedback id="input-0-live-feedback">
            Nama lengkap Wajib diisi.
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          id="example-input-group-1"
          label=""
          label-for="example-input-1"
        >
          <b-form-input
            id="example-input-1"
            v-model="usersData.username"
            class="form-control form-control-solid h-auto py-5 px-6"
            name="example-input-1"
            :state="validateState('username')"
            aria-describedby="input-1-live-feedback"
            placeholder="NIM"
          ></b-form-input>

          <b-form-invalid-feedback id="input-1-live-feedback">
            NIM wajib diisi.
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          id="example-input-group-4"
          label=""
          label-for="example-input-4"
        >
          <b-form-select
            v-model="usersData.prodi_id"
            :state="validateState('prodi_id')"
            name="example-input-4"
            :options="prodiList"
            value-field="id"
            text-field="name"
            placeholder="Program Studi"
            style="background-color: #FAFAFA; color: #BDBDBD"
          >
            <template #first>
              <b-form-select-option
                :value="null"
                disabled
                style="color: #BDBDBD"
                >Program Studi</b-form-select-option
              >
            </template>
          </b-form-select>

          <b-form-invalid-feedback id="input-4-live-feedback">
            Program Studi wajib diisi.
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          id="example-input-group-5"
          label=""
          label-for="example-input-5"
        >
          <b-form-input
            id="example-input-5"
            v-model="usersData.generation"
            class="form-control form-control-solid h-auto py-5 px-6"
            name="example-input-5"
            :state="validateState('generation')"
            aria-describedby="input-5-live-feedback"
            placeholder="Tahun Angkatan"
          ></b-form-input>

          <b-form-invalid-feedback id="input-5-live-feedback">
            Tahun Angkatan wajib diisi.
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          id="example-input-group-2"
          label=""
          label-for="example-input-2"
        >
          <b-form-input
            id="example-input-2"
            v-model="usersData.email"
            class="form-control form-control-solid h-auto py-5 px-6"
            name="example-input-2"
            :state="validateState('email')"
            aria-describedby="input-2-live-feedback"
            placeholder="Email (Username)"
          ></b-form-input>

          <b-form-invalid-feedback id="input-2-live-feedback">
            Email wajib diisi dengan menggunakan format email.
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          id="example-input-group-3"
          label=""
          label-for="example-input-3"
        >
          <b-form-input
            id="example-input-3"
            v-model="usersData.password"
            class="form-control form-control-solid h-auto py-5 px-6"
            type="password"
            name="example-input-3"
            :state="validateState('password')"
            aria-describedby="input-3-live-feedback"
            placeholder="Password"
          ></b-form-input>

          <b-form-invalid-feedback id="input-3-live-feedback">
            Password wajib diisi.
          </b-form-invalid-feedback>
        </b-form-group>

        <div v-if="userErrors && userErrors.errors">
          <ul class="alert alert-danger">
            <li v-for="(error, key) in userErrors.errors" :key="key">
              {{ error[0] }}
            </li>
          </ul>
        </div>
        <!--begin::Action-->
        <div class="form-group d-flex flex-wrap flex-center">
          <button
            ref="kt_login_signup_submit"
            type="submit"
            class="btn btn-outline-success font-weight-bold px-9 py-4 my-3 font-size-3 mx-4"
          >
            Daftar
          </button>
          <button
            class="btn btn-outline-secondary font-weight-bold px-9 py-4 my-3 font-size-3 mx-4"
            @click="$router.push('login')"
          >
            Batal
          </button>
        </div>
        <!--end::Action-->
      </b-form>
      <!--end::Form-->
    </div>
    <!--end::Signup-->
  </div>
</template>

<style lang="scss" scoped>
.spinner.spinner-right {
  padding-right: 3.5rem !important;
}
</style>

<script>
import { mapState, mapActions } from "vuex";
// import { REGISTER } from "@/core/services/store/auth.module";
import { LOGOUT } from "@/core/services/store/auth.module";

import { validationMixin } from "vuelidate";
import { email, required, minLength } from "vuelidate/lib/validators";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

export default {
  name: "Register",
  mixins: [validationMixin],
  data() {
    return {
      // Remove this dummy login info
      form: {
        email: "",
        password: ""
      }
    };
  },
  validations: {
    usersData: {
      name: {
        required,
        minLength: minLength(3)
      },
      username: {
        required,
        minLength: minLength(3)
      },
      prodi_id: {
        required
      },
      generation: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(3)
      }
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    }),
    ...mapState("users", ["usersData", "userErrors"]),
    ...mapState("prodi", ["prodiList"]),
    ...mapState("generations", ["generationsList"])
  },

  async mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      {
        title: "Setting",
        route: "alert"
      },
      {
        title: this.title
      }
    ]);
    await this.getProdiList();
    this.resetRegistrasi();
  },
  methods: {
    ...mapActions("users", ["createUsers", "resetRegistrasi"]),
    ...mapActions("prodi", ["getProdiList"]),
    // code 1
    async validate() {
      try {
        if (
          this.$refs.usersData.validate() &&
          this.$refs.profilesData.validate()
        ) {
          await this.createUsers({
            payload: this.usersData
          });
          await this.createProfiles({
            payload: this.profilesData
          });
          this.usersData = {};
          this.profilesData = {};
          this.$router.push({
            name: "Login"
          });
        }
      } catch (error) {
        console.error("ini error");
        alert(error.message);
      }
    },
    validateState(name) {
      const { $dirty, $error } = this.$v.usersData[name];
      return $dirty ? !$error : null;
    },
    resetusersData() {
      this.usersData = {
        name: null,
        username: null,
        prodi_id: "",
        generation: null,
        email: null,
        password: null
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    onSubmit() {
      this.$v.usersData.$touch();
      if (this.$v.usersData.$anyError) {
        // console.log("asdasd");
        return;
      }

      // const name = this.usersData.name;
      // const email = this.usersData.email;
      // const password = this.usersData.password;

      // clear existing errors
      this.$store.dispatch(LOGOUT);

      // set spinner to submit button
      const submitButton = this.$refs["kt_login_signup_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");
      this.createUsers({
        payload: this.usersData
      }).then(() => {
        this.$router.push({
          name: "login"
        });
      });
      submitButton.classList.remove(
        "spinner",
        "spinner-light",
        "spinner-right"
      );
    }
  }
};
</script>
