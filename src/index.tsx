import { Hono } from 'hono'
import { html } from 'hono/html'

const app = new Hono()

const PAGE = html`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bright and Chaste Limited | Civil Engineering & Construction Kenya</title>
  <meta name="description" content="Bright and Chaste Limited is a NCA3-accredited civil engineering and construction company based in Kenya. Specialising in Road Construction, Building Construction, Water Engineering and ICT Infrastructure." />
  <meta name="keywords" content="civil engineering Kenya, road construction Kenya, water engineering Kenya, ICT infrastructure Kenya, NCA3 contractor, construction company Kenya" />

  <!-- Favicons / brand colour -->
  <meta name="theme-color" content="#F59E0B" />
  <link rel="icon" type="image/png" href="/static/logo.png" />

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet" />

  <!-- Icons -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css" />

  <!-- Tailwind -->
  <script src="https://cdn.tailwindcss.com"></script>

  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: {
              50:  '#fffbeb',
              100: '#fef3c7',
              200: '#fde68a',
              300: '#fcd34d',
              400: '#fbbf24',
              500: '#f59e0b',
              600: '#d97706',
              700: '#b45309',
              800: '#92400e',
              900: '#78350f',
            },
            dark: '#0f172a',
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            display: ['"Playfair Display"', 'serif'],
          },
        }
      }
    }
  </script>

  <style>
    /* ── Smooth scroll ── */
    html { scroll-behavior: smooth; }

    /* ── Custom scrollbar ── */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: #0f172a; }
    ::-webkit-scrollbar-thumb { background: #f59e0b; border-radius: 3px; }

    /* ── Hero ── */
    .hero-bg {
      background: linear-gradient(135deg, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.75) 60%, rgba(180,83,9,0.55) 100%),
                  url('https://sspark.genspark.ai/cfimages?u1=fDxa4ICAhopvL9oQYphnom0dPGiXKm3P6vdfkPLYZZzZ8RDjkGcqpAEvbFsDuDjMVXIydCqzZBZz2yZHR104xB91BRVjQBj9986mHnN0ctIf9PiJvjIZ8VoCUA8VWpQm04YyFIweENHs6q055NVirZ51PL3b5A%3D%3D&u2=PTMubkcPBMKJCtce&width=2560') center/cover no-repeat;
      min-height: 100vh;
    }

    /* ── Animated underline on links ── */
    .nav-link {
      position: relative;
    }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -2px; left: 0;
      width: 0; height: 2px;
      background: #f59e0b;
      transition: width 0.3s ease;
    }
    .nav-link:hover::after, .nav-link.active::after { width: 100%; }

    /* ── Fade-up animation ── */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .fade-up { animation: fadeUp 0.7s ease both; }
    .delay-1 { animation-delay: 0.15s; }
    .delay-2 { animation-delay: 0.30s; }
    .delay-3 { animation-delay: 0.45s; }
    .delay-4 { animation-delay: 0.60s; }

    /* ── Counter ── */
    .stat-number { font-variant-numeric: tabular-nums; }

    /* ── Service card hover ── */
    .service-card { transition: transform 0.3s, box-shadow 0.3s; }
    .service-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(245,158,11,0.25); }

    /* ── Project card overlay ── */
    .project-card .overlay { transition: opacity 0.35s ease; opacity: 0; }
    .project-card:hover .overlay { opacity: 1; }

    /* ── Section divider ── */
    .section-divider { height: 4px; background: linear-gradient(90deg, #f59e0b, #d97706, transparent); }

    /* ── Mobile menu ── */
    #mobile-menu { transition: max-height 0.35s ease, opacity 0.35s ease; max-height: 0; opacity: 0; overflow: hidden; }
    #mobile-menu.open { max-height: 600px; opacity: 1; }
  </style>
</head>

<body class="font-sans bg-white text-gray-800">

<!-- ═══════════════════════════════════════════════════════════════ -->
<!--  NAVIGATION                                                      -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<header id="navbar" class="fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-transparent">
  <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-20">

      <!-- Logo -->
      <a href="#home" class="flex items-center">
        <img src="/static/logo.png" alt="Bright and Chaste Limited" class="h-10 w-auto brightness-0 invert" />
      </a>

      <!-- Desktop nav -->
      <ul class="hidden lg:flex items-center gap-8">
        <li><a href="#home"     class="nav-link text-white/90 hover:text-white text-sm font-semibold tracking-wide transition-colors">Home</a></li>
        <li><a href="#about"    class="nav-link text-white/90 hover:text-white text-sm font-semibold tracking-wide transition-colors">About Us</a></li>
        <li><a href="#services" class="nav-link text-white/90 hover:text-white text-sm font-semibold tracking-wide transition-colors">Services</a></li>
        <li><a href="#projects" class="nav-link text-white/90 hover:text-white text-sm font-semibold tracking-wide transition-colors">Projects</a></li>
        <li><a href="#why-us"   class="nav-link text-white/90 hover:text-white text-sm font-semibold tracking-wide transition-colors">Why Us</a></li>
        <li><a href="#contact"  class="nav-link text-white/90 hover:text-white text-sm font-semibold tracking-wide transition-colors">Contact</a></li>
      </ul>

      <!-- CTA -->
      <a href="#contact" class="hidden lg:inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-700 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors shadow-lg tracking-wide">
        <i class="fas fa-phone-alt text-xs"></i> Get a Quote
      </a>

      <!-- Hamburger -->
      <button id="hamburger" aria-label="Open menu" class="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors">
        <i id="hamburger-icon" class="fas fa-bars text-xl"></i>
      </button>
    </div>

    <!-- Mobile menu -->
    <div id="mobile-menu" class="lg:hidden bg-dark/95 backdrop-blur rounded-xl mt-2 px-4 pb-4">
      <ul class="flex flex-col gap-1 pt-3">
        <li><a href="#home"     class="block py-2.5 px-3 text-white/90 hover:text-brand-400 font-medium rounded-lg hover:bg-white/5 transition-colors">Home</a></li>
        <li><a href="#about"    class="block py-2.5 px-3 text-white/90 hover:text-brand-400 font-medium rounded-lg hover:bg-white/5 transition-colors">About Us</a></li>
        <li><a href="#services" class="block py-2.5 px-3 text-white/90 hover:text-brand-400 font-medium rounded-lg hover:bg-white/5 transition-colors">Services</a></li>
        <li><a href="#projects" class="block py-2.5 px-3 text-white/90 hover:text-brand-400 font-medium rounded-lg hover:bg-white/5 transition-colors">Projects</a></li>
        <li><a href="#why-us"   class="block py-2.5 px-3 text-white/90 hover:text-brand-400 font-medium rounded-lg hover:bg-white/5 transition-colors">Why Us</a></li>
        <li><a href="#contact"  class="block py-2.5 px-3 text-white/90 hover:text-brand-400 font-medium rounded-lg hover:bg-white/5 transition-colors">Contact</a></li>
        <li class="pt-2">
          <a href="#contact" class="flex items-center justify-center gap-2 bg-brand-500 text-white font-semibold py-2.5 px-4 rounded-lg">
            <i class="fas fa-phone-alt text-xs"></i> Get a Quote
          </a>
        </li>
      </ul>
    </div>
  </nav>
</header>


<!-- ═══════════════════════════════════════════════════════════════ -->
<!--  HERO                                                            -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<section id="home" class="hero-bg flex items-center">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
    <div class="max-w-3xl">

      <!-- Badge -->
      <div class="fade-up inline-flex items-center gap-2 bg-brand-500/20 border border-brand-400/40 text-brand-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
        <i class="fas fa-certificate text-brand-400"></i>
        NCA Level 3 Accredited &bull; Est. 2019 &bull; Nairobi, Kenya
      </div>

      <h1 class="fade-up delay-1 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
        Building Kenya's<br/>
        <span class="text-brand-400">Infrastructure</span><br/>
        for Tomorrow
      </h1>

      <p class="fade-up delay-2 text-gray-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
        Bright and Chaste Limited is a premier civil engineering and construction company delivering world-class roads, buildings, water systems and ICT infrastructure across Kenya.
      </p>

      <div class="fade-up delay-3 flex flex-wrap gap-4">
        <a href="#services" class="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-2xl hover:shadow-brand-500/40 hover:-translate-y-0.5">
          <i class="fas fa-hard-hat"></i> Our Services
        </a>
        <a href="#projects" class="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold px-8 py-4 rounded-xl text-base transition-all backdrop-blur">
          <i class="fas fa-images"></i> View Projects
        </a>
      </div>

      <!-- Quick stats strip -->
      <div class="fade-up delay-4 mt-16 flex flex-wrap gap-8">
        <div class="text-center">
          <div class="stat-number text-3xl font-bold text-blue-200 font-display" data-target="6">0</div>
          <div class="text-gray-400 text-xs mt-1 uppercase tracking-widest font-semibold">Years Experience</div>
        </div>
        <div class="w-px bg-white/20 hidden sm:block"></div>
        <div class="text-center">
          <div class="stat-number text-3xl font-bold text-blue-200 font-display" data-target="4">0</div>
          <div class="text-gray-400 text-xs mt-1 uppercase tracking-widest font-semibold">Core Services</div>
        </div>
        <div class="w-px bg-white/20 hidden sm:block"></div>
        <div class="text-center">
          <div class="stat-number text-3xl font-bold text-blue-200 font-display" data-target="3">0</div>
          <div class="text-gray-400 text-xs mt-1 uppercase tracking-widest font-semibold">NCA Level</div>
        </div>
        <div class="w-px bg-white/20 hidden sm:block"></div>
        <div class="text-center">
          <div class="stat-number text-3xl font-bold text-blue-200 font-display">47</div>
          <div class="text-gray-400 text-xs mt-1 uppercase tracking-widest font-semibold">Counties Covered</div>
        </div>
      </div>

    </div>
  </div>

  <!-- Scroll indicator -->
  <a href="#about" class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 hover:text-brand-400 transition-colors animate-bounce">
    <span class="text-xs tracking-widest uppercase">Scroll</span>
    <i class="fas fa-chevron-down text-sm"></i>
  </a>
</section>


<!-- ═══════════════════════════════════════════════════════════════ -->
<!--  TRUST BAR                                                       -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<div class="bg-dark py-5 border-b border-white/5">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-gray-400 text-sm">
      <div class="flex items-center gap-2"><i class="fas fa-award text-brand-500"></i> NCA Level 3 Certified</div>
      <div class="w-px h-4 bg-white/10 hidden sm:block"></div>
      <div class="flex items-center gap-2"><i class="fas fa-shield-alt text-brand-500"></i> Fully Insured & Compliant</div>
      <div class="w-px h-4 bg-white/10 hidden sm:block"></div>
      <div class="flex items-center gap-2"><i class="fas fa-leaf text-brand-500"></i> Sustainable Practices</div>
      <div class="w-px h-4 bg-white/10 hidden sm:block"></div>
      <div class="flex items-center gap-2"><i class="fas fa-users text-brand-500"></i> Public &amp; Private Sector</div>
      <div class="w-px h-4 bg-white/10 hidden sm:block"></div>
      <div class="flex items-center gap-2"><i class="fas fa-flag text-brand-500"></i> Proudly Kenyan</div>
    </div>
  </div>
</div>


<!-- ═══════════════════════════════════════════════════════════════ -->
<!--  ABOUT                                                           -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<section id="about" class="py-24 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div class="grid lg:grid-cols-2 gap-16 items-center">

      <!-- Image stack -->
      <div class="relative">
        <div class="rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://sspark.genspark.ai/cfimages?u1=9hpq6kObEHAsRumHozUQ6htVPBLnzJs7l0zuMwoMBQVMxvj5nXoYa9Ie8t5HTGaSDixHdg4yCUPPkvdbl4WCTOoMiTRPTtknYBsXJ9bIvfNW%2BgXHNC%2BDgoPNLR2sSpQyayoPtG7b7WjMC1M%2BixuVsIpK5Pz3soSfmn0zaCSo05ffGf%2FfdPHihtUbx98C3JZ2x8RwYn%2BcqJx3iTsaStk3EyWbwiETebPIrdbzxOhvEun%2FvyXoH6BnOu04U4av6U8CI4bBl4NkGauIeJxzX0yPDEn1F4eAJ3GxMWXggVavaKqWFns%2B5lj29XAVkKGoPn%2BAO3Gwge7jwh9sQ1GTFE9JqtscG99aPPUAuio8wUgcmJWR4SiuvRqB2wewuK1dPaeg%2Fg%3D%3D&u2=dqQ%2BhpuUMbhX4euO&width=2560"
            alt="Civil engineering road construction in Kenya"
            class="w-full h-80 object-cover"
          />
        </div>

        <!-- Floating badge -->
        <div class="absolute -bottom-6 -right-6 bg-brand-500 text-white rounded-2xl p-6 shadow-2xl">
          <div class="text-4xl font-display font-bold">NCA3</div>
          <div class="text-brand-100 text-xs mt-1 font-semibold tracking-wide">ACCREDITED</div>
        </div>

        <!-- Founded badge -->
        <div class="absolute -top-4 -left-4 bg-dark text-white rounded-xl px-5 py-3 shadow-xl border border-white/10">
          <div class="text-brand-400 text-xs font-bold uppercase tracking-widest">Founded</div>
          <div class="text-2xl font-display font-bold">2019</div>
        </div>
      </div>

      <!-- Content -->
      <div>
        <div class="inline-flex items-center gap-2 text-brand-600 text-xs font-bold uppercase tracking-widest mb-4">
          <span class="w-8 h-0.5 bg-brand-500"></span> About Us
        </div>
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-dark mb-6 leading-tight">
          Kenya's Trusted Partner in Civil Engineering &amp; Construction
        </h2>

        <p class="text-gray-600 leading-relaxed mb-5">
          Bright and Chaste Limited is a registered construction company established in 2019. Since our inception, we have provided high-quality construction services across various sectors, ensuring reliability, innovation and value for our clients.
        </p>
        <p class="text-gray-600 leading-relaxed mb-8">
          Our team of experienced professionals is dedicated to delivering innovative and sustainable solutions that exceed client expectations. We aspire to be the leading construction company in Kenya and a globally recognised brand in the industry — serving county governments, water boards, private developers and development agencies alike.
        </p>

        <!-- Four pillars -->
        <div class="grid grid-cols-2 gap-4 mb-8">
          <div class="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
            <div class="w-9 h-9 bg-brand-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <i class="fas fa-check-circle text-brand-600"></i>
            </div>
            <div>
              <div class="font-semibold text-dark text-sm">Registered &amp; Certified</div>
              <div class="text-gray-500 text-xs mt-0.5">NCA Level 3 contractor</div>
            </div>
          </div>
          <div class="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
            <div class="w-9 h-9 bg-brand-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <i class="fas fa-layer-group text-brand-600"></i>
            </div>
            <div>
              <div class="font-semibold text-dark text-sm">Multi-sector Expertise</div>
              <div class="text-gray-500 text-xs mt-0.5">Civil, ICT, Water, Building</div>
            </div>
          </div>
          <div class="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
            <div class="w-9 h-9 bg-brand-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <i class="fas fa-map-marker-alt text-brand-600"></i>
            </div>
            <div>
              <div class="font-semibold text-dark text-sm">Nationwide Coverage</div>
              <div class="text-gray-500 text-xs mt-0.5">Public &amp; private clients</div>
            </div>
          </div>
          <div class="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
            <div class="w-9 h-9 bg-brand-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <i class="fas fa-leaf text-brand-600"></i>
            </div>
            <div>
              <div class="font-semibold text-dark text-sm">Sustainable Build</div>
              <div class="text-gray-500 text-xs mt-0.5">Safety, quality, environment</div>
            </div>
          </div>
        </div>

        <a href="#contact" class="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold px-7 py-3.5 rounded-xl transition-colors shadow-lg">
          Work With Us <i class="fas fa-arrow-right text-sm"></i>
        </a>
      </div>
    </div>

    <!-- Mission / Vision / Values -->
    <div class="mt-20 grid md:grid-cols-3 gap-6">
      <div class="bg-dark rounded-2xl p-8 text-white">
        <div class="w-12 h-12 bg-brand-500/20 rounded-xl flex items-center justify-center mb-5">
          <i class="fas fa-bullseye text-brand-400 text-xl"></i>
        </div>
        <h3 class="font-display font-bold text-xl mb-3">Our Mission</h3>
        <p class="text-gray-400 leading-relaxed text-sm">
          To deliver safe, sustainable and high-quality infrastructure that improves lives, stimulates economic growth and builds lasting communities across Kenya.
        </p>
      </div>
      <div class="bg-brand-500 rounded-2xl p-8 text-white">
        <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-5">
          <i class="fas fa-eye text-white text-xl"></i>
        </div>
        <h3 class="font-display font-bold text-xl mb-3">Our Vision</h3>
        <p class="text-brand-50 leading-relaxed text-sm">
          To be the leading construction and engineering company in Kenya, recognised for innovation, integrity and excellence on every project we undertake.
        </p>
      </div>
      <div class="bg-gray-50 rounded-2xl p-8">
        <div class="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center mb-5">
          <i class="fas fa-star text-brand-600 text-xl"></i>
        </div>
        <h3 class="font-display font-bold text-xl mb-3 text-dark">Our Values</h3>
        <ul class="space-y-2 text-gray-600 text-sm">
          <li class="flex items-center gap-2"><i class="fas fa-check text-brand-500 text-xs"></i> Integrity &amp; Transparency</li>
          <li class="flex items-center gap-2"><i class="fas fa-check text-brand-500 text-xs"></i> Quality Workmanship</li>
          <li class="flex items-center gap-2"><i class="fas fa-check text-brand-500 text-xs"></i> Safety First</li>
          <li class="flex items-center gap-2"><i class="fas fa-check text-brand-500 text-xs"></i> Client Satisfaction</li>
          <li class="flex items-center gap-2"><i class="fas fa-check text-brand-500 text-xs"></i> Environmental Responsibility</li>
        </ul>
      </div>
    </div>

  </div>
</section>


<!-- ═══════════════════════════════════════════════════════════════ -->
<!--  SERVICES                                                        -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<section id="services" class="py-24 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div class="text-center mb-16">
      <div class="inline-flex items-center gap-2 text-brand-600 text-xs font-bold uppercase tracking-widest mb-4">
        <span class="w-8 h-0.5 bg-brand-500"></span> What We Do <span class="w-8 h-0.5 bg-brand-500"></span>
      </div>
      <h2 class="font-display text-3xl sm:text-4xl font-bold text-dark mb-4">Our Core Services</h2>
      <p class="text-gray-500 max-w-2xl mx-auto">
        We offer a comprehensive range of civil engineering and construction services, executed with precision, professionalism and a deep commitment to quality.
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

      <!-- Road Construction -->
      <article class="service-card bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer">
        <div class="h-48 overflow-hidden relative">
          <img
            src="https://sspark.genspark.ai/cfimages?u1=fDxa4ICAhopvL9oQYphnom0dPGiXKm3P6vdfkPLYZZzZ8RDjkGcqpAEvbFsDuDjMVXIydCqzZBZz2yZHR104xB91BRVjQBj9986mHnN0ctIf9PiJvjIZ8VoCUA8VWpQm04YyFIweENHs6q055NVirZ51PL3b5A%3D%3D&u2=PTMubkcPBMKJCtce&width=2560"
            alt="Road construction Kenya"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent"></div>
          <div class="absolute bottom-3 left-4">
            <span class="bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Road Works</span>
          </div>
        </div>
        <div class="p-6">
          <div class="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
            <i class="fas fa-road text-brand-600 text-xl"></i>
          </div>
          <h3 class="font-display font-bold text-lg text-dark mb-3">Road Construction</h3>
          <p class="text-gray-500 text-sm leading-relaxed mb-4">
            Design, construction and rehabilitation of urban roads, rural access roads, highways and associated infrastructure including drainage and road furniture.
          </p>
          <ul class="space-y-1.5 text-sm text-gray-600">
            <li class="flex items-center gap-2"><i class="fas fa-check-circle text-brand-500 text-xs"></i> Urban &amp; rural roads</li>
            <li class="flex items-center gap-2"><i class="fas fa-check-circle text-brand-500 text-xs"></i> Drainage systems</li>
            <li class="flex items-center gap-2"><i class="fas fa-check-circle text-brand-500 text-xs"></i> Road rehabilitation</li>
          </ul>
        </div>
      </article>

      <!-- Building Construction -->
      <article class="service-card bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer">
        <div class="h-48 overflow-hidden relative">
          <img
            src="https://sspark.genspark.ai/cfimages?u1=ZggYI%2Fbz32xB%2BZbU1JIEMzv1WkHfz743I%2FzxOziAAckPCGVbR%2B%2FsW9Ya6pq9HWdA29v4xBj0N1%2FgoEEYd4xWbbcwbHnNrXWsQEBKrQmqjM9%2F69ETAY7BqYykES%2F2hsz1auaIGMSoSatnchOVDe%2F9TjZKbwtkyThIRglya4PoqOScBq%2FPEzcjAQ%3D%3D&u2=Xu9bN4A2JeLSXXCP&width=2560"
            alt="Building construction Kenya"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent"></div>
          <div class="absolute bottom-3 left-4">
            <span class="bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Building Works</span>
          </div>
        </div>
        <div class="p-6">
          <div class="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
            <i class="fas fa-building text-brand-600 text-xl"></i>
          </div>
          <h3 class="font-display font-bold text-lg text-dark mb-3">Building Construction</h3>
          <p class="text-gray-500 text-sm leading-relaxed mb-4">
            Full lifecycle building projects — from initial planning, structural works and MEP installations through to final finishing for residential and commercial developments.
          </p>
          <ul class="space-y-1.5 text-sm text-gray-600">
            <li class="flex items-center gap-2"><i class="fas fa-check-circle text-brand-500 text-xs"></i> Residential &amp; commercial</li>
            <li class="flex items-center gap-2"><i class="fas fa-check-circle text-brand-500 text-xs"></i> Structural works</li>
            <li class="flex items-center gap-2"><i class="fas fa-check-circle text-brand-500 text-xs"></i> Interior finishing</li>
          </ul>
        </div>
      </article>

      <!-- Water Engineering -->
      <article class="service-card bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer">
        <div class="h-48 overflow-hidden relative">
          <img
            src="https://sspark.genspark.ai/cfimages?u1=VmwcyWsUvvPfRd5MmVP0kwg6LoYdkBCJCc9psAFM3HRHGEJgYYcJfoccx9teLwUzM9y8fj1BUTRTnxGoJm98FdZuqaH0jd6SHb8bKysbnasbpQus87sFZ0PmY7AsXXNs6r3nCR2C&u2=9jCYkFYS3UerBaJv&width=2560"
            alt="Water engineering Kenya"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent"></div>
          <div class="absolute bottom-3 left-4">
            <span class="bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Water Works</span>
          </div>
        </div>
        <div class="p-6">
          <div class="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
            <i class="fas fa-water text-brand-600 text-xl"></i>
          </div>
          <h3 class="font-display font-bold text-lg text-dark mb-3">Water Engineering</h3>
          <p class="text-gray-500 text-sm leading-relaxed mb-4">
            Design and construction of reliable water supply networks, sewerage systems and sanitation infrastructure, working closely with county governments and water boards.
          </p>
          <ul class="space-y-1.5 text-sm text-gray-600">
            <li class="flex items-center gap-2"><i class="fas fa-check-circle text-brand-500 text-xs"></i> Water supply networks</li>
            <li class="flex items-center gap-2"><i class="fas fa-check-circle text-brand-500 text-xs"></i> Sewerage systems</li>
            <li class="flex items-center gap-2"><i class="fas fa-check-circle text-brand-500 text-xs"></i> Sanitation infrastructure</li>
          </ul>
        </div>
      </article>

      <!-- ICT Infrastructure -->
      <article class="service-card bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer">
        <div class="h-48 overflow-hidden relative">
          <img
            src="https://sspark.genspark.ai/cfimages?u1=Zx%2FM2AO7cTcUJwA5zzUjkJ5dQKnYpy9lO67us2AvXrHhEFi1lGqO%2FR0%2F2WUZGMPY%2BAnI%2Bsq3seK9lE9scOVSEtePQnopWDxlIMSWtAf0HL4yvewRuV6I0g3gEmyZJARoXcJsbrPV9ulNoXukjDo4RlZf9NCIHMKb53V2oKZ1whCwARaPNrHE%2B4Reksziv%2B%2Bq3SDVFY71JJn%2F7vAEbXUpFetY%2BJLF5bs%3D&u2=cdirMomUf6TETap7&width=2560"
            alt="Fiber optic ICT infrastructure installation"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent"></div>
          <div class="absolute bottom-3 left-4">
            <span class="bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">ICT Works</span>
          </div>
        </div>
        <div class="p-6">
          <div class="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
            <i class="fas fa-network-wired text-brand-600 text-xl"></i>
          </div>
          <h3 class="font-display font-bold text-lg text-dark mb-3">ICT Infrastructure</h3>
          <p class="text-gray-500 text-sm leading-relaxed mb-4">
            Design, installation and maintenance of fiber optic networks, structured cabling and ICT infrastructure for residential, commercial and industrial projects across Kenya.
          </p>
          <ul class="space-y-1.5 text-sm text-gray-600">
            <li class="flex items-center gap-2"><i class="fas fa-check-circle text-brand-500 text-xs"></i> Fiber optic networks</li>
            <li class="flex items-center gap-2"><i class="fas fa-check-circle text-brand-500 text-xs"></i> Structured cabling</li>
            <li class="flex items-center gap-2"><i class="fas fa-check-circle text-brand-500 text-xs"></i> Data centre setups</li>
          </ul>
        </div>
      </article>

    </div>
  </div>
</section>


<!-- ═══════════════════════════════════════════════════════════════ -->
<!--  STATS BAND                                                      -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<div class="bg-dark py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

      <div class="p-6">
        <div class="text-5xl font-display font-bold text-brand-400 mb-2">6+</div>
        <div class="text-gray-400 text-sm uppercase tracking-widest">Years in Business</div>
      </div>
      <div class="p-6">
        <div class="text-5xl font-display font-bold text-brand-400 mb-2">4</div>
        <div class="text-gray-400 text-sm uppercase tracking-widest">Core Disciplines</div>
      </div>
      <div class="p-6">
        <div class="text-5xl font-display font-bold text-brand-400 mb-2">NCA3</div>
        <div class="text-gray-400 text-sm uppercase tracking-widest">Accreditation Level</div>
      </div>
      <div class="p-6">
        <div class="text-5xl font-display font-bold text-brand-400 mb-2">100%</div>
        <div class="text-gray-400 text-sm uppercase tracking-widest">Client Commitment</div>
      </div>

    </div>
  </div>
</div>


<!-- ═══════════════════════════════════════════════════════════════ -->
<!--  FEATURED PROJECTS                                               -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<section id="projects" class="py-24 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
      <div>
        <div class="inline-flex items-center gap-2 text-brand-600 text-xs font-bold uppercase tracking-widest mb-4">
          <span class="w-8 h-0.5 bg-brand-500"></span> Our Work
        </div>
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-dark">Featured Projects</h2>
      </div>
      <p class="text-gray-500 max-w-md text-sm leading-relaxed">
        A selection of completed and ongoing projects that demonstrate our capabilities and commitment to excellence across Kenya.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      <!-- Project 1 -->
      <article class="project-card rounded-2xl overflow-hidden shadow-md group cursor-pointer relative">
        <img
          src="https://sspark.genspark.ai/cfimages?u1=ldTxa5XiQv8QZaVr%2BKAWoYf6plPQOY6fELlIx15zYuwE%2F1wMMOIoW2P6j3TV%2B%2FkMQNRFF4k308wK2vejFfxG4%2B2nazrsmbpFbLNbiN2qNoQmXeLGCbc13KkPxOrTQXfeaUGyq84SHoWfX7sJ2t6X&u2=0w6KH8HcePGGEWZl&width=2560"
          alt="Ndeiya Community Water Project - Kiambu County"
          class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="overlay absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent flex flex-col justify-end p-6">
          <span class="text-brand-400 text-xs font-bold uppercase tracking-widest mb-2">Water Engineering</span>
          <h3 class="text-white font-display font-bold text-xl mb-2">Ndeiya Community Water Project</h3>
          <p class="text-gray-300 text-sm mb-3">Piping of Gitogothi Ndeiya Water, Limuru — Kiambu County Government</p>
          <div class="flex items-center gap-3 text-xs text-gray-400">
            <span class="flex items-center gap-1"><i class="fas fa-map-marker-alt text-brand-400"></i> Limuru, Kiambu</span>
            <span class="flex items-center gap-1"><i class="fas fa-clock text-brand-400"></i> 3 Weeks</span>
          </div>
        </div>
        <!-- Always-visible bottom strip -->
        <div class="p-5 bg-white border-t border-gray-100">
          <div class="flex items-center justify-between">
            <div>
              <p class="font-semibold text-dark text-sm">Ndeiya Community Water Project</p>
              <p class="text-gray-400 text-xs mt-0.5">Kiambu County Government</p>
            </div>
            <span class="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600">
              <i class="fas fa-water text-sm"></i>
            </span>
          </div>
        </div>
      </article>

      <!-- Project 2 -->
      <article class="project-card rounded-2xl overflow-hidden shadow-md group cursor-pointer relative">
        <img
          src="https://sspark.genspark.ai/cfimages?u1=Zx%2FM2AO7cTcUJwA5zzUjkJ5dQKnYpy9lO67us2AvXrHhEFi1lGqO%2FR0%2F2WUZGMPY%2BAnI%2Bsq3seK9lE9scOVSEtePQnopWDxlIMSWtAf0HL4yvewRuV6I0g3gEmyZJARoXcJsbrPV9ulNoXukjDo4RlZf9NCIHMKb53V2oKZ1whCwARaPNrHE%2B4Reksziv%2B%2Bq3SDVFY71JJn%2F7vAEbXUpFetY%2BJLF5bs%3D&u2=cdirMomUf6TETap7&width=2560"
          alt="Fiber optic installation project"
          class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="overlay absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent flex flex-col justify-end p-6">
          <span class="text-brand-400 text-xs font-bold uppercase tracking-widest mb-2">ICT Infrastructure</span>
          <h3 class="text-white font-display font-bold text-xl mb-2">Fiber Optic Network Installation</h3>
          <p class="text-gray-300 text-sm mb-3">Design, supply and installation of fiber optic cabling for enterprise connectivity</p>
          <div class="flex items-center gap-3 text-xs text-gray-400">
            <span class="flex items-center gap-1"><i class="fas fa-map-marker-alt text-brand-400"></i> Nairobi Region</span>
            <span class="flex items-center gap-1"><i class="fas fa-check-circle text-brand-400"></i> Completed</span>
          </div>
        </div>
        <div class="p-5 bg-white border-t border-gray-100">
          <div class="flex items-center justify-between">
            <div>
              <p class="font-semibold text-dark text-sm">Fiber Optic Network Installation</p>
              <p class="text-gray-400 text-xs mt-0.5">Enterprise Connectivity Project</p>
            </div>
            <span class="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600">
              <i class="fas fa-network-wired text-sm"></i>
            </span>
          </div>
        </div>
      </article>

      <!-- Project 3 -->
      <article class="project-card rounded-2xl overflow-hidden shadow-md group cursor-pointer relative">
        <img
          src="https://sspark.genspark.ai/cfimages?u1=fDxa4ICAhopvL9oQYphnom0dPGiXKm3P6vdfkPLYZZzZ8RDjkGcqpAEvbFsDuDjMVXIydCqzZBZz2yZHR104xB91BRVjQBj9986mHnN0ctIf9PiJvjIZ8VoCUA8VWpQm04YyFIweENHs6q055NVirZ51PL3b5A%3D%3D&u2=PTMubkcPBMKJCtce&width=2560"
          alt="Road construction project Kenya"
          class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="overlay absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent flex flex-col justify-end p-6">
          <span class="text-brand-400 text-xs font-bold uppercase tracking-widest mb-2">Road Construction</span>
          <h3 class="text-white font-display font-bold text-xl mb-2">Road Construction &amp; Rehabilitation</h3>
          <p class="text-gray-300 text-sm mb-3">Construction and rehabilitation of access roads and drainage infrastructure</p>
          <div class="flex items-center gap-3 text-xs text-gray-400">
            <span class="flex items-center gap-1"><i class="fas fa-map-marker-alt text-brand-400"></i> Kenya</span>
            <span class="flex items-center gap-1"><i class="fas fa-check-circle text-brand-400"></i> Ongoing</span>
          </div>
        </div>
        <div class="p-5 bg-white border-t border-gray-100">
          <div class="flex items-center justify-between">
            <div>
              <p class="font-semibold text-dark text-sm">Road Construction &amp; Rehabilitation</p>
              <p class="text-gray-400 text-xs mt-0.5">County &amp; National Road Works</p>
            </div>
            <span class="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600">
              <i class="fas fa-road text-sm"></i>
            </span>
          </div>
        </div>
      </article>

    </div>

    <div class="text-center mt-10">
      <a href="#contact" class="inline-flex items-center gap-2 border-2 border-brand-500 text-brand-600 hover:bg-brand-500 hover:text-white font-bold px-8 py-3.5 rounded-xl transition-colors">
        <i class="fas fa-briefcase"></i> Discuss Your Project
      </a>
    </div>

  </div>
</section>


<!-- ═══════════════════════════════════════════════════════════════ -->
<!--  WHY CHOOSE US                                                   -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<section id="why-us" class="py-24 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div class="text-center mb-16">
      <div class="inline-flex items-center gap-2 text-brand-600 text-xs font-bold uppercase tracking-widest mb-4">
        <span class="w-8 h-0.5 bg-brand-500"></span> Why Choose Us <span class="w-8 h-0.5 bg-brand-500"></span>
      </div>
      <h2 class="font-display text-3xl sm:text-4xl font-bold text-dark mb-4">The Bright &amp; Chaste Difference</h2>
      <p class="text-gray-500 max-w-2xl mx-auto">
        We bring more than technical expertise — we bring a genuine commitment to building Kenya's future.
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

      <div class="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:border-brand-200 hover:shadow-md transition-all">
        <div class="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mb-5">
          <i class="fas fa-award text-brand-600 text-2xl"></i>
        </div>
        <h3 class="font-display font-bold text-lg text-dark mb-3">NCA Level 3 Accredited</h3>
        <p class="text-gray-500 text-sm leading-relaxed">
          Fully registered and accredited by the National Construction Authority at Level 3, certifying our competence to undertake complex construction projects across Kenya.
        </p>
      </div>

      <div class="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:border-brand-200 hover:shadow-md transition-all">
        <div class="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mb-5">
          <i class="fas fa-users text-brand-600 text-2xl"></i>
        </div>
        <h3 class="font-display font-bold text-lg text-dark mb-3">Experienced Team</h3>
        <p class="text-gray-500 text-sm leading-relaxed">
          Our team of qualified engineers, project managers and skilled tradespeople bring deep expertise and a passion for quality to every project we undertake.
        </p>
      </div>

      <div class="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:border-brand-200 hover:shadow-md transition-all">
        <div class="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mb-5">
          <i class="fas fa-clock text-brand-600 text-2xl"></i>
        </div>
        <h3 class="font-display font-bold text-lg text-dark mb-3">On-time Delivery</h3>
        <p class="text-gray-500 text-sm leading-relaxed">
          We understand that time is money. Our structured project management processes ensure milestones are met and projects are delivered on schedule.
        </p>
      </div>

      <div class="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:border-brand-200 hover:shadow-md transition-all">
        <div class="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mb-5">
          <i class="fas fa-shield-alt text-brand-600 text-2xl"></i>
        </div>
        <h3 class="font-display font-bold text-lg text-dark mb-3">Safety First</h3>
        <p class="text-gray-500 text-sm leading-relaxed">
          We maintain rigorous health and safety standards on every site, protecting our workers, clients and the public throughout the lifecycle of each project.
        </p>
      </div>

      <div class="bg-brand-500 rounded-2xl p-7 text-white">
        <div class="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-5">
          <i class="fas fa-leaf text-white text-2xl"></i>
        </div>
        <h3 class="font-display font-bold text-lg mb-3">Sustainable Approach</h3>
        <p class="text-brand-50 text-sm leading-relaxed">
          We incorporate environmentally responsible practices and materials, minimising our footprint while building infrastructure that stands the test of time.
        </p>
      </div>

      <div class="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:border-brand-200 hover:shadow-md transition-all">
        <div class="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mb-5">
          <i class="fas fa-handshake text-brand-600 text-2xl"></i>
        </div>
        <h3 class="font-display font-bold text-lg text-dark mb-3">Client-Centred Service</h3>
        <p class="text-gray-500 text-sm leading-relaxed">
          We communicate openly, listen carefully and tailor our approach to each client's unique requirements — ensuring satisfaction from brief to handover.
        </p>
      </div>

    </div>
  </div>
</section>


<!-- ═══════════════════════════════════════════════════════════════ -->
<!--  CTA BANNER                                                      -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<section class="relative py-20 overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-brand-600 to-brand-800"></div>
  <div class="absolute inset-0 opacity-10" style="background-image: url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22><path d=%22M0 0h60v60H0z%22 fill=%22none%22/><path d=%22M30 0L60 30L30 60L0 30Z%22 fill=%22%23fff%22 fill-opacity=%220.15%22/></svg>'); background-size: 60px 60px;"></div>
  <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
      Ready to Build Something Great?
    </h2>
    <p class="text-brand-100 text-lg mb-10 max-w-2xl mx-auto">
      Whether you have a fully scoped project or just an idea, our team is ready to help you turn it into reality. Get in touch today.
    </p>
    <div class="flex flex-wrap justify-center gap-4">
      <a href="#contact" class="inline-flex items-center gap-2 bg-white text-brand-700 hover:bg-brand-50 font-bold px-8 py-4 rounded-xl transition-colors shadow-xl text-base">
        <i class="fas fa-paper-plane"></i> Request a Quote
      </a>
      <a href="tel:+254700000000" class="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-colors text-base">
        <i class="fas fa-phone-alt"></i> Call Us Now
      </a>
    </div>
  </div>
</section>


<!-- ═══════════════════════════════════════════════════════════════ -->
<!--  CONTACT                                                         -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<section id="contact" class="py-24 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div class="text-center mb-16">
      <div class="inline-flex items-center gap-2 text-brand-600 text-xs font-bold uppercase tracking-widest mb-4">
        <span class="w-8 h-0.5 bg-brand-500"></span> Contact Us <span class="w-8 h-0.5 bg-brand-500"></span>
      </div>
      <h2 class="font-display text-3xl sm:text-4xl font-bold text-dark mb-4">Get in Touch</h2>
      <p class="text-gray-500 max-w-xl mx-auto">
        Have a project in mind? Fill in the form below or reach out directly — we'd love to hear from you.
      </p>
    </div>

    <div class="grid lg:grid-cols-5 gap-12">

      <!-- Contact info -->
      <div class="lg:col-span-2 space-y-6">

        <div class="bg-dark rounded-2xl p-8 text-white">
          <h3 class="font-display font-bold text-xl mb-6">Contact Information</h3>

          <div class="space-y-5">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-brand-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                <i class="fas fa-map-marker-alt text-brand-400"></i>
              </div>
              <div>
                <div class="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-1">Office Address</div>
                <div class="text-white text-sm leading-relaxed">Nairobi, Kenya</div>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-brand-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                <i class="fas fa-phone-alt text-brand-400"></i>
              </div>
              <div>
                <div class="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-1">Phone</div>
                <a href="tel:+254700000000" class="text-white text-sm hover:text-brand-400 transition-colors">+254 700 000 000</a>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-brand-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                <i class="fas fa-envelope text-brand-400"></i>
              </div>
              <div>
                <div class="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-1">Email</div>
                <a href="mailto:info@brightandchaste.co.ke" class="text-white text-sm hover:text-brand-400 transition-colors">info@brightandchaste.co.ke</a>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-brand-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                <i class="fas fa-globe text-brand-400"></i>
              </div>
              <div>
                <div class="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-1">Website</div>
                <a href="https://brightandchaste.co.ke" target="_blank" rel="noopener" class="text-white text-sm hover:text-brand-400 transition-colors">brightandchaste.co.ke</a>
              </div>
            </div>
          </div>

          <!-- Social links -->
          <div class="mt-8 pt-6 border-t border-white/10">
            <div class="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-4">Follow Us</div>
            <div class="flex gap-3">
              <a href="#" aria-label="Facebook" class="w-10 h-10 bg-white/10 hover:bg-brand-500 rounded-lg flex items-center justify-center text-white transition-colors">
                <i class="fab fa-facebook-f text-sm"></i>
              </a>
              <a href="#" aria-label="LinkedIn" class="w-10 h-10 bg-white/10 hover:bg-brand-500 rounded-lg flex items-center justify-center text-white transition-colors">
                <i class="fab fa-linkedin-in text-sm"></i>
              </a>
              <a href="#" aria-label="Twitter/X" class="w-10 h-10 bg-white/10 hover:bg-brand-500 rounded-lg flex items-center justify-center text-white transition-colors">
                <i class="fab fa-x-twitter text-sm"></i>
              </a>
              <a href="#" aria-label="WhatsApp" class="w-10 h-10 bg-white/10 hover:bg-brand-500 rounded-lg flex items-center justify-center text-white transition-colors">
                <i class="fab fa-whatsapp text-sm"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Accreditation badge -->
        <div class="bg-brand-50 border border-brand-200 rounded-2xl p-6 flex items-center gap-5">
          <div class="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
            <i class="fas fa-certificate text-white text-2xl"></i>
          </div>
          <div>
            <div class="font-display font-bold text-dark text-lg">NCA Level 3</div>
            <div class="text-brand-700 text-sm font-semibold">National Construction Authority</div>
            <div class="text-gray-500 text-xs mt-1">Fully registered &amp; accredited contractor</div>
          </div>
        </div>

      </div>

      <!-- Contact form -->
      <div class="lg:col-span-3">
        <form id="contact-form" class="bg-gray-50 rounded-2xl p-8 space-y-5 border border-gray-100" onsubmit="handleFormSubmit(event)">
          <div class="grid sm:grid-cols-2 gap-5">
            <div>
              <label for="name" class="block text-sm font-semibold text-dark mb-2">Full Name <span class="text-red-500">*</span></label>
              <input type="text" id="name" name="name" required placeholder="e.g. Jane Wanjiku"
                class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent text-sm transition-shadow" />
            </div>
            <div>
              <label for="email" class="block text-sm font-semibold text-dark mb-2">Email Address <span class="text-red-500">*</span></label>
              <input type="email" id="email" name="email" required placeholder="jane@example.com"
                class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent text-sm transition-shadow" />
            </div>
          </div>

          <div class="grid sm:grid-cols-2 gap-5">
            <div>
              <label for="phone" class="block text-sm font-semibold text-dark mb-2">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="+254 7XX XXX XXX"
                class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent text-sm transition-shadow" />
            </div>
            <div>
              <label for="service" class="block text-sm font-semibold text-dark mb-2">Service Required</label>
              <select id="service" name="service"
                class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent text-sm transition-shadow">
                <option value="">Select a service…</option>
                <option>Road Construction</option>
                <option>Building Construction</option>
                <option>Water Engineering</option>
                <option>ICT Infrastructure</option>
                <option>Other / General Enquiry</option>
              </select>
            </div>
          </div>

          <div>
            <label for="subject" class="block text-sm font-semibold text-dark mb-2">Subject <span class="text-red-500">*</span></label>
            <input type="text" id="subject" name="subject" required placeholder="Brief project description"
              class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent text-sm transition-shadow" />
          </div>

          <div>
            <label for="message" class="block text-sm font-semibold text-dark mb-2">Message <span class="text-red-500">*</span></label>
            <textarea id="message" name="message" required rows="5" placeholder="Tell us about your project — location, scope, timeline, budget…"
              class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent text-sm resize-none transition-shadow"></textarea>
          </div>

          <button type="submit" id="submit-btn"
            class="w-full flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg text-base">
            <i class="fas fa-paper-plane"></i>
            <span id="submit-text">Send Message</span>
          </button>

          <div id="form-success" class="hidden flex items-center gap-3 bg-green-50 border border-green-200 text-green-800 rounded-xl px-5 py-4 text-sm">
            <i class="fas fa-check-circle text-green-500 text-lg"></i>
            <div>
              <strong>Message sent!</strong> Thank you for reaching out. We will get back to you within 24 hours.
            </div>
          </div>
        </form>
      </div>

    </div>
  </div>
</section>


<!-- ═══════════════════════════════════════════════════════════════ -->
<!--  FOOTER                                                          -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<footer class="bg-dark text-gray-400">

  <!-- Main footer -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

      <!-- Brand -->
      <div class="lg:col-span-1">
        <a href="#home" class="flex items-center mb-5">
          <img src="/static/logo.png" alt="Bright and Chaste Limited" class="h-9 w-auto brightness-0 invert" />
        </a>
        <p class="text-sm leading-relaxed mb-5">
          NCA Level 3 accredited civil engineering and construction company based in Nairobi, Kenya. Founded 2019.
        </p>
        <div class="flex gap-3">
          <a href="#" aria-label="Facebook" class="w-9 h-9 bg-white/5 hover:bg-brand-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors">
            <i class="fab fa-facebook-f text-sm"></i>
          </a>
          <a href="#" aria-label="LinkedIn" class="w-9 h-9 bg-white/5 hover:bg-brand-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors">
            <i class="fab fa-linkedin-in text-sm"></i>
          </a>
          <a href="#" aria-label="Twitter/X" class="w-9 h-9 bg-white/5 hover:bg-brand-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors">
            <i class="fab fa-x-twitter text-sm"></i>
          </a>
          <a href="#" aria-label="WhatsApp" class="w-9 h-9 bg-white/5 hover:bg-brand-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors">
            <i class="fab fa-whatsapp text-sm"></i>
          </a>
        </div>
      </div>

      <!-- Services -->
      <div>
        <h4 class="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Our Services</h4>
        <ul class="space-y-3 text-sm">
          <li><a href="#services" class="hover:text-brand-400 transition-colors flex items-center gap-2"><i class="fas fa-chevron-right text-brand-500 text-xs"></i> Road Construction</a></li>
          <li><a href="#services" class="hover:text-brand-400 transition-colors flex items-center gap-2"><i class="fas fa-chevron-right text-brand-500 text-xs"></i> Building Construction</a></li>
          <li><a href="#services" class="hover:text-brand-400 transition-colors flex items-center gap-2"><i class="fas fa-chevron-right text-brand-500 text-xs"></i> Water Engineering</a></li>
          <li><a href="#services" class="hover:text-brand-400 transition-colors flex items-center gap-2"><i class="fas fa-chevron-right text-brand-500 text-xs"></i> ICT Infrastructure</a></li>
        </ul>
      </div>

      <!-- Quick links -->
      <div>
        <h4 class="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Quick Links</h4>
        <ul class="space-y-3 text-sm">
          <li><a href="#home"     class="hover:text-brand-400 transition-colors flex items-center gap-2"><i class="fas fa-chevron-right text-brand-500 text-xs"></i> Home</a></li>
          <li><a href="#about"    class="hover:text-brand-400 transition-colors flex items-center gap-2"><i class="fas fa-chevron-right text-brand-500 text-xs"></i> About Us</a></li>
          <li><a href="#projects" class="hover:text-brand-400 transition-colors flex items-center gap-2"><i class="fas fa-chevron-right text-brand-500 text-xs"></i> Projects</a></li>
          <li><a href="#why-us"   class="hover:text-brand-400 transition-colors flex items-center gap-2"><i class="fas fa-chevron-right text-brand-500 text-xs"></i> Why Choose Us</a></li>
          <li><a href="#contact"  class="hover:text-brand-400 transition-colors flex items-center gap-2"><i class="fas fa-chevron-right text-brand-500 text-xs"></i> Contact</a></li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h4 class="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Contact</h4>
        <ul class="space-y-4 text-sm">
          <li class="flex items-start gap-3">
            <i class="fas fa-map-marker-alt text-brand-500 mt-0.5"></i>
            <span>Nairobi, Kenya</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fas fa-phone-alt text-brand-500 mt-0.5"></i>
            <a href="tel:+254700000000" class="hover:text-brand-400 transition-colors">+254 700 000 000</a>
          </li>
          <li class="flex items-start gap-3">
            <i class="fas fa-envelope text-brand-500 mt-0.5"></i>
            <a href="mailto:info@brightandchaste.co.ke" class="hover:text-brand-400 transition-colors">info@brightandchaste.co.ke</a>
          </li>
          <li class="flex items-start gap-3">
            <i class="fas fa-globe text-brand-500 mt-0.5"></i>
            <a href="https://brightandchaste.co.ke" target="_blank" rel="noopener" class="hover:text-brand-400 transition-colors">brightandchaste.co.ke</a>
          </li>
        </ul>
      </div>

    </div>
  </div>

  <!-- Bottom bar -->
  <div class="border-t border-white/5 py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
      <span>&copy; <span id="year"></span> Bright and Chaste Limited. All rights reserved.</span>
      <span class="flex items-center gap-2">
        <i class="fas fa-certificate text-brand-500"></i>
        NCA Accredited &bull; Registered in Kenya
      </span>
    </div>
  </div>
</footer>

<!-- Back to top -->
<button id="back-to-top" aria-label="Back to top"
  class="fixed bottom-6 right-6 z-40 w-12 h-12 bg-brand-500 hover:bg-brand-600 text-white rounded-xl shadow-2xl flex items-center justify-center transition-all opacity-0 translate-y-4 pointer-events-none">
  <i class="fas fa-chevron-up"></i>
</button>


<!-- ═══════════════════════════════════════════════════════════════ -->
<!--  JAVASCRIPT                                                      -->
<!-- ═══════════════════════════════════════════════════════════════ -->
<script>
  // ── Copyright year ──────────────────────────────────────────────
  document.getElementById('year').textContent = new Date().getFullYear();

  // ── Navbar scroll behaviour ──────────────────────────────────────
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.remove('bg-transparent');
      navbar.classList.add('bg-dark/95', 'backdrop-blur', 'shadow-2xl');
    } else {
      navbar.classList.add('bg-transparent');
      navbar.classList.remove('bg-dark/95', 'backdrop-blur', 'shadow-2xl');
    }
  });

  // ── Hamburger ───────────────────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const mobileMenu = document.getElementById('mobile-menu');
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    hamburgerIcon.className = mobileMenu.classList.contains('open')
      ? 'fas fa-times text-xl'
      : 'fas fa-bars text-xl';
  });
  // Close on nav link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburgerIcon.className = 'fas fa-bars text-xl';
    });
  });

  // ── Back to top ─────────────────────────────────────────────────
  const btt = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btt.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
      btt.classList.add('opacity-100', 'translate-y-0');
    } else {
      btt.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
      btt.classList.remove('opacity-100', 'translate-y-0');
    }
  });
  btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // ── Active nav highlight on scroll ─────────────────────────────
  const sections = document.querySelectorAll('section[id], div[id="home"]');
  const navLinks = document.querySelectorAll('.nav-link');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => {
          l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => io.observe(s));

  // ── Fade-in on scroll ───────────────────────────────────────────
  const fadeEls = document.querySelectorAll('.service-card, .project-card, article');
  const fadeObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        fadeObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  fadeEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObs.observe(el);
  });

  // ── Contact form ────────────────────────────────────────────────
  function handleFormSubmit(e) {
    e.preventDefault();
    const btn = document.getElementById('submit-btn');
    const text = document.getElementById('submit-text');
    btn.disabled = true;
    text.textContent = 'Sending…';
    setTimeout(() => {
      btn.disabled = false;
      text.textContent = 'Send Message';
      document.getElementById('form-success').classList.remove('hidden');
      document.getElementById('form-success').classList.add('flex');
      e.target.reset();
      setTimeout(() => {
        document.getElementById('form-success').classList.add('hidden');
        document.getElementById('form-success').classList.remove('flex');
      }, 6000);
    }, 1200);
  }
</script>

</body>
</html>`

app.get('/', (c) => c.html(PAGE as string))

export default app
