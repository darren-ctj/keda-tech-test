export type Language = 'en' | 'id';

export const translations = {
  en: {
    nav: {
      about: 'About',
      pricing: 'Pricing',
      contact: 'Contact',
      login: 'Login',
    },
    hero: {
      eyebrow: 'BUSINESS MANAGEMENT, SIMPLIFIED',
      headline: 'Run Your Business With Clarity.',
      description:
        'Track your inventory, monitor profits, and understand your sales — all in one simple business management platform.',
      primaryCta: 'Get Started',
      secondaryCta: 'Explore Pricing',
      supportingText:
        'Built for entrepreneurs who want less guesswork and more control.',
    },
    dashboard: {
      revenue: 'Revenue',
      profit: 'Profit',
      products: 'Products',
      revenueValue: 'Rp24.5M',
      profitValue: 'Rp8.2M',
      productsValue: '1,284',
      revenueChange: '+14.2% this month',
      profitMargin: '33.4% margin',
      productsStatus: 'Active inventory',
      salesTrend: 'Sales Performance',
      recentTransactions: 'Recent Transactions',
      aiForecast: 'AI Forecast',
      aiForecastDesc: 'Predicted +18% income growth next month based on current sales velocity.',
      incoming: 'Incoming',
      outgoing: 'Outgoing',
    },
    about: {
      label: 'ABOUT NEXA',
      heading: 'Your Business Data Should Work for You.',
      description:
        "Managing a business shouldn't mean juggling spreadsheets, notebooks, and scattered records. NEXA brings your daily business activities into one place — from tracking incoming and outgoing goods to monitoring profits and understanding your sales performance. With the right data at your fingertips, you can spend less time recording numbers and more time growing your business.",
      features: [
        {
          title: 'Track Inventory',
          description:
            "Keep a clear record of goods coming in and going out, so you always know what's happening with your inventory.",
        },
        {
          title: 'Monitor Profits',
          description:
            'Record your daily results and keep track of how your business is performing over time.',
        },
        {
          title: 'Understand Your Sales',
          description:
            'Turn your sales data into clear charts and insights that help you understand your business better.',
        },
        {
          title: 'Make Smarter Decisions',
          description:
            'With advanced tools like Excel exports and AI-powered income predictions, turn your business data into actionable insights.',
        },
      ],
    },
    howItWorks: {
      label: 'HOW IT WORKS',
      heading: 'From Daily Records to Better Decisions.',
      steps: [
        {
          number: '01',
          title: 'Record',
          description:
            'Record your incoming and outgoing goods and keep your business data organized in one place.',
        },
        {
          number: '02',
          title: 'Analyze',
          description:
            'Track profits and visualize your sales performance with clear, easy-to-understand charts.',
        },
        {
          number: '03',
          title: 'Grow',
          description:
            'Use your business data, exports, and AI-powered predictions to make more informed decisions and plan ahead.',
        },
      ],
    },
    pricing: {
      label: 'PRICING PLANS',
      heading: 'Transparent Pricing for Every Stage.',
      description: 'Choose the plan that fits your business scale. Upgrade or downgrade anytime.',
      period: '/ month',
      mostPopular: 'MOST POPULAR',
      aiPowered: 'AI POWERED',
      comparisonTitle: 'Compare Plan Features',
      matrixHeadings: {
        feature: 'Feature',
        basic: 'Basic',
        business: 'Business',
        entrepreneur: 'Entrepreneur',
      },
      matrixRows: [
        { name: 'Incoming goods tracking', basic: true, business: true, entrepreneur: true },
        { name: 'Outgoing goods tracking', basic: true, business: true, entrepreneur: true },
        { name: 'Profit tracking', basic: true, business: true, entrepreneur: true },
        { name: 'Sales analytics & charts', basic: false, business: true, entrepreneur: true },
        { name: '24/7 support', basic: false, business: true, entrepreneur: true },
        { name: 'Excel data export', basic: false, business: false, entrepreneur: true },
        { name: 'AI prediction engine', basic: false, business: false, entrepreneur: true },
      ],
      plans: {
        basic: {
          name: 'BASIC',
          price: 'Rp49K',
          description: 'For businesses that need simple and reliable daily records.',
          cta: 'Start with Basic',
          features: [
            'Incoming goods tracking',
            'Outgoing goods tracking',
            'Profit tracking',
          ],
        },
        business: {
          name: 'BUSINESS',
          price: 'Rp149K',
          description: 'For growing businesses that want to understand their performance.',
          cta: 'Choose Business',
          features: [
            'Incoming & outgoing goods tracking',
            'Profit tracking',
            'Sales analytics & charts',
            '24/7 support',
          ],
        },
        entrepreneur: {
          name: 'ENTREPRENEUR',
          price: 'Rp299K',
          description: 'For entrepreneurs who want deeper insights and smarter tools.',
          cta: 'Choose Entrepreneur',
          features: [
            'Incoming & outgoing goods tracking',
            'Profit tracking',
            'Sales analytics & charts',
            '24/7 support',
            'Excel data export',
            'AI-powered income prediction',
          ],
        },
      },
    },
    contact: {
      label: 'GET IN TOUCH',
      heading: "Have Questions? Let's Talk.",
      description:
        "Whether you want to learn more about NEXA, need help choosing a plan, or simply want to ask us something, we're here to help.",
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'you@company.com',
        businessName: 'Business Name',
        businessPlaceholder: 'Your business name',
        message: 'Message',
        messagePlaceholder: 'How can we help?',
        button: 'Send Message',
        supportingText: "We'll get back to you as soon as possible.",
        successTitle: 'Message Sent!',
        successMessage: 'Thank you for reaching out. Our team will contact you within 24 hours.',
        errorNameRequired: 'Name is required.',
        errorEmailInvalid: 'Please enter a valid email address.',
        errorMessageRequired: 'Please write a message.',
      },
    },
    footer: {
      tagline: 'Simple tools for better business decisions.',
      navTitle: 'Navigation',
      contactTitle: 'Contact Us',
      copyright: '© 2026 NEXA. All rights reserved.',
    },
    loginModal: {
      title: 'Welcome Back',
      subtitle: 'Log in to your NEXA account.',
      emailLabel: 'Email',
      emailPlaceholder: 'you@example.com',
      passwordLabel: 'Password',
      passwordPlaceholder: 'Enter your password',
      rememberMe: 'Remember me',
      forgotPassword: 'Forgot password?',
      loginButton: 'Login',
      loggingIn: 'Authenticating...',
      noAccount: "Don't have an account?",
      getStarted: 'Get Started',
      forgotNotice: 'Password reset link sent to your email (simulated).',
      errorEmail: 'Valid email is required.',
      errorPassword: 'Password is required.',
      successMsg: 'Logged in successfully! Redirecting...',
    },
  },
  id: {
    nav: {
      about: 'Tentang Kami',
      pricing: 'Harga',
      contact: 'Kontak',
      login: 'Masuk',
    },
    hero: {
      eyebrow: 'MANAJEMEN BISNIS, LEBIH SEDERHANA',
      headline: 'Kelola Bisnis dengan Lebih Jelas.',
      description:
        'Catat stok barang, pantau keuntungan, dan pahami perkembangan penjualan bisnis Anda — semuanya dalam satu platform manajemen bisnis yang sederhana.',
      primaryCta: 'Mulai Sekarang',
      secondaryCta: 'Lihat Harga',
      supportingText:
        'Dibuat untuk pengusaha yang ingin mengurangi ketidakpastian dan memiliki kendali lebih besar atas bisnisnya.',
    },
    dashboard: {
      revenue: 'Pendapatan',
      profit: 'Keuntungan',
      products: 'Produk',
      revenueValue: 'Rp24.5M',
      profitValue: 'Rp8.2M',
      productsValue: '1,284',
      revenueChange: '+14.2% bulan ini',
      profitMargin: 'Margin 33.4%',
      productsStatus: 'Stok aktif',
      salesTrend: 'Performa Penjualan',
      recentTransactions: 'Aktivitas Terkini',
      aiForecast: 'Prediksi AI',
      aiForecastDesc: 'Diprediksi tumbuh +18% pendapatan bulan depan berdasarkan performa saat ini.',
      incoming: 'Masuk',
      outgoing: 'Keluar',
    },
    about: {
      label: 'TENTANG NEXA',
      heading: 'Biarkan Data Bekerja untuk Bisnis Anda.',
      description:
        'Mengelola bisnis tidak seharusnya berarti harus berpindah-pindah antara spreadsheet, buku catatan, dan berbagai catatan yang terpisah. NEXA menyatukan aktivitas bisnis harian Anda dalam satu tempat — mulai dari mencatat barang masuk dan keluar hingga memantau keuntungan dan memahami performa penjualan. Dengan data bisnis yang tersedia dengan mudah, Anda dapat mengurangi waktu untuk mencatat angka dan lebih fokus mengembangkan bisnis.',
      features: [
        {
          title: 'Track Inventory',
          description:
            'Catat barang yang masuk dan keluar dengan mudah, sehingga Anda selalu mengetahui kondisi stok bisnis Anda.',
        },
        {
          title: 'Monitor Profits',
          description:
            'Catat hasil bisnis setiap hari dan pantau perkembangan keuntungan dari waktu ke waktu.',
        },
        {
          title: 'Understand Your Sales',
          description:
            'Ubah data penjualan menjadi chart dan insight yang mudah dipahami untuk membantu Anda melihat perkembangan bisnis.',
        },
        {
          title: 'Make Smarter Decisions',
          description:
            'Dengan fitur seperti export Excel dan prediksi penghasilan berbasis AI, ubah data bisnis Anda menjadi insight yang dapat digunakan untuk mengambil keputusan.',
        },
      ],
    },
    howItWorks: {
      label: 'CARA KERJA',
      heading: 'Dari Catatan Harian Menjadi Keputusan yang Lebih Baik.',
      steps: [
        {
          number: '01',
          title: 'Record',
          description:
            'Catat barang yang masuk dan keluar, lalu simpan seluruh data bisnis Anda secara terorganisir dalam satu tempat.',
        },
        {
          number: '02',
          title: 'Analyze',
          description:
            'Pantau keuntungan dan lihat performa penjualan melalui chart yang jelas dan mudah dipahami.',
        },
        {
          number: '03',
          title: 'Grow',
          description:
            'Gunakan data bisnis, export, dan prediksi berbasis AI untuk mengambil keputusan yang lebih tepat dan merencanakan langkah berikutnya.',
        },
      ],
    },
    pricing: {
      label: 'PAKET HARGA',
      heading: 'Harga Transparan untuk Setiap Tahap Bisnis.',
      description: 'Pilih paket yang sesuai dengan skala bisnis Anda. Upgrade atau downgrade kapan saja.',
      period: '/ bulan',
      mostPopular: 'PALING POPULER',
      aiPowered: 'BERBASIS AI',
      comparisonTitle: 'Perbandingan Fitur Paket',
      matrixHeadings: {
        feature: 'Fitur',
        basic: 'Basic',
        business: 'Business',
        entrepreneur: 'Entrepreneur',
      },
      matrixRows: [
        { name: 'Pencatatan barang masuk', basic: true, business: true, entrepreneur: true },
        { name: 'Pencatatan barang keluar', basic: true, business: true, entrepreneur: true },
        { name: 'Pencatatan keuntungan', basic: true, business: true, entrepreneur: true },
        { name: 'Analisis penjualan & chart', basic: false, business: true, entrepreneur: true },
        { name: 'Dukungan 24/7', basic: false, business: true, entrepreneur: true },
        { name: 'Export data ke Excel', basic: false, business: false, entrepreneur: true },
        { name: 'Prediksi penghasilan AI', basic: false, business: false, entrepreneur: true },
      ],
      plans: {
        basic: {
          name: 'BASIC',
          price: 'Rp49K',
          description: 'Untuk bisnis yang membutuhkan pencatatan harian yang sederhana dan terpercaya.',
          cta: 'Mulai dengan Basic',
          features: [
            'Pencatatan barang masuk',
            'Pencatatan barang keluar',
            'Pencatatan keuntungan',
          ],
        },
        business: {
          name: 'BUSINESS',
          price: 'Rp149K',
          description: 'Untuk bisnis yang sedang berkembang dan ingin memahami performanya.',
          cta: 'Pilih Business',
          features: [
            'Pencatatan barang masuk & keluar',
            'Pencatatan keuntungan',
            'Analisis penjualan & chart',
            'Dukungan 24/7',
          ],
        },
        entrepreneur: {
          name: 'ENTREPRENEUR',
          price: 'Rp299K',
          description: 'Untuk pengusaha yang membutuhkan insight lebih mendalam dan fitur yang lebih cerdas.',
          cta: 'Pilih Entrepreneur',
          features: [
            'Pencatatan barang masuk & keluar',
            'Pencatatan keuntungan',
            'Analisis penjualan & chart',
            'Dukungan 24/7',
            'Export data ke Excel',
            'Prediksi penghasilan berbasis AI',
          ],
        },
      },
    },
    contact: {
      label: 'HUBUNGI KAMI',
      heading: 'Punya Pertanyaan? Mari Bicara.',
      description:
        'Baik Anda ingin mengetahui lebih lanjut tentang NEXA, membutuhkan bantuan dalam memilih paket, atau sekadar ingin bertanya, kami siap membantu.',
      form: {
        name: 'Nama',
        namePlaceholder: 'Nama Anda',
        email: 'Email',
        emailPlaceholder: 'anda@perusahaan.com',
        businessName: 'Nama Bisnis',
        businessPlaceholder: 'Nama bisnis Anda',
        message: 'Pesan',
        messagePlaceholder: 'Bagaimana kami dapat membantu?',
        button: 'Kirim Pesan',
        supportingText: 'Kami akan menghubungi Anda sesegera mungkin.',
        successTitle: 'Pesan Terkirim!',
        successMessage: 'Terima kasih telah menghubungi kami. Tim kami akan menghubungi Anda dalam 24 jam.',
        errorNameRequired: 'Nama wajib diisi.',
        errorEmailInvalid: 'Silakan masukkan alamat email yang valid.',
        errorMessageRequired: 'Silakan tulis pesan Anda.',
      },
    },
    footer: {
      tagline: 'Solusi sederhana untuk keputusan bisnis yang lebih baik.',
      navTitle: 'Navigasi',
      contactTitle: 'Hubungi Kami',
      copyright: '© 2026 NEXA. Hak cipta dilindungi.',
    },
    loginModal: {
      title: 'Selamat Datang Kembali',
      subtitle: 'Masuk ke akun NEXA Anda.',
      emailLabel: 'Email',
      emailPlaceholder: 'anda@contoh.com',
      passwordLabel: 'Password',
      passwordPlaceholder: 'Masukkan password Anda',
      rememberMe: 'Ingat saya',
      forgotPassword: 'Lupa password?',
      loginButton: 'Masuk',
      loggingIn: 'Memproses...',
      noAccount: 'Belum memiliki akun?',
      getStarted: 'Mulai Sekarang',
      forgotNotice: 'Instruksi reset password telah dikirim ke email Anda (simulasi).',
      errorEmail: 'Email valid wajib diisi.',
      errorPassword: 'Password wajib diisi.',
      successMsg: 'Berhasil masuk! Mengalihkan...',
    },
  },
};
