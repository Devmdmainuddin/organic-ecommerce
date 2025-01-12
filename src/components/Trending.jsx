"use client";
import React, { useState } from "react";
import Heading from './Heading'
import ProductCard from "./card/ProductCard";
import TrendingSidebar from "./sidebar/TrendingSidebar";
import Container from "./Container";

import productData from "../app/httpActions/product/data";
const Trending = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
    const categories = ["All", ...new Set(productData.map((product) => product.category))];
    
    const filteredProduct =
    selectedCategory === "All"
      ? productData
      : productData.filter((product) => product.category === selectedCategory);

  const filteredProducts = (selectedCategory) => {
    if (selectedCategory === "All") return productData;
    return setProducts(
      productData.filter((product) => product.category === selectedCategory)
    );
  };
  return (
    <div className="mt-[130px]">
      <Heading text="Trending Products Category"></Heading>
      <Container>
        <div className="flex  flex-col md:flex-row gap-6 mt-[50px]">
          <aside>
            <TrendingSidebar
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
              filteredProducts={filteredProducts}
            ></TrendingSidebar>
          </aside>
          <main>
            <div>
              <div className=" flex flex-wrap gap-6">
                {filteredProduct?.slice(0, 12).map((item, index) => (
                  <ProductCard key={index} item={item}></ProductCard>
                ))}
              </div>
            </div>
          </main>
        </div>
      </Container>
    </div>
  );
};

export default Trending;
