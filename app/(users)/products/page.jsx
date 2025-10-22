import React from "react";
import ProductList from "./ProductList";

//  /products?category=laptop&page=2&sort=price-asc
const Products = async ({ searchParams }) => {
  const searchParam = await searchParams;
  console.log("outside:", await searchParams);
  const category = searchParam?.category || "all";
  const page = searchParam?.page || 1;
  const sort = searchParam?.sort || "default";
  return (
    <div className="consistent">
      Products
      <p>
        Showing {category} products, sorted by {sort}, on page {page}.
      </p>
      <ProductList/>
    </div>
  );
};

export default Products;
