# Aziz — Gameplay & Tools Programmer Portfolio

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-lightgrey.svg?style=flat-square)](LICENSE)
[![Status: Siap Magang Smt 6](https://img.shields.io/badge/Status-Siap%20Magang%20Smt%206-success?style=flat-square)](#)

Website portofolio personal satu halaman (*single-page portfolio*) dengan tema **Obsidian Monochrome** yang elegan, minimalis, dan modern. Dirancang khusus untuk memamerkan kompetensi teknis, proyek game development, rekor gaming tingkat tinggi, serta pengalaman organisasi/esports untuk posisi **Gameplay & Tools Programmer** (Siap Magang Semester 6).

---

## ✦ Fitur Utama Website

- **Aestetika Monokrom Elegan:** Menggunakan palet obsidian gelap (`#090a0c`), permukaan grafit transparan, aksen platinum, serta tipografi presisi (*Inter* & *JetBrains Mono*) yang terinspirasi dari antarmuka engine modern dan workstation developer.
- **Tata Letak Wide-Bleed (Tanpa Deadspace):** Mengoptimalkan lebar layar hingga `1280px` dengan komposisi grid 2-kolom yang seimbang di semua resolusi.
- **Interactive Particle System (`particles.js`):** Simulasi partikel interaktif berbasis HTML5 Canvas yang merespons pergerakan kursor mouse (simulasi *spatial query* dan *neighbor search*), serta mendukung `prefers-reduced-motion` untuk aksesibilitas.
- **Showcase Foto Profil Studio (`aziz.jpg`):** Tampilan potret developer berbingkai halus dengan status badge mengambang.
- **Struktur Proyek Modular (`#projects`):** Kartu proyek terstruktur dengan kategori, deskripsi arsitektur teknis, tags teknologi, dan tautan repositori GitHub.
- **Pencapaian & Rekam Jejak Komprehensif (`#achievements`):**
  - **Competitive Gaming High-Elo:** Mobile Legends Mythical Immortal 134★, Delta Force Rank Marshal, Valorant Diamond 2.
  - **Extreme Difficulty Clear:** Terraria Master Mode, Calamity Mod Infernum Mode, Fargo's Soul Mod Eternity Mode.
  - **Esports & Event Volunteer:** Wasit Resmi PBESI Tier C (2023–2024), Volunteer PlayIT 2026 (Caster), Volunteer PlayIt+ 2026 (Runner LO).
- **Formulir Kontak Langsung (`#contact`):** Pengunjung dapat mengetik nama, email, subjek, dan pesan yang otomatis diformat dan diarahkan ke `azizsudjud@gmail.com` via mail dispatcher tanpa dependensi server pihak ketiga.
- **Kanal Komunikasi Cepat:** Salin username Discord satu klik (*clipboard copy with visual feedback*), email langsung, dan tautan sosial.
- **Navigasi Mengambang Frosted Pill:** Header fixed dengan efek blur (*glassmorphism*), menu drawer responsif di mobile, dan dukungan navigasi keyboard (Escape key).

---

## ✦ Struktur Berkas

Proyek ini dibangun secara terstruktur dan modular tanpa *framework bloat*, sehingga sangat ringan dan cepat dimuat:

```text
Portofolio/
├── index.html           # Struktur semantik HTML5, meta SEO, & seluruh konten
├── style.css            # Sistem token desain, CSS variables, & responsive queries
├── particles.js         # Canvas particle background berkinerja tinggi
├── main.js              # Interaktivitas (scroll reveal, nav toggle, mailto, copy)
├── aziz.jpg             # Foto potret studio developer (aktif digunakan)
├── aziz-pasfoto.jpg     # Berkas cadangan pasfoto asli
├── .gitignore           # Filter berkas sementara IDE & OS
└── README.md            # Dokumentasi repositori
```

---

## ✦ Teknologi yang Digunakan

| Komponen | Teknologi | Keterangan |
| :--- | :--- | :--- |
| **Markup** | HTML5 Semantik | Aksesibilitas WCAG, heading hierarchy tunggal `h1`, ARIA attributes |
| **Styling** | Vanilla CSS | CSS Custom Properties, Flexbox, CSS Grid, Glassmorphism |
| **Animasi Canvas** | HTML5 Canvas API | Partikel dinamis dengan DPR scaling & spatial detection |
| **Logika Interaksi** | Vanilla JavaScript | IntersectionObserver API, Clipboard API, Form Serialization |
| **Tipografi** | Google Fonts | Inter (Body text) & JetBrains Mono (Code/Status text) |

---

## ✦ Menjalankan Secara Lokal

Website ini beroperasi sepenuhnya secara statis tanpa perlu instalasi `npm` atau kompilasi bundler:

### Cara 1: Langsung Buka Berkas
Klik dua kali berkas `index.html` atau buka melalui browser pilihan Anda (Google Chrome, Firefox, Microsoft Edge, Safari).

### Cara 2: Menggunakan Local Development Server
Bagi pengguna VS Code, disarankan menggunakan ekstensi **Live Server**:
1. Buka folder `Portofolio` di VS Code.
2. Klik kanan pada `index.html` &rarr; pilih **"Open with Live Server"**.

Atau jalankan melalui terminal dengan Python:
```bash
# Jalankan di dalam folder Portofolio
python -m http.server 8000
```
Buka browser dan akses `http://localhost:8000`.

---

## ✦ Panduan Kustomisasi

Sebelum mempublikasikan portofolio ke GitHub Pages atau domain publik, Anda dapat menyesuaikan beberapa bagian teks *placeholder*:

1. **Username Sosial & Tautan:**
   Buka `index.html` dan cari teks placeholder berikut untuk diganti dengan akun Anda:
   - `[USERNAME]` &rarr; Ganti dengan username GitHub Anda (baris 128 & 770).
   - `[DISCORD_USERNAME]` &rarr; Ganti dengan tag Discord Anda (baris 757 & 765).
   - `[LINKEDIN_NAME]` &rarr; Ganti dengan nama/profil LinkedIn Anda (baris 782 & 792).

2. **Daftar Proyek (`#projects`):**
   Di bagian Proyek Pilihan (baris 237–308), sesuaikan judul `[JUDUL PROYEK 1]`, deskripsi mekanik/arsitektur, tags teknologi, dan link repositori proyek game Anda.

3. **Foto Profil:**
   Untuk mengganti foto profil, cukup gantikan berkas `aziz.jpg` dengan foto Anda yang lain, atau ubah atribut `src="aziz.jpg"` di baris 89 `index.html`.

---

## ✦ Cara Deploy ke GitHub Pages

1. Inisialisasi git dan buat commit pertama:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit portfolio website"
   ```
2. Hubungkan ke repositori GitHub Anda:
   ```bash
   git branch -M main
   git remote add origin https://github.com/[USERNAME]/[NAMA_REPO].git
   git push -u origin main
   ```
3. Aktifkan **GitHub Pages**:
   - Buka repositori Anda di GitHub &rarr; pilih menu **Settings** &rarr; **Pages**.
   - Pada bagian **Build and deployment**, atur Branch ke `main` dan folder `/ (root)`.
   - Klik **Save**. Website Anda akan langsung online dalam 1–2 menit!

---

## ✦ Lisensi

Proyek ini dirilis di bawah lisensi [MIT](LICENSE). Silakan gunakan dan modifikasi sesuai kebutuhan Anda.

---

<p align="center">
  Didesain &amp; Dikembangkan oleh <strong>Aziz</strong> &bull; Gameplay &amp; Tools Programmer
</p>
