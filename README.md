# Local Face - Perfume Store Website

A professional, modern perfume store website built with React, TypeScript, and Tailwind CSS. This project implements 7 complete page designs from Figma, creating a fully functional e-commerce website for a luxury perfume retailer.

## Features

- **7 Complete Pages:**
  - Home Page - Hero section, featured products, collections, and latest articles
  - Products List Page - Product catalog with filtering and sorting
  - Product Detail Page - Detailed product information with reviews
  - About Us Page - Company story and values
  - Services Page - Service offerings and descriptions
  - Blogs Collection Page - Blog listing with search and filters
  - Blog Detail Page - Individual blog post with sharing options

- **Modern Tech Stack:**
  - React 18 with TypeScript
  - Tailwind CSS for styling
  - React Router for navigation
  - Vite for fast development and building

- **Professional Design:**
  - Responsive layout
  - Smooth transitions and hover effects
  - Consistent branding with custom fonts
  - Professional color scheme

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
├── public/
│   └── assets/          # Images and static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── icons/      # Icon components
│   │   ├── Header.tsx  # Site header/navigation
│   │   └── Footer.tsx  # Site footer
│   ├── pages/          # Page components
│   │   ├── HomePage.tsx
│   │   ├── ProductsListPage.tsx
│   │   ├── ProductDetailPage.tsx
│   │   ├── AboutUsPage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── BlogsCollectionPage.tsx
│   │   └── BlogPage.tsx
│   ├── App.tsx         # Main app component with routing
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

## Pages

### Home Page (`/`)
- Hero banner with call-to-action
- Welcome section
- Our Values section
- Best selling products carousel
- Collections showcase
- Sale banner
- Latest articles

### Products List (`/products`)
- Product grid with filtering options
- Sort functionality
- Pagination
- Product cards with ratings and prices

### Product Detail (`/products/:id`)
- Large product image
- Product information and description
- Size selection
- Quantity selector
- Add to cart functionality
- Key fragrance notes
- Reviews section
- Related products

### About Us (`/about`)
- Hero section with company mission
- Our Story section
- What Makes Us Unique
- Closing message

### Services (`/services`)
- Hero section
- 6 detailed service offerings:
  - Personal Fragrance Consultations
  - Custom Fragrance Creation
  - Scented Gift Selection
  - Fragrance Events and Workshops
  - Eco-friendly Initiatives
  - Online Shopping Convenience

### Blogs Collection (`/blog`)
- Blog header with introduction
- Search functionality
- Category and sort filters
- Blog post grid
- Load more functionality

### Blog Detail (`/blog/:slug`)
- Full blog post content
- Featured image
- Social sharing buttons
- Previous/Next navigation

## Customization

### Colors
Edit `tailwind.config.js` to customize the brand colors:
```js
colors: {
  'brand': {
    'primary': '#ab572d',
    'dark': '#1d1d1d',
  }
}
```

### Fonts
The project uses custom fonts (DaniloCatalina, Satoshi). Font files should be placed in `public/fonts/` and referenced in `src/index.css`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for Local Face Perfume Store.

