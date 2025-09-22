import React from "react";

function ProductCard({ name, price, status }) {
  return (
    <div className="border-l-4 border-blue-500 bg-gray-50 p-4 rounded-md shadow-sm mb-4">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p>💲 Price: ${price}</p>
      <p className={status === "In Stock" ? "text-green-600" : "text-red-600"}>
        {status}
      </p>
    </div>
  );
}

export default ProductCard;
