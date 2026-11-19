# THE LAST LESSON: KUTUKAN TIGA BAB

Game horor edukasi berbasis web untuk mata pelajaran **Koding dan Kecerdasan Artifisial Kelas X** (Bab 1–3).
Bisa dimainkan di browser laptop, Android, dan iPhone.

## Main

- Online: buka halaman GitHub Pages repo ini (`https://<username>.github.io/<nama-repo>/`).
- Offline: unduh repo ini, lalu buka `index.html` dengan klik ganda.

Kontrol: WASD/panah untuk bergerak, E/Spasi untuk memeriksa, Esc untuk jeda.
Di HP: joystick di sisi kiri layar, tombol PERIKSA di kanan bawah.

> Peringatan: berisi jumpscare dengan suara keras (volume maksimal). Volume backsound bisa dikecilkan di Pengaturan, tetapi jeritan jumpscare selalu maksimal.

## Mengaktifkan GitHub Pages

Settings → Pages → Build and deployment → Source: **Deploy from a branch** → Branch: **main** / **(root)** → Save.

## Isi repo

| File | Fungsi |
|---|---|
| `index.html` | Game lengkap dalam satu file (kode, tampilan, font) |
| `data/bank-soal.js` | Bank soal (60 soal Bab 1–3), bisa diedit guru |
| `data/puzzles.js` | Data mini puzzle, bisa diedit guru |
| `.nojekyll` | Agar GitHub Pages menyajikan file apa adanya |

## Mengedit soal (guru)

Buka `data/bank-soal.js` dengan editor teks. Isinya berformat JSON di dalam `window.BANK_SOAL = { ... };`.
Setiap soal butuh: `id` unik, `bab` (1/2/3), `topik`, `kesulitan` (mudah/sedang/menantang), `pertanyaan`,
tepat 4 `pilihan`, `jawaban` (indeks 0–3), `penjelasan`, dan `acuan`.
Simpan lalu muat ulang halaman. Tidak perlu build.
