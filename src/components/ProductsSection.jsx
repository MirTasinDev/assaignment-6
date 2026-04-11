import { useCart } from '../context/CartContext'
import products from '../data/products'
import ProductCard from './ProductCard'
import CartView from './CartView'

export default function ProductsSection({ activeTab, setActiveTab }) {
  const { items } = useCart()

  return (
    <section className="py-16 px-4 bg-white" id="products">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Premium Digital Tools</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Choose from our curated collection of premium digital products designed
            to boost your productivity and creativity.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="join bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setActiveTab('products')}
              className={`join-item btn btn-sm rounded-full px-6 font-semibold text-sm border-none transition-[background,color,box-shadow] duration-300 ease-in-out ${
                activeTab === 'products'
                  ? 'bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] text-white shadow-sm'
                  : 'bg-transparent text-gray-500 hover:text-gray-800 shadow-none'
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab('cart')}
              className={`join-item btn btn-sm rounded-full px-6 font-semibold text-sm border-none transition-[background,color,box-shadow] duration-300 ease-in-out ${
                activeTab === 'cart'
                  ? 'bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] text-white shadow-sm'
                  : 'bg-transparent text-gray-500 hover:text-gray-800 shadow-none'
              }`}
            >
              Cart ({items.length})
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'products' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <CartView />
        )}
      </div>
    </section>
  )
}
