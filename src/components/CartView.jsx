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

export default function CartView() {
  const { items, removeFromCart, clearCart, total } = useCart()

  return (
    <div className="max-w-3xl mx-auto w-full">
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-5">Your Cart</h2>

        {items.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            <svg className="w-14 h-14 mx-auto mb-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p className="text-lg font-medium">Your cart is empty</p>
            <p className="text-sm mt-1">Add some products to get started!</p>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-3 mb-5">
              {items.map(item => (
                <div key={item.id} className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={iconMap[item.iconFile]}
                      alt={item.name}
                      className="w-8 h-8 object-contain"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                      <p className="text-gray-500 text-sm">${item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="flex items-center justify-between py-3 border-t border-gray-200 mb-4">
              <span className="text-gray-500 text-sm">Total:</span>
              <span className="text-2xl font-bold text-gray-900">${total}</span>
            </div>

            {/* Checkout */}
            <button
              onClick={clearCart}
              className="btn w-full text-white font-semibold py-3 rounded-full border-none bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)]"
            >
              Proceed To Checkout
            </button>
          </>
        )}
      </div>
    </div>
  )
}
