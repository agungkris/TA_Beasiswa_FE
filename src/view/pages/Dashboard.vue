<template>
  <div>
    <h2 class="text-center">
      SELAMAT DATANG DI WEBSITE BEASISWA PEMBANGUNAN JAYA
    </h2>
    <h3 class="text-center" style="font-style:italic;">{{ auth.user.name }}</h3>

    <!-- Awal Admin -->
    <v-container v-if="auth.user.level == 'admin'" grid-list-md>
      <v-layout row wrap>
        <v-flex lg4 sm4 xs12 md6 style="display:flex;" class="justify-center">
          <v-card shaped>
            <v-card-title>
              <v-icon large left>
                mdi-help-circle-outline
              </v-icon>
              <span class="title font-weight-light" style="padding-right:5px;"
                >Pedoman</span
              >
              <span class="title font-weight-light">Penggunaan</span>
            </v-card-title>
            <v-card-text class="headline font-weight-bold">
              Pedoman atau tata cara dalam menggunakan website beasiswa
              pembangunan jaya dijelaskan pada bagian ini.
              <br />
              <br />
              <a
                :href="ketentuanbeasiswaadminData.ketentuan_beasiswa_admin"
                style="color: #757575;"
              >
                <v-icon>
                  mdi-file-pdf
                </v-icon>
                <b>Dokumen Pedoman Penggunaan</b>
              </a>
              <br />
              <v-icon>
                mdi-video
              </v-icon>
              <b>Video Pedoman Penggunaan</b>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex lg4 sm4 xs12 md6 style="display:flex;" class="justify-center">
          <!-- <v-hover v-slot:default="{ hover }" value:false> -->
          <v-card shaped :to="{ name: 'AnnouncementList' }">
            <v-card-title>
              <v-icon large left>
                mdi-information-outline
              </v-icon>
              <span class="title font-weight-light" style="padding-right:5px;"
                >Pemberitahuan</span
              >
            </v-card-title>
            <v-card-text class="headline font-weight-bold">
              Halaman Pemberitahuan merupakan halaman yang berisikan informasi
              mengenai segala hal seputar beasiswa di Universitas Pembangunan
              Jaya. <br />
              <b>
                <a :to="{ name: 'AnnouncementList' }" style="color: #757575;"
                  >Halaman Pemberitahuan
                  <v-icon style="color: #757575;">mdi-chevron-right</v-icon></a
                >
              </b>
            </v-card-text>
          </v-card>
          <!-- </v-hover> -->
        </v-flex>

        <v-flex lg4 sm4 xs12 md6 style="display:flex;" class="justify-center">
          <v-card shaped>
            <v-card-title>
              <v-icon large left>
                mdi-file-multiple
              </v-icon>
              <span class="title font-weight-light" style="padding-right:5px;"
                >Ketentuan</span
              >
              <span class="title font-weight-light">Beasiswa</span>
            </v-card-title>
            <v-card-text class="headline font-weight-bold">
              Sebelum mengajukan Beasiswa Pembangunan Jaya, Anda harus melihat
              Syarat Ketentuan, Formulir Beasiswa dan Ketentuan CV untuk
              nantinya sebagai salah satu syarat dalam pengajuan beasiswa <br />
              <br />

              <router-link
                v-slot="{ href }"
                :to="{ name: 'TermConditionCreate' }"
              >
                <b>
                  <a :href="href" style="color: #757575;">
                    <v-icon style="color: #757575;">mdi-file-pdf</v-icon> Syarat
                    dan Ketentuan
                  </a>
                </b>
              </router-link>
              <br />

              <router-link
                v-slot="{ href }"
                :to="{ name: 'ScholarshipFormCreate' }"
              >
                <b>
                  <a :href="href" style="color: #757575;">
                    <v-icon style="color: #757575;">mdi-file-pdf</v-icon>
                    Formulir Beasiswa
                  </a>
                </b>
              </router-link>
              <br />

              <router-link v-slot="{ href }" :to="{ name: 'TempleteCVCreate' }">
                <b>
                  <a :href="href" style="color: #757575;">
                    <v-icon style="color: #757575;">mdi-file-pdf</v-icon> Format
                    CV
                  </a>
                </b>
              </router-link>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex lg4 sm4 xs12 md6 style="display:flex;" class="justify-center">
          <v-card shaped>
            <v-card-title>
              <v-icon large left>
                mdi-account-multiple
              </v-icon>
              <span class="title font-weight-light">Pengguna</span>
            </v-card-title>
            <v-card-text class="headline font-weight-bold">
              Sebelum mengajukan Beasiswa Pembangunan Jaya, Anda harus melihat
              Syarat Ketentuan, Formulir Beasiswa dan Ketentuan CV untuk
              nantinya sebagai salah satu syarat dalam pengajuan beasiswa <br />
              <br />
              <router-link v-slot="{ href }" :to="{ name: 'StudentsAkun' }">
                <b>
                  <a :href="href" style="color: #757575;">
                    <v-icon style="color: #757575;">mdi-account</v-icon> Daftar
                    Akun Mahasiswa
                  </a>
                </b>
              </router-link>
              <br />
              <router-link v-slot="{ href }" :to="{ name: 'StudentsList' }">
                <b>
                  <a :href="href" style="color: #757575;">
                    <v-icon style="color: #757575;">mdi-file-document</v-icon>
                    Daftar Mahasiswa
                  </a>
                </b>
              </router-link>
              <br />
              <router-link v-slot="{ href }" :to="{ name: 'JuryList' }">
                <b>
                  <a :href="href" style="color: #757575;">
                    <v-icon style="color: #757575;">mdi-account</v-icon> Daftar
                    Juri
                  </a>
                </b>
              </router-link>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex lg4 sm4 xs12 md6 style="display:flex;" class="justify-center">
          <v-card shaped>
            <v-card-title>
              <v-icon large left>
                mdi-folder-multiple-outline
              </v-icon>
              <span class="title font-weight-light" style="padding-right:5px;"
                >Laporan</span
              >
              <span class="title font-weight-light">Beasiswa</span>
            </v-card-title>
            <v-card-text class="headline font-weight-bold">
              Sebelum mengajukan Beasiswa Pembangunan Jaya, Anda harus melihat
              Syarat Ketentuan, Formulir Beasiswa dan Ketentuan CV untuk
              nantinya sebagai salah satu syarat dalam pengajuan beasiswa <br />
              <br />
              <router-link
                v-slot="{ href }"
                :to="{ name: 'PembangunanJayaScholarshipList' }"
              >
                <b>
                  <a :href="href" style="color: #757575;">
                    <v-icon style="color: #757575;">mdi-folder-outline</v-icon>
                    Beasiswa Pembangunan Jaya
                  </a>
                </b>
              </router-link>
              <br />
              <router-link
                v-slot="{ href }"
                :to="{ name: 'OthersScholarshipList' }"
              >
                <b>
                  <a :href="href" style="color: #757575;">
                    <v-icon style="color: #757575;">mdi-folder-outline</v-icon>
                    Beasiswa ASAK/DIKTI/BIDIKMISI
                  </a>
                </b>
              </router-link>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex lg4 sm4 xs12 md6 style="display:flex;" class="justify-center">
          <v-card shaped>
            <v-card-title>
              <v-icon large left>
                mdi-alert-octagon
              </v-icon>
              <span class="title font-weight-light" style="padding-right:5px;"
                >Master</span
              >
              <span class="title font-weight-light">Data</span>
            </v-card-title>
            <v-card-text class="headline font-weight-bold">
              Sebelum mengajukan Beasiswa Pembangunan Jaya, Anda harus melihat
              Syarat Ketentuan, Formulir Beasiswa dan Ketentuan CV untuk
              nantinya sebagai salah satu syarat dalam pengajuan beasiswa <br />
              <br />
              <router-link v-slot="{ href }" :to="{ name: 'PeriodsList' }">
                <b>
                  <a :href="href" style="color: #757575;">
                    <v-icon style="color: #757575;">mdi-calendar</v-icon>
                    Periode
                  </a>
                </b>
              </router-link>
              <br />
              <router-link v-slot="{ href }" :to="{ name: 'GroupsList' }">
                <b>
                  <a :href="href" style="color: #757575;">
                    <v-icon style="color: #757575;">mdi-group</v-icon> Grup
                  </a>
                </b>
              </router-link>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Akhir Admin -->

    <!-- <v-row v-if="auth.user.level == 'admin'">
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
              <v-btn class="mt-2 mb-2 ml-2" color="#827717" dark>Daftar Mahasiswa</v-btn>
            </a>
            <a :href="akunjuriData.akun_juri">
              <v-btn class="mt-2 mb-2 ml-2" color="#827717" dark>Daftar Juri</v-btn>
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
            <a :href="grupfgdData.grup_fgd">
              <v-btn class="mr-2" color="#4E342E" dark>Lihat</v-btn>
            </a>
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
    </v-row> -->

    <!-- awal mahasiswa -->

    <v-container v-if="auth.user.level == 'student'" grid-list-md>
      <v-layout row wrap>
        <v-flex lg4 sm4 xs12 md6 style="display:flex;" class="justify-center">
          <v-card shaped>
            <v-card-title>
              <v-icon large left>
                mdi-help-circle-outline
              </v-icon>
              <span class="title font-weight-light" style="padding-right:5px;"
                >Pedoman</span
              >
              <span class="title font-weight-light">Penggunaan</span>
            </v-card-title>
            <v-card-text class="headline font-weight-bold">
              Pedoman atau tata cara dalam menggunakan website beasiswa
              pembangunan jaya dijelaskan pada bagian ini.
              <br />
              <br />
              <v-icon>
                mdi-file-pdf
              </v-icon>
              <b>Dokumen Pedoman Penggunaan</b> <br />
              <v-icon>
                mdi-video
              </v-icon>
              <b>Video Pedoman Penggunaan</b>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex lg4 sm4 xs12 md6 style="display:flex;" class="justify-center">
          <v-card shaped :to="{ name: 'AnnouncementList' }">
            <v-card-title>
              <v-icon large left>
                mdi-information-outline
              </v-icon>
              <span class="title font-weight-light" style="padding-right:5px;"
                >Pemberitahuan</span
              >
            </v-card-title>
            <v-card-text class="headline font-weight-bold">
              Halaman Pemberitahuan merupakan halaman yang berisikan informasi
              mengenai segala hal seputar beasiswa di Universitas Pembangunan
              Jaya. <br />
              <b>
                <a :to="{ name: 'AnnouncementList' }" style="color: #757575;"
                  >Halaman Pemberitahuan
                  <v-icon style="color: #757575;">mdi-chevron-right</v-icon></a
                >
              </b>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex lg4 sm4 xs12 md6 style="display:flex;" class="justify-center">
          <v-card shaped>
            <v-card-title>
              <v-icon large left>
                mdi-file-multiple
              </v-icon>
              <span class="title font-weight-light" style="padding-right:5px;"
                >Ketentuan</span
              >
              <span class="title font-weight-light">Beasiswa</span>
            </v-card-title>
            <v-card-text class="headline font-weight-bold">
              Sebelum mengajukan Beasiswa Pembangunan Jaya, Anda harus melihat
              Syarat Ketentuan, Formulir Beasiswa dan Ketentuan CV untuk
              nantinya sebagai salah satu syarat dalam pengajuan beasiswa <br />
              <br />
              <router-link
                v-slot="{ href }"
                :to="{ name: 'TermConditionStudentsList' }"
              >
                <b>
                  <a :href="href" style="color: #757575;">
                    <v-icon style="color: #757575;">mdi-file-pdf</v-icon> Syarat
                    dan Ketentuan
                  </a>
                </b>
              </router-link>
              <br />
              <router-link
                v-slot="{ href }"
                :to="{ name: 'ScholarshipFormStudentsList' }"
              >
                <b>
                  <a :href="href" style="color: #757575;">
                    <v-icon style="color: #757575;">mdi-file-pdf</v-icon>
                    Formulir Beasiswa
                  </a>
                </b>
              </router-link>
              <br />
              <router-link
                v-slot="{ href }"
                :to="{ name: 'TempleteCVStudentsList' }"
              >
                <b>
                  <a :href="href" style="color: #757575;">
                    <v-icon style="color: #757575;">mdi-file-pdf</v-icon> Format
                    CV
                  </a>
                </b>
              </router-link>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex lg6 sm6 xs12 md6 style="display:flex;" class="justify-center">
          <v-card shaped :to="{ name: 'UploadScholarshipRequirementList' }">
            <v-card-title>
              <v-icon large left>
                mdi-school
              </v-icon>
              <span class="title font-weight-light" style="padding-right:5px;"
                >Beasiswa</span
              >
              <span class="title font-weight-light" style="padding-right:5px;"
                >Pembangunan</span
              >
              <span class="title font-weight-light">Jaya</span>
            </v-card-title>
            <v-card-text class="headline font-weight-bold">
              Halaman ini merupakan halaman yang digunakan untuk mengumpulkan
              seluruh berkas beasiswa yang diperlukan sebagai syarat wajib dalam
              pengajuan Beasiswa Pembangunan Jaya. <br />
              <b>
                <a
                  :to="{ name: 'UploadScholarshipRequirementList' }"
                  style="color: #757575;"
                  >Halaman Beasiswa Pembangunan Jaya
                  <v-icon style="color: #757575;">mdi-chevron-right</v-icon></a
                >
              </b>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex lg6 sm6 xs12 md12 style="display:flex;" class="justify-center">
          <v-card shaped :to="{ name: 'AnotherScholarshipRequirementList' }">
            <v-card-title>
              <v-icon large left>
                mdi-school
              </v-icon>
              <span class="title font-weight-light" style="padding-right:5px;"
                >Beasiswa</span
              >
              <span class="title font-weight-light">ASAK/DIKTI/BIDIKMISI</span>
            </v-card-title>
            <v-card-text>
              Sebelum mengajukan Beasiswa Pembangunan Jaya, Anda harus melihat
              Syarat Ketentuan, Formulir Beasiswa dan Ketentuan CV untuk
              nantinya sebagai salah satu syarat dalam pengajuan beasiswa <br />
              <b>
                <a
                  :to="{ name: 'AnotherScholarshipRequirementList' }"
                  style="color: #757575;"
                  >Halaman Beasiswa ASAK/DIKTI/BIDIKMISI
                  <v-icon style="color: #757575;">mdi-chevron-right</v-icon></a
                >
              </b>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- <v-row v-if="auth.user.level == 'student'">
      <v-col class="md-6 justify-center">
        <v-card>
          <v-toolbar flat color="#880E4F" dark>
            <v-toolbar-title>3. Membuka Pengumpulan Dokumen Beasiswa</v-toolbar-title>
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
            <a :href="
                ketentuanbeasiswamahasiswaData.ketentuan_beasiswa_mahasiswa
              ">
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
            <v-toolbar-title>3. Membuka Pengumpulan Dokumen Beasiswa</v-toolbar-title>
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
    </v-row> -->

    <!-- Akhir Mahasiswa -->

    <!-- Awal Juri -->
    <v-container v-if="auth.user.level == 'juri'" grid-list-md>
      <v-layout row wrap>
        <v-flex lg4 sm4 xs12 md4 style="display:flex;" class="justify-center">
          <v-card shaped>
            <v-card-title>
              <v-icon large left>
                mdi-help-circle-outline
              </v-icon>
              <span class="title font-weight-light" style="padding-right:5px;"
                >Pedoman</span
              >
              <span class="title font-weight-light">Penggunaan</span>
            </v-card-title>
            <v-card-text class="headline font-weight-bold">
              Pedoman atau tata cara dalam menggunakan website beasiswa
              pembangunan jaya dijelaskan pada bagian ini.
              <br />
              <br />
              <v-icon>
                mdi-file-pdf
              </v-icon>
              <b>Dokumen Pedoman Penggunaan</b> <br />
              <v-icon>
                mdi-video
              </v-icon>
              <b>Video Pedoman Penggunaan</b>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex lg4 sm4 xs12 md4 style="display:flex;" class="justify-center">
          <v-card shaped :to="{ name: 'PaperAssessmentList' }">
            <v-card-title>
              <v-icon large left>
                mdi-file-find
              </v-icon>
              <span class="title font-weight-light" style="padding-right:5px;"
                >Penilaian</span
              >
              <span class="title font-weight-light" style="padding-right:5px;"
                >Karya</span
              >
              <span class="title font-weight-light">Tulis</span>
            </v-card-title>
            <v-card-text class="headline font-weight-bold">
              Halaman Penilaian Karya Tulis merupakan halaman yang digunakan
              untuk menilai karya tulis mahasiswa yang telah dikumpulkan. <br />
              <b>
                <a :to="{ name: 'PaperAssessmentList' }" style="color: #757575;"
                  >Halaman Penilaian Karya Tulis
                  <v-icon style="color: #757575;">mdi-chevron-right</v-icon></a
                >
              </b>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex lg4 sm4 xs12 md4 style="display:flex;" class="justify-center">
          <v-card shaped :to="{ name: 'FgdAssessmentList' }">
            <v-card-title>
              <v-icon large left>
                mdi-file-find
              </v-icon>
              <span class="title font-weight-light" style="padding-right:5px;"
                >Penilaian</span
              >
              <span class="title font-weight-light">FGD</span>
            </v-card-title>
            <v-card-text class="headline font-weight-bold">
              Pada sesi presentasi Forum Group Discussion, halaman ini digunakan
              untuk memberikan penilaian kepada mahasiswa yang sedang melakukan
              presentasi. <br />
              <b>
                <a :to="{ name: 'FgdAssessmentList' }" style="color: #757575;"
                  >Halaman Penilaian FGD
                  <v-icon style="color: #757575;">mdi-chevron-right</v-icon></a
                >
              </b>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- Akhir Juri -->
    <!-- <v-row v-if="auth.user.level == 'juri'">
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
    </v-row> -->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  data() {
    return {};
  },
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
      {
        title: "Setting",
        route: "alert"
      },
      {
        title: this.title
      }
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
