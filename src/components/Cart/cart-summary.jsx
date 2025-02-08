export function CartSummary({ cart, onUpdateShipping }) {
  const subtotal = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shippingCost = cart.shipping === "express" ? 15 : 0
  const total = subtotal + shippingCost

  return (
    <div className="rounded-lg border p-6 space-y-4">
      <h2 className="font-semibold text-lg">Cart summary</h2>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="free"
              name="shipping"
              value="free"
              checked={cart.shipping === "free"}
              onChange={() => onUpdateShipping("free")}
              className="rounded-full"
            />
            <label htmlFor="free">Free shipping</label>
          </div>
          <span>$0.00</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="express"
              name="shipping"
              value="express"
              checked={cart.shipping === "express"}
              onChange={() => onUpdateShipping("express")}
              className="rounded-full"
            />
            <label htmlFor="express">Express shipping</label>
          </div>
          <span>+$15.00</span>
        </div>
      </div>
      <div className="border-t pt-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-medium mt-4">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors">
        Checkout
      </button>
    </div>
  )
}

