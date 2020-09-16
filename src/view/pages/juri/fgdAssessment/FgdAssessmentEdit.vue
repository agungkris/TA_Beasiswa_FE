<template>
  <div class="row">
    <div class="row justify-center">
      <v-card class="mb-5 col-md-3">
        <v-col cols="12">
          <h4 class="text-center">
            ANAK AGUNG NGURAH KRISNANDA PUTRA
          </h4>
        </v-col>
        <v-row>
          <v-col cols="8">
            <v-subheader>Kemampuan menyampaikan pendapat</v-subheader>
          </v-col>
          <v-col cols="4">
            <v-text-field label="Skor" value=""></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-subheader>Kemampuan dalam menggali informasi</v-subheader>
          </v-col>
          <v-col cols="4">
            <v-text-field label="Skor" value=""></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-subheader>Berpartisipas aktif dalam memberikan ide</v-subheader>
          </v-col>
          <v-col cols="4">
            <v-text-field label="Skor" value=""></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-subheader>Tenang dalam menyampaikan informasi</v-subheader>
          </v-col>
          <v-col cols="4">
            <v-text-field label="Skor" value=""></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-subheader
              >Memberikan feedback atau saran yang kreatif dan
              konstruktif</v-subheader
            >
          </v-col>
          <v-col cols="4">
            <v-text-field label="Skor" value=""></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-subheader
              >Mendorong anggota kelompok (pasif) untuk memberikan ide
            </v-subheader>
          </v-col>
          <v-col cols="4">
            <v-text-field label="Skor" value=""></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-subheader>Menggunakan bahasa yang santun</v-subheader>
          </v-col>
          <v-col cols="4">
            <v-text-field label="Skor" value=""></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-subheader>Inisiatif dalam memulai diskusi</v-subheader>
          </v-col>
          <v-col cols="4">
            <v-text-field label="Skor" value=""></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-subheader>Memimpin proses diskusi (awal s.d akhir)</v-subheader>
          </v-col>
          <v-col cols="4">
            <v-text-field label="Skor" value=""></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-subheader
              >Membuat keputusan dan kesimpulan saat diskusi</v-subheader
            >
          </v-col>
          <v-col cols="4">
            <v-text-field label="Skor" value=""></v-text-field>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col cols="6" sm="6">
            <v-text-field
              v-model="last"
              label="Total Nilai"
              outlined
              disabled
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card>

      <v-card class="mb-5 col-md-3 ml-2">
        <v-col cols="12">
          <h4 class="text-center">
            ANAK AGUNG NGURAH KRISNANDA PUTRA
          </h4>
        </v-col>
        <v-row>
          <v-col cols="8">
            <v-subheader>Kemampuan menyampaikan pendapat</v-subheader>
          </v-col>
          <v-col cols="4">
            <v-text-field label="Skor" value=""></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-subheader>Kemampuan dalam menggali informasi</v-subheader>
          </v-col>
          <v-col cols="4">
            <v-text-field label="Skor" value=""></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-subheader>Berpartisipas aktif dalam memberikan ide</v-subheader>
          </v-col>
          <v-col cols="4">
            <v-text-field label="Skor" value=""></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-subheader>Tenang dalam menyampaikan informasi</v-subheader>
          </v-col>
          <v-col cols="4">
            <v-text-field label="Skor" value=""></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-subheader
              >Memberikan feedback atau saran yang kreatif dan
              konstruktif</v-subheader
            >
          </v-col>
          <v-col cols="4">
            <v-text-field label="Skor" value=""></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-subheader
              >Mendorong anggota kelompok (pasif) untuk memberikan ide
            </v-subheader>
          </v-col>
          <v-col cols="4">
            <v-text-field label="Skor" value=""></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-subheader>Menggunakan bahasa yang santun</v-subheader>
          </v-col>
          <v-col cols="4">
            <v-text-field label="Skor" value=""></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-subheader>Inisiatif dalam memulai diskusi</v-subheader>
          </v-col>
          <v-col cols="4">
            <v-text-field label="Skor" value=""></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-subheader>Memimpin proses diskusi (awal s.d akhir)</v-subheader>
          </v-col>
          <v-col cols="4">
            <v-text-field label="Skor" value=""></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-subheader
              >Membuat keputusan dan kesimpulan saat diskusi</v-subheader
            >
          </v-col>
          <v-col cols="4">
            <v-text-field label="Skor" value=""></v-text-field>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col cols="6" sm="6">
            <v-text-field
              v-model="last"
              label="Total Nilai"
              outlined
              disabled
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card>

      <v-card class="mb-5 col-md-3 ml-2">
        <v-col cols="12">
          <h4 class="text-center">
            ANAK AGUNG NGURAH KRISNANDA PUTRA
          </h4>
        </v-col>
        <v-row>
          <v-col cols="8">
            <v-subheader>Kemampuan menyampaikan pendapat</v-subheader>
          </v-col>
          <v-col cols="4">
            <v-text-field label="Skor" value=""></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-subheader>Kemampuan dalam menggali informasi</v-subheader>
          </v-col>
          <v-col cols="4">
            <v-text-field label="Skor" value=""></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-subheader>Berpartisipas aktif dalam memberikan ide</v-subheader>
          </v-col>
          <v-col cols="4">
            <v-text-field label="Skor" value=""></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-subheader>Tenang dalam menyampaikan informasi</v-subheader>
          </v-col>
          <v-col cols="4">
            <v-text-field label="Skor" value=""></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-subheader
              >Memberikan feedback atau saran yang kreatif dan
              konstruktif</v-subheader
            >
          </v-col>
          <v-col cols="4">
            <v-text-field label="Skor" value=""></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-subheader
              >Mendorong anggota kelompok (pasif) untuk memberikan ide
            </v-subheader>
          </v-col>
          <v-col cols="4">
            <v-text-field label="Skor" value=""></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-subheader>Menggunakan bahasa yang santun</v-subheader>
          </v-col>
          <v-col cols="4">
            <v-text-field label="Skor" value=""></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-subheader>Inisiatif dalam memulai diskusi</v-subheader>
          </v-col>
          <v-col cols="4">
            <v-text-field label="Skor" value=""></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-subheader>Memimpin proses diskusi (awal s.d akhir)</v-subheader>
          </v-col>
          <v-col cols="4">
            <v-text-field label="Skor" value=""></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-subheader
              >Membuat keputusan dan kesimpulan saat diskusi</v-subheader
            >
          </v-col>
          <v-col cols="4">
            <v-text-field label="Skor" value=""></v-text-field>
          </v-col>
        </v-row>

        <v-row class="justify-center">
          <v-col cols="6" sm="6">
            <v-text-field
              v-model="last"
              label="Total Nilai"
              outlined
              disabled
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card>

      <div class="row justify-center">
        <v-card class="mb-5 col-md-3">
          <v-col cols="12">
            <h4 class="text-center">
              ANAK AGUNG NGURAH KRISNANDA PUTRA
            </h4>
          </v-col>
          <v-row>
            <v-col cols="8">
              <v-subheader>Kemampuan menyampaikan pendapat</v-subheader>
            </v-col>
            <v-col cols="4">
              <v-text-field label="Skor" value=""></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8">
              <v-subheader>Kemampuan dalam menggali informasi</v-subheader>
            </v-col>
            <v-col cols="4">
              <v-text-field label="Skor" value=""></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8">
              <v-subheader
                >Berpartisipas aktif dalam memberikan ide</v-subheader
              >
            </v-col>
            <v-col cols="4">
              <v-text-field label="Skor" value=""></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8">
              <v-subheader>Tenang dalam menyampaikan informasi</v-subheader>
            </v-col>
            <v-col cols="4">
              <v-text-field label="Skor" value=""></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8">
              <v-subheader
                >Memberikan feedback atau saran yang kreatif dan
                konstruktif</v-subheader
              >
            </v-col>
            <v-col cols="4">
              <v-text-field label="Skor" value=""></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8">
              <v-subheader
                >Mendorong anggota kelompok (pasif) untuk memberikan ide
              </v-subheader>
            </v-col>
            <v-col cols="4">
              <v-text-field label="Skor" value=""></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8">
              <v-subheader>Menggunakan bahasa yang santun</v-subheader>
            </v-col>
            <v-col cols="4">
              <v-text-field label="Skor" value=""></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8">
              <v-subheader>Inisiatif dalam memulai diskusi</v-subheader>
            </v-col>
            <v-col cols="4">
              <v-text-field label="Skor" value=""></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8">
              <v-subheader
                >Memimpin proses diskusi (awal s.d akhir)</v-subheader
              >
            </v-col>
            <v-col cols="4">
              <v-text-field label="Skor" value=""></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8">
              <v-subheader
                >Membuat keputusan dan kesimpulan saat diskusi</v-subheader
              >
            </v-col>
            <v-col cols="4">
              <v-text-field label="Skor" value=""></v-text-field>
            </v-col>
          </v-row>
          <v-row class="justify-center">
            <v-col cols="6" sm="6">
              <v-text-field
                v-model="last"
                label="Total Nilai"
                outlined
                disabled
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card>
        <v-card class="mb-5 col-md-3 ml-2">
          <v-col cols="12">
            <h4 class="text-center">
              ANAK AGUNG NGURAH KRISNANDA PUTRA
            </h4>
          </v-col>
          <v-row>
            <v-col cols="8">
              <v-subheader>Kemampuan menyampaikan pendapat</v-subheader>
            </v-col>
            <v-col cols="4">
              <v-text-field label="Skor" value=""></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8">
              <v-subheader>Kemampuan dalam menggali informasi</v-subheader>
            </v-col>
            <v-col cols="4">
              <v-text-field label="Skor" value=""></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8">
              <v-subheader
                >Berpartisipas aktif dalam memberikan ide</v-subheader
              >
            </v-col>
            <v-col cols="4">
              <v-text-field label="Skor" value=""></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8">
              <v-subheader>Tenang dalam menyampaikan informasi</v-subheader>
            </v-col>
            <v-col cols="4">
              <v-text-field label="Skor" value=""></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8">
              <v-subheader
                >Memberikan feedback atau saran yang kreatif dan
                konstruktif</v-subheader
              >
            </v-col>
            <v-col cols="4">
              <v-text-field label="Skor" value=""></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8">
              <v-subheader
                >Mendorong anggota kelompok (pasif) untuk memberikan ide
              </v-subheader>
            </v-col>
            <v-col cols="4">
              <v-text-field label="Skor" value=""></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8">
              <v-subheader>Menggunakan bahasa yang santun</v-subheader>
            </v-col>
            <v-col cols="4">
              <v-text-field label="Skor" value=""></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8">
              <v-subheader>Inisiatif dalam memulai diskusi</v-subheader>
            </v-col>
            <v-col cols="4">
              <v-text-field label="Skor" value=""></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8">
              <v-subheader
                >Memimpin proses diskusi (awal s.d akhir)</v-subheader
              >
            </v-col>
            <v-col cols="4">
              <v-text-field label="Skor" value=""></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8">
              <v-subheader
                >Membuat keputusan dan kesimpulan saat diskusi</v-subheader
              >
            </v-col>
            <v-col cols="4">
              <v-text-field label="Skor" value=""></v-text-field>
            </v-col>
          </v-row>
          <v-row class="justify-center">
            <v-col cols="6" sm="6">
              <v-text-field
                v-model="last"
                label="Total Nilai"
                outlined
                disabled
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card>
      </div>

      <v-col cols="12" sm="12" class="text-center">
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4 mt-2"
          @click="validate"
        >
          Selesai
        </v-btn>

        <v-btn color="error" class="mr-4 mt-2" @click="reset">
          Reset
        </v-btn>
      </v-col>
    </div>
  </div>
</template>
<script></script>
