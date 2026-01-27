# Dual Website Setup - MOCI

This repository now contains **TWO separate websites** that coexist:

## 🟥 1. Original MOCI Website (Maroon Theme)
**Brand Color:** `#8B1538` (Maroon - Qatar's national color)

### Routes:
- **Home:** `/` - Main landing page
- **International:** `/international` - For international investors
- **About:**
  - `/about` - About the Ministry
  - `/about/minister` - Minister's page
  - `/about/strategy` - National Strategy
  - `/about/vision` - Vision, Mission & Values
  - `/about/committees` - National Committees
  - `/about/branches` - MOCI Branches
- **Services:**
  - `/services` - Services overview
  - `/services/business` - Business services
  - `/services/consumer` - Consumer services
  - `/services/trade-names` - Trade names search
- **E-Services:** `/e-services` - Electronic services
- **Media Center:**
  - `/media-centre` - Media center home
  - `/media-centre/news` - News articles
  - `/media-centre/reports` - Reports & statistics
  - `/media-centre/gallery` - Photo gallery
- **Resources:** `/resources` - Downloads & resources
- **Contact:** `/contact-us` - Contact information
- **Legal:**
  - `/privacy-policy` - Privacy policy
  - `/sitemap` - Site map

### Features:
- ✅ Full navigation menu with all MOCI pages
- ✅ Maroon/burgundy color scheme (Qatar national color)
- ✅ Theme switcher (light/dark mode)
- ✅ Accessibility features (font size, high contrast)
- ✅ Responsive design
- ✅ Multi-language support (Arabic/English)
- ✅ Employee portal access
- ✅ Search functionality

---

## 🟦 2. Unified System (Blue Theme)
**Brand Color:** `#345D9B` (MOCI Blue)

### Routes:
- **Unified Portal:** `/unified` - Employee login and services portal

### Features:
- ✅ Employee login system
- ✅ Service cards grid (Arabic/English)
- ✅ Blue gradient design
- ✅ RTL layout support
- ✅ Lusail font
- ✅ Side menu navigation
- ✅ Animated interactions

---

## 🏢 3. Office Locator (Standalone)
**Brand Color:** `#8B1538` (Maroon)

### Routes:
- **Office Locator:** `/locator` - Find employee offices in new MOCI building

### Features:
- ✅ Employee number search
- ✅ Building visualization
- ✅ Animated path finding
- ✅ Step-by-step directions
- ✅ Floor and zone highlighting

---

## 🚀 How to Use

### Development:
```bash
npm run dev
```
Then visit:
- `http://localhost:8080/` - Original MOCI website
- `http://localhost:8080/unified` - Unified System
- `http://localhost:8080/locator` - Office Locator

### Production Build:
```bash
npm run build
```

### Preview Production Build:
```bash
npm run preview
```

---

## 📁 Project Structure

```
src/
├── pages/
│   ├── Index.tsx                    # Home page (maroon)
│   ├── International.tsx            # International page (maroon)
│   ├── About/                       # About section pages
│   ├── Services/                    # Services section pages
│   ├── MediaCenter/                 # Media center pages
│   ├── UnifiedSystem/
│   │   └── UnifiedSystem.tsx        # Unified portal (blue)
│   └── OfficeLocator/
│       └── OfficeLocator.tsx        # Office locator
├── components/
│   ├── Layout/                      # Header, Footer, Navigation
│   ├── Home/                        # Home page components
│   ├── International/               # International page components
│   └── ...
└── App.tsx                          # Main routing configuration
```

---

## 🎨 Color Schemes

### Original MOCI (Maroon):
- Primary: `#8B1538` or `#8b0d32`
- Light: `#a82645`
- Dark: `#6a0926`
- Tailwind class: `bg-qatari`

### Unified System (Blue):
- Primary: `#345D9B`
- Gradient: `from-[#1e3a5f] to-[#2d5a8f]`

---

## 🔄 Switching Default Route

Currently, the default route (`/`) shows the **Original MOCI Website**.

To change the default to Unified System, edit `src/App.tsx`:
```tsx
<Route path="/" element={<Navigate to="/unified" replace />} />
```

---

## 📝 Notes

- Both websites share the same theme context (light/dark mode)
- Both websites share accessibility features
- The Office Locator is standalone and can be deployed separately
- All three can coexist on the same domain with different routes

