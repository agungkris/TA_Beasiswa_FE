<template>
  <div>
    <h1 class="text-center">Ngetes</h1>
    <!-- <h1 class="text-center">TUTORIAL PENGGUNAAN WEBSITE BEASISWA UPJ</h1> -->

    <v-row v-if="auth.user.level == 'admin'">
      <v-col class="md-6">
        <v-card>
          <v-toolbar flat color="#1A237E" dark>
            <v-toolbar-title>1. Membuat Periode Beasiswa</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <p>
              Tahap awal dalam melakukan seleksi beasiswa adalah dengan membuat
              periodenya dengan masuk ke dalam menu 'Periode' pada Master Data.
            </p>
            <a :href="periodeData.periode">
              <v-btn color="#1A237E" dark>Lihat</v-btn>
            </a>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="md-6">
        <v-card>
          <v-toolbar flat color="#004D40" dark>
            <v-toolbar-title>2. Membuat Ketentuan Beasiswa</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <p>
              Menu ini terdiri dari 3 sub menu lainnya, yaitu Syarat Ketentuan,
              Formulir Beasiswa dan Format CV. Pada setiap sub menunya, Admin
              dapat mengunggah dokumen yang dapat menjelaskan mengenai ketentuan
              dalam pengajuan Beasiswa Pembangunan Jaya.
            </p>
            <a :href="ketentuanbeasiswaadminData.ketentuan_beasiswa_admin">
              <v-btn color="#004D40" dark>Lihat</v-btn>
            </a>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="auth.user.level == 'admin'">
      <v-col class="md-6">
        <v-card>
          <v-toolbar flat color="#880E4F" dark>
            <v-toolbar-title>3. Membuat Pemberitahuan</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <p>
              Halaman Pemberitahuan merupakan halaman untuk membuat
              pemberitahuan yang nantinya akan diperlihatkan kepada mahasiswa
              yang memiliki akun pada website ini.
            </p>
            <a :href="pemberitahuanadminData.pemberitahuan_admin">
              <v-btn color="#880E4F" dark>Lihat</v-btn>
            </a>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="md-6">
        <v-card>
          <v-toolbar flat color="#827717" dark>
            <v-toolbar-title>4. Membuka Pengguna</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <p>
              Menu ini terdiri dari 3 sub menu lainnya, yaitu Daftar Akun
              Mahasiswa, Daftar Mahasiswa dan Daftar Juri. Pada Daftar Akun
              Mahasiswa, Admin dapat melihat seluruh akun mahasiswa, Pada Daftar
              Mahasiwa, Admin dapat melakukan seleksi beasiswa dan Daftar Juri
              Admin dapat membuat akun juri.
            </p>
            <a :href="akunmahasiswaData.akun_mahasiswa">
              <v-btn class="mt-2 mb-2" color="#827717" dark>Daftar Akun</v-btn>
            </a>
            <a :href="seleksibeasiswaData.seleksi_beasiswa">
              <v-btn class="mt-2 mb-2 ml-2" color="#827717" dark
                >Daftar Mahasiswa</v-btn
              >
            </a>
            <a :href="akunjuriData.akun_juri">
              <v-btn class="mt-2 mb-2 ml-2" color="#827717" dark
                >Daftar Juri</v-btn
              >
            </a>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="auth.user.level == 'admin'">
      <v-col class="md-6">
        <v-card>
          <v-toolbar flat color="#4E342E" dark>
            <v-toolbar-title>5. Membuat Grup</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <p>
              Ketika mahasiswa telah lolos dalam tahap administrasi, maka Admin
              dapat membuat grup FGD pada menu 'Grup'.
            </p>
            <a :href="grupfgdData.grup_fgd"
              ><v-btn class="mr-2" color="#4E342E" dark>Lihat</v-btn></a
            >
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="md-6">
        <v-card>
          <v-toolbar flat color="#546E7A" dark>
            <v-toolbar-title>5. Membuka Laporan Beasiswa</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <p>
              Apabila proses seleksi beasiswa telah selesai, maka rangkuman dari
              kegiatan tersebut dapat terlihat pada menu 'Laporan Beasiswa'.
            </p>
            <a :href="laporanData.laporan_beasiswa">
              <v-btn class="mr-2" color="#546E7A" dark>Lihat</v-btn>
            </a>
          </v-card-text>
        </v-card>
      </v-col>
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
            <a :href="pemberitahuanmahasiswaData.pemberitahuan_mahasiswa">
              <v-btn color="#1A237E" dark>Lihat</v-btn>
            </a>
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
            <a
              :href="
                ketentuanbeasiswamahasiswaData.ketentuan_beasiswa_mahasiswa
              "
            >
              <v-btn color="#004D40" dark>Lihat</v-btn>
            </a>
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
            <a :href="dokumenmahasiswaData.pengumpulan_dokumen_mahasiswa">
              <v-btn color="#880E4F" dark>Lihat</v-btn>
            </a>
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
    ...mapState("tutorialjurifgd", ["jurifgdData"]),

    ...mapState("tutorialketentuanbeasiswamahasiswa", [
      "ketentuanbeasiswamahasiswaData"
    ]),
    ...mapState("tutorialpengumpulandokumenmahasiswa", [
      "dokumenmahasiswaData"
    ]),
    ...mapState("tutorialpemberitahuanmahasiswa", [
      "pemberitahuanmahasiswaData"
    ]),

    ...mapState("tutorialperiode", ["periodeData"]),
    ...mapState("tutorialketentuanbeasiswaadmin", [
      "ketentuanbeasiswaadminData"
    ]),
    ...mapState("tutorialpemberitahuanadmin", ["pemberitahuanadminData"]),
    ...mapState("tutorialakunmahasiswa", ["akunmahasiswaData"]),
    ...mapState("tutorialseleksibeasiswa", ["seleksibeasiswaData"]),
    ...mapState("tutorialakunjuri", ["akunjuriData"]),
    ...mapState("tutorialgrupfgd", ["grupfgdData"]),
    ...mapState("tutoriallaporanbeasiswa", ["laporanData"])
  },

  async mounted() {
    await this.getJuriKaryaTulis();
    await this.getJuriFgd();

    await this.getKetentuanBeasiswaMahasiswa();
    await this.getDokumenMahasiswa();
    await this.getPemberitahuanMahasiswa();

    await this.getPeriode();
    await this.getKetentuanBeasiswaAdmin();
    await this.getPemberitahuanAdmin();
    await this.getAkunMahasiswa();
    await this.getSeleksiBeasiswa();
    await this.getAkunJuri();
    await this.getGrupFgd();
    await this.getLaporan();

    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Setting", route: "alert" },
      { title: this.title }
    ]);
  },
  methods: {
    ...mapActions("tutorialjurikaryatulis", ["getJuriKaryaTulis"]),
    ...mapActions("tutorialjurifgd", ["getJuriFgd"]),
    ...mapActions("tutorialketentuanbeasiswamahasiswa", [
      "getKetentuanBeasiswaMahasiswa"
    ]),
    ...mapActions("tutorialpengumpulandokumenmahasiswa", [
      "getDokumenMahasiswa"
    ]),
    ...mapActions("tutorialpemberitahuanmahasiswa", [
      "getPemberitahuanMahasiswa"
    ]),

    ...mapActions("tutorialperiode", ["getPeriode"]),
    ...mapActions("tutorialketentuanbeasiswaadmin", [
      "getKetentuanBeasiswaAdmin"
    ]),
    ...mapActions("tutorialpemberitahuanadmin", ["getPemberitahuanAdmin"]),
    ...mapActions("tutorialakunmahasiswa", ["getAkunMahasiswa"]),
    ...mapActions("tutorialseleksibeasiswa", ["getSeleksiBeasiswa"]),
    ...mapActions("tutorialakunjuri", ["getAkunJuri"]),
    ...mapActions("tutorialgrupfgd", ["getGrupFgd"]),
    ...mapActions("tutoriallaporanbeasiswa", ["getLaporan"]),

    async onFetchData() {
      await this.getJuriKaryaTulis();
      await this.getJuriFgd();

      await this.getKetentuanBeasiswaMahasiswa();
      await this.getDokumenMahasiswa();
      await this.getPemberitahuanMahasiswa();

      await this.getPeriode();
      await this.getKetentuanBeasiswaAdmin();
      await this.getPemberitahuanAdmin();
      await this.getAkunMahasiswa();
      await this.getSeleksiBeasiswa();
      await this.getAkunJuri();
      await this.getGrupFgd();
      await this.getLaporan();
    }
    // onDeleteService(id) {}
  }
};
</script>
