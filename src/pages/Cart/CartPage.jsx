import { useState } from "react"
import { ProductCard } from "../../components/Cart/product-card"
import { CartSummary } from "../../components/Cart/cart-summary"

const initialCart = {
  items: [
    {
      id: "1",
      name: "AirRage® Sneakers",
      size: "24L",
      color: "Clean Green",
      price: 80.0,
      quantity: 1,
      image: "https://via.placeholder.com/200",
    },
    {
      id: "2",
      name: "Luxury Kenzo Shoes",
      size: "24L",
      color: "Clean Green",
      price: 80.0,
      quantity: 1,
      image: "https://via.placeholder.com/200",
    },
  ],
  shipping: "free",
}

function App() {
  const [cart, setCart] = useState(initialCart)
  const [coupon, setCoupon] = useState("")

  const updateQuantity = (id, quantity) => {
    setCart((prev) => ({
      ...prev,
      items: prev.items.map((item) => (item.id === id ? { ...item, quantity } : item)),
    }))
  }

  const removeItem = (id) => {
    setCart((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== id),
    }))
  }

  const clearCart = () => {
    setCart((prev) => ({ ...prev, items: [] }))
  }

  const updateShipping = (shipping) => {
    setCart((prev) => ({ ...prev, shipping }))
  }

  const subtotal = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const freeShippingThreshold = 34
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal)

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Cart</h1>

        {/* Free shipping progress */}
        {remainingForFreeShipping > 0 && (
          <div className="mb-8">
            <div className="text-sm text-center mb-2">
              Shop for ${remainingForFreeShipping.toFixed(2)} more to enjoy FREE Shipping
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-black transition-all duration-500"
                style={{
                  width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%`,
                }}
              />
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Product list */}
            <div className="space-y-6">
              {cart.items.map((item) => (
                <ProductCard key={item.id} product={item} onUpdateQuantity={updateQuantity} onRemove={removeItem} />
              ))}
              {cart.items.length === 0 && <div className="text-center py-8 text-gray-500">Your cart is empty</div>}
              {cart.items.length > 0 && (
                <button
                  className="text-red-500 hover:text-red-600 border border-gray-200 px-4 py-2 rounded-md"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              )}
            </div>

            {/* Coupon section */}
            <div className="mt-8">
              <h3 className="text-sm font-medium mb-2">Have a coupon?</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add your code for an instant cart discount"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="flex-1 border rounded-md px-3 py-2"
                />
                <button className="bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">Apply</button>
              </div>
            </div>
          </div>

          {/* Cart summary */}
          <div>
            <CartSummary cart={cart} onUpdateShipping={updateShipping} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

