/*
 * BANK SOAL — THE LAST LESSON: KUTUKAN TIGA BAB
 * Sumber: Buku Koding dan KA Kelas X, BAB 1-3.
 *
 * CARA MENGEDIT (guru):
 *  - Ubah/tambah objek di dalam array "soal". Biarkan baris "window.BANK_SOAL =" di atas dan ";" di akhir.
 *  - Wajib: id unik, bab (1/2/3), topik, kesulitan ("mudah"/"sedang"/"menantang"),
 *    pertanyaan, tepat 4 pilihan, jawaban (indeks 0-3), penjelasan, acuan. "kode" opsional.
 *  - Gunakan tanda kutip ganda dan pisahkan setiap soal dengan koma (format JSON).
 *  - Periksa dengan: npm run validate:bank
 *  - Tidak perlu build ulang: cukup simpan file ini lalu muat ulang halaman game.
 */
window.BANK_SOAL = {
  "versi": 1,
  "judul": "Bank Soal THE LAST LESSON: KUTUKAN TIGA BAB",
  "sumber": "Buku Koding dan KA Kelas X (Bismillah Fix Buku Koding dan KA Kelas X.docx), BAB 1-3",
  "petunjuk_guru": "Edit file data/bank-soal.js. Wajib: id unik, bab (1/2/3), topik, kesulitan (mudah/sedang/menantang), pertanyaan, tepat 4 pilihan, jawaban (indeks 0-3), penjelasan, acuan. kode opsional. Urutan pilihan diacak otomatis oleh game.",
  "soal": [
    {
      "id": "B1-01",
      "bab": 1,
      "topik": "Definisi berpikir komputasional",
      "kesulitan": "mudah",
      "pertanyaan": "Menurut Wing (2006), berpikir komputasional adalah...",
      "pilihan": [
        "Cara berpikir untuk memecahkan masalah menggunakan konsep dasar ilmu komputer",
        "Kemampuan menghafal kode program dengan cepat",
        "Keterampilan mengoperasikan perangkat komputer secara mahir",
        "Keahlian eksklusif yang hanya dimiliki programmer profesional"
      ],
      "jawaban": 0,
      "penjelasan": "Wing (2006) mendefinisikan berpikir komputasional sebagai proses berpikir untuk memecahkan masalah, merancang sistem, dan memahami perilaku manusia dengan konsep dasar ilmu komputer. Bukan soal menghafal kode atau mahir mengoperasikan komputer.",
      "acuan": "BAB 1, B.1 Definisi dan Sejarah"
    },
    {
      "id": "B1-02",
      "bab": 1,
      "topik": "Dekomposisi",
      "kesulitan": "mudah",
      "pertanyaan": "Seorang siswa membagi tugas membuat majalah sekolah menjadi riset, penulisan, desain, layout, dan distribusi. Tahapan berpikir komputasional yang diterapkan adalah...",
      "pilihan": [
        "Dekomposisi",
        "Abstraksi",
        "Algoritma",
        "Pengenalan pola"
      ],
      "jawaban": 0,
      "penjelasan": "Dekomposisi berarti memecah masalah besar menjadi sub-masalah yang lebih kecil. Proyek majalah dipecah menjadi bagian-bagian yang lebih mudah dikelola.",
      "acuan": "BAB 1, B.2 Empat Tahapan Berpikir Komputasional (tabel Dekomposisi)"
    },
    {
      "id": "B1-03",
      "bab": 1,
      "topik": "Pengenalan pola",
      "kesulitan": "sedang",
      "pertanyaan": "Spotify merekomendasikan lagu berdasarkan riwayat dengar pengguna. Tahapan berpikir komputasional yang paling dominan adalah...",
      "pilihan": [
        "Pengenalan pola",
        "Dekomposisi",
        "Abstraksi",
        "Debugging"
      ],
      "jawaban": 0,
      "penjelasan": "Sistem rekomendasi mencari kesamaan dan keteraturan dalam riwayat dengar. Menemukan keteraturan seperti itu adalah pengenalan pola.",
      "acuan": "BAB 1, B.2 Empat Tahapan Berpikir Komputasional; Uji Kompetensi no. 5"
    },
    {
      "id": "B1-04",
      "bab": 1,
      "topik": "Abstraksi",
      "kesulitan": "sedang",
      "pertanyaan": "Dalam peta navigasi digital, warna cat rumah dan nama pemilik toko tidak dimasukkan, tetapi nama jalan, jarak, dan landmark utama dipertahankan. Ini penerapan...",
      "pilihan": [
        "Abstraksi",
        "Dekomposisi",
        "Pengenalan pola",
        "Algoritma"
      ],
      "jawaban": 0,
      "penjelasan": "Abstraksi menyaring informasi esensial dan mengabaikan detail yang tidak relevan. Contoh di buku: peta navigasi fokus pada jalan dan nama, abaikan warna bangunan.",
      "acuan": "BAB 1, B.2 Empat Tahapan Berpikir Komputasional (tabel Abstraksi)"
    },
    {
      "id": "B1-05",
      "bab": 1,
      "topik": "Ciri algoritma",
      "kesulitan": "mudah",
      "pertanyaan": "Sifat yang TIDAK dimiliki algoritma yang baik adalah...",
      "pilihan": [
        "Acak dan tidak berurutan",
        "Jelas dan tidak ambigu",
        "Terbatas (pasti berakhir)",
        "Terurut (langkahnya logis dan berurutan)"
      ],
      "jawaban": 0,
      "penjelasan": "Glosarium buku: algoritma adalah serangkaian instruksi yang jelas, terbatas, dan terurut. Langkah yang acak dan tidak berurutan justru bukan algoritma yang baik.",
      "acuan": "BAB 1, K. Glosarium (Algoritma); Uji Kompetensi no. 7"
    },
    {
      "id": "B1-06",
      "bab": 1,
      "topik": "Flowchart",
      "kesulitan": "mudah",
      "pertanyaan": "Representasi visual dari algoritma yang menggunakan simbol standar seperti oval, kotak, dan belah ketupat disebut...",
      "pilihan": [
        "Flowchart",
        "Pseudocode",
        "Source code",
        "Mind map"
      ],
      "jawaban": 0,
      "penjelasan": "Flowchart adalah diagram visual alur algoritma menggunakan simbol standar. Pseudocode adalah representasi tertulis, bukan visual.",
      "acuan": "BAB 1, K. Glosarium (Flowchart); J. Rangkuman Bab"
    },
    {
      "id": "B1-07",
      "bab": 1,
      "topik": "Flowchart",
      "kesulitan": "sedang",
      "pertanyaan": "Simbol belah ketupat (diamond) dalam flowchart digunakan untuk...",
      "pilihan": [
        "Merepresentasikan percabangan atau keputusan",
        "Menandai awal dan akhir program",
        "Menunjukkan proses atau operasi",
        "Menampilkan input/output"
      ],
      "jawaban": 0,
      "penjelasan": "Belah ketupat dipakai untuk keputusan (percabangan), misalnya 'nilai >= KKM?' yang punya jalur Ya dan Tidak. Awal/akhir memakai oval, proses memakai kotak.",
      "acuan": "BAB 1, E. Praktik F1 Menyusun Algoritma dan Flowchart; Uji Kompetensi no. 9"
    },
    {
      "id": "B1-08",
      "bab": 1,
      "topik": "Hubungan CT, koding, dan KA",
      "kesulitan": "sedang",
      "pertanyaan": "Analogi yang PALING TEPAT untuk hubungan berpikir komputasional, koding, dan KA adalah...",
      "pilihan": [
        "Arsitek (denah), tukang bangunan (konstruksi), dan sistem otomasi rumah pintar",
        "Pena, tinta, dan kertas",
        "Guru, buku, dan ujian",
        "Motor, bensin, dan helm"
      ],
      "jawaban": 0,
      "penjelasan": "Buku memakai analogi tiga lapisan: CT sebagai fondasi (arsitek merancang denah), koding sebagai jembatan (tukang membangun), dan KA sebagai puncak (sistem otomasi rumah pintar).",
      "acuan": "BAB 1, C. Hubungan Berpikir Komputasional, Koding, dan KA"
    },
    {
      "id": "B1-09",
      "bab": 1,
      "topik": "Hubungan CT, koding, dan KA",
      "kesulitan": "sedang",
      "pertanyaan": "Dalam ekosistem teknologi modern, koding berperan sebagai 'jembatan'. Artinya koding...",
      "pilihan": [
        "Menerjemahkan logika menjadi instruksi yang dipahami mesin",
        "Belajar dari data dan membuat keputusan secara mandiri",
        "Menghasilkan logika dan rancangan solusi pertama kali",
        "Menggantikan kebutuhan berpikir komputasional"
      ],
      "jawaban": 0,
      "penjelasan": "Pada tabel lapisan, koding (jembatan) menerjemahkan logika menjadi instruksi yang dipahami mesin. Belajar dari data adalah peran KA (puncak), sedangkan merancang logika adalah peran CT (fondasi).",
      "acuan": "BAB 1, C. Hubungan Berpikir Komputasional, Koding, dan KA (tabel Lapisan)"
    },
    {
      "id": "B1-10",
      "bab": 1,
      "topik": "Sejarah dan kebijakan CT",
      "kesulitan": "mudah",
      "pertanyaan": "Kemendikbudristek (2022) menjadikan berpikir komputasional sebagai kompetensi inti dari...",
      "pilihan": [
        "Literasi digital",
        "Literasi finansial",
        "Literasi budaya",
        "Literasi sains"
      ],
      "jawaban": 0,
      "penjelasan": "Buku menyebut Kemendikbudristek (2022) menjadikan berpikir komputasional sebagai kompetensi inti literasi digital bagi siswa SMA, bekal menghadapi era Society 5.0.",
      "acuan": "BAB 1, B.1 Definisi dan Sejarah"
    },
    {
      "id": "B1-11",
      "bab": 1,
      "topik": "Penerapan tahapan CT",
      "kesulitan": "menantang",
      "pertanyaan": "Seorang dokter mencatat gejala pasien (demam tinggi, batuk kering, kehilangan penciuman) dan mengabaikan detail yang tidak relevan, lalu mencocokkannya dengan database penyakit. Tahapan CT yang paling dominan adalah...",
      "pilihan": [
        "Pengenalan pola dan abstraksi",
        "Dekomposisi dan algoritma",
        "Algoritma dan evaluasi",
        "Debugging dan optimasi"
      ],
      "jawaban": 0,
      "penjelasan": "Mencocokkan kumpulan gejala dengan penyakit adalah pengenalan pola. Memilih gejala yang penting dan mengabaikan detail tak relevan adalah abstraksi.",
      "acuan": "BAB 1, B.2 Empat Tahapan Berpikir Komputasional; Uji Kompetensi no. 12"
    },
    {
      "id": "B1-12",
      "bab": 1,
      "topik": "Pengenalan pola",
      "kesulitan": "menantang",
      "pertanyaan": "OSIS mengamati antrean kantin selalu paling panjang setiap Senin dan Rabu pukul 10.00-10.30, lalu merancang sistem reservasi slot makan. Langkah CT yang PERTAMA mereka lakukan adalah...",
      "pilihan": [
        "Mengenali pola waktu antrean puncak",
        "Merancang algoritma reservasi",
        "Membuat flowchart antrean",
        "Mendekomposisi sistem kasir"
      ],
      "jawaban": 0,
      "penjelasan": "Pengamatan 'selalu Senin dan Rabu pukul 10.00-10.30' adalah keteraturan yang berulang. Menemukan keteraturan itu adalah pengenalan pola, dan itulah dasar rancangan reservasi.",
      "acuan": "BAB 1, B.2 Empat Tahapan Berpikir Komputasional; Uji Kompetensi no. 13"
    },
    {
      "id": "B1-13",
      "bab": 1,
      "topik": "Sejarah CT",
      "kesulitan": "mudah",
      "pertanyaan": "Ada Lovelace dikenal sebagai programmer pertama di dunia karena...",
      "pilihan": [
        "Menulis algoritma untuk mesin analitik Babbage sebelum komputer fisik modern ada",
        "Menciptakan komputer pertama bersama Charles Babbage",
        "Menemukan bahasa pemrograman Python",
        "Merancang konsep Mesin Turing"
      ],
      "jawaban": 0,
      "penjelasan": "Ada Lovelace (1843) menulis algoritma pertama untuk mesin analitik Charles Babbage. Konsep Mesin Turing dirancang Alan Turing (1936).",
      "acuan": "BAB 1, B.1 Definisi dan Sejarah (tabel Tokoh); Tahukah Kamu?"
    },
    {
      "id": "B1-14",
      "bab": 1,
      "topik": "CT dalam kehidupan sehari-hari",
      "kesulitan": "sedang",
      "pertanyaan": "Sistem irigasi Subak di Bali dianggap contoh berpikir komputasional karena...",
      "pilihan": [
        "Menerapkan prinsip dekomposisi dan algoritma dalam mengatur air sawah secara sistematis",
        "Menggunakan teknologi komputer modern",
        "Dirancang oleh programmer profesional",
        "Memakai sensor digital untuk mendeteksi tinggi air"
      ],
      "jawaban": 0,
      "penjelasan": "Subak sudah dipakai ribuan tahun tanpa komputer. Ia tetap contoh CT karena membagi pengelolaan air (dekomposisi) dan menjalankan langkah teratur (algoritma). CT tidak bergantung pada komputer.",
      "acuan": "BAB 1, A. Pengantar Bab (Tahukah Kamu?)"
    },
    {
      "id": "B1-15",
      "bab": 1,
      "topik": "Urutan tahapan CT",
      "kesulitan": "menantang",
      "pertanyaan": "Siswa ingin membuat aplikasi pengingat jadwal sholat. Urutan tahapan CT yang PALING TEPAT adalah...",
      "pilihan": [
        "Dekomposisi (fitur apa saja) → Pola (jadwal berulang) → Abstraksi (data lokasi dan waktu) → Algoritma (hitung dan tampilkan pengingat)",
        "Algoritma → Abstraksi → Pola → Dekomposisi",
        "Abstraksi → Dekomposisi → Algoritma → Pola",
        "Pola → Algoritma → Dekomposisi → Abstraksi"
      ],
      "jawaban": 0,
      "penjelasan": "Urutan empat tahapan di buku: dekomposisi, pengenalan pola, abstraksi, lalu algoritma. Masalah dipecah dulu, keteraturannya dicari, informasi penting disaring, baru langkah solusi disusun.",
      "acuan": "BAB 1, B.2 Empat Tahapan Berpikir Komputasional; Uji Kompetensi no. 20"
    },
    {
      "id": "B1-16",
      "bab": 1,
      "topik": "Manfaat CT di era KA",
      "kesulitan": "sedang",
      "pertanyaan": "Menurut proyeksi WEF (2024) yang dikutip buku, perkembangan KA akan menyebabkan...",
      "pilihan": [
        "85 juta pekerjaan tergantikan KA, tetapi 97 juta pekerjaan baru tercipta",
        "Seluruh pekerjaan manusia tergantikan mesin",
        "Tidak ada pekerjaan baru yang tercipta",
        "Hanya pekerjaan fisik yang tergantikan KA"
      ],
      "jawaban": 0,
      "penjelasan": "Tabel manfaat CT mencatat proyeksi WEF (2024): 85 juta pekerjaan tergantikan KA dan 97 juta pekerjaan baru tercipta. Karena itu kesiapan karier lewat CT penting.",
      "acuan": "BAB 1, D. Manfaat dan Aplikasi (no. 4)"
    },
    {
      "id": "B1-17",
      "bab": 1,
      "topik": "Algoritma dan percabangan",
      "kesulitan": "menantang",
      "pertanyaan": "Dalam algoritma membuat kopi tubruk terdapat langkah \"JIKA (ingin gula) MAKA masukkan gula sesuai selera\". Dalam pemrograman, langkah ini setara dengan...",
      "pilihan": [
        "Struktur percabangan if-else",
        "Struktur perulangan for",
        "Proses abstraksi data",
        "Dekomposisi masalah"
      ],
      "jawaban": 0,
      "penjelasan": "Analisis CT di contoh kopi tubruk menyebut 'JIKA ingin gula' sebagai struktur if-else: langkah dijalankan hanya bila kondisinya terpenuhi.",
      "acuan": "BAB 1, E. Praktik F1 (Contoh: Algoritma Membuat Kopi Tubruk)"
    },
    {
      "id": "B1-18",
      "bab": 1,
      "topik": "Pseudocode",
      "kesulitan": "sedang",
      "pertanyaan": "Penulisan algoritma dalam bahasa sehari-hari yang menyerupai kode program disebut...",
      "pilihan": [
        "Pseudocode",
        "Flowchart",
        "Abstraksi",
        "Debugging"
      ],
      "jawaban": 0,
      "penjelasan": "Glosarium: pseudocode adalah penulisan algoritma dalam bahasa sehari-hari yang menyerupai kode program. Flowchart adalah versi visualnya.",
      "acuan": "BAB 1, K. Glosarium (Pseudocode)"
    },
    {
      "id": "B1-19",
      "bab": 1,
      "topik": "Abstraksi",
      "kesulitan": "sedang",
      "pertanyaan": "Pada analisis algoritma kopi tubruk, keputusan untuk mengabaikan merek kopi dan warna cangkir termasuk tahapan...",
      "pilihan": [
        "Abstraksi",
        "Pengenalan pola",
        "Algoritma",
        "Dekomposisi"
      ],
      "jawaban": 0,
      "penjelasan": "Merek kopi dan warna cangkir tidak memengaruhi cara membuat kopi. Mengabaikan detail tidak relevan seperti itu adalah abstraksi.",
      "acuan": "BAB 1, E. Praktik F1 (Analisis CT kopi tubruk)"
    },
    {
      "id": "B1-20",
      "bab": 1,
      "topik": "Karakteristik CT",
      "kesulitan": "mudah",
      "pertanyaan": "Pernyataan yang PALING TEPAT tentang berpikir komputasional adalah...",
      "pilihan": [
        "Berguna di semua bidang kehidupan, tidak hanya teknologi",
        "Hanya dapat dilakukan di depan komputer",
        "Eksklusif untuk jurusan ilmu komputer",
        "Identik dengan kemampuan coding"
      ],
      "jawaban": 0,
      "penjelasan": "Buku menegaskan CT bukan keterampilan eksklusif programmer. Dokter, koki, dan atlet pun berpikir komputasional.",
      "acuan": "BAB 1, A. Pengantar Bab; J. Rangkuman Bab"
    },
    {
      "id": "B2-01",
      "bab": 2,
      "topik": "Konsep pemrograman",
      "kesulitan": "mudah",
      "pertanyaan": "Pemrograman adalah...",
      "pilihan": [
        "Proses menulis, menguji, dan memperbaiki kode agar komputer menjalankan tugas tertentu",
        "Proses merancang antarmuka pengguna yang menarik",
        "Proses menginstal dan mengonfigurasi sistem operasi",
        "Proses mendesain arsitektur perangkat keras komputer"
      ],
      "jawaban": 0,
      "penjelasan": "Rangkuman Bab 2: pemrograman adalah proses menulis, menguji, dan memperbaiki kode agar komputer menjalankan tugas secara otomatis.",
      "acuan": "BAB 2, J. Rangkuman Bab; Uji Kompetensi no. 1"
    },
    {
      "id": "B2-02",
      "bab": 2,
      "topik": "Fungsi (prinsip DRY)",
      "kesulitan": "sedang",
      "pertanyaan": "Prinsip \"DRY\" dalam pemrograman berarti...",
      "pilihan": [
        "Don't Repeat Yourself: hindari menulis kode yang sama berulang kali",
        "Data Retrieval Yearly: ambil data sekali setahun",
        "Delete Redundant Yields: hapus output yang tidak perlu",
        "Debug Repeatedly Yesterday: debug kode berulang kali"
      ],
      "jawaban": 0,
      "penjelasan": "Fungsi mengorganisir kode agar reusable dan terstruktur sesuai prinsip DRY (Don't Repeat Yourself).",
      "acuan": "BAB 2, J. Rangkuman Bab; Uji Kompetensi no. 2"
    },
    {
      "id": "B2-03",
      "bab": 2,
      "topik": "Input-Process-Output",
      "kesulitan": "mudah",
      "pertanyaan": "Dalam model IPO, bagian \"Process\" berfungsi untuk...",
      "pilihan": [
        "Mengolah data input dengan logika, kalkulasi, atau algoritma",
        "Menerima masukan dari pengguna atau sensor",
        "Menampilkan hasil akhir kepada pengguna",
        "Menghapus data yang tidak digunakan dari memori"
      ],
      "jawaban": 0,
      "penjelasan": "Process adalah operasi atau kalkulasi yang dilakukan program, misalnya membandingkan nilai dengan KKM. Analogi buku: proses memasak.",
      "acuan": "BAB 2, C. Logika Program: Input – Proses – Output"
    },
    {
      "id": "B2-04",
      "bab": 2,
      "topik": "Tipe data Python",
      "kesulitan": "mudah",
      "pertanyaan": "Tipe data Python untuk menyimpan nilai True atau False disebut...",
      "pilihan": [
        "boolean (bool)",
        "integer (int)",
        "string (str)",
        "float"
      ],
      "jawaban": 0,
      "penjelasan": "Boolean (bool) hanya punya dua nilai: True atau False. Contoh di buku: sudah_lulus = True.",
      "acuan": "BAB 2, C. Variabel dan Tipe Data; K. Glosarium (Boolean)"
    },
    {
      "id": "B2-05",
      "bab": 2,
      "topik": "Tipe data Python",
      "kesulitan": "mudah",
      "pertanyaan": "Perhatikan kode berikut. Tipe data variabel tinggi adalah...",
      "kode": "tinggi = 1.72",
      "pilihan": [
        "float",
        "int",
        "str",
        "bool"
      ],
      "jawaban": 0,
      "penjelasan": "1.72 adalah bilangan desimal sehingga bertipe float. int untuk bilangan bulat seperti 85, str untuk teks seperti \"Budi Santoso\".",
      "acuan": "BAB 2, C. Variabel dan Tipe Data (contoh kode)"
    },
    {
      "id": "B2-06",
      "bab": 2,
      "topik": "Perulangan for",
      "kesulitan": "sedang",
      "pertanyaan": "Perulangan berikut akan dijalankan sebanyak...",
      "kode": "for i in range(1, 6):\n    print(i)",
      "pilihan": [
        "5 kali (i = 1 sampai 5)",
        "6 kali (i = 0 sampai 5)",
        "6 kali (i = 1 sampai 6)",
        "4 kali (i = 1 sampai 4)"
      ],
      "jawaban": 0,
      "penjelasan": "range(1, 6) dimulai dari 1 dan berhenti sebelum 6, jadi i bernilai 1, 2, 3, 4, 5. Totalnya 5 kali.",
      "acuan": "BAB 2, C. Perulangan dan Fungsi; Uji Kompetensi no. 6"
    },
    {
      "id": "B2-07",
      "bab": 2,
      "topik": "Perulangan for dan while",
      "kesulitan": "sedang",
      "pertanyaan": "Perbedaan utama for loop dan while loop adalah...",
      "pilihan": [
        "for dipakai saat jumlah pengulangan diketahui; while dipakai untuk mengulang selama kondisi terpenuhi",
        "for selalu lebih cepat daripada while",
        "while tidak bisa dihentikan, for bisa",
        "for hanya untuk angka, while hanya untuk teks"
      ],
      "jawaban": 0,
      "penjelasan": "for cocok untuk mengulang sejumlah data atau kali yang diketahui (misalnya daftar nilai kelas). while mengulang selama kondisi bernilai True, seperti while True pada program cek nilai.",
      "acuan": "BAB 2, C. Perulangan dan Fungsi; J. Rangkuman Bab; Uji Kompetensi no. 7"
    },
    {
      "id": "B2-08",
      "bab": 2,
      "topik": "Fungsi",
      "kesulitan": "sedang",
      "pertanyaan": "Manfaat utama menggunakan fungsi dalam pemrograman adalah...",
      "pilihan": [
        "Menghindari penulisan kode yang sama berulang dan membuat kode lebih terstruktur",
        "Membuat program berjalan lebih lambat tapi lebih aman",
        "Mencegah semua jenis error secara otomatis",
        "Membuat program berjalan di dua komputer sekaligus"
      ],
      "jawaban": 0,
      "penjelasan": "Fungsi adalah blok kode bernama yang dapat dipanggil berulang kali. Hasilnya kode reusable dan terstruktur. Fungsi tidak mencegah error secara otomatis.",
      "acuan": "BAB 2, K. Glosarium (Fungsi); J. Rangkuman Bab"
    },
    {
      "id": "B2-09",
      "bab": 2,
      "topik": "Debugging: jenis error",
      "kesulitan": "sedang",
      "pertanyaan": "Program berjalan tanpa pesan error, tetapi output-nya salah. Jenis error ini disebut...",
      "pilihan": [
        "Logic Error",
        "Syntax Error",
        "Runtime Error",
        "Import Error"
      ],
      "jawaban": 0,
      "penjelasan": "Logic Error: program selesai tetapi output salah, misalnya memakai >= 70 padahal KKM 75. Error ini paling sulit dideteksi karena tidak ada pesan error.",
      "acuan": "BAB 2, E. Debugging (tabel Jenis Error)"
    },
    {
      "id": "B2-10",
      "bab": 2,
      "topik": "Debugging: try-except",
      "kesulitan": "sedang",
      "pertanyaan": "Perintah try-except dalam Python digunakan untuk...",
      "pilihan": [
        "Menangani kemungkinan error agar program tidak crash",
        "Menjalankan dua versi kode sekaligus",
        "Membuat percabangan if-else yang lebih kompleks",
        "Mengulang kode sampai tidak ada error"
      ],
      "jawaban": 0,
      "penjelasan": "Tabel debugging menyarankan try-except dan validasi input untuk mengatasi Runtime Error, misalnya pembagian dengan nol.",
      "acuan": "BAB 2, E. Debugging (Runtime Error, cara mengatasi)"
    },
    {
      "id": "B2-11",
      "bab": 2,
      "topik": "Simulasi Arduino",
      "kesulitan": "sedang",
      "pertanyaan": "Pada simulasi Smart Lamp di Tinkercad, fungsi void setup() pada Arduino dijalankan...",
      "pilihan": [
        "Hanya sekali saat Arduino pertama kali dinyalakan",
        "Terus-menerus selama Arduino menyala",
        "Setiap 1 detik secara otomatis",
        "Hanya saat nilai sensor berubah"
      ],
      "jawaban": 0,
      "penjelasan": "Rangkuman Bab 2: setup() berjalan sekali, sedangkan loop() berjalan terus-menerus seperti while(True).",
      "acuan": "BAB 2, D4 Simulasi Smart Lamp Otomatis; J. Rangkuman Bab"
    },
    {
      "id": "B2-12",
      "bab": 2,
      "topik": "Simulasi Arduino (percabangan)",
      "kesulitan": "menantang",
      "pertanyaan": "Pada kode Smart Lamp, LED menyala jika nilaiSensor < AMBANG. Jika AMBANG diubah dari 300 menjadi 600, yang terjadi adalah...",
      "kode": "if (nilaiSensor < AMBANG) {\n  digitalWrite(LED_PIN, HIGH);\n} else {\n  digitalWrite(LED_PIN, LOW);\n}",
      "pilihan": [
        "LED lebih mudah menyala, bahkan saat kondisi agak terang",
        "LED butuh kondisi yang lebih gelap untuk menyala",
        "LED menyala lebih redup",
        "Program Arduino berhenti bekerja"
      ],
      "jawaban": 0,
      "penjelasan": "LED menyala ketika nilaiSensor < AMBANG. Dengan AMBANG 600, nilai sensor 300-599 (kondisi agak terang) kini juga memenuhi syarat, sehingga LED lebih mudah menyala. LED tidak menjadi lebih redup karena digitalWrite hanya HIGH atau LOW.",
      "acuan": "BAB 2, D4 Simulasi Smart Lamp Otomatis (kode); Uji Kompetensi no. 13"
    },
    {
      "id": "B2-13",
      "bab": 2,
      "topik": "Debugging: jenis error",
      "kesulitan": "sedang",
      "pertanyaan": "Program kalkulator berhenti mendadak dengan pesan ZeroDivisionError saat pengguna membagi angka dengan 0. Jenis error ini adalah...",
      "pilihan": [
        "Runtime Error",
        "Syntax Error",
        "Logic Error",
        "Bukan error"
      ],
      "jawaban": 0,
      "penjelasan": "Runtime Error terjadi saat program sedang berjalan. Contoh di buku: bagi angka dengan 0 (ZeroDivisionError). Atasi dengan try-except atau validasi input.",
      "acuan": "BAB 2, E. Debugging (tabel Jenis Error)"
    },
    {
      "id": "B2-14",
      "bab": 2,
      "topik": "Debugging: jenis error",
      "kesulitan": "mudah",
      "pertanyaan": "Programmer lupa menulis tanda titik dua (:) setelah if. Error yang muncul adalah...",
      "kode": "if nilai >= 75\n    print(\"LULUS\")",
      "pilihan": [
        "Syntax Error",
        "Runtime Error",
        "Logic Error",
        "IndexError"
      ],
      "jawaban": 0,
      "penjelasan": "Lupa ':' setelah if melanggar aturan penulisan Python, jadi termasuk Syntax Error. Perbaiki dengan membaca pesan error lalu membetulkan penulisannya.",
      "acuan": "BAB 2, E. Debugging (tabel Jenis Error); K. Glosarium (Syntax Error)"
    },
    {
      "id": "B2-15",
      "bab": 2,
      "topik": "List (indeks)",
      "kesulitan": "sedang",
      "pertanyaan": "Untuk mengambil nilai 90 dari list berikut, kode yang tepat adalah...",
      "kode": "nilai_list = [85, 90, 78]",
      "pilihan": [
        "nilai_list[1]",
        "nilai_list[2]",
        "nilai_list(1)",
        "nilai_list{2}"
      ],
      "jawaban": 0,
      "penjelasan": "Indeks list di Python dimulai dari 0: nilai_list[0] = 85, nilai_list[1] = 90, nilai_list[2] = 78. Akses list memakai kurung siku.",
      "acuan": "BAB 2, C. Variabel dan Tipe Data (list); Uji Kompetensi no. 18"
    },
    {
      "id": "B2-16",
      "bab": 2,
      "topik": "Variabel dan operator",
      "kesulitan": "menantang",
      "pertanyaan": "Apa output dari kode berikut?",
      "kode": "daftar_nilai = [85, 90, 78, 92]\nrata_rata = sum(daftar_nilai) / len(daftar_nilai)\nprint(f\"Rata-rata nilai: {rata_rata:.2f}\")",
      "pilihan": [
        "Rata-rata nilai: 86.25",
        "Rata-rata nilai: 345",
        "Rata-rata nilai: 86",
        "Rata-rata nilai: 4"
      ],
      "jawaban": 0,
      "penjelasan": "sum = 85+90+78+92 = 345 dan len = 4, sehingga 345/4 = 86.25. Format :.2f menampilkan dua angka di belakang koma.",
      "acuan": "BAB 2, C. Variabel dan Tipe Data (contoh kode dan output)"
    },
    {
      "id": "B2-17",
      "bab": 2,
      "topik": "Input-Process-Output",
      "kesulitan": "mudah",
      "pertanyaan": "Pada kalkulator BMI, data berat dan tinggi badan yang diketik pengguna termasuk komponen...",
      "pilihan": [
        "Input",
        "Process",
        "Output",
        "Debugging"
      ],
      "jawaban": 0,
      "penjelasan": "Input adalah data yang diberikan pengguna kepada program. Rumus berat / (tinggi ** 2) adalah process, dan tampilan BMI adalah output.",
      "acuan": "BAB 2, C. Logika Program IPO; D3 Kalkulator BMI"
    },
    {
      "id": "B2-18",
      "bab": 2,
      "topik": "Debugging sistematis",
      "kesulitan": "sedang",
      "pertanyaan": "Debugging yang efektif dimulai dengan...",
      "pilihan": [
        "Membaca pesan error dengan teliti dan memahami jenis error yang terjadi",
        "Menghapus seluruh kode lalu menulis ulang dari awal",
        "Mematikan komputer lalu menyalakannya kembali",
        "Mengganti semua nama variabel menjadi lebih panjang"
      ],
      "jawaban": 0,
      "penjelasan": "Debugging adalah proses sistematis. Langkah awalnya membaca pesan error dan mengenali jenis error (syntax, runtime, atau logic).",
      "acuan": "BAB 2, E. Debugging; K. Glosarium (Debugging)"
    },
    {
      "id": "B2-19",
      "bab": 2,
      "topik": "Percabangan if-elif-else",
      "kesulitan": "menantang",
      "pertanyaan": "Dengan fungsi berikut, apa hasil predikat(78)?",
      "kode": "def predikat(nilai):\n    if nilai >= 90: return \"A\"\n    elif nilai >= 80: return \"B\"\n    elif nilai >= 75: return \"C\"\n    elif nilai >= 60: return \"D\"\n    else: return \"E\"",
      "pilihan": [
        "\"C\"",
        "\"B\"",
        "\"D\"",
        "\"E\""
      ],
      "jawaban": 0,
      "penjelasan": "78 tidak memenuhi >= 90 dan >= 80, tetapi memenuhi >= 75. Kondisi pertama yang benar menghasilkan \"C\", dan kondisi berikutnya tidak diperiksa lagi.",
      "acuan": "BAB 2, C. Perulangan dan Fungsi (fungsi predikat)"
    },
    {
      "id": "B2-20",
      "bab": 2,
      "topik": "Debugging: logic error",
      "kesulitan": "menantang",
      "pertanyaan": "Program penilaian berjalan tanpa pesan error, tetapi siswa bernilai 72 dinyatakan LULUS padahal KKM 75. Diagnosis dan langkah yang tepat adalah...",
      "pilihan": [
        "Logic Error; periksa kondisi (misalnya >= 70 harus >= 75) dan pakai print() untuk mengecek nilai variabel",
        "Syntax Error; tambahkan tanda titik dua setelah if",
        "Runtime Error; bungkus seluruh program dengan try-except",
        "Tidak ada error; output sudah benar"
      ],
      "jawaban": 0,
      "penjelasan": "Program selesai tapi output salah, jadi ini Logic Error. Contoh di buku: menggunakan >= 70 padahal KKM 75. Cara mengatasinya: tambahkan print() untuk mengecek nilai variabel.",
      "acuan": "BAB 2, E. Debugging (Logic Error)"
    },
    {
      "id": "B3-01",
      "bab": 3,
      "topik": "Tahapan produksi konten",
      "kesulitan": "mudah",
      "pertanyaan": "Urutan tahapan produksi konten digital yang benar adalah...",
      "pilihan": [
        "Pra-produksi → Produksi → Pascaproduksi → Diseminasi",
        "Produksi → Pra-produksi → Pascaproduksi → Diseminasi",
        "Diseminasi → Produksi → Pascaproduksi → Pra-produksi",
        "Produksi → Pascaproduksi → Pra-produksi → Diseminasi"
      ],
      "jawaban": 0,
      "penjelasan": "Empat tahapan: pra-produksi (riset dan naskah), produksi (pembuatan konten), pascaproduksi (pengeditan), dan diseminasi (publikasi).",
      "acuan": "BAB 3, B.1 Empat Tahapan Produksi Konten"
    },
    {
      "id": "B3-02",
      "bab": 3,
      "topik": "Pra-produksi",
      "kesulitan": "sedang",
      "pertanyaan": "Kegiatan yang TIDAK dilakukan pada tahap pra-produksi adalah...",
      "pilihan": [
        "Mengunggah konten ke platform media sosial",
        "Riset topik dan menentukan audiens",
        "Membuat outline",
        "Menulis naskah atau skrip"
      ],
      "jawaban": 0,
      "penjelasan": "Pra-produksi berisi riset topik, menentukan audiens, membuat outline, dan menulis naskah. Mengunggah ke platform termasuk tahap diseminasi.",
      "acuan": "BAB 3, B.1 Empat Tahapan Produksi Konten (tabel)"
    },
    {
      "id": "B3-03",
      "bab": 3,
      "topik": "Alat KA untuk produksi",
      "kesulitan": "mudah",
      "pertanyaan": "Alat KA yang paling tepat untuk mengubah naskah teks menjadi video edukatif adalah...",
      "pilihan": [
        "Kapwing / VEED",
        "ChatGPT",
        "Canva Magic Write",
        "Buffer"
      ],
      "jawaban": 0,
      "penjelasan": "Tabel tahapan: pada tahap produksi, Kapwing/VEED dipakai untuk membuat video dari teks. ChatGPT membantu naskah, Buffer menjadwalkan posting.",
      "acuan": "BAB 3, B.1 tabel Alat KA; D2 Membuat Video Otomatis dengan Kapwing AI"
    },
    {
      "id": "B3-04",
      "bab": 3,
      "topik": "Prompt engineering",
      "kesulitan": "mudah",
      "pertanyaan": "Formula prompt engineering yang dianjurkan buku adalah...",
      "pilihan": [
        "Peran + Konteks + Instruksi + Format",
        "Topik + Panjang + Bahasa + Audiens",
        "Input + Proses + Output + Evaluasi",
        "Judul + Isi + Kesimpulan + Sumber"
      ],
      "jawaban": 0,
      "penjelasan": "Formula PERAN + KONTEKS + INSTRUKSI + FORMAT menghasilkan output KA yang jauh lebih relevan dibanding prompt yang umum dan vague.",
      "acuan": "BAB 3, B.2 Prompt Engineering: Kunci Menggunakan KA"
    },
    {
      "id": "B3-05",
      "bab": 3,
      "topik": "Prompt engineering",
      "kesulitan": "sedang",
      "pertanyaan": "Bandingkan prompt \"Buat naskah video\" dengan \"Kamu adalah guru kreatif, buatkan naskah video 60 detik tentang etika digital untuk siswa SMA, gunakan bahasa santai, sertakan 3 poin utama\". Pernyataan yang tepat adalah...",
      "pilihan": [
        "Prompt kedua lebih spesifik sehingga output lebih relevan dan berkualitas",
        "Keduanya menghasilkan output yang sama",
        "Prompt pertama lebih baik karena singkat",
        "Prompt kedua terlalu panjang untuk diproses KA"
      ],
      "jawaban": 0,
      "penjelasan": "Prompt kedua memuat peran, konteks (siswa SMA), instruksi (60 detik, 3 poin), dan format (bahasa santai). Prompt kuat seperti ini menghasilkan output yang lebih relevan.",
      "acuan": "BAB 3, B.2 Contoh Prompt: Lemah vs Kuat"
    },
    {
      "id": "B3-06",
      "bab": 3,
      "topik": "Human-in-the-loop",
      "kesulitan": "mudah",
      "pertanyaan": "Prinsip human-in-the-loop dalam produksi konten berbasis KA berarti...",
      "pilihan": [
        "Manusia selalu mengawasi dan menyetujui output KA",
        "Manusia membuat seluruh konten tanpa bantuan KA",
        "KA menggantikan manusia dalam evaluasi konten",
        "Manusia hanya bertugas mengunggah konten buatan KA"
      ],
      "jawaban": 0,
      "penjelasan": "HITL: manusia harus selalu mengawasi dan menyetujui output KA, dan manusia selalu bertanggung jawab penuh atas konten yang dipublikasikan.",
      "acuan": "BAB 3, C. Prinsip Human-in-the-Loop; J. Glosarium"
    },
    {
      "id": "B3-07",
      "bab": 3,
      "topik": "Akurasi dan halusinasi AI",
      "kesulitan": "sedang",
      "pertanyaan": "Salah satu risiko menggunakan KA tanpa pengawasan manusia dalam produksi konten adalah...",
      "pilihan": [
        "KA dapat menghasilkan informasi yang tampak meyakinkan namun salah (halusinasi AI)",
        "Konten yang dihasilkan selalu terlalu sempurna",
        "Proses produksi menjadi terlalu lambat",
        "KA tidak bisa menulis dalam bahasa Indonesia"
      ],
      "jawaban": 0,
      "penjelasan": "Tanpa HITL ada risiko informasi tidak akurat. Halusinasi AI adalah fenomena KA menghasilkan informasi yang tampak meyakinkan tetapi salah.",
      "acuan": "BAB 3, C. Prinsip Human-in-the-Loop; J. Glosarium (Halusinasi AI)"
    },
    {
      "id": "B3-08",
      "bab": 3,
      "topik": "Transparansi KA",
      "kesulitan": "sedang",
      "pertanyaan": "Dalam etika produksi konten, prinsip \"transparansi KA\" berarti...",
      "pilihan": [
        "Mengungkapkan ketika konten dibuat dengan bantuan KA secara signifikan",
        "Memperlihatkan seluruh kode program KA ke publik",
        "Membiarkan KA membuat semua keputusan editorial",
        "Membayar lisensi KA kepada pembuatnya"
      ],
      "jawaban": 0,
      "penjelasan": "Penerapan praktis transparansi KA: cantumkan label \"AI-assisted content\" pada konten yang relevan.",
      "acuan": "BAB 3, C. Etika dan Tanggung Jawab (tabel Prinsip Etika)"
    },
    {
      "id": "B3-09",
      "bab": 3,
      "topik": "Mengedit output KA",
      "kesulitan": "sedang",
      "pertanyaan": "Saat mengedit hasil output KA untuk naskah video, hal yang PALING PENTING dilakukan adalah...",
      "pilihan": [
        "Memverifikasi akurasi fakta dan menyesuaikan dengan gaya bahasamu sendiri",
        "Mengganti semua kata dengan sinonim",
        "Mempersingkat teks sebanyak mungkin",
        "Mengubah topik menjadi yang lebih viral"
      ],
      "jawaban": 0,
      "penjelasan": "Praktik D1: baca output KA dengan kritis, periksa akurasi fakta, lalu edit dengan gaya bahasamu sendiri dan konteks sekolah.",
      "acuan": "BAB 3, D1 Menulis Naskah dengan ChatGPT / Gemini (langkah 3-4)"
    },
    {
      "id": "B3-10",
      "bab": 3,
      "topik": "Hak cipta",
      "kesulitan": "mudah",
      "pertanyaan": "Tindakan yang MELANGGAR etika produksi konten digital adalah...",
      "pilihan": [
        "Mengambil gambar orang lain dari internet tanpa menyebut sumber atau izin",
        "Mencantumkan sumber gambar yang digunakan",
        "Meminta izin sebelum menampilkan wajah teman",
        "Memakai musik berlisensi bebas (CC0)"
      ],
      "jawaban": 0,
      "penjelasan": "Penghargaan hak cipta berarti tidak memakai karya orang lain tanpa izin. Memakai gambar tanpa izin dan atribusi juga bisa menjadi plagiarisme.",
      "acuan": "BAB 3, C. Etika dan Tanggung Jawab (Penghargaan Hak Cipta); J. Glosarium (Plagiarisme)"
    },
    {
      "id": "B3-11",
      "bab": 3,
      "topik": "Alat KA untuk produksi",
      "kesulitan": "sedang",
      "pertanyaan": "Fitur \"Magic Write\" di Canva digunakan untuk...",
      "pilihan": [
        "Membantu menulis teks seperti slogan dalam desain",
        "Mengubah gambar menjadi teks",
        "Membuat video dari teks yang diketik",
        "Menjadwalkan posting di media sosial"
      ],
      "jawaban": 0,
      "penjelasan": "Praktik D3: gunakan Magic Write untuk bantuan menulis slogan yang menarik. Visual poster dibuat dengan Magic Media Text to Image.",
      "acuan": "BAB 3, D3 Membuat Poster Edukatif dengan Canva AI"
    },
    {
      "id": "B3-12",
      "bab": 3,
      "topik": "Jejak digital",
      "kesulitan": "menantang",
      "pertanyaan": "Contoh naskah di buku mengingatkan bahwa jejak digital itu abadi. Alasan yang paling tepat adalah...",
      "pilihan": [
        "Konten bisa disebarkan, disimpan, dan di-screenshot orang lain sebelum sempat dihapus",
        "Konten digital secara teknis tidak bisa dihapus",
        "Hukum melarang penghapusan konten",
        "Platform tidak menyediakan fitur hapus"
      ],
      "jawaban": 0,
      "penjelasan": "Konten yang sudah diunggah bisa disebarkan, disimpan, dan di-screenshot orang lain sebelum sempat dihapus. Karena itu berpikirlah sebelum posting.",
      "acuan": "BAB 3, D1 Contoh Naskah (Ingat — jejak digital itu abadi!); Uji Kompetensi no. 17"
    },
    {
      "id": "B3-13",
      "bab": 3,
      "topik": "Pascaproduksi",
      "kesulitan": "sedang",
      "pertanyaan": "Kegiatan edit video, menambahkan subtitle, dan koreksi warna termasuk tahap...",
      "pilihan": [
        "Pascaproduksi",
        "Pra-produksi",
        "Produksi",
        "Diseminasi"
      ],
      "jawaban": 0,
      "penjelasan": "Pascaproduksi adalah tahap setelah produksi: pengeditan, penambahan efek, koreksi, dan persiapan akhir sebelum publikasi. Alat KA: Kapwing AI auto-subtitle, CapCut AI.",
      "acuan": "BAB 3, B.1 Empat Tahapan Produksi Konten; J. Glosarium (Pascaproduksi)"
    },
    {
      "id": "B3-14",
      "bab": 3,
      "topik": "Verifikasi sebelum publikasi",
      "kesulitan": "menantang",
      "pertanyaan": "Checklist evaluasi konten yang paling komprehensif sebelum dipublikasikan mencakup...",
      "pilihan": [
        "Akurasi fakta, kesesuaian audiens, orisinalitas, etika, dan dampak yang diharapkan",
        "Jumlah kata, jumlah gambar, dan durasi video",
        "Jumlah follower, trending hashtag, dan waktu posting",
        "Resolusi video, ukuran file, dan format output"
      ],
      "jawaban": 0,
      "penjelasan": "Konten yang baik itu akurat, bernilai, bertanggung jawab, dan mendorong perubahan positif. Checklist harus menilai isi dan etika, bukan hanya teknis atau popularitas.",
      "acuan": "BAB 3, I. Rangkuman Bab; Uji Kompetensi no. 19"
    },
    {
      "id": "B3-15",
      "bab": 3,
      "topik": "Kejujuran dan akurasi",
      "kesulitan": "sedang",
      "pertanyaan": "Penerapan praktis prinsip kejujuran dan akurasi sebelum membuat klaim dalam konten adalah...",
      "pilihan": [
        "Cek fakta dari minimal 2 sumber terpercaya",
        "Mengikuti klaim yang paling banyak dibagikan",
        "Langsung memakai jawaban pertama dari KA",
        "Menambahkan label AI-assisted saja"
      ],
      "jawaban": 0,
      "penjelasan": "Tabel prinsip etika: kejujuran dan akurasi berarti hanya mempublikasikan informasi terverifikasi, dengan cek fakta dari minimal 2 sumber terpercaya.",
      "acuan": "BAB 3, C. Etika dan Tanggung Jawab (Kejujuran & Akurasi)"
    },
    {
      "id": "B3-16",
      "bab": 3,
      "topik": "Perlindungan privasi",
      "kesulitan": "mudah",
      "pertanyaan": "Kamu ingin menampilkan wajah teman dalam video kampanye. Sesuai prinsip perlindungan privasi, kamu harus...",
      "pilihan": [
        "Meminta persetujuan teman tersebut sebelum menampilkannya",
        "Langsung menampilkannya karena dia teman sekelas",
        "Memburamkan wajahnya setelah video viral",
        "Menampilkannya asal video diberi label AI-assisted"
      ],
      "jawaban": 0,
      "penjelasan": "Perlindungan privasi: tidak mempublikasikan data/gambar orang lain tanpa izin eksplisit. Minta persetujuan sebelum menampilkan wajah atau data pribadi.",
      "acuan": "BAB 3, C. Etika dan Tanggung Jawab (Perlindungan Privasi)"
    },
    {
      "id": "B3-17",
      "bab": 3,
      "topik": "Teknik prompt lanjutan",
      "kesulitan": "menantang",
      "pertanyaan": "Teknik prompt \"few-shot prompting\" berarti...",
      "pilihan": [
        "Memberi contoh output sebelum meminta KA membuat hasil",
        "Meminta KA berpikir step-by-step",
        "Menentukan peran atau persona spesifik untuk KA",
        "Menulis prompt sesingkat mungkin"
      ],
      "jawaban": 0,
      "penjelasan": "Few-shot: beri contoh output dulu. Chain of thought: minta KA berpikir step-by-step. Role prompting: tentukan peran/persona spesifik.",
      "acuan": "BAB 3, B.2 Prompt Engineering (Teknik lanjutan)"
    },
    {
      "id": "B3-18",
      "bab": 3,
      "topik": "Human-in-the-loop",
      "kesulitan": "menantang",
      "pertanyaan": "Video \"10 Fakta Mengejutkan tentang Vaksin\" viral, lalu diketahui 3 faktanya adalah halusinasi ChatGPT. Tindakan sebelum publikasi yang seharusnya mencegah masalah ini adalah...",
      "pilihan": [
        "Memverifikasi setiap fakta dari sumber terpercaya sebelum dipublikasikan (human-in-the-loop)",
        "Menambah hashtag trending agar cepat viral",
        "Mengganti Kapwing dengan aplikasi edit lain",
        "Mengunggah lebih cepat sebelum didahului orang lain"
      ],
      "jawaban": 0,
      "penjelasan": "Kasus HOTS Bab 3 menunjukkan bahaya tanpa HITL. Setiap output KA harus diverifikasi akurasinya sebelum dipublikasikan, karena manusia bertanggung jawab penuh.",
      "acuan": "BAB 3, C. Prinsip Human-in-the-Loop; H. Soal Analisis Kasus (Konten Viral yang Bermasalah)"
    },
    {
      "id": "B3-19",
      "bab": 3,
      "topik": "Hak cipta",
      "kesulitan": "sedang",
      "pertanyaan": "Musik latar untuk video kampanye sekolah sebaiknya...",
      "pilihan": [
        "Memakai musik berlisensi bebas (CC0) atau membuat sendiri",
        "Mengambil lagu populer apa saja dari internet",
        "Memakai lagu berhak cipta asal durasinya pendek",
        "Memakai lagu orang lain lalu mengaku sebagai karya sendiri"
      ],
      "jawaban": 0,
      "penjelasan": "Penerapan penghargaan hak cipta: gunakan gambar/musik berlisensi bebas (CC0) atau buat sendiri. Creative Commons memberi izin penggunaan dengan syarat tertentu.",
      "acuan": "BAB 3, C. Etika dan Tanggung Jawab (Penghargaan Hak Cipta); J. Glosarium (Creative Commons)"
    },
    {
      "id": "B3-20",
      "bab": 3,
      "topik": "Diseminasi",
      "kesulitan": "mudah",
      "pertanyaan": "Mengunggah ke platform, menulis caption, menentukan hashtag, dan memantau engagement termasuk tahap...",
      "pilihan": [
        "Diseminasi",
        "Pascaproduksi",
        "Produksi",
        "Pra-produksi"
      ],
      "jawaban": 0,
      "penjelasan": "Diseminasi adalah proses menyebarluaskan konten kepada audiens melalui platform yang dipilih, termasuk caption, hashtag, dan pemantauan engagement.",
      "acuan": "BAB 3, B.1 Empat Tahapan Produksi Konten; J. Glosarium (Diseminasi)"
    }
  ]
};
