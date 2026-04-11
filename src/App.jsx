import { useState, useRef } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Stats from './components/Stats'
import ProductsSection from './components/ProductsSection'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'

function DigiToolsApp() {
  const [activeTab, setActiveTab] = useState('products')
  const productsSectionRef = useRef(null)

  function handleCartClick() {
    setActiveTab('cart')
    if (productsSectionRef.current) {
      productsSectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar onCartClick={handleCartClick} />
      <Banner />
      <Stats />
      <div ref={productsSectionRef}>
        <ProductsSection activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <Steps />
      <Pricing />
      <CTABanner />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </div>
  )
}

export default function App() {
  return (
    <CartProvider>
      <DigiToolsApp />
    </CartProvider>
  )
}
