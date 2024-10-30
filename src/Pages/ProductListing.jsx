import React from "react";
import ProductCard from "../Components/ProductCard";
import image1 from "../assets/image-1.jpg";
const products = [
  { id: 1, title: "Product 1", price: 30, image: image1 },
  { id: 2, title: "Product 2", price: 50, image: image1 },
];

const ProductListing = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductListing;
