import { useState } from 'react'
import { useCart } from '../context/CartContext'
import writingIcon from '../assets/writing.png'
import designToolIcon from '../assets/design-tool.png'
import operationIcon from '../assets/operation.png'
import portfolioIcon from '../assets/portfolio.png'
import packageIcon from '../assets/package.png'
import socialMediaIcon from '../assets/social-media.png'

const iconMap = {
  'writing.png': writingIcon,
  'design-tool.png': designToolIcon,
  'operation.png': operationIcon,
  'portfolio.png': portfolioIcon,
  'package.png': packageIcon,
  'social-media.png': socialMediaIcon,
}

const tagStyles = {
  'Best Seller': 'bg-amber-100 text-amber-700',
  'Popular': 'bg-purple-100 text-purple-700',
  'New': 'bg-green-100 text-green-700',
}

export default function ProductCard({ product }) {
  const { addToCart, items } = useCart()
  const [added, setAdded] = useState(false)
  const iconSrc = iconMap[product.iconFile]

  function handleBuyNow() {
    const inCart = items.find(i => i.id === product.id)
    if (!inCart) {
      addToCart(product)
      setAdded(true)
      setTimeout(() => setAdded(false), 2000)
    } else {
      addToCart(product)
    }
  }

  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-5 flex flex-col gap-3 relative transition-[transform,box-shadow] duration-300 ease-out hover:scale-[1.02] hover:shadow-lg cursor-pointer">
      {/* Tag badge */}
      <span
        className={`absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full ${tagStyles[product.tagType] || 'bg-gray-100 text-gray-600'}`}
      >
        {product.tag}
      </span>

      {/* Icon */}
      <div className="w-16 h-16 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-sm">
        <img src={iconSrc} alt={product.name} className="w-9 h-9 object-contain" />
      </div>

      {/* Name & Description */}
      <div>
        <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
        <p className="text-gray-500 text-sm mt-1 leading-relaxed">{product.description}</p>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-bold text-gray-900">${product.price}</span>
        <span className="text-gray-400 text-sm">/{product.period}</span>
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-1.5">
        {product.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
            <svg className="w-4 h-4 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* Buy Now */}
      <button
        onClick={handleBuyNow}
        className="btn mt-auto text-white font-semibold py-2.5 rounded-full w-full border-none bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)]"
      >
        {added ? '✓ Added to cart' : 'Buy Now'}
      </button>
    </div>
  )
}
