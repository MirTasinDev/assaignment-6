# 🛠️ DigiTools — Digital Tools Buying Platform

A modern e-commerce website for premium digital tools built with React.js and Tailwind CSS.

---

## 📋 Description

DigiTools is a single-page application where users can browse and purchase premium digital tools including AI writing assistants, design templates, automation toolkits, and more. Products can be added to a cart, reviewed, and checked out — all with smooth toast notifications.

---

## ⚙️ Technologies Used

- **React.js** — Component-based UI
- **Vite** — Fast development build tool
- **Tailwind CSS** — Utility-first CSS framework
- **DaisyUI** — Tailwind CSS component library
- **React-Toastify** — Toast notification library
- **JavaScript (ES6+)** — No TypeScript
- **npm** — Package manager

---

## ✨ Features

1. **🛒 Cart Management** — Add products to cart, remove individual items, and proceed to checkout with instant toast feedback.
2. **📦 Product Catalog** — Browse 8 premium digital tools displayed in a clean 3-column grid with tag badges (Best Seller, Popular, New).
3. **📱 Fully Responsive** — Works seamlessly on mobile, tablet, and desktop with a collapsible mobile navigation menu.

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/digitools.git

# Navigate to the project directory
cd digitools

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
digitools/
├── src/
│   ├── assets/          # Images and icons
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Banner.jsx
│   │   ├── Stats.jsx
│   │   ├── ProductsSection.jsx
│   │   ├── ProductCard.jsx
│   │   ├── CartView.jsx
│   │   ├── Steps.jsx
│   │   ├── Pricing.jsx
│   │   ├── CTABanner.jsx
│   │   └── Footer.jsx
│   ├── context/
│   │   └── CartContext.jsx  # Global cart state
│   ├── data/
│   │   └── products.js      # Product data
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

---

## 📄 License

© 2026 DigiTools. All rights reserved.
