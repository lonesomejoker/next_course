"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const ProductList = () => {
  const searchParams = useSearchParams();
  console.log("inside:", searchParams);
  const pages = searchParams.getAll("page") || 1;
  const category = searchParams.get("category") || "all";
  console.log("Category:", category, "Page:", pages);
  // const entries =Object.fromEntries(searchParams.entries());
  // console.log("Entries:", entries);

  return <div>ProductList</div>;
};

export default ProductList;
