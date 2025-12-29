import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsListPage from './pages/ProductsListPage'
import ProductDetailPage from './pages/ProductDetailPage'
import AboutUsPage from './pages/AboutUsPage'
import ServicesPage from './pages/ServicesPage'
import BlogsCollectionPage from './pages/BlogsCollectionPage'
import BlogPage from './pages/BlogPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsListPage />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/blog" element={<BlogsCollectionPage />} />
      <Route path="/blog/:slug" element={<BlogPage />} />
    </Routes>
  )
}

export default App

