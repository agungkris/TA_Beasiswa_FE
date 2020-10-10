<template>
  <div>
    <h1 class="text-center">TUTORIAL PENGGUNAAN WEBSITE BEASISWA UPJ</h1>

    <v-row v-if="auth.user.level == 'admin'">
      <v-col class="md-6">
        <v-card>
          <v-toolbar flat color="#1A237E" dark>
            <v-toolbar-title>1. Membuka Pemberitahuan</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <p>
              Halaman Pemberitahuan merupakan halaman untuk membuat
              pemberitahuan yang nantinya akan diperlihatkan kepada mahasiswa
              yang memiliki akun pada website ini
            </p>
            <v-btn color="#1A237E" dark>Lihat</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="md-6">
        <v-card>
          <v-toolbar flat color="#004D40" dark>
            <v-toolbar-title>2. Membuka Ketentuan Beasiswa</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <p>
              Menu ini terdiri dari 3 halaman, yaitu Syarat Ketentuan, Formulir
              Beasiswa dan Format CV. Setiap halamannya Admin dapat mengunggah
              file yang dapat menjelaskan mengenai ketentuan dalam pengajuan
              Beasiswa Pembangunan Jaya
            </p>
            <v-btn color="#004D40" dark>Lihat</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="auth.user.level == 'admin'">
      <v-col class="md-6">
        <v-card>
          <v-toolbar flat color="#880E4F" dark>
            <v-toolbar-title>3. Membuka Pengguna</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <p>
              Halaman Pemberitahuan merupakan halaman untuk membuat
              pemberitahuan yang nantinya akan diperlihatkan kepada mahasiswa
              yang memiliki akun pada website ini
            </p>
            <v-btn class="mr-2 mt-2" color="#880E4F" dark
              >Lihat Daftar Akun</v-btn
            >
            <v-btn class="mr-2 mt-2" color="#880E4F" dark
              >Lihat Daftar Mahasiswa</v-btn
            >
            <v-btn class="mt-2" color="#880E4F" dark>Lihat Daftar Juri</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="md-6">
        <v-card>
          <v-toolbar flat color="#827717" dark>
            <v-toolbar-title>4. Membuka Laporan Beasiswa</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <p>
              Menu ini terdiri dari 3 halaman, yaitu Syarat Ketentuan, Formulir
              Beasiswa dan Format CV. Setiap halamannya Admin dapat mengunggah
              file yang dapat menjelaskan mengenai ketentuan dalam pengajuan
              Beasiswa Pembangunan Jaya
            </p>
            <v-btn color="#827717" dark>Lihat</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="auth.user.level == 'admin'">
      <v-col class="md-6">
        <v-card>
          <v-toolbar flat color="#4E342E" dark>
            <v-toolbar-title>5. Membuka Master Data</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <p>
              Halaman Pemberitahuan merupakan halaman untuk membuat
              pemberitahuan yang nantinya akan diperlihatkan kepada mahasiswa
              yang memiliki akun pada website ini
            </p>
            <v-btn class="mr-2" color="#4E342E" dark>Lihat Grup</v-btn>
            <v-btn color="#4E342E" dark>Lihat Periode</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="md-6"></v-col>
    </v-row>

    <v-row v-if="auth.user.level == 'student'">
      <v-col class="md-6">
        <v-card>
          <v-toolbar flat color="#1A237E" dark>
            <v-toolbar-title>1. Membuka Pemberitahuan</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <p>
              Halaman Pemberitahuan merupakan halaman yang berisikan informasi
              mengenai segala hal seputar beasiswa di Universitas Pembangunan
              Jaya.
            </p>
            <v-btn color="#1A237E" dark>Lihat</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="md-6">
        <v-card>
          <v-toolbar flat color="#004D40" dark>
            <v-toolbar-title>2. Membuka Ketentuan Beasiswa</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <p>
              Sebelum mengajukan Beasiswa Pembangunan Jaya, Anda harus melihat
              Syarat Ketentuan, Formulir Beasiswa dan Ketentuan CV untuk
              nantinya sebagai salah satu syarat dalam pengajuan beasiswa
            </p>
            <v-btn color="#004D40" dark>Lihat</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="auth.user.level == 'student'">
      <v-col class="md-6 justify-center">
        <v-card>
          <v-toolbar flat color="#880E4F" dark>
            <v-toolbar-title
              >3. Membuka Pengumpulan Dokumen Beasiswa</v-toolbar-title
            >
          </v-toolbar>
          <v-card-text>
            <p>
              Halaman ini merupakan halaman yang digunakan untuk mengumpulkan
              seluruh berkas beasiswa yang diperlukan sebagai syarat wajib dalam
              pengajuan Beasiswa Pembangunan Jaya.
            </p>
            <v-btn color="#880E4F" dark>Lihat</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="md-6"></v-col>
    </v-row>

    <v-row v-if="auth.user.level == 'juri'">
      <v-col class="md-6">
        <v-card>
          <v-toolbar flat color="#1A237E" dark>
            <v-toolbar-title>1. Penilaian Karya Tulis</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <p>
              Halaman Penilaian Karya Tulis merupakan halaman yang digunakan
              untuk menilai karya tulis mahasiswa yang telah dikumpulkan.
            </p>
            <a :href="jurikaryatulisData.juri_karya_tulis">
              <v-btn color="#1A237E" dark>Lihat</v-btn>
            </a>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="md-6">
        <v-card>
          <v-toolbar flat color="#004D40" dark>
            <v-toolbar-title>2. Penilaian FGD</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <p>
              Pada sesi presentasi Forum Group Discussion, halaman ini digunaan
              untuk memberikan penilaian kepada mahasiswa yang sedang melakukan
              presentasi.
            </p>
            <a :href="jurifgdData.juri_fgd">
              <v-btn color="#004D40" dark>Lihat</v-btn>
            </a>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  computed: {
    ...mapState(["auth"]),
    ...mapState("tutorialjurikaryatulis", ["jurikaryatulisData"]),
    ...mapState("tutorialjurifgd", ["jurifgdData"])
  },

  async mounted() {
    await this.getJuriKaryaTulisList();
    await this.getJuriFgdList();
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Setting", route: "alert" },
      { title: this.title }
    ]);
  },
  methods: {
    ...mapActions("tutorialjurikaryatulis", ["getJuriKaryaTulisList"]),
    ...mapActions("tutorialjurifgd", ["getJuriFgdList"]),
    async onFetchData() {
      await this.getJuriKaryaTulisList();
      await this.getJuriFgdList();
    }
    // onDeleteService(id) {}
  }
};
</script>
