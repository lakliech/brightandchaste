-- CMS: Admin users
CREATE TABLE IF NOT EXISTS admins (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CMS: Site settings (key-value)
CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CMS: Hero section
CREATE TABLE IF NOT EXISTS hero (
  id INTEGER PRIMARY KEY DEFAULT 1,
  badge TEXT NOT NULL,
  heading TEXT NOT NULL,
  highlight TEXT NOT NULL,
  subheading TEXT NOT NULL,
  cta_primary TEXT NOT NULL,
  cta_secondary TEXT NOT NULL,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CMS: About section
CREATE TABLE IF NOT EXISTS about (
  id INTEGER PRIMARY KEY DEFAULT 1,
  heading TEXT NOT NULL,
  body1 TEXT NOT NULL,
  body2 TEXT NOT NULL,
  mission TEXT NOT NULL,
  vision TEXT NOT NULL,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CMS: Services
CREATE TABLE IF NOT EXISTS services (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL,
  badge TEXT NOT NULL,
  bullet1 TEXT NOT NULL,
  bullet2 TEXT NOT NULL,
  bullet3 TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0,
  active INTEGER DEFAULT 1,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CMS: Projects
CREATE TABLE IF NOT EXISTS projects (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  client TEXT NOT NULL,
  location TEXT NOT NULL,
  duration TEXT NOT NULL,
  category TEXT NOT NULL,
  icon TEXT NOT NULL,
  image_url TEXT NOT NULL,
  active INTEGER DEFAULT 1,
  sort_order INTEGER DEFAULT 0,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CMS: Contact info
CREATE TABLE IF NOT EXISTS contact (
  id INTEGER PRIMARY KEY DEFAULT 1,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  address TEXT NOT NULL,
  website TEXT NOT NULL,
  facebook TEXT DEFAULT '#',
  linkedin TEXT DEFAULT '#',
  twitter TEXT DEFAULT '#',
  whatsapp TEXT DEFAULT '#',
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CMS: Sessions
CREATE TABLE IF NOT EXISTS sessions (
  token TEXT PRIMARY KEY,
  admin_id INTEGER NOT NULL,
  expires_at DATETIME NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- ── Seed default admin (password: admin123) ──────────────────────
-- SHA-256 of "admin123" = 240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9
INSERT OR IGNORE INTO admins (username, password_hash) VALUES
  ('admin', '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9');

-- ── Seed site settings ────────────────────────────────────────────
INSERT OR IGNORE INTO settings (key, value) VALUES
  ('site_name', 'Bright and Chaste Limited'),
  ('tagline', 'Building Kenya''s Infrastructure for Tomorrow'),
  ('nca_level', 'NCA Level 3'),
  ('founded', '2019');

-- ── Seed hero ─────────────────────────────────────────────────────
INSERT OR IGNORE INTO hero (id, badge, heading, highlight, subheading, cta_primary, cta_secondary) VALUES
  (1,
   'NCA Level 3 Accredited • Est. 2019 • Nairobi, Kenya',
   'Building Kenya''s',
   'Infrastructure',
   'Bright and Chaste Limited is a premier civil engineering and construction company delivering world-class roads, buildings, water systems and ICT infrastructure across Kenya.',
   'Our Services',
   'View Projects');

-- ── Seed about ────────────────────────────────────────────────────
INSERT OR IGNORE INTO about (id, heading, body1, body2, mission, vision) VALUES
  (1,
   'Kenya''s Trusted Partner in Civil Engineering & Construction',
   'Bright and Chaste Limited is a registered construction company established in 2019. Since our inception, we have provided high-quality construction services across various sectors, ensuring reliability, innovation and value for our clients.',
   'Our team of experienced professionals is dedicated to delivering innovative and sustainable solutions that exceed client expectations. We aspire to be the leading construction company in Kenya and a globally recognised brand in the industry — serving county governments, water boards, private developers and development agencies alike.',
   'To deliver safe, sustainable and high-quality infrastructure that improves lives, stimulates economic growth and builds lasting communities across Kenya.',
   'To be the leading construction and engineering company in Kenya, recognised for innovation, integrity and excellence on every project we undertake.');

-- ── Seed services ─────────────────────────────────────────────────
INSERT OR IGNORE INTO services (title, description, icon, badge, bullet1, bullet2, bullet3, sort_order) VALUES
  ('Road Construction',
   'Design, construction and rehabilitation of urban roads, rural access roads, highways and associated infrastructure including drainage and road furniture.',
   'fas fa-road', 'Road Works', 'Urban & rural roads', 'Drainage systems', 'Road rehabilitation', 1),
  ('Building Construction',
   'Full lifecycle building projects — from initial planning, structural works and MEP installations through to final finishing for residential and commercial developments.',
   'fas fa-building', 'Building Works', 'Residential & commercial', 'Structural works', 'Interior finishing', 2),
  ('Water Engineering',
   'Design and construction of reliable water supply networks, sewerage systems and sanitation infrastructure, working closely with county governments and water boards.',
   'fas fa-water', 'Water Works', 'Water supply networks', 'Sewerage systems', 'Sanitation infrastructure', 3),
  ('ICT Infrastructure',
   'Design, installation and maintenance of fiber optic networks, structured cabling and ICT infrastructure for residential, commercial and industrial projects across Kenya.',
   'fas fa-network-wired', 'ICT Works', 'Fiber optic networks', 'Structured cabling', 'Data centre setups', 4);

-- ── Seed projects ─────────────────────────────────────────────────
INSERT OR IGNORE INTO projects (title, description, client, location, duration, category, icon, image_url, sort_order) VALUES
  ('Ndeiya Community Water Project',
   'Piping of Gitogothi Ndeiya Water, Limuru — a landmark water infrastructure project spearheaded by the Kiambu County Government.',
   'County Government of Kiambu', 'Limuru, Kiambu', '3 Weeks', 'Water Engineering', 'fas fa-water',
   'https://sspark.genspark.ai/cfimages?u1=ldTxa5XiQv8QZaVr%2BKAWoYf6plPQOY6fELlIx15zYuwE%2F1wMMOIoW2P6j3TV%2B%2FkMQNRFF4k308wK2vejFfxG4%2B2nazrsmbpFbLNbiN2qNoQmXeLGCbc13KkPxOrTQXfeaUGyq84SHoWfX7sJ2t6X&u2=0w6KH8HcePGGEWZl&width=2560', 1),
  ('Fiber Optic Network Installation',
   'Design, supply and installation of fiber optic cabling for enterprise connectivity across the Nairobi region.',
   'Enterprise Connectivity Project', 'Nairobi Region', 'Completed', 'ICT Infrastructure', 'fas fa-network-wired',
   'https://sspark.genspark.ai/cfimages?u1=Zx%2FM2AO7cTcUJwA5zzUjkJ5dQKnYpy9lO67us2AvXrHhEFi1lGqO%2FR0%2F2WUZGMPY%2BAnI%2Bsq3seK9lE9scOVSEtePQnopWDxlIMSWtAf0HL4yvewRuV6I0g3gEmyZJARoXcJsbrPV9ulNoXukjDo4RlZf9NCIHMKb53V2oKZ1whCwARaPNrHE%2B4Reksziv%2B%2Bq3SDVFY71JJn%2F7vAEbXUpFetY%2BJLF5bs%3D&u2=cdirMomUf6TETap7&width=2560', 2),
  ('Road Construction & Rehabilitation',
   'Construction and rehabilitation of access roads and drainage infrastructure for county and national road works.',
   'County & National Road Works', 'Kenya', 'Ongoing', 'Road Construction', 'fas fa-road',
   'https://sspark.genspark.ai/cfimages?u1=fDxa4ICAhopvL9oQYphnom0dPGiXKm3P6vdfkPLYZZzZ8RDjkGcqpAEvbFsDuDjMVXIydCqzZBZz2yZHR104xB91BRVjQBj9986mHnN0ctIf9PiJvjIZ8VoCUA8VWpQm04YyFIweENHs6q055NVirZ51PL3b5A%3D%3D&u2=PTMubkcPBMKJCtce&width=2560', 3);

-- ── Seed contact ──────────────────────────────────────────────────
INSERT OR IGNORE INTO contact (id, phone, email, address, website) VALUES
  (1, '+254 700 000 000', 'info@brightandchaste.co.ke', 'Nairobi, Kenya', 'https://brightandchaste.co.ke');
