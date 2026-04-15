# Frontend Developer Technical Test - Restaurant App

Project ini dibuat untuk memenuhi technical test posisi Frontend Developer. Aplikasi ini menampilkan daftar restoran lengkap dengan fitur filter, serta halaman detail yang berisi informasi dan ulasan dari masing-masing restoran.

---

## 🛠 Informasi Teknis

* Node.js: v22.17.1
* React.js: ^19.2.4
* Vite: ^8.0.4
* Package Manager: npm
* Data: menggunakan data dummy (local) untuk simulasi data restoran

---

## 🚀 Cara Menjalankan Project

1. Clone repository

```bash
git clone https://github.com/okttaacx/FrontendDevReactjs-OktaRamjiSaputra.git
```

2. Masuk ke folder project

```bash
cd FrontendDevReactjs-OktaRamjiSaputra
```

3. Install dependencies

```bash
npm install
```

4. Jalankan project

```bash
npm run dev
```

5. Buka di browser

```
http://localhost:5173
```

---

## 🔑 Login

Aplikasi ini tidak menggunakan sistem login, jadi semua fitur bisa langsung diakses.

---

## 📌 Fitur Utama

### Halaman Utama

* Menampilkan daftar restoran
* Filter:

  * Open Now (menampilkan restoran yang buka)
  * Price (berdasarkan harga)
  * Categories / Cuisines (simulasi filter seperti dari API)
* Setiap restoran menampilkan:

  * Foto
  * Nama
  * Rating
  * Harga
  * Status buka/tutup
  * Kategori
* Tombol **Learn More** untuk melihat detail

### Halaman Detail

* Menampilkan:

  * Nama restoran
  * Rating
  * Map (opsional)
* Bagian review:

  * Foto user
  * Nama
  * Rating
  * Komentar

---

## 🔗 Link

* GitHub:
  https://github.com/okttaacx/FrontendDevReactjs-OktaRamjiSaputra

* Live Demo:
  https://oktaramji-restaurant-app.netlify.app/

---

## 📌 Catatan

Project ini dibuat menggunakan data dummy supaya lebih fokus ke tampilan dan logic seperti filtering dan routing. Struktur kode juga dibuat sederhana supaya mudah dibaca dan dikembangkan.
