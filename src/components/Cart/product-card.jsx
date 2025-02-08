import { QuantityAdjuster } from "./qauntity-adjuster"

export function ProductCard({ product, onUpdateQuantity, onRemove }) {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-4 py-4 border-b">
      <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-gray-100">
        <img
          src={product.image || "https://via.placeholder.com/200"}
          alt={product.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1 space-y-1">
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-sm text-gray-500">
          Size: {product.size}, {product.color}
        </p>
        <button
          className="text-red-500 hover:text-red-600 text-sm bg-transparent p-0"
          onClick={() => onRemove(product.id)}
        >
          Remove
        </button>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center ml-auto">
        <QuantityAdjuster
          quantity={product.quantity}
          onIncrease={() => onUpdateQuantity(product.id, product.quantity + 1)}
          onDecrease={() => onUpdateQuantity(product.id, Math.max(1, product.quantity - 1))}
        />
        <div className="text-right tabular-nums">${(product.price * product.quantity).toFixed(2)}</div>
      </div>
    </div>
  )
}

