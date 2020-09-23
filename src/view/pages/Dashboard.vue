<template>
  <div>
    <h1 class="text-center">TUTORIAL PENGGUNAAN WEBSITE BEASISWA UPJ</h1>

    <v-row v-if="auth.user.level == 'admin'">
      <v-col class="md-6">
        <v-card color="#008854" dark>
          <v-card-title>1. Membuka Pemberitahuan</v-card-title>
          <v-card-text>
            <p>
              Halaman Pemberitahuan merupakan halaman untuk membuat
              pemberitahuan yang nantinya akan diperlihatkan kepada mahasiswa
              yang memiliki akun pada website ini
            </p>
            <v-btn>Lihat</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="md-6">
        <v-card color="#385F73" dark>
          <v-card-title>2. Membuka Ketentuan Beasiswa</v-card-title>
          <v-card-text>
            <p>
              Menu ini terdiri dari 3 halaman, yaitu Syarat Ketentuan, Formulir
              Beasiswa dan Format CV. Setiap halamannya Admin dapat mengunggah
              file yang dapat menjelaskan mengenai ketentuan dalam pengajuan
              Beasiswa Pembangunan Jaya
            </p>
            <v-btn>Lihat</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="auth.user.level == 'admin'">
      <v-col class="md-6">
        <v-card color="#9E9E9E" dark>
          <v-card-title>3. Membuka Pengguna</v-card-title>
          <v-card-text>
            <p>
              Halaman Pemberitahuan merupakan halaman untuk membuat
              pemberitahuan yang nantinya akan diperlihatkan kepada mahasiswa
              yang memiliki akun pada website ini
            </p>
            <v-btn class="mr-2">Lihat Daftar Akun</v-btn>
            <v-btn class="mr-2">Lihat Daftar Mahasiswa</v-btn>
            <v-btn>Lihat Daftar Juri</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="md-6">
        <v-card color="#B71C1C" dark>
          <v-card-title>4. Membuka Laporan Beasiswa</v-card-title>
          <v-card-text>
            <p>
              Menu ini terdiri dari 3 halaman, yaitu Syarat Ketentuan, Formulir
              Beasiswa dan Format CV. Setiap halamannya Admin dapat mengunggah
              file yang dapat menjelaskan mengenai ketentuan dalam pengajuan
              Beasiswa Pembangunan Jaya
            </p>
            <v-btn>Lihat</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="auth.user.level == 'admin'">
      <v-col class="md-6">
        <v-card color="#6D4C41" dark>
          <v-card-title>5. Membuka Master Data</v-card-title>
          <v-card-text>
            <p>
              Halaman Pemberitahuan merupakan halaman untuk membuat
              pemberitahuan yang nantinya akan diperlihatkan kepada mahasiswa
              yang memiliki akun pada website ini
            </p>
            <v-btn class="mr-2">Lihat Grup</v-btn>
            <v-btn>Lihat Periode</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="md-6"></v-col>
    </v-row>

    <v-row v-if="auth.user.level == 'student'">
      <v-col class="md-6">
        <v-card color="#008854" dark>
          <v-card-title>1. Membuka Pemberitahuan</v-card-title>
          <v-card-text>
            <p>
              Halaman Pemberitahuan merupakan halaman yang berisikan informasi
              mengenai segala hal seputar beasiswa di Universitas Pembangunan
              Jaya
            </p>
            <v-btn>Lihat</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="md-6">
        <v-card color="#385F73" dark>
          <v-card-title>2. Membuka Ketentuan Beasiswa</v-card-title>
          <v-card-text>
            <p>
              Sebelum mengajukan Beasiswa Pembangunan Jaya, Anda harus melihat
              Syarat Ketentuan, Formulir Beasiswa dan Ketentuan CV untuk
              nantinya sebagai salah satu syarat dalam pengajuan beasiswa
            </p>
            <v-btn>Lihat</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="auth.user.leel == 'student'">
      <v-col class="md-6 justify-center">
        <v-card color="#952175" dark>
          <v-card-title>3. Membuka Pengumpulan Dokumen Beasiswa</v-card-title>
          <v-card-text>
            <p>
              Halaman ini merupakan halaman yang digunakan untuk mengumpulkan
              seluruh berkas beasiswa yang diperlukan sebagai syarat wajib dalam
              pengajuan Beasiswa Pembangunan Jaya.
            </p>
            <v-btn>Lihat</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="md-6"></v-col>
    </v-row>

    <v-row v-if="auth.user.level == 'juri'">
      <v-col class="md-6">
        <v-card color="#008854" dark>
          <v-card-title>1. Penilaian Karya Tulis</v-card-title>
          <v-card-text>
            <p>
              Halaman Penilaian Karya Tulis merupakan halaman yang digunakan
              untuk menilai karya tulis mahasiswa yang telah dikumpulkan.
            </p>
            <v-btn>Lihat</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="md-6">
        <v-card color="#385F73" dark>
          <v-card-title>2. Penilaian FGD</v-card-title>
          <v-card-text>
            <p>
              Pada sesi presentasi Forum Group Discussion, halaman ini digunaan
              untuk memberikan penilaian kepada mahasiswa yang sedang melakukan
              presentasi.
            </p>
            <v-btn>Lihat</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["auth"])
  }
};
</script>
