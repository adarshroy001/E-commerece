export function QuantityAdjuster({ quantity, onIncrease, onDecrease }) {
    return (
      <div className="flex items-center border rounded-md">
        <button
          onClick={onDecrease}
          className="px-3 py-1 hover:bg-gray-100 transition-colors"
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span className="px-3 py-1 tabular-nums">{quantity}</span>
        <button
          onClick={onIncrease}
          className="px-3 py-1 hover:bg-gray-100 transition-colors"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    )
  }
  
  