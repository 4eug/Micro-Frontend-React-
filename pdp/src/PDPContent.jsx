import React, { useState, useEffect } from "react";

import { getProductById, currency } from "home/products";

export default function PDPContent() {
  const id = 1;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      getProductById(id).then((product) => {
        setProduct(product);
      });
    } else {
      setProduct(null);
    }
  });

  if (!product) return null;

  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div className="flex">
        <h1 className="font-bold text-3xl flex-grow">{product.name}</h1>
        <div className="font-bold text-3xl flex-end">
          {currency.format(product.price)}
        </div>
      </div>
    </div>
  );
}