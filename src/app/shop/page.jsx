"use client";

import React, { useEffect, useState } from "react";
import HeroShop from "@/components/banner/HeroShop";
import FilterBar from "@/components/shop/FilterBar";
import Container from "@/components/Container";
import productData from "../httpActions/product/data";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Sidebar from "@/components/shop/Sidebar";
import ProductCard4 from "@/components/card/ProductCard4";

const ShopPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(productData);
  const [sortOrder, setSortOrder] = useState("new");
  const [number, setNumber] = useState(6);
  const [activeMulti, setActiveMulti] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const handleByNew = () => setSortOrder("new");
  const handleByOld = () => setSortOrder("old");

  const selectNumber = (event) => {
    const numberConverted = Number(event.target.value);
    setNumber(numberConverted);
  };

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };
  useEffect(() => {
    let sortedAndFilteredProducts = [...productData];



 // Filter products based on the search query
 if (searchQuery) {
    sortedAndFilteredProducts = sortedAndFilteredProducts.filter(item =>
        item.name.toLowerCase().includes(searchQuery) || item.category.toLowerCase().includes(searchQuery)
    );
}


    if (sortOrder === "new") {
      sortedAndFilteredProducts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    } else if (sortOrder === "old") {
      sortedAndFilteredProducts.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    }

    setFilteredProducts(sortedAndFilteredProducts);
  }, [sortOrder,searchQuery]);

  return (
    <div>
      <HeroShop />
      <FilterBar
        setActiveMulti={setActiveMulti}
        handleByNew={handleByNew}
        handleByOld={handleByOld}
        selectNumber={selectNumber}
        handleSearch={handleSearch} 
      />
      <Container>
        <div className=" min-h-screen grid grid-cols-1 sm:grid-cols-[267px_1fr] mt-[50px]">
          <Sidebar
            productData={productData}
            setFilteredProducts={setFilteredProducts}
          ></Sidebar>
          <main>
            <div className=" flex flex-wrap justify-center gap-6">
              {filteredProducts?.slice(0, 9).map((item, index) => (
                <ProductCard4 key={index} item={item}></ProductCard4>
              ))}
            </div>
          </main>
        </div>
      </Container>
    </div>
  );
};

export default ShopPage;
