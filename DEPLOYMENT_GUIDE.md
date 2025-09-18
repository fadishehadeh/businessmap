# Qatar Ministry of Commerce and Industry Website - Deployment Guide

## 📦 Package Contents

This deployment package contains the production-ready build of the Qatar Ministry of Commerce and Industry website.

### Package Details:
- **File**: `qatar-moci-website-deployment.zip`
- **Size**: ~47.9 MB
- **Build Date**: September 16, 2025
- **Version**: Production Build

## 📁 Package Structure

When extracted, the package contains:

```
/
├── index.html              # Main entry point
├── favicon.ico             # Browser favicon (ICO format)
├── favicon.svg             # Browser favicon (SVG format - maroon square)
├── robots.txt              # Search engine directives
├── placeholder.svg         # Placeholder image
├── assets/                 # Compiled CSS and JavaScript
│   ├── index-CL46-mFB.css # Compiled styles (~96KB)
│   └── index-C_l3RVGl.js  # Compiled JavaScript (~764KB)
└── images/                 # All website images
    ├── hero.jpg            # Homepage hero image
    ├── logo-main.svg       # Main logo
    ├── logo-main-white.svg # White version of logo
    ├── minister.jpg        # Minister photo
    ├── strategy.pdf        # Strategy document
    ├── apple.png           # Apple app store badge
    ├── google.png          # Google Play store badge
    └── image1.jpg - image7.png # Various content images
```

## 🚀 Deployment Instructions

### For Web Servers (Apache, Nginx, IIS)

1. **Extract the ZIP file** to your web server's document root directory
2. **Upload all files** to your web hosting server
3. **Set the document root** to point to the extracted folder
4. **Configure URL rewriting** for Single Page Application (SPA) routing

### Apache (.htaccess)
Create a `.htaccess` file in the root directory:
```apache
RewriteEngine On
RewriteBase /

# Handle client-side routing
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Security headers
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"
```

### Nginx Configuration
Add to your Nginx server block:
```nginx
location / {
    try_files $uri $uri/ /index.html;
}

# Security headers
add_header X-Content-Type-Options nosniff;
add_header X-Frame-Options DENY;
add_header X-XSS-Protection "1; mode=block";
```

### IIS (web.config)
Create a `web.config` file in the root directory:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <system.webServer>
        <rewrite>
            <rules>
                <rule name="React Routes" stopProcessing="true">
                    <match url=".*" />
                    <conditions logicalGrouping="MatchAll">
                        <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
                        <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
                    </conditions>
                    <action type="Rewrite" url="/" />
                </rule>
            </rules>
        </rewrite>
    </system.webServer>
</configuration>
```

## 🌐 Website Features

### Pages Included:
- **Home** - Main landing page with all sections
- **About** - Minister, Strategy, Vision/Mission, National Committees
- **Services** - Business and Consumer services with detailed subsections
- **E-Services** - Digital government services portal
- **Media Center** - News, Reports, Gallery
- **Resources** - Important resources and documents
- **Contact Us** - Enhanced contact page

### Key Features:
- ✅ **Responsive Design** - Works on all devices
- ✅ **Search Functionality** - Real-time search modal
- ✅ **Auto-scroll Navigation** - Smooth scrolling to top
- ✅ **Accessibility Compliant** - WCAG guidelines
- ✅ **SEO Optimized** - Meta tags and structured data
- ✅ **Fast Loading** - Optimized assets and code splitting
- ✅ **Qatar Branding** - Maroon color scheme and national identity

## 🔧 Technical Requirements

### Minimum Server Requirements:
- **Web Server**: Apache 2.4+, Nginx 1.18+, or IIS 10+
- **PHP**: Not required (static website)
- **Database**: Not required (static website)
- **SSL Certificate**: Recommended for HTTPS
- **Bandwidth**: Minimum 1 Mbps for optimal performance

### Browser Support:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Support Information

### Website Details:
- **Built with**: React 18, TypeScript, Tailwind CSS, Vite
- **Performance**: Optimized for fast loading and SEO
- **Security**: Modern security headers and best practices
- **Accessibility**: WCAG 2.1 AA compliant

### For Technical Support:
Contact the development team for any deployment issues or customization needs.

---

**Note**: This is a static website build that requires no server-side processing. Simply upload the files to any web server and configure URL rewriting for proper routing.
