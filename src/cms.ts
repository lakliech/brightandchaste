import { html } from 'hono/html'

export const CMS_PAGE = html`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>CMS — Bright & Chaste</title>
  <link rel="icon" type="image/png" href="/static/logo.png"/>
  <link href="https://fonts.googleapis.com/css2?family=Onest:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css"/>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: { 500: '#1a3072', 600: '#162868', 700: '#11205a' },
          },
          fontFamily: { sans: ['Onest', 'sans-serif'] }
        }
      }
    }
  </script>
  <style>
    * { font-family: 'Onest', sans-serif; }
    .tab-btn.active { background: #1a3072; color: #fff; }
    .tab-btn { transition: all 0.2s; }
    .toast { animation: slideIn 0.3s ease; }
    @keyframes slideIn { from { transform: translateX(100%); opacity:0; } to { transform: translateX(0); opacity:1; } }
    .sidebar-link.active { background: rgba(255,255,255,0.15); color: #fff; }
    .sidebar-link { transition: all 0.2s; }
    textarea { resize: vertical; }
    .card { background: #fff; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
    input, textarea, select { outline: none; }
    input:focus, textarea:focus, select:focus { box-shadow: 0 0 0 2px #1a307240; border-color: #1a3072 !important; }
  </style>
</head>
<body class="bg-gray-50 text-gray-800 antialiased">

<!-- ── LOGIN SCREEN ─────────────────────────────────────────────── -->
<div id="login-screen" class="min-h-screen flex items-center justify-center p-4">
  <div class="w-full max-w-sm">
    <div class="text-center mb-8">
      <img src="/static/logo.png" alt="Bright & Chaste" class="h-16 mx-auto mb-4"/>
      <h1 class="text-2xl font-bold text-gray-900">CMS Login</h1>
      <p class="text-gray-500 text-sm mt-1">Sign in to manage your website</p>
    </div>
    <div class="card p-8">
      <div id="login-error" class="hidden mb-4 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm"></div>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1.5">Username</label>
          <input id="login-user" type="text" value="admin" placeholder="admin"
            class="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm"/>
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
          <input id="login-pass" type="password" placeholder="••••••••"
            class="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm"/>
        </div>
        <button onclick="doLogin()"
          class="w-full bg-brand-500 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition-colors text-sm tracking-wide">
          <i class="fas fa-sign-in-alt mr-2"></i>Sign In
        </button>
      </div>
      <p class="text-center text-xs text-gray-400 mt-4">Default: admin / admin123</p>
    </div>
  </div>
</div>

<!-- ── MAIN CMS APP ──────────────────────────────────────────────── -->
<div id="cms-app" class="hidden min-h-screen flex">

  <!-- Sidebar -->
  <aside class="w-64 bg-brand-500 text-white flex flex-col fixed top-0 left-0 h-full z-30">
    <div class="p-5 border-b border-white/10">
      <img src="/static/logo.png" alt="Bright & Chaste" class="h-10 brightness-0 invert"/>
      <p class="text-white/60 text-xs mt-2 font-medium">Content Management</p>
    </div>

    <nav class="flex-1 p-3 space-y-1 overflow-y-auto">
      <button onclick="showSection('dashboard')" class="sidebar-link active w-full text-left flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white" data-section="dashboard">
        <i class="fas fa-th-large w-4"></i> Dashboard
      </button>
      <button onclick="showSection('hero')" class="sidebar-link w-full text-left flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white" data-section="hero">
        <i class="fas fa-home w-4"></i> Hero Section
      </button>
      <button onclick="showSection('about')" class="sidebar-link w-full text-left flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white" data-section="about">
        <i class="fas fa-info-circle w-4"></i> About Us
      </button>
      <button onclick="showSection('services')" class="sidebar-link w-full text-left flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white" data-section="services">
        <i class="fas fa-hard-hat w-4"></i> Services
      </button>
      <button onclick="showSection('projects')" class="sidebar-link w-full text-left flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white" data-section="projects">
        <i class="fas fa-images w-4"></i> Projects
      </button>
      <button onclick="showSection('contact')" class="sidebar-link w-full text-left flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white" data-section="contact">
        <i class="fas fa-envelope w-4"></i> Contact Info
      </button>
      <button onclick="showSection('settings')" class="sidebar-link w-full text-left flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white" data-section="settings">
        <i class="fas fa-cog w-4"></i> Settings
      </button>
    </nav>

    <div class="p-3 border-t border-white/10 space-y-1">
      <a href="/" target="_blank" class="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white transition-colors">
        <i class="fas fa-external-link-alt w-4"></i> View Website
      </a>
      <button onclick="showSection('password')" class="sidebar-link w-full text-left flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white" data-section="password">
        <i class="fas fa-key w-4"></i> Change Password
      </button>
      <button onclick="doLogout()" class="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-white/70 hover:bg-red-500/20 hover:text-red-200 transition-colors">
        <i class="fas fa-sign-out-alt w-4"></i> Logout
      </button>
    </div>
  </aside>

  <!-- Main content -->
  <main class="ml-64 flex-1 p-8 overflow-y-auto min-h-screen">

    <!-- Header -->
    <div class="flex items-center justify-between mb-8">
      <div>
        <h2 id="section-title" class="text-2xl font-bold text-gray-900">Dashboard</h2>
        <p id="section-desc" class="text-gray-500 text-sm mt-0.5">Overview of your website content</p>
      </div>
      <div class="flex items-center gap-3">
        <span class="text-sm text-gray-500">Logged in as <strong id="admin-name" class="text-gray-800"></strong></span>
      </div>
    </div>

    <!-- ── DASHBOARD ── -->
    <section id="sec-dashboard">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div class="card p-5 flex items-center gap-4">
          <div class="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center">
            <i class="fas fa-hard-hat text-brand-500 text-xl"></i>
          </div>
          <div>
            <div class="text-2xl font-bold text-gray-900" id="dash-services">—</div>
            <div class="text-xs text-gray-500 font-medium">Services</div>
          </div>
        </div>
        <div class="card p-5 flex items-center gap-4">
          <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
            <i class="fas fa-images text-blue-500 text-xl"></i>
          </div>
          <div>
            <div class="text-2xl font-bold text-gray-900" id="dash-projects">—</div>
            <div class="text-xs text-gray-500 font-medium">Projects</div>
          </div>
        </div>
        <div class="card p-5 flex items-center gap-4">
          <div class="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
            <i class="fas fa-check-circle text-green-500 text-xl"></i>
          </div>
          <div>
            <div class="text-sm font-bold text-gray-900">Live</div>
            <div class="text-xs text-gray-500 font-medium">Website Status</div>
          </div>
        </div>
        <div class="card p-5 flex items-center gap-4">
          <div class="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
            <i class="fas fa-database text-purple-500 text-xl"></i>
          </div>
          <div>
            <div class="text-sm font-bold text-gray-900">D1</div>
            <div class="text-xs text-gray-500 font-medium">Database</div>
          </div>
        </div>
      </div>
      <div class="grid md:grid-cols-2 gap-5">
        <div class="card p-6">
          <h3 class="font-bold text-gray-900 mb-4 flex items-center gap-2"><i class="fas fa-bolt text-brand-500"></i> Quick Actions</h3>
          <div class="space-y-2">
            <button onclick="showSection('projects')" class="w-full flex items-center gap-3 p-3 bg-gray-50 hover:bg-brand-500/5 rounded-lg text-sm font-medium text-gray-700 hover:text-brand-500 transition-colors text-left">
              <i class="fas fa-plus-circle text-brand-500"></i> Add New Project
            </button>
            <button onclick="showSection('services')" class="w-full flex items-center gap-3 p-3 bg-gray-50 hover:bg-brand-500/5 rounded-lg text-sm font-medium text-gray-700 hover:text-brand-500 transition-colors text-left">
              <i class="fas fa-edit text-brand-500"></i> Edit Services
            </button>
            <button onclick="showSection('contact')" class="w-full flex items-center gap-3 p-3 bg-gray-50 hover:bg-brand-500/5 rounded-lg text-sm font-medium text-gray-700 hover:text-brand-500 transition-colors text-left">
              <i class="fas fa-phone text-brand-500"></i> Update Contact Info
            </button>
            <a href="/" target="_blank" class="flex items-center gap-3 p-3 bg-gray-50 hover:bg-brand-500/5 rounded-lg text-sm font-medium text-gray-700 hover:text-brand-500 transition-colors">
              <i class="fas fa-eye text-brand-500"></i> Preview Website
            </a>
          </div>
        </div>
        <div class="card p-6">
          <h3 class="font-bold text-gray-900 mb-4 flex items-center gap-2"><i class="fas fa-info-circle text-brand-500"></i> CMS Guide</h3>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-start gap-2"><i class="fas fa-check text-green-500 mt-0.5"></i> Use <strong>Hero Section</strong> to update homepage banner text</li>
            <li class="flex items-start gap-2"><i class="fas fa-check text-green-500 mt-0.5"></i> Use <strong>Services</strong> to add, edit or reorder services</li>
            <li class="flex items-start gap-2"><i class="fas fa-check text-green-500 mt-0.5"></i> Use <strong>Projects</strong> to showcase completed work</li>
            <li class="flex items-start gap-2"><i class="fas fa-check text-green-500 mt-0.5"></i> Use <strong>Contact Info</strong> to update phone, email & socials</li>
            <li class="flex items-start gap-2"><i class="fas fa-check text-green-500 mt-0.5"></i> Changes are <strong>live instantly</strong> on your website</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ── HERO ── -->
    <section id="sec-hero" class="hidden">
      <div class="card p-7 max-w-2xl">
        <form onsubmit="saveHero(event)" class="space-y-5">
          <div>
            <label class="label">Badge Text</label>
            <input id="h-badge" type="text" class="field" placeholder="NCA Level 3 Accredited • Est. 2019 • Nairobi, Kenya"/>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="label">Main Heading</label>
              <input id="h-heading" type="text" class="field" placeholder="Building Kenya's"/>
            </div>
            <div>
              <label class="label">Highlighted Word</label>
              <input id="h-highlight" type="text" class="field" placeholder="Infrastructure"/>
            </div>
          </div>
          <div>
            <label class="label">Subheading / Description</label>
            <textarea id="h-subheading" rows="3" class="field" placeholder="Company description..."></textarea>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="label">Primary Button Text</label>
              <input id="h-cta1" type="text" class="field" placeholder="Our Services"/>
            </div>
            <div>
              <label class="label">Secondary Button Text</label>
              <input id="h-cta2" type="text" class="field" placeholder="View Projects"/>
            </div>
          </div>
          <button type="submit" class="btn-primary"><i class="fas fa-save mr-2"></i>Save Changes</button>
        </form>
      </div>
    </section>

    <!-- ── ABOUT ── -->
    <section id="sec-about" class="hidden">
      <div class="card p-7 max-w-2xl">
        <form onsubmit="saveAbout(event)" class="space-y-5">
          <div>
            <label class="label">Section Heading</label>
            <input id="a-heading" type="text" class="field"/>
          </div>
          <div>
            <label class="label">Paragraph 1</label>
            <textarea id="a-body1" rows="4" class="field"></textarea>
          </div>
          <div>
            <label class="label">Paragraph 2</label>
            <textarea id="a-body2" rows="4" class="field"></textarea>
          </div>
          <div>
            <label class="label">Mission Statement</label>
            <textarea id="a-mission" rows="3" class="field"></textarea>
          </div>
          <div>
            <label class="label">Vision Statement</label>
            <textarea id="a-vision" rows="3" class="field"></textarea>
          </div>
          <button type="submit" class="btn-primary"><i class="fas fa-save mr-2"></i>Save Changes</button>
        </form>
      </div>
    </section>

    <!-- ── SERVICES ── -->
    <section id="sec-services" class="hidden">
      <div class="flex items-center justify-between mb-5">
        <p class="text-sm text-gray-500">Manage services displayed on your website</p>
        <button onclick="openServiceModal()" class="btn-primary text-sm"><i class="fas fa-plus mr-2"></i>Add Service</button>
      </div>
      <div id="services-list" class="space-y-3"></div>
    </section>

    <!-- ── PROJECTS ── -->
    <section id="sec-projects" class="hidden">
      <div class="flex items-center justify-between mb-5">
        <p class="text-sm text-gray-500">Manage projects displayed on your website</p>
        <button onclick="openProjectModal()" class="btn-primary text-sm"><i class="fas fa-plus mr-2"></i>Add Project</button>
      </div>
      <div id="projects-list" class="space-y-3"></div>
    </section>

    <!-- ── CONTACT ── -->
    <section id="sec-contact" class="hidden">
      <div class="card p-7 max-w-2xl">
        <form onsubmit="saveContact(event)" class="space-y-5">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="label">Phone Number</label>
              <input id="c-phone" type="text" class="field" placeholder="+254 700 000 000"/>
            </div>
            <div>
              <label class="label">Email Address</label>
              <input id="c-email" type="email" class="field" placeholder="info@brightandchaste.co.ke"/>
            </div>
          </div>
          <div>
            <label class="label">Office Address</label>
            <input id="c-address" type="text" class="field" placeholder="Nairobi, Kenya"/>
          </div>
          <div>
            <label class="label">Website URL</label>
            <input id="c-website" type="url" class="field" placeholder="https://brightandchaste.co.ke"/>
          </div>
          <hr class="border-gray-100"/>
          <p class="text-sm font-semibold text-gray-700">Social Media Links</p>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="label"><i class="fab fa-facebook text-blue-500 mr-1"></i>Facebook</label>
              <input id="c-facebook" type="url" class="field" placeholder="https://facebook.com/..."/>
            </div>
            <div>
              <label class="label"><i class="fab fa-linkedin text-blue-700 mr-1"></i>LinkedIn</label>
              <input id="c-linkedin" type="url" class="field" placeholder="https://linkedin.com/..."/>
            </div>
            <div>
              <label class="label"><i class="fab fa-x-twitter mr-1"></i>Twitter / X</label>
              <input id="c-twitter" type="url" class="field" placeholder="https://x.com/..."/>
            </div>
            <div>
              <label class="label"><i class="fab fa-whatsapp text-green-500 mr-1"></i>WhatsApp</label>
              <input id="c-whatsapp" type="url" class="field" placeholder="https://wa.me/254..."/>
            </div>
          </div>
          <button type="submit" class="btn-primary"><i class="fas fa-save mr-2"></i>Save Changes</button>
        </form>
      </div>
    </section>

    <!-- ── SETTINGS ── -->
    <section id="sec-settings" class="hidden">
      <div class="card p-7 max-w-lg">
        <form onsubmit="saveSettings(event)" class="space-y-5">
          <div>
            <label class="label">Site / Company Name</label>
            <input id="s-site_name" type="text" class="field"/>
          </div>
          <div>
            <label class="label">Tagline</label>
            <input id="s-tagline" type="text" class="field"/>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="label">NCA Level</label>
              <input id="s-nca_level" type="text" class="field" placeholder="NCA Level 3"/>
            </div>
            <div>
              <label class="label">Founded Year</label>
              <input id="s-founded" type="text" class="field" placeholder="2019"/>
            </div>
          </div>
          <button type="submit" class="btn-primary"><i class="fas fa-save mr-2"></i>Save Settings</button>
        </form>
      </div>
    </section>

    <!-- ── CHANGE PASSWORD ── -->
    <section id="sec-password" class="hidden">
      <div class="card p-7 max-w-sm">
        <form onsubmit="changePassword(event)" class="space-y-5">
          <div>
            <label class="label">Current Password</label>
            <input id="p-current" type="password" class="field"/>
          </div>
          <div>
            <label class="label">New Password</label>
            <input id="p-new" type="password" class="field"/>
          </div>
          <div>
            <label class="label">Confirm New Password</label>
            <input id="p-confirm" type="password" class="field"/>
          </div>
          <button type="submit" class="btn-primary"><i class="fas fa-key mr-2"></i>Update Password</button>
        </form>
      </div>
    </section>

  </main>
</div>

<!-- ── SERVICE MODAL ─────────────────────────────────────────────── -->
<div id="service-modal" class="hidden fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
  <div class="bg-white rounded-2xl w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto">
    <div class="flex items-center justify-between p-6 border-b">
      <h3 id="service-modal-title" class="font-bold text-lg">Add Service</h3>
      <button onclick="closeServiceModal()" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500"><i class="fas fa-times"></i></button>
    </div>
    <form onsubmit="saveService(event)" class="p-6 space-y-4">
      <input type="hidden" id="svc-id"/>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="label">Title</label>
          <input id="svc-title" type="text" class="field" required placeholder="Road Construction"/>
        </div>
        <div>
          <label class="label">Badge Label</label>
          <input id="svc-badge" type="text" class="field" required placeholder="Road Works"/>
        </div>
      </div>
      <div>
        <label class="label">Description</label>
        <textarea id="svc-desc" rows="3" class="field" required></textarea>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="label">Icon Class (Font Awesome)</label>
          <input id="svc-icon" type="text" class="field" placeholder="fas fa-road"/>
        </div>
        <div>
          <label class="label">Sort Order</label>
          <input id="svc-order" type="number" class="field" value="1"/>
        </div>
      </div>
      <div>
        <label class="label">Bullet Point 1</label>
        <input id="svc-b1" type="text" class="field" required/>
      </div>
      <div>
        <label class="label">Bullet Point 2</label>
        <input id="svc-b2" type="text" class="field" required/>
      </div>
      <div>
        <label class="label">Bullet Point 3</label>
        <input id="svc-b3" type="text" class="field" required/>
      </div>
      <div class="flex items-center gap-3">
        <label class="label mb-0">Active</label>
        <input id="svc-active" type="checkbox" checked class="w-4 h-4 rounded"/>
      </div>
      <div class="flex gap-3 pt-2">
        <button type="submit" class="btn-primary flex-1"><i class="fas fa-save mr-2"></i>Save</button>
        <button type="button" onclick="closeServiceModal()" class="flex-1 py-2.5 border border-gray-200 rounded-lg text-sm font-semibold hover:bg-gray-50">Cancel</button>
      </div>
    </form>
  </div>
</div>

<!-- ── PROJECT MODAL ─────────────────────────────────────────────── -->
<div id="project-modal" class="hidden fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
  <div class="bg-white rounded-2xl w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto">
    <div class="flex items-center justify-between p-6 border-b">
      <h3 id="project-modal-title" class="font-bold text-lg">Add Project</h3>
      <button onclick="closeProjectModal()" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500"><i class="fas fa-times"></i></button>
    </div>
    <form onsubmit="saveProject(event)" class="p-6 space-y-4">
      <input type="hidden" id="prj-id"/>
      <div>
        <label class="label">Project Title</label>
        <input id="prj-title" type="text" class="field" required/>
      </div>
      <div>
        <label class="label">Description</label>
        <textarea id="prj-desc" rows="3" class="field" required></textarea>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="label">Client</label>
          <input id="prj-client" type="text" class="field" required/>
        </div>
        <div>
          <label class="label">Category</label>
          <select id="prj-category" class="field">
            <option>Road Construction</option>
            <option>Building Construction</option>
            <option>Water Engineering</option>
            <option>ICT Infrastructure</option>
          </select>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="label">Location</label>
          <input id="prj-location" type="text" class="field" required/>
        </div>
        <div>
          <label class="label">Duration / Status</label>
          <input id="prj-duration" type="text" class="field" placeholder="3 Weeks / Completed"/>
        </div>
      </div>
      <div>
        <label class="label">Image URL</label>
        <input id="prj-image" type="url" class="field" placeholder="https://..."/>
        <p class="text-xs text-gray-400 mt-1">Paste a direct image URL</p>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="label">Icon (Font Awesome)</label>
          <input id="prj-icon" type="text" class="field" placeholder="fas fa-water"/>
        </div>
        <div>
          <label class="label">Sort Order</label>
          <input id="prj-order" type="number" class="field" value="1"/>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <label class="label mb-0">Active</label>
        <input id="prj-active" type="checkbox" checked class="w-4 h-4 rounded"/>
      </div>
      <div class="flex gap-3 pt-2">
        <button type="submit" class="btn-primary flex-1"><i class="fas fa-save mr-2"></i>Save</button>
        <button type="button" onclick="closeProjectModal()" class="flex-1 py-2.5 border border-gray-200 rounded-lg text-sm font-semibold hover:bg-gray-50">Cancel</button>
      </div>
    </form>
  </div>
</div>

<!-- ── TOAST ─────────────────────────────────────────────────────── -->
<div id="toast-container" class="fixed top-5 right-5 z-50 space-y-2"></div>

<!-- ── SHARED STYLES ─────────────────────────────────────────────── -->
<style>
  .label { display:block; font-size:.8rem; font-weight:600; color:#374151; margin-bottom:.4rem; }
  .field { width:100%; padding:.625rem 1rem; border:1.5px solid #e5e7eb; border-radius:.625rem; font-size:.875rem; color:#111; background:#fff; }
  .btn-primary { background:#1a3072; color:#fff; font-weight:700; padding:.65rem 1.5rem; border-radius:.625rem; font-size:.875rem; transition:background .2s; cursor:pointer; border:none; }
  .btn-primary:hover { background:#11205a; }
</style>

<script>
const BASE = '/api/cms'

// ── Toast ────────────────────────────────────────────────────────
function toast(msg, type='success') {
  const el = document.createElement('div')
  el.className = \`toast px-5 py-3 rounded-xl text-sm font-semibold shadow-lg flex items-center gap-2 \${type==='success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}\`
  el.innerHTML = \`<i class="fas fa-\${type==='success'?'check':'exclamation'}-circle"></i> \${msg}\`
  document.getElementById('toast-container').appendChild(el)
  setTimeout(() => el.remove(), 3500)
}

// ── Login ────────────────────────────────────────────────────────
async function doLogin() {
  const username = document.getElementById('login-user').value.trim()
  const password = document.getElementById('login-pass').value
  const errEl = document.getElementById('login-error')
  errEl.classList.add('hidden')
  try {
    const r = await fetch(\`\${BASE}/login\`, {
      method: 'POST', headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ username, password })
    })
    const d = await r.json()
    if (!r.ok) { errEl.textContent = d.error; errEl.classList.remove('hidden'); return; }
    document.getElementById('admin-name').textContent = d.username
    document.getElementById('login-screen').classList.add('hidden')
    document.getElementById('cms-app').classList.remove('hidden')
    loadDashboard()
  } catch(e) { errEl.textContent = 'Connection error'; errEl.classList.remove('hidden'); }
}
document.getElementById('login-pass').addEventListener('keydown', e => { if(e.key==='Enter') doLogin() })

// ── Logout ───────────────────────────────────────────────────────
async function doLogout() {
  await fetch(\`\${BASE}/logout\`, { method:'POST' })
  location.reload()
}

// ── Check session on load ─────────────────────────────────────────
async function checkSession() {
  try {
    const r = await fetch(\`\${BASE}/me\`)
    if (r.ok) {
      const d = await r.json()
      if (d.authenticated) {
        document.getElementById('admin-name').textContent = d.username
        document.getElementById('login-screen').classList.add('hidden')
        document.getElementById('cms-app').classList.remove('hidden')
        loadDashboard()
        return
      }
    }
  } catch(e) {}
}
checkSession()

// ── Section navigation ────────────────────────────────────────────
const sectionMeta = {
  dashboard: { title: 'Dashboard', desc: 'Overview of your website content' },
  hero:      { title: 'Hero Section', desc: 'Edit the homepage banner text and buttons' },
  about:     { title: 'About Us', desc: 'Edit company description, mission and vision' },
  services:  { title: 'Services', desc: 'Add, edit or remove services' },
  projects:  { title: 'Projects', desc: 'Manage your project portfolio' },
  contact:   { title: 'Contact Info', desc: 'Update contact details and social links' },
  settings:  { title: 'Site Settings', desc: 'General website settings' },
  password:  { title: 'Change Password', desc: 'Update your CMS login password' },
}
function showSection(name) {
  document.querySelectorAll('[id^="sec-"]').forEach(el => el.classList.add('hidden'))
  document.getElementById('sec-' + name).classList.remove('hidden')
  document.querySelectorAll('.sidebar-link').forEach(el => {
    el.classList.toggle('active', el.dataset.section === name)
  })
  const m = sectionMeta[name] || {}
  document.getElementById('section-title').textContent = m.title || name
  document.getElementById('section-desc').textContent = m.desc || ''
  const loaders = { hero: loadHero, about: loadAbout, services: loadServices, projects: loadProjects, contact: loadContact, settings: loadSettings }
  if (loaders[name]) loaders[name]()
}

// ── Dashboard ─────────────────────────────────────────────────────
async function loadDashboard() {
  try {
    const [svc, prj] = await Promise.all([
      fetch('/api/public/content').then(r => r.json()),
    ])
    const data = svc
    document.getElementById('dash-services').textContent = data.services?.length ?? '—'
    document.getElementById('dash-projects').textContent = data.projects?.length ?? '—'
  } catch(e) {}
}

// ── Hero ──────────────────────────────────────────────────────────
async function loadHero() {
  const d = await fetch(\`\${BASE}/hero\`).then(r=>r.json())
  document.getElementById('h-badge').value = d.badge || ''
  document.getElementById('h-heading').value = d.heading || ''
  document.getElementById('h-highlight').value = d.highlight || ''
  document.getElementById('h-subheading').value = d.subheading || ''
  document.getElementById('h-cta1').value = d.cta_primary || ''
  document.getElementById('h-cta2').value = d.cta_secondary || ''
}
async function saveHero(e) {
  e.preventDefault()
  const r = await fetch(\`\${BASE}/hero\`, { method:'PUT', headers:{'Content-Type':'application/json'}, body: JSON.stringify({
    badge: document.getElementById('h-badge').value,
    heading: document.getElementById('h-heading').value,
    highlight: document.getElementById('h-highlight').value,
    subheading: document.getElementById('h-subheading').value,
    cta_primary: document.getElementById('h-cta1').value,
    cta_secondary: document.getElementById('h-cta2').value,
  })})
  r.ok ? toast('Hero section saved!') : toast('Error saving hero', 'error')
}

// ── About ─────────────────────────────────────────────────────────
async function loadAbout() {
  const d = await fetch(\`\${BASE}/about\`).then(r=>r.json())
  document.getElementById('a-heading').value = d.heading || ''
  document.getElementById('a-body1').value = d.body1 || ''
  document.getElementById('a-body2').value = d.body2 || ''
  document.getElementById('a-mission').value = d.mission || ''
  document.getElementById('a-vision').value = d.vision || ''
}
async function saveAbout(e) {
  e.preventDefault()
  const r = await fetch(\`\${BASE}/about\`, { method:'PUT', headers:{'Content-Type':'application/json'}, body: JSON.stringify({
    heading: document.getElementById('a-heading').value,
    body1: document.getElementById('a-body1').value,
    body2: document.getElementById('a-body2').value,
    mission: document.getElementById('a-mission').value,
    vision: document.getElementById('a-vision').value,
  })})
  r.ok ? toast('About section saved!') : toast('Error saving about', 'error')
}

// ── Services ──────────────────────────────────────────────────────
async function loadServices() {
  const services = await fetch(\`\${BASE}/services\`).then(r=>r.json())
  const el = document.getElementById('services-list')
  el.innerHTML = services.map(s => \`
    <div class="card p-5 flex items-center gap-4">
      <div class="w-10 h-10 bg-brand-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
        <i class="\${s.icon} text-brand-500"></i>
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2">
          <span class="font-semibold text-gray-900 text-sm">\${s.title}</span>
          <span class="text-xs px-2 py-0.5 rounded-full \${s.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}">\${s.active ? 'Active' : 'Hidden'}</span>
        </div>
        <p class="text-gray-500 text-xs mt-0.5 truncate">\${s.description}</p>
      </div>
      <div class="flex gap-2 flex-shrink-0">
        <button onclick="openServiceModal(\${JSON.stringify(s).replace(/"/g,'&quot;')})"
          class="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors">
          <i class="fas fa-edit text-xs"></i>
        </button>
        <button onclick="deleteService(\${s.id})"
          class="w-8 h-8 flex items-center justify-center rounded-lg bg-red-50 hover:bg-red-100 text-red-500 transition-colors">
          <i class="fas fa-trash text-xs"></i>
        </button>
      </div>
    </div>\`).join('')
}
function openServiceModal(s) {
  document.getElementById('svc-id').value = s?.id || ''
  document.getElementById('svc-title').value = s?.title || ''
  document.getElementById('svc-badge').value = s?.badge || ''
  document.getElementById('svc-desc').value = s?.description || ''
  document.getElementById('svc-icon').value = s?.icon || 'fas fa-hard-hat'
  document.getElementById('svc-order').value = s?.sort_order || 1
  document.getElementById('svc-b1').value = s?.bullet1 || ''
  document.getElementById('svc-b2').value = s?.bullet2 || ''
  document.getElementById('svc-b3').value = s?.bullet3 || ''
  document.getElementById('svc-active').checked = s ? !!s.active : true
  document.getElementById('service-modal-title').textContent = s ? 'Edit Service' : 'Add Service'
  document.getElementById('service-modal').classList.remove('hidden')
}
function closeServiceModal() { document.getElementById('service-modal').classList.add('hidden') }
async function saveService(e) {
  e.preventDefault()
  const id = document.getElementById('svc-id').value
  const body = {
    title: document.getElementById('svc-title').value,
    badge: document.getElementById('svc-badge').value,
    description: document.getElementById('svc-desc').value,
    icon: document.getElementById('svc-icon').value,
    sort_order: parseInt(document.getElementById('svc-order').value),
    bullet1: document.getElementById('svc-b1').value,
    bullet2: document.getElementById('svc-b2').value,
    bullet3: document.getElementById('svc-b3').value,
    active: document.getElementById('svc-active').checked ? 1 : 0,
  }
  const r = await fetch(id ? \`\${BASE}/services/\${id}\` : \`\${BASE}/services\`, {
    method: id ? 'PUT' : 'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body)
  })
  if (r.ok) { toast('Service saved!'); closeServiceModal(); loadServices() }
  else toast('Error saving service', 'error')
}
async function deleteService(id) {
  if (!confirm('Delete this service?')) return
  const r = await fetch(\`\${BASE}/services/\${id}\`, { method:'DELETE' })
  r.ok ? (toast('Service deleted'), loadServices()) : toast('Error deleting', 'error')
}

// ── Projects ──────────────────────────────────────────────────────
async function loadProjects() {
  const projects = await fetch(\`\${BASE}/projects\`).then(r=>r.json())
  const el = document.getElementById('projects-list')
  el.innerHTML = projects.map(p => \`
    <div class="card p-5 flex items-center gap-4">
      <img src="\${p.image_url}" alt="\${p.title}" class="w-16 h-12 rounded-lg object-cover flex-shrink-0 bg-gray-100" onerror="this.src='https://via.placeholder.com/64x48?text=img'"/>
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2">
          <span class="font-semibold text-gray-900 text-sm">\${p.title}</span>
          <span class="text-xs px-2 py-0.5 rounded-full \${p.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}">\${p.active ? 'Active' : 'Hidden'}</span>
        </div>
        <p class="text-gray-500 text-xs mt-0.5">\${p.category} &bull; \${p.location} &bull; \${p.duration}</p>
      </div>
      <div class="flex gap-2 flex-shrink-0">
        <button onclick="openProjectModal(\${JSON.stringify(p).replace(/"/g,'&quot;')})"
          class="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors">
          <i class="fas fa-edit text-xs"></i>
        </button>
        <button onclick="deleteProject(\${p.id})"
          class="w-8 h-8 flex items-center justify-center rounded-lg bg-red-50 hover:bg-red-100 text-red-500 transition-colors">
          <i class="fas fa-trash text-xs"></i>
        </button>
      </div>
    </div>\`).join('')
}
function openProjectModal(p) {
  document.getElementById('prj-id').value = p?.id || ''
  document.getElementById('prj-title').value = p?.title || ''
  document.getElementById('prj-desc').value = p?.description || ''
  document.getElementById('prj-client').value = p?.client || ''
  document.getElementById('prj-category').value = p?.category || 'Road Construction'
  document.getElementById('prj-location').value = p?.location || ''
  document.getElementById('prj-duration').value = p?.duration || ''
  document.getElementById('prj-image').value = p?.image_url || ''
  document.getElementById('prj-icon').value = p?.icon || 'fas fa-hard-hat'
  document.getElementById('prj-order').value = p?.sort_order || 1
  document.getElementById('prj-active').checked = p ? !!p.active : true
  document.getElementById('project-modal-title').textContent = p ? 'Edit Project' : 'Add Project'
  document.getElementById('project-modal').classList.remove('hidden')
}
function closeProjectModal() { document.getElementById('project-modal').classList.add('hidden') }
async function saveProject(e) {
  e.preventDefault()
  const id = document.getElementById('prj-id').value
  const body = {
    title: document.getElementById('prj-title').value,
    description: document.getElementById('prj-desc').value,
    client: document.getElementById('prj-client').value,
    category: document.getElementById('prj-category').value,
    location: document.getElementById('prj-location').value,
    duration: document.getElementById('prj-duration').value,
    image_url: document.getElementById('prj-image').value,
    icon: document.getElementById('prj-icon').value,
    sort_order: parseInt(document.getElementById('prj-order').value),
    active: document.getElementById('prj-active').checked ? 1 : 0,
  }
  const r = await fetch(id ? \`\${BASE}/projects/\${id}\` : \`\${BASE}/projects\`, {
    method: id ? 'PUT' : 'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body)
  })
  if (r.ok) { toast('Project saved!'); closeProjectModal(); loadProjects() }
  else toast('Error saving project', 'error')
}
async function deleteProject(id) {
  if (!confirm('Delete this project?')) return
  const r = await fetch(\`\${BASE}/projects/\${id}\`, { method:'DELETE' })
  r.ok ? (toast('Project deleted'), loadProjects()) : toast('Error deleting', 'error')
}

// ── Contact ───────────────────────────────────────────────────────
async function loadContact() {
  const d = await fetch(\`\${BASE}/contact\`).then(r=>r.json())
  document.getElementById('c-phone').value = d.phone || ''
  document.getElementById('c-email').value = d.email || ''
  document.getElementById('c-address').value = d.address || ''
  document.getElementById('c-website').value = d.website || ''
  document.getElementById('c-facebook').value = d.facebook || ''
  document.getElementById('c-linkedin').value = d.linkedin || ''
  document.getElementById('c-twitter').value = d.twitter || ''
  document.getElementById('c-whatsapp').value = d.whatsapp || ''
}
async function saveContact(e) {
  e.preventDefault()
  const r = await fetch(\`\${BASE}/contact\`, { method:'PUT', headers:{'Content-Type':'application/json'}, body: JSON.stringify({
    phone: document.getElementById('c-phone').value,
    email: document.getElementById('c-email').value,
    address: document.getElementById('c-address').value,
    website: document.getElementById('c-website').value,
    facebook: document.getElementById('c-facebook').value,
    linkedin: document.getElementById('c-linkedin').value,
    twitter: document.getElementById('c-twitter').value,
    whatsapp: document.getElementById('c-whatsapp').value,
  })})
  r.ok ? toast('Contact info saved!') : toast('Error saving contact', 'error')
}

// ── Settings ──────────────────────────────────────────────────────
async function loadSettings() {
  const d = await fetch(\`\${BASE}/settings\`).then(r=>r.json())
  Object.entries(d).forEach(([k,v]) => {
    const el = document.getElementById('s-' + k)
    if (el) el.value = v
  })
}
async function saveSettings(e) {
  e.preventDefault()
  const keys = ['site_name','tagline','nca_level','founded']
  const body = {}
  keys.forEach(k => { const el = document.getElementById('s-' + k); if(el) body[k] = el.value })
  const r = await fetch(\`\${BASE}/settings\`, { method:'PUT', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body) })
  r.ok ? toast('Settings saved!') : toast('Error saving settings', 'error')
}

// ── Change password ───────────────────────────────────────────────
async function changePassword(e) {
  e.preventDefault()
  const np = document.getElementById('p-new').value
  const cp = document.getElementById('p-confirm').value
  if (np !== cp) { toast('Passwords do not match', 'error'); return }
  if (np.length < 6) { toast('Password must be at least 6 characters', 'error'); return }
  const r = await fetch(\`\${BASE}/change-password\`, { method:'POST', headers:{'Content-Type':'application/json'},
    body: JSON.stringify({ currentPassword: document.getElementById('p-current').value, newPassword: np })
  })
  const d = await r.json()
  r.ok ? (toast('Password updated!'), e.target.reset()) : toast(d.error || 'Error updating password', 'error')
}
</script>
</body>
</html>`

export default CMS_PAGE
