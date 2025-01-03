import React from 'react';
import { FaPlus ,FaMinus ,FaTrash} from "react-icons/fa";

export function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 border-b border-gray-200 py-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-cover rounded"
      />
      <div className="flex-1 text-center sm:text-left">
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <p className="text-gray-600">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <FaMinus size={20} />
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <FaPlus size={20} />
        </button>
        <button
          onClick={() => onRemove(item.id)}
          className="p-1 hover:bg-gray-100 rounded text-red-500 ml-2"
        >
          <FaTrash size={20} />
        </button>
      </div>
      <div className="font-semibold w-24 text-right">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
    </div>
  );
}

