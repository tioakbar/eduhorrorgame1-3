/*
 * DATA MINI PUZZLE — THE LAST LESSON: KUTUKAN TIGA BAB
 * Setiap puzzle punya beberapa "varian". Lihat "petunjuk_guru" di bawah untuk format tiap tipe.
 * Biarkan baris "window.PUZZLES =" dan ";" di akhir. Periksa dengan: npm run validate:bank
 */
window.PUZZLES = {
  "versi": 1,
  "petunjuk_guru": "Setiap puzzle punya beberapa 'varian'. Game memilih satu varian acak; saat pemain salah, varian lain dipakai sebagai tantangan pengganti. Tipe: 'order' (urutkan items sesuai urutan benar di file), 'choice' (pilihan + jawaban indeks), 'lines' (ketuk baris kode yang salah: 'salah' = indeks baris), 'multi' (beberapa baris pertanyaan, masing-masing 'pilihan' + 'jawaban'). Urutan pilihan diacak otomatis.",
  "puzzles": {
    "ct-order": {
      "bab": 1,
      "tipe": "order",
      "judul": "Papan Tulis yang Menulis Sendiri",
      "topik": "Empat tahapan berpikir komputasional",
      "acuan": "BAB 1, B.2 Empat Tahapan Berpikir Komputasional",
      "varian": [
        {
          "instruksi": "Kapur bergerak sendiri dan menulis empat kata secara acak. Susun tahapan berpikir komputasional sesuai urutan yang benar.",
          "items": [
            "Dekomposisi: memecah masalah besar menjadi sub-masalah",
            "Pengenalan Pola: menemukan kesamaan atau keteraturan",
            "Abstraksi: menyaring informasi esensial",
            "Algoritma: menyusun langkah logis dan terurut"
          ],
          "penjelasan": "Urutan tahapan CT di buku: Dekomposisi, Pengenalan Pola, Abstraksi, lalu Algoritma. Masalah dipecah dulu, keteraturannya dicari, informasi penting disaring, baru langkah solusi disusun."
        },
        {
          "instruksi": "Tulisan di papan: 'Rancang Smart Kantin agar antrean tidak menumpuk.' Urutkan langkah analisis CT di bawah ini.",
          "items": [
            "Pecah sistem kantin menjadi pemesanan, pembayaran, dan pengambilan makanan",
            "Temukan bahwa antrean puncak selalu terjadi Senin dan Rabu pukul 10.00-10.30",
            "Fokus pada data jam dan jumlah pembeli, abaikan warna seragam pembeli",
            "Susun langkah reservasi slot waktu makan secara berurutan"
          ],
          "penjelasan": "Langkah 1 adalah dekomposisi, langkah 2 pengenalan pola, langkah 3 abstraksi, dan langkah 4 algoritma. Urutan ini sama dengan empat tahapan CT di buku."
        }
      ]
    },
    "pola-simbol": {
      "bab": 1,
      "tipe": "choice",
      "judul": "Simbol di Pintu Loker",
      "topik": "Pengenalan pola",
      "acuan": "BAB 1, B.2 Pengenalan Pola (menemukan kesamaan, keteraturan, atau siklus)",
      "varian": [
        {
          "instruksi": "Simbol tergores di pintu-pintu loker. Satu loker masih kosong. Kenali polanya: simbol apa yang harus digoreskan di loker terakhir?",
          "simbol": [
            "▲",
            "●",
            "■",
            "▲",
            "●",
            "■",
            "▲",
            "?"
          ],
          "pilihan": [
            "●",
            "■",
            "▲",
            "◆"
          ],
          "jawaban": 0,
          "penjelasan": "Polanya siklus tiga simbol: ▲ ● ■ berulang. Setelah ▲ selalu muncul ●. Menemukan siklus seperti ini adalah pengenalan pola."
        },
        {
          "instruksi": "Goresan di loker bertambah setiap pintu. Kenali polanya: berapa titik di loker berikutnya?",
          "simbol": [
            "●",
            "●●",
            "●●●",
            "●●●●",
            "?"
          ],
          "pilihan": [
            "●●●●●",
            "●●●●",
            "●●●",
            "●●●●●●"
          ],
          "jawaban": 0,
          "penjelasan": "Jumlah titik selalu bertambah satu: 1, 2, 3, 4, jadi berikutnya 5. Keteraturan ini ditemukan lewat pengenalan pola."
        },
        {
          "instruksi": "Simbol di loker membentuk pola. Simbol apa yang mengisi tanda tanya?",
          "simbol": [
            "▲",
            "▲",
            "●",
            "▲",
            "▲",
            "●",
            "▲",
            "?"
          ],
          "pilihan": [
            "▲",
            "●",
            "■",
            "◆"
          ],
          "jawaban": 0,
          "penjelasan": "Polanya ▲ ▲ ● yang berulang. Setelah satu ▲ di awal siklus, berikutnya ▲ lagi sebelum ●."
        }
      ]
    },
    "algoritma-kopi": {
      "bab": 1,
      "tipe": "order",
      "judul": "Cangkir Kopi yang Masih Hangat",
      "topik": "Algoritma (langkah terurut)",
      "acuan": "BAB 1, E. Praktik F1 (Contoh: Algoritma Membuat Kopi Tubruk)",
      "varian": [
        {
          "instruksi": "Di meja guru ada catatan resep yang sobek: 'Algoritma Membuat Kopi Tubruk'. Susun langkahnya agar kopi bisa dibuat dengan benar.",
          "items": [
            "Masukkan 2 sendok kopi bubuk ke dalam cangkir",
            "JIKA ingin gula MAKA masukkan gula sesuai selera",
            "Didihkan air lalu tuangkan ke cangkir secara perlahan",
            "Aduk hingga merata",
            "Tunggu 3-4 menit agar ampas turun"
          ],
          "penjelasan": "Algoritma harus jelas, terbatas, dan terurut. Langkah ini sama dengan contoh kopi tubruk di buku, dengan 'JIKA ingin gula' sebagai percabangan if-else."
        },
        {
          "instruksi": "Catatan lain di meja guru: 'Algoritma Cek Kelulusan'. Urutkan langkahnya.",
          "items": [
            "MULAI",
            "Baca nilai siswa",
            "Bandingkan nilai dengan KKM (75)",
            "Tampilkan 'Lulus' atau 'Remedial'",
            "SELESAI"
          ],
          "penjelasan": "Contoh algoritma di tabel empat tahapan CT: baca nilai, bandingkan dengan KKM, lalu tampilkan 'Lulus' atau 'Remedial'. Algoritma dibuka dengan MULAI dan ditutup dengan SELESAI."
        }
      ]
    },
    "flowchart": {
      "bab": 1,
      "tipe": "multi",
      "judul": "Proyektor yang Menyala Sendiri",
      "topik": "Flowchart (simbol dan alur)",
      "acuan": "BAB 1, E. Praktik F1 Menyusun Algoritma dan Flowchart; J. Rangkuman Bab",
      "varian": [
        {
          "instruksi": "Proyektor menampilkan flowchart 'Cek Kelulusan' yang simbolnya hilang. Periksa dan lengkapi.",
          "flowchart": [
            {
              "bentuk": "oval",
              "teks": "Mulai"
            },
            {
              "bentuk": "io",
              "teks": "Input nilai"
            },
            {
              "bentuk": "?",
              "teks": "nilai >= 75 ?"
            },
            {
              "bentuk": "cabang",
              "ya": "Tampilkan \"LULUS\"",
              "tidak": "Tampilkan \"REMEDIAL\""
            },
            {
              "bentuk": "?",
              "teks": "Selesai"
            }
          ],
          "rows": [
            {
              "teks": "Simbol yang tepat untuk 'nilai >= 75 ?'",
              "pilihan": [
                "Belah ketupat (keputusan)",
                "Oval (terminal)",
                "Kotak (proses)"
              ],
              "jawaban": 0
            },
            {
              "teks": "Simbol yang tepat untuk 'Selesai'",
              "pilihan": [
                "Oval (terminal)",
                "Belah ketupat (keputusan)",
                "Kotak (proses)"
              ],
              "jawaban": 0
            },
            {
              "teks": "Jika nilai yang dimasukkan 72, jalur yang ditempuh adalah",
              "pilihan": [
                "Tidak → Tampilkan \"REMEDIAL\"",
                "Ya → Tampilkan \"LULUS\"",
                "Kembali ke Mulai"
              ],
              "jawaban": 0
            }
          ],
          "penjelasan": "Keputusan memakai belah ketupat dengan jalur Ya/Tidak, sedangkan Mulai/Selesai memakai oval. Nilai 72 tidak memenuhi nilai >= 75, jadi alurnya menuju REMEDIAL."
        },
        {
          "instruksi": "Proyektor menampilkan flowchart 'Membuat Kopi Tubruk'. Ada simbol yang hilang. Periksa dan lengkapi.",
          "flowchart": [
            {
              "bentuk": "oval",
              "teks": "Mulai"
            },
            {
              "bentuk": "proses",
              "teks": "Masukkan 2 sendok kopi"
            },
            {
              "bentuk": "?",
              "teks": "Ingin gula ?"
            },
            {
              "bentuk": "cabang",
              "ya": "Masukkan gula",
              "tidak": "(lewati)"
            },
            {
              "bentuk": "proses",
              "teks": "Didihkan air, tuang, aduk"
            },
            {
              "bentuk": "oval",
              "teks": "Selesai"
            }
          ],
          "rows": [
            {
              "teks": "Simbol yang tepat untuk 'Ingin gula ?'",
              "pilihan": [
                "Belah ketupat (keputusan)",
                "Kotak (proses)",
                "Oval (terminal)"
              ],
              "jawaban": 0
            },
            {
              "teks": "Simbol untuk 'Masukkan 2 sendok kopi' adalah kotak karena langkah itu merupakan",
              "pilihan": [
                "Proses atau operasi",
                "Keputusan Ya/Tidak",
                "Awal program"
              ],
              "jawaban": 0
            },
            {
              "teks": "Jika TIDAK ingin gula, langkah berikutnya adalah",
              "pilihan": [
                "Didihkan air, tuang, aduk",
                "Masukkan gula",
                "Selesai tanpa air"
              ],
              "jawaban": 0
            }
          ],
          "penjelasan": "'JIKA ingin gula' adalah percabangan, jadi simbolnya belah ketupat. Langkah biasa adalah proses (kotak). Jalur 'Tidak' melewati langkah gula dan langsung ke proses berikutnya."
        }
      ]
    },
    "ipo": {
      "bab": 2,
      "tipe": "multi",
      "judul": "Panel Pintu Elektronik",
      "topik": "Input-Process-Output",
      "acuan": "BAB 2, C. Logika Program: Input – Proses – Output",
      "varian": [
        {
          "instruksi": "Panel pintu lab menampilkan potongan program Kalkulator BMI. Tentukan peran setiap baris dalam model IPO.",
          "rows": [
            {
              "teks": "berat = float(input(\"Berat (kg): \"))",
              "kode": true,
              "pilihan": [
                "Input",
                "Process",
                "Output"
              ],
              "jawaban": 0
            },
            {
              "teks": "bmi = round(berat / (tinggi ** 2), 2)",
              "kode": true,
              "pilihan": [
                "Input",
                "Process",
                "Output"
              ],
              "jawaban": 1
            },
            {
              "teks": "if bmi < 18.5: kat = \"Kurus (Underweight)\"",
              "kode": true,
              "pilihan": [
                "Input",
                "Process",
                "Output"
              ],
              "jawaban": 1
            },
            {
              "teks": "print(f\"BMI: {bmi} — {kat}\")",
              "kode": true,
              "pilihan": [
                "Input",
                "Process",
                "Output"
              ],
              "jawaban": 2
            }
          ],
          "penjelasan": "Input = data dari pengguna (input()). Process = kalkulasi dan logika (rumus BMI, if). Output = hasil yang ditampilkan (print())."
        },
        {
          "instruksi": "Panel menampilkan kode Smart Lamp Arduino. Tentukan peran setiap baris dalam model IPO.",
          "rows": [
            {
              "teks": "nilaiSensor = analogRead(SENSOR_PIN);",
              "kode": true,
              "pilihan": [
                "Input",
                "Process",
                "Output"
              ],
              "jawaban": 0
            },
            {
              "teks": "if (nilaiSensor < AMBANG) {",
              "kode": true,
              "pilihan": [
                "Input",
                "Process",
                "Output"
              ],
              "jawaban": 1
            },
            {
              "teks": "digitalWrite(LED_PIN, HIGH);",
              "kode": true,
              "pilihan": [
                "Input",
                "Process",
                "Output"
              ],
              "jawaban": 2
            }
          ],
          "penjelasan": "Sensor LDR membaca cahaya (input), program membandingkan dengan AMBANG (process), lalu LED dinyalakan (output)."
        },
        {
          "instruksi": "Panel menampilkan kode Kalkulator Mini. Tentukan peran setiap baris dalam model IPO.",
          "rows": [
            {
              "teks": "a = float(input(\"Angka pertama : \"))",
              "kode": true,
              "pilihan": [
                "Input",
                "Process",
                "Output"
              ],
              "jawaban": 0
            },
            {
              "teks": "hasil = kalkulasi(a, b, pilihan)",
              "kode": true,
              "pilihan": [
                "Input",
                "Process",
                "Output"
              ],
              "jawaban": 1
            },
            {
              "teks": "print(f\"Hasil: {hasil}\")",
              "kode": true,
              "pilihan": [
                "Input",
                "Process",
                "Output"
              ],
              "jawaban": 2
            }
          ],
          "penjelasan": "Angka yang diketik adalah input, fungsi kalkulasi mengolahnya (process), dan print menampilkan hasil (output)."
        }
      ]
    },
    "prediksi-output": {
      "bab": 2,
      "tipe": "choice",
      "judul": "Monitor CRT Berkedip",
      "topik": "Perulangan for dan percabangan (menelusuri eksekusi)",
      "acuan": "BAB 2, C. Perulangan dan Fungsi; D1 Kalkulator Mini",
      "varian": [
        {
          "instruksi": "Layar CRT menyala sendiri dan meminta jawaban: apa output program ini?",
          "kode": "nilai_kelas = [85, 90, 78, 92, 65]\njumlah = 0\nfor n in nilai_kelas:\n    if n >= 75:\n        jumlah = jumlah + 1\nprint(jumlah)",
          "pilihan": [
            "4",
            "5",
            "3",
            "1"
          ],
          "jawaban": 0,
          "penjelasan": "Perulangan memeriksa setiap nilai. Yang >= 75 adalah 85, 90, 78, dan 92, jadi jumlah = 4. Nilai 65 tidak dihitung."
        },
        {
          "instruksi": "Layar CRT menampilkan kode berikut. Apa output-nya?",
          "kode": "total = 0\nfor i in range(1, 6):\n    total = total + i\nprint(total)",
          "pilihan": [
            "15",
            "10",
            "21",
            "5"
          ],
          "jawaban": 0,
          "penjelasan": "range(1, 6) menghasilkan 1, 2, 3, 4, 5. Totalnya 1+2+3+4+5 = 15."
        },
        {
          "instruksi": "Layar CRT menampilkan potongan Kalkulator Mini. Apa output-nya?",
          "kode": "def kalkulasi(a, b, op):\n    if op == 1: return a + b\n    elif op == 2: return a - b\n    elif op == 3: return a * b\n    elif op == 4: return a / b if b != 0 else None\n\nprint(kalkulasi(6, 3, 3))",
          "pilihan": [
            "18",
            "9",
            "3",
            "2.0"
          ],
          "jawaban": 0,
          "penjelasan": "op == 3 berarti perkalian, jadi 6 * 3 = 18. Kondisi pertama yang bernilai benar langsung dijalankan."
        }
      ]
    },
    "syntax": {
      "bab": 2,
      "tipe": "lines",
      "judul": "Kode Error Merah",
      "topik": "Debugging: Syntax Error",
      "acuan": "BAB 2, E. Debugging (Syntax Error)",
      "varian": [
        {
          "instruksi": "Monitor memuntahkan pesan SyntaxError. Ketuk baris yang salah penulisannya.",
          "baris": [
            "nilai = int(input(\"Nilai: \"))",
            "if nilai >= 75",
            "    print(\"LULUS\")",
            "else:",
            "    print(\"BELUM LULUS\")"
          ],
          "salah": 1,
          "penjelasan": "Baris 'if nilai >= 75' lupa tanda titik dua (:). Ini contoh Syntax Error di buku. Perbaikannya: if nilai >= 75:"
        },
        {
          "instruksi": "SyntaxError muncul lagi. Ketuk baris yang salah penulisannya.",
          "baris": [
            "def predikat(nilai):",
            "    if nilai >= 90:",
            "        return \"A\"",
            "    return \"B\"",
            "print(predikat(95)"
          ],
          "salah": 4,
          "penjelasan": "Baris terakhir kurang tanda kurung tutup. Perbaikannya: print(predikat(95)). Kesalahan penulisan seperti ini adalah Syntax Error."
        },
        {
          "instruksi": "Layar menampilkan SyntaxError: unterminated string. Ketuk baris yang salah.",
          "baris": [
            "nama = \"Budi Santoso",
            "nilai = 85",
            "sudah_lulus = True",
            "print(nama, nilai, sudah_lulus)"
          ],
          "salah": 0,
          "penjelasan": "String \"Budi Santoso tidak ditutup dengan tanda kutip. Perbaikannya: nama = \"Budi Santoso\"."
        }
      ]
    },
    "logika": {
      "bab": 2,
      "tipe": "choice",
      "judul": "Rak Server yang Salah Memutuskan",
      "topik": "Memperbaiki logika percabangan (Logic Error)",
      "acuan": "BAB 2, Percabangan if-elif-else; E. Debugging (Logic Error)",
      "varian": [
        {
          "instruksi": "Program ini berjalan tanpa error, tetapi siswa bernilai 72 dinyatakan LULUS padahal KKM 75. Pilih perbaikan baris kondisi yang benar.",
          "kode": "KKM = 75\nnilai = 72\nif nilai >= 70:\n    print(\"LULUS\")\nelse:\n    print(\"BELUM LULUS\")",
          "pilihan": [
            "if nilai >= KKM:",
            "if nilai <= KKM:",
            "if nilai > 70:",
            "if nilai >= 7:"
          ],
          "jawaban": 0,
          "penjelasan": "Ini Logic Error: kondisi memakai 70 padahal KKM 75. Kondisi yang benar adalah nilai >= KKM (75), sehingga nilai 72 menjadi BELUM LULUS."
        },
        {
          "instruksi": "Kalkulator BMI ini mengategorikan BMI 17 sebagai 'Normal'. Pilih perbaikan yang benar.",
          "kode": "if bmi < 25.0:\n    kat = \"Normal\"\nelif bmi < 18.5:\n    kat = \"Kurus\"\nelse:\n    kat = \"Kelebihan Berat Badan\"",
          "pilihan": [
            "Periksa bmi < 18.5 lebih dulu, baru elif bmi < 25.0",
            "Ganti semua tanda < menjadi >",
            "Hapus bagian else",
            "Ubah angka 18.5 menjadi 25.0"
          ],
          "jawaban": 0,
          "penjelasan": "if-elif dicek dari atas. BMI 17 sudah memenuhi bmi < 25.0, jadi langsung 'Normal'. Pada kode buku, kondisi bmi < 18.5 diperiksa lebih dulu."
        }
      ]
    },
    "fungsi-loop": {
      "bab": 2,
      "tipe": "choice",
      "judul": "Terminal yang Mengulang Bisikan",
      "topik": "Fungsi dan perulangan",
      "acuan": "BAB 2, C. Perulangan dan Fungsi",
      "varian": [
        {
          "instruksi": "Terminal berbisik 'Halo, Penjaga' berulang-ulang. Agar sapaan tercetak TEPAT 3 kali, isi bagian ___ dengan...",
          "kode": "def sapa(nama):\n    return \"Halo, \" + nama\n\nfor i in range(___):\n    print(sapa(\"Penjaga\"))",
          "pilihan": [
            "3",
            "1, 3",
            "0, 4",
            "4"
          ],
          "jawaban": 0,
          "penjelasan": "range(3) menghasilkan 0, 1, 2 (3 kali). range(1, 3) hanya 2 kali, range(0, 4) dan range(4) 4 kali. Fungsi sapa dipanggil di setiap putaran."
        },
        {
          "instruksi": "Berapa kali fungsi predikat dipanggil saat program ini dijalankan?",
          "kode": "def predikat(nilai):\n    if nilai >= 75: return \"Lulus\"\n    else: return \"Remedial\"\n\nnilai_kelas = [85, 90, 78, 92, 65]\nfor n in nilai_kelas:\n    print(predikat(n))",
          "pilihan": [
            "5 kali",
            "1 kali",
            "4 kali",
            "6 kali"
          ],
          "jawaban": 0,
          "penjelasan": "Perulangan for berjalan sekali untuk setiap elemen list (5 elemen), dan di setiap putaran fungsi predikat dipanggil. Satu fungsi dipakai ulang tanpa menulis kode yang sama (DRY)."
        },
        {
          "instruksi": "Apa baris TERAKHIR yang dicetak program ini?",
          "kode": "def predikat(nilai):\n    if nilai >= 90: return \"A\"\n    elif nilai >= 80: return \"B\"\n    elif nilai >= 75: return \"C\"\n    elif nilai >= 60: return \"D\"\n    else: return \"E\"\n\nnilai_kelas = [85, 90, 78, 92, 65]\nfor i, n in enumerate(nilai_kelas, 1):\n    print(f\"Siswa {i}: Nilai {n} — Predikat {predikat(n)}\")",
          "pilihan": [
            "Siswa 5: Nilai 65 — Predikat D",
            "Siswa 4: Nilai 65 — Predikat D",
            "Siswa 5: Nilai 65 — Predikat E",
            "Siswa 5: Nilai 65 — Predikat C"
          ],
          "jawaban": 0,
          "penjelasan": "enumerate(..., 1) mulai menghitung dari 1, jadi nilai ke-5 adalah 65. Nilai 65 memenuhi >= 60, sehingga predikatnya D."
        }
      ]
    },
    "produksi-order": {
      "bab": 3,
      "tipe": "order",
      "judul": "Papan Storyboard Berdebu",
      "topik": "Tahapan produksi konten digital",
      "acuan": "BAB 3, B.1 Empat Tahapan Produksi Konten",
      "varian": [
        {
          "instruksi": "Kartu-kartu storyboard berserakan. Susun kegiatan produksi konten sesuai urutan tahapannya.",
          "items": [
            "Riset topik, tentukan audiens, buat outline, tulis naskah",
            "Rekam video/audio, desain visual, buat animasi",
            "Edit video, tambahkan subtitle, koreksi warna, review konten",
            "Unggah ke platform, tulis caption, tentukan hashtag, pantau engagement"
          ],
          "penjelasan": "Urutannya pra-produksi, produksi, pascaproduksi, lalu diseminasi. Setiap tahapan perlu perencanaan matang (Buckingham, 2019)."
        },
        {
          "instruksi": "Storyboard kampanye 'Gerakan Anti-Hoaks'. Susun langkah kerjanya sesuai tahapan produksi.",
          "items": [
            "Riset fakta hoaks dengan ChatGPT/Gemini, verifikasi sumber, tulis naskah 2 menit",
            "Buat video dari naskah dengan Kapwing dan poster dengan Canva AI",
            "Tambahkan auto-subtitle, edit, dan review ulang isi video",
            "Unggah ke platform sekolah dengan caption informatif, lalu pantau engagement"
          ],
          "penjelasan": "Riset dan naskah (pra-produksi), pembuatan video/poster (produksi), editing dan subtitle (pascaproduksi), lalu publikasi dan pemantauan (diseminasi)."
        }
      ]
    },
    "prompt-builder": {
      "bab": 3,
      "tipe": "multi",
      "judul": "Terminal Prompt yang Kelaparan",
      "topik": "Prompt engineering (Peran + Konteks + Instruksi + Format)",
      "acuan": "BAB 3, B.2 Prompt Engineering; Contoh Prompt Lemah vs Kuat",
      "varian": [
        {
          "instruksi": "Layar editing hanya menerima PROMPT KUAT. Susun prompt dengan memilih potongan yang tepat untuk setiap bagian formula.",
          "rows": [
            {
              "teks": "PERAN",
              "pilihan": [
                "Kamu adalah guru kesehatan SMA yang kreatif.",
                "Tuliskan per kalimat dengan durasi perkiraan di samping kirinya.",
                "Buat naskah video tentang kesehatan."
              ],
              "jawaban": 0
            },
            {
              "teks": "KONTEKS",
              "pilihan": [
                "Untuk siswa kelas X berusia 15-16 tahun, topik: pentingnya tidur 8 jam untuk performa belajar.",
                "Kamu adalah guru kesehatan SMA yang kreatif.",
                "Pokoknya yang bagus saja."
              ],
              "jawaban": 0
            },
            {
              "teks": "INSTRUKSI",
              "pilihan": [
                "Buatkan naskah video edukatif 60 detik, sertakan 2 fakta ilmiah, akhiri dengan ajakan bertindak.",
                "Untuk siswa kelas X berusia 15-16 tahun.",
                "Terserah kamu mau bahas apa."
              ],
              "jawaban": 0
            },
            {
              "teks": "FORMAT",
              "pilihan": [
                "Tuliskan per kalimat dengan durasi perkiraan di samping kirinya.",
                "Buatkan naskah video edukatif 60 detik.",
                "Kamu adalah guru kesehatan SMA."
              ],
              "jawaban": 0
            }
          ],
          "penjelasan": "Formula PERAN + KONTEKS + INSTRUKSI + FORMAT menghasilkan output KA yang jauh lebih relevan dibanding prompt umum seperti 'Buat naskah video tentang kesehatan'."
        },
        {
          "instruksi": "Layar meminta prompt untuk poster kampanye 'Bijak Bermedia Sosial'. Pilih potongan yang tepat untuk setiap bagian.",
          "rows": [
            {
              "teks": "PERAN",
              "pilihan": [
                "Kamu adalah desainer grafis yang memahami dunia remaja.",
                "Buat poster.",
                "Gunakan 3 poin singkat dan slogan di bagian atas."
              ],
              "jawaban": 0
            },
            {
              "teks": "KONTEKS",
              "pilihan": [
                "Poster untuk siswa SMA yang aktif di media sosial, tema: berpikir sebelum posting.",
                "Kamu adalah desainer grafis.",
                "Yang penting viral."
              ],
              "jawaban": 0
            },
            {
              "teks": "INSTRUKSI",
              "pilihan": [
                "Tuliskan judul, slogan, dan 3 tips bijak bermedia sosial dengan bahasa santai.",
                "Poster untuk siswa SMA.",
                "Bebas saja."
              ],
              "jawaban": 0
            },
            {
              "teks": "FORMAT",
              "pilihan": [
                "Sajikan dalam poin-poin singkat, maksimal 12 kata per poin.",
                "Kamu adalah desainer.",
                "Tuliskan judul dan slogan."
              ],
              "jawaban": 0
            }
          ],
          "penjelasan": "Peran menentukan sudut pandang KA, konteks menjelaskan audiens dan tema, instruksi menyebut tugas spesifik, dan format menentukan bentuk output."
        }
      ]
    },
    "verifikasi": {
      "bab": 3,
      "tipe": "multi",
      "judul": "Monitor Pratinjau Publikasi",
      "topik": "Verifikasi, hak cipta, privasi, dan transparansi",
      "acuan": "BAB 3, C. Etika dan Tanggung Jawab dalam Produksi Konten",
      "varian": [
        {
          "instruksi": "Sebuah draf konten siap diunggah, tetapi monitor menandai empat masalah. Pilih tindakan yang benar untuk setiap masalah sebelum publikasi.",
          "rows": [
            {
              "teks": "Naskah KA memuat klaim 'tidur 8 jam menaikkan nilai 50%' tanpa sumber.",
              "pilihan": [
                "Cek fakta dari minimal 2 sumber terpercaya; hapus klaim jika tidak terbukti",
                "Publikasikan saja karena KA biasanya benar",
                "Tambahkan hashtag #fakta agar meyakinkan"
              ],
              "jawaban": 0
            },
            {
              "teks": "Thumbnail memakai foto karya fotografer profesional dari Google Images.",
              "pilihan": [
                "Ganti dengan gambar CC0/buatan sendiri, atau minta izin dan cantumkan atribusi",
                "Pakai saja karena gambar di internet gratis",
                "Potong watermark-nya agar rapi"
              ],
              "jawaban": 0
            },
            {
              "teks": "Video menampilkan wajah teman yang sedang tertidur di kelas.",
              "pilihan": [
                "Minta izin eksplisit; jika tidak diizinkan, hapus adegannya",
                "Biarkan karena lucu dan menarik views",
                "Buramkan wajahnya hanya jika video viral"
              ],
              "jawaban": 0
            },
            {
              "teks": "Naskah dan visual sebagian besar dibuat dengan bantuan KA.",
              "pilihan": [
                "Cantumkan label 'AI-assisted content'",
                "Sembunyikan agar terlihat orisinal",
                "Hapus nama pembuat konten"
              ],
              "jawaban": 0
            }
          ],
          "penjelasan": "Empat masalah ini sesuai prinsip etika di buku: kejujuran & akurasi (cek 2 sumber), penghargaan hak cipta (CC0 atau izin), perlindungan privasi (izin eksplisit), dan transparansi KA (label AI-assisted)."
        },
        {
          "instruksi": "Monitor menandai masalah pada video kampanye. Pilih tindakan yang benar untuk setiap masalah.",
          "rows": [
            {
              "teks": "Musik latar diambil dari lagu populer berhak cipta tanpa izin.",
              "pilihan": [
                "Ganti dengan musik berlisensi bebas (CC0) atau buatan sendiri",
                "Biarkan asal hanya 30 detik",
                "Kecilkan volumenya agar tidak terdeteksi"
              ],
              "jawaban": 0
            },
            {
              "teks": "Caption menyebut data 'Indonesia punya 212 juta pengguna internet aktif' tanpa sumber.",
              "pilihan": [
                "Cantumkan sumber (We Are Social, 2024) setelah dicek kebenarannya",
                "Hapus angka dan ganti dengan 'banyak sekali'",
                "Naikkan angkanya agar lebih dramatis"
              ],
              "jawaban": 0
            },
            {
              "teks": "Video memuat nomor HP dan alamat rumah seorang guru.",
              "pilihan": [
                "Hapus data pribadi itu sebelum publikasi",
                "Biarkan karena guru adalah tokoh publik",
                "Tampilkan sebentar saja"
              ],
              "jawaban": 0
            },
            {
              "teks": "Ada kalimat yang menyudutkan kelompok tertentu.",
              "pilihan": [
                "Revisi kalimat agar tidak menyebarkan kebencian atau diskriminasi",
                "Pertahankan karena memancing komentar",
                "Tambahkan emoji agar terkesan bercanda"
              ],
              "jawaban": 0
            }
          ],
          "penjelasan": "Hak cipta, kejujuran & akurasi, perlindungan privasi, dan tanggung jawab sosial wajib diperiksa sebelum publikasi."
        }
      ]
    },
    "hitl": {
      "bab": 3,
      "tipe": "multi",
      "judul": "Layar Siaran yang Menyala Sendiri",
      "topik": "Human-in-the-loop",
      "acuan": "BAB 3, C. Prinsip Human-in-the-Loop",
      "varian": [
        {
          "instruksi": "Layar siaran dikendalikan sistem KA yang ingin menayangkan konten tanpa pengawasan. Ambil keputusan sebagai manusia di dalam loop.",
          "rows": [
            {
              "teks": "KA: 'Naskah siap. Publikasikan otomatis sekarang?'",
              "pilihan": [
                "Tahan. Baca dan verifikasi isinya dulu sebelum publikasi",
                "Setujui, KA pasti sudah benar",
                "Biarkan KA memutuskan jadwalnya sendiri"
              ],
              "jawaban": 0
            },
            {
              "teks": "KA menyarankan tiga desain poster; satu memakai stereotip yang merendahkan kelompok tertentu.",
              "pilihan": [
                "Manusia memilih desain yang sesuai nilai dan pesan, tolak yang diskriminatif",
                "Pilih yang paling mencolok agar viral",
                "Pakai ketiganya sekaligus"
              ],
              "jawaban": 0
            },
            {
              "teks": "Setelah tayang, penonton menemukan satu fakta keliru.",
              "pilihan": [
                "Akui, koreksi konten, dan beri klarifikasi karena manusia tetap bertanggung jawab",
                "Salahkan KA karena KA yang menulis",
                "Diamkan saja, nanti juga tenggelam"
              ],
              "jawaban": 0
            }
          ],
          "penjelasan": "Human-in-the-loop: KA membuat draf, manusia mengevaluasi akurasi; KA menyarankan desain, manusia memutuskan. Manusia SELALU bertanggung jawab penuh atas konten yang dipublikasikan."
        },
        {
          "instruksi": "Sistem KA studio mencoba mengambil alih siaran. Tentukan keputusan yang benar.",
          "rows": [
            {
              "teks": "Naskah KA terasa kaku dan tidak sesuai konteks sekolah.",
              "pilihan": [
                "Edit dengan gaya bahasamu sendiri dan konteks lokal",
                "Pakai apa adanya",
                "Ganti topik menjadi yang lebih viral"
              ],
              "jawaban": 0
            },
            {
              "teks": "KA menulis 'menurut penelitian terbaru...' tanpa menyebut penelitian apa.",
              "pilihan": [
                "Cari dan verifikasi sumbernya; hapus jika tidak ditemukan",
                "Biarkan karena terdengar ilmiah",
                "Tambahkan tahun secara acak"
              ],
              "jawaban": 0
            },
            {
              "teks": "Narasi video sepenuhnya memakai suara KA.",
              "pilihan": [
                "Rekam suaramu sendiri agar suara personal tetap ada",
                "Biarkan, suara KA lebih rapi",
                "Hapus narasi sama sekali"
              ],
              "jawaban": 0
            }
          ],
          "penjelasan": "Tanpa HITL, risikonya informasi tidak akurat, bias tersembunyi, dan kehilangan suara personal. Proyek akhir bab juga meminta: rekam suaramu sendiri, jangan hanya voice AI."
        }
      ]
    }
  }
};
