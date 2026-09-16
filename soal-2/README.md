# Dokumentasi Teknologi

![Hero Section](./previews/hero.png)

👆 [Klik disini untuk lihat live demo](https://myerplandingpage.netlify.app/)

Dokumen ini menjelaskan teknologi yang digunakan, beserta alasan pemilihan masing-masing teknologi.

## 1. React Hook Form

**Alasan penggunaan :**

Digunakan untuk menangani state suatu form.

Beberapa alasan utama penggunaannya:

- API yang mudah diintegrasikan dengan komponen React.
- Mengurangi unnecessary re-render.
- Memudahkan pengelolaan state pada form yang memiliki banyak field.
- Mendukung integrasi dengan library validasi seperti Zod.

## 2. Zod

**Alasan penggunaan :**

Digunakan untuk mendefinisikan schema dan melakukan validasi terhadap data.

Beberapa alasan utama penggunaannya:

- Type-safe dan terintegrasi dengan TypeScript.
- Schema validasi dapat digunakan kembali.
- Validasi menjadi lebih terstruktur.
- Mudah diintegrasikan dengan React Hook Form.

## 3. Tailwind CSS

**Alasan penggunaan :**

Digunakan untuk styling dan membangun UI.

Beberapa alasan utama penggunaannya:

- Mempercepat proses pengembangan UI.
- Memiliki utility class yang konsisten dan lengkap.
- Memudahkan pembuatan responsive design.
- Mengurangi kebutuhan untuk membuat custom CSS.
- Memudahkan maintenance karena styling dapat ditemukan langsung pada component.
- Membantu menjaga konsistensi spacing, typography, dan lain-lainnya (theming).

## 4. TanStack React Router

**Alasan penggunaan :**

Digunakan untuk menangani routing dan navigasi.

Beberapa alasan utama penggunaannya:

- Type-safe routing.
- Mendukung nested routes.
- Memudahkan pengelolaan URL dan route parameters.

## 5. Framer Motion

**Alasan penggunaan :**

Digunakan untuk menambahkan animasi dan transisi.

Beberapa alasan penggunaannya:

- API yang mudah digunakan pada React component.
- Mendukung entrance dan exit animation.
- Mendukung gesture dan interaction animation.
- Membantu meningkatkan user experience.
- Animasi dapat dibuat tanpa harus mengelola CSS animation sendiri.

## 6. Lucide React

**Alasan penggunaan :**

Digunakan sebagai library icon.

Beberapa alasan penggunaannya:

- Memiliki banyak pilihan icon yang umum digunakan.
- Mudah dikustomisasi melalui props.
- Memiliki style icon yang konsisten.
- Mengurangi kebutuhan untuk membuat atau menyimpan icon secara manual.

## 7. React i18next

**Alasan penggunaan :**

Digunakan untuk menangani internationalization dan translation.

Beberapa alasan penggunaannya:

- Memisahkan text dari source code component.
- Memudahkan penambahan bahasa baru.
- Mendukung dynamic translation.
- Membantu menjaga codebase tetap terstruktur ketika jumlah translation semakin banyak.
