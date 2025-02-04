import React from 'react';
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

export function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 border-b border-gray-200 py-4">
      <div className="flex-1 text-center sm:text-left">
        {/* Access product name from populated data */}
        <h3 className="font-semibold text-lg">{item.productId.name}</h3>
        {/* Display price from product data */}
        <p className="text-gray-600">Price: ${item.productId.price}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          // Pass product ID string, not object
          onClick={() => onUpdateQuantity(item.productId._id, Math.max(1, item.quantity - 1))}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <FaMinus size={20} />
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button
          // Pass product ID string, not object
          onClick={() => onUpdateQuantity(item.productId._id, item.quantity + 1)}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <FaPlus size={20} />
        </button>
        <button
          // Pass product ID string, not object
          onClick={() => onRemove(item.productId._id)}
          className="p-1 hover:bg-gray-100 rounded text-red-500 ml-2"
        >
          <FaTrash size={20} />
        </button>
      </div>
    </div>
  );
}

