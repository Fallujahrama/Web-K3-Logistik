# 🚢 Website K3 Logistik Laut

Website edukasi tentang **Keselamatan dan Kesehatan Kerja (K3)** di sektor logistik laut yang dibangun menggunakan Bootstrap dan Argon Design System.

![K3 Logistik Laut](https://img.shields.io/badge/K3-Logistik%20Laut-blue?style=for-the-badge)
![Bootstrap](https://img.shields.io/badge/Bootstrap-4.x-purple?style=for-the-badge&logo=bootstrap)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## 📋 Deskripsi Project

Website ini merupakan platform edukasi yang menyediakan informasi lengkap mengenai Keselamatan dan Kesehatan Kerja (K3) di sektor logistik laut. Website ini dirancang dengan tampilan modern dan responsif untuk memberikan pengalaman pengguna yang optimal dalam mempelajari aspek-aspek penting K3 di lingkungan pelabuhan dan logistik maritim.

## ✨ Fitur Utama

### 🎯 Konten Lengkap
- **Hero Section dengan Carousel** - Slideshow gambar otomatis tentang aktivitas logistik laut
- **Tentang Logistik Laut** - Penjelasan komprehensif tentang peran dan pentingnya logistik laut
- **Landasan Hukum K3** - Regulasi dan peraturan K3 di Indonesia
- **Lingkungan Kerja** - Informasi kondisi lingkungan kerja di area pelabuhan
- **Keselamatan Kerja** - Faktor-faktor, bahaya, dan metode pencegahan kecelakaan
- **Alat Pelindung Diri (APD)** - 9 jenis APD lengkap dengan gambar dan deskripsi
- **Pertolongan Pertama (P3K)** - Panduan P3K untuk kecelakaan kerja di logistik laut

### 🎨 Desain & User Experience
- ✅ **Responsive Design** - Tampilan optimal di semua perangkat (desktop, tablet, mobile)
- ✅ **Modern UI/UX** - Desain clean dengan Stripe-inspired minimalist style
- ✅ **Smooth Animations** - Scroll animations untuk pengalaman visual yang menarik
- ✅ **Sticky Navigation** - Navbar yang selalu terlihat saat scroll
- ✅ **Carousel Hero** - Auto-rotating background images setiap 4 detik
- ✅ **Icon Integration** - Font Awesome icons untuk visual yang informatif

### 🚀 Performance
- Fast loading dengan optimized assets
- Clean code structure
- SEO-friendly markup
- Cross-browser compatibility

## 📑 Table of Contents

- [Teknologi yang Digunakan](#-teknologi-yang-digunakan)
- [Struktur Project](#-struktur-project)
- [Cara Instalasi](#-cara-instalasi)
- [Panduan Penggunaan](#-panduan-penggunaan)
- [Kustomisasi](#-kustomisasi)
- [Browser Support](#-browser-support)
- [Kontribusi](#-kontribusi)
- [Lisensi](#-lisensi)
- [Kontak](#-kontak)

## 🛠 Teknologi yang Digunakan

### Frontend Framework & Libraries
- **Bootstrap 4.x** - Framework CSS untuk responsive design
- **Argon Design System** - Design system dari Creative Tim
- **jQuery 3.x** - JavaScript library
- **Font Awesome 6.5** - Icon library
- **Popper.js** - Tooltip & popover positioning

### CSS Preprocessing
- **SCSS/Sass** - CSS preprocessor untuk styling yang lebih efisien

### Fonts & Icons
- **Open Sans** - Google Fonts
- **Font Awesome** - Icon set
- **Nucleo Icons** - Additional icon set dari Argon

## 📂 Struktur Project

```
web_k3/
├── index.html                    # Redirect file (optional)
├── k3-landing.html              # Main landing page
├── README.md                    # Documentation
├── assets/
│   ├── css/
│   │   ├── argon-design-system.css
│   │   ├── argon-design-system.min.css
│   │   └── k3-styles.css        # Custom K3 styles
│   ├── js/
│   │   ├── core/
│   │   │   ├── jquery.min.js
│   │   │   ├── bootstrap.min.js
│   │   │   └── popper.min.js
│   │   └── k3-scripts.js        # Custom K3 scripts
│   ├── img/
│   │   ├── hero/                # Hero carousel images
│   │   │   ├── hero-1.jpg
│   │   │   ├── hero-2.jpg
│   │   │   ├── hero-3.jpg
│   │   │   └── hero-4.jpg
│   │   └── apd/                 # APD images
│   │       ├── helmet.jpg
│   │       ├── gloves.jpg
│   │       ├── goggles.jpg
│   │       ├── earplug.jpg
│   │       ├── mask.jpg
│   │       ├── shoes.jpg
│   │       ├── coverall.jpg
│   │       ├── harness.jpg
│   │       └── lifejacket.jpg
│   └── scss/
│       └── argon-design-system/ # SCSS source files
├── docs/                        # Argon documentation
└── examples/                    # Argon example pages
```

## 🚀 Cara Instalasi

### Clone Repository

```bash
git clone https://github.com/Fallujahrama/Web-K3-Logistik.git
cd Web-K3-Logistik
```

### Metode 1: Langsung Buka di Browser
Tidak memerlukan instalasi khusus, cukup buka file `k3-landing.html` di browser:

```bash
# macOS
open k3-landing.html

# Windows
start k3-landing.html

# Linux
xdg-open k3-landing.html
```

### Metode 2: Menggunakan Local Server

#### Dengan PHP
```bash
php -S localhost:8000
```

Kemudian buka browser dan akses: `http://localhost:8000/k3-landing.html`

## 📖 Panduan Penggunaan

### Navigasi Website

Website terdiri dari beberapa section yang dapat diakses melalui navbar:

1. **Tentang** - Informasi tentang perusahaan logistik laut
2. **Landasan Hukum** - Regulasi K3 di Indonesia
3. **Lingkungan Kerja** - Kondisi lingkungan kerja fisik
4. **Keselamatan Kerja** - Faktor bahaya dan pencegahan
5. **APD** - 9 jenis Alat Pelindung Diri
6. **P3K** - Panduan pertolongan pertama

### Fitur Hero Carousel

Hero section menampilkan carousel gambar yang berganti otomatis setiap 4 detik. Untuk mengubah gambar:

1. Letakkan gambar di folder `assets/img/hero/`
2. Beri nama: `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg`, `hero-4.jpg`
3. Rekomendasi ukuran: **1920x600 pixels** (landscape)
4. Format: JPG atau PNG

### Mengganti Gambar APD

Gambar APD terletak di `assets/img/apd/`. File yang dibutuhkan:
- `helmet.jpg` - Helm keselamatan
- `gloves.jpg` - Sarung tangan
- `goggles.jpg` - Kacamata/face shield
- `earplug.jpg` - Pelindung telinga
- `mask.jpg` - Masker/respirator
- `shoes.jpg` - Sepatu safety
- `coverall.jpg` - Rompi/coverall
- `harness.jpg` - Body harness
- `lifejacket.jpg` - Pelampung

## 🎨 Kustomisasi

### Mengubah Warna Tema

Edit file `assets/css/k3-styles.css` untuk mengubah skema warna:

```css
/* Warna Utama */
.hero-section {
  background: linear-gradient(135deg, #0077b6 0%, #00b4d8 100%);
}

/* Warna Aksen */
.btn-warning {
  background-color: #f4b400;
}

/* Warna Teks Heading */
.section-heading {
  color: #0077b6;
}
```

### Mengubah Kecepatan Carousel

Edit nilai `data-interval` di `k3-landing.html`:

```html
<!-- 4000 = 4 detik -->
<div id="heroCarousel" class="carousel slide" data-interval="4000">
```

### Menambah/Mengurangi Gambar Carousel

Untuk menambah gambar ke-5:

```html
<div class="carousel-item">
  <img src="./assets/img/hero/hero-5.jpg" class="d-block w-100 hero-bg-img" alt="K3 Logistik Laut 5">
</div>
```

### Custom Animations

Animasi scroll dapat diatur di `assets/js/k3-scripts.js`:

```javascript
// Scroll Animation Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
```

## 🤝 Kontribusi

Kontribusi, issues, dan feature requests sangat diterima!

### Cara Berkontribusi

1. Fork project ini
2. Buat branch fitur baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

### Development Guidelines

- Ikuti struktur kode yang sudah ada
- Gunakan nama variable dan function yang deskriptif
- Tambahkan komentar untuk kode yang kompleks
- Test di berbagai browser sebelum submit PR
- Update README.md jika ada perubahan signifikan


### Attribution

Website ini dibangun menggunakan:
- **Argon Design System** by [Creative Tim](https://www.creative-tim.com)
- **Bootstrap 4** by [Bootstrap Team](https://getbootstrap.com)
- **Font Awesome** by [Fonticons, Inc.](https://fontawesome.com)


<div align="center">

**⚠️ Safety First! Keselamatan adalah Prioritas ⚠️**

Dibuat dengan ❤️ untuk meningkatkan kesadaran K3 di Indonesia

**🚢 K3 Logistik Laut © 2025**

[![GitHub stars](https://img.shields.io/github/stars/Fallujahrama/Web-K3-Logistik?style=social)](https://github.com/Fallujahrama/Web-K3-Logistik/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Fallujahrama/Web-K3-Logistik?style=social)](https://github.com/Fallujahrama/Web-K3-Logistik/network/members)
[![GitHub watchers](https://img.shields.io/github/watchers/Fallujahrama/Web-K3-Logistik?style=social)](https://github.com/Fallujahrama/Web-K3-Logistik/watchers)

</div>
