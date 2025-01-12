"use client";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import productData from "../../../app/httpActions/product/data";
import ProductCard from "../ProductCard";
import Image from "next/image";
// import { getProduct } from '@/services/productApi';

const Offer = () => {
  const [filter, setFilter] = useState("Top Rated");
  const [filteredProducts, setFilteredProducts] = useState(() => 
    productData.sort((a, b) => b.discount - a.discount) // Default "Top Rated"
  );

  const handleFilterClick = (filterType) => {
    setFilter(filterType);

    const newFilteredProducts = (() => {
      if (filterType === "Top Rated") {
        return productData.sort((a, b) => b.discount - a.discount);
      } else if (filterType === "Best Selling") {
        return productData.filter((product) => product.discount >= 10);
      } else if (filterType === "On Sale") {
        return productData.filter((product) => product.discount > 0);
      }
      return productData;
    })();

    setFilteredProducts(newFilteredProducts);
  };

  return (
    <div className="max-w-[1369px] mx-auto mt-[130px]">
      <div className="flex gap-6 flex-col md:flex-row">
        <aside>
          <div className="w-[497px] h-[808px] relative rounded-lg">
            <Image
              src="/left.jpg"
              alt="Special Offer Banner"
              fill
              className="object-cover rounded-[25px]" 
            />
          </div>
        </aside>
        <main>
          <div className="flex justify-center gap-4 mb-6">
            {["Top Rated", "Best Selling", "On Sale"].map(
              (filterType) => (
                <button
                  key={filterType}
                  onClick={() => handleFilterClick(filterType)}
                  className={`text-[#282828] outline-0 transition-all duration-300 pb-[20px] ${
                    filter === filterType ? "text-[#e63b3b]" : "text-gray-700  "
                  }`}
                >
                  {filterType}
                </button>
              )
            )}
          </div>
          <div className="flex flex-wrap  gap-6">
            {filteredProducts.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Offer;
