<template>
  <ul class="menu-nav">
    <router-link
      to="/dashboard"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-architecture-and-city"></i>
          <span class="menu-text">Beranda</span>
        </a>
      </li>
    </router-link>

    <li
      v-if="auth.user.level == 'admin'"
     aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item">
      <a href="https://smallseotools.com/plagiarism-checker/" class="menu-link">
        <i class="menu-icon flaticon2-expand"></i>
      <span class="menu-text">Pengecekan Plagiarisme</span></a>
    </li>

    <li
      v-if="auth.user.level == 'student'"
     aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item">
      <a href="https://smallseotools.com/plagiarism-checker/" class="menu-link">
        <i class="menu-icon flaticon2-expand"></i>
      <span class="menu-text">Pengecekan Plagiarisme</span></a>
    </li>

    <router-link
      v-if="auth.user.level == 'admin'"
      :to="{ name: 'AnnouncementList' }"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-expand"></i>
          <span class="menu-text">Pemberitahuan</span>
        </a>
      </li>
    </router-link>

    <!-- <router-link
      to="https://smallseotools.com/plagiarism-checker/"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-expand"></i>
          <span class="menu-text">Pengecekan Plagiat</span>
        </a>
      </li>
    </router-link> -->
    
    <!-- <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item"
      :class="[
        isActive && 'menu-item-active',
        isExactActive && 'menu-item-active'
      ]">
      <a href="https://smallseotools.com/plagiarism-checker/" >
        <i class="menu-icon flaticon2-expand"></i>
        Pengecekan Plagiat
      </a>
    </li> -->

    <li class="menu-section">
      <h4 class="menu-text">Layanan Beasiswa</h4>
      <i class="menu-icon flaticon-more-v2"></i>
    </li>

    <li
      v-if="auth.user.level == 'admin'"
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{ 'menu-item-open': hasActiveChildren('vuetify') }"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon flaticon-web"></i>
        <span class="menu-text">Ketentuan Beasiswa</span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu" style="display: none; overflow: hidden;">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">Ketentuan Beasiswa</span>
            </span>
          </li>

          <router-link
            :to="{ name: 'TermConditionCreate' }"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Syarat dan Ketentuan</span>
              </a>
            </li>
          </router-link>
          <router-link
            :to="{ name: 'ScholarshipFormCreate' }"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Formulir Beasiswa</span>
              </a>
            </li>
          </router-link>
          <router-link
            :to="{ name: 'TempleteCVCreate' }"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Format CV</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>

    <li
      v-if="auth.user.level == 'admin'"
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{ 'menu-item-open': hasActiveChildren('vuetify') }"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon flaticon-web"></i>
        <span class="menu-text">Pengguna</span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu" style="display: none; overflow: hidden;">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">Pengguna</span>
            </span>
          </li>

          <router-link
            :to="{ name: 'StudentsAkun' }"
            :exact="true"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Daftar Akun Mahasiswa</span>
              </a>
            </li>
          </router-link>

          <router-link
            :to="{ name: 'StudentsList' }"
            :exact="true"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Daftar Mahasiswa</span>
              </a>
            </li>
          </router-link>

          <router-link
            :to="{ name: 'JuryList' }"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Daftar Juri</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>

    <li
      v-if="auth.user.level == 'admin'"
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{ 'menu-item-open': hasActiveChildren('vuetify') }"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon flaticon-web"></i>
        <span class="menu-text">Laporan Beasiswa</span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu" style="display: none; overflow: hidden;">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">Laporan Beasiswa</span>
            </span>
          </li>

          <router-link
            :to="{ name: 'PembangunanJayaScholarshipList' }"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Beasiswa Pembangunan Jaya</span>
              </a>
            </li>
          </router-link>
          <router-link
            :to="{ name: 'OthersScholarshipList' }"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Beasiswa ASAK/DIKTI/BIDIKMISI</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>

    <!-- AWAL BAGIAN JURI -->
    <router-link
      v-if="auth.user.level == 'juri'"
      :to="{ name: 'PaperAssessmentList' }"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-expand"></i>
          <span class="menu-text">Penilaian Karya Tulis</span>
        </a>
      </li>
    </router-link>
    <router-link
      v-if="auth.user.level == 'juri'"
      :to="{ name: 'FgdAssessmentList' }"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-expand"></i>
          <span class="menu-text">Penilaian FGD</span>
        </a>
      </li>
    </router-link>

    <!-- AKHIR BAGIAN JURI -->

    <!-- AWAL BAGIAN MAHASISWA -->
    <li
      v-if="auth.user.level == 'student'"
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{ 'menu-item-open': hasActiveChildren('vuetify') }"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon flaticon-web"></i>
        <span class="menu-text">Ketentuan Beasiswa</span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu" style="display: none; overflow: hidden;">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">Ketentuan Beasiswa</span>
            </span>
          </li>

          <router-link
            v-if="auth.user.level == 'student'"
            :to="{ name: 'TermConditionStudentsList' }"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Syarat dan Ketentuan</span>
              </a>
            </li>
          </router-link>
          <router-link
            v-if="auth.user.level == 'student'"
            :to="{ name: 'ScholarshipFormStudentsList' }"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Formulir Beasiswa</span>
              </a>
            </li>
          </router-link>
          <router-link
            v-if="auth.user.level == 'student'"
            :to="{ name: 'TempleteCVStudentsList' }"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Format CV</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>
    <router-link
      v-if="auth.user.level == 'student'"
      :to="{ name: 'UploadScholarshipRequirementList' }"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-expand"></i>
          <span class="menu-text">Beasiswa Pembangunan Jaya</span>
        </a>
      </li>
    </router-link>

     <router-link
      v-if="auth.user.level == 'student'"
      :to="{ name: 'AnotherScholarshipRequirementList' }"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-expand"></i>
          <span class="menu-text">Beasiswa ASAK/DIKTI/BIDIKMISI</span>
        </a>
      </li>
    </router-link>
    <!-- AKHIR BAGIAN MAHASISWA -->

    <li class="menu-section" v-if="auth.user.level == 'admin'">
      <h4 class="menu-text">Table of Master Data</h4>
      <i class="menu-icon flaticon-more-v2"></i>
    </li>

    <li
      v-if="auth.user.level == 'admin'"
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{ 'menu-item-open': hasActiveChildren('vuetify') }"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon flaticon-web"></i>
        <span class="menu-text">Master Data</span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu" style="display: none; overflow: hidden;">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">Master Data</span>
            </span>
          </li>

          <router-link
            v-if="auth.user.level == 'admin'"
            :to="{ name: 'GroupsList' }"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Grup</span>
              </a>
            </li>
          </router-link>

          <router-link
            v-if="auth.user.level == 'admin'"
            :to="{ name: 'PeriodsList' }"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Periode</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "KTMenu",
  methods: {
    hasActiveChildren(match) {
      return this.$route["path"].indexOf(match) !== -1;
    }
  },
  // buat multi user
  computed: {
    ...mapState(["auth"])
  }
};
</script>
