"use client";

import React from "react";
import { FaStar } from "react-icons/fa";

const Sidebar = ({ productData, setFilteredProducts }) => {
    // Function to filter products by category
    const handleCategoryFilter = (category) => {
        const filtered = productData.filter(
            (product) => product.category === category
        );
        setFilteredProducts(filtered);
    };

    // Function to filter products by price range
    const handlePriceFilter = ([min, max]) => {
        const filtered = productData.filter(
            (product) => product.price >= min && product.price <= max
        );
        setFilteredProducts(filtered);
    };

    // Function to filter products by rating
    const handleRatingFilter = (rating) => {
        const filtered = productData.filter(
            (product) => product.rating === rating
        );
        setFilteredProducts(filtered);
    };

    // Get unique categories from productData and calculate the count for each category
    const categories = [
        "Fruits",
        "Butter & Eggs",
        "Dried",
        "Food",
        "Fresh Meat",
        "Vegetables",
        "Meats",
        "Supplements",
    ];

    const categoryCounts = categories.reduce((acc, category) => {
        acc[category] = productData.filter(
            (product) => product.category === category
        ).length;
        return acc;
    }, {});

    return (
        <aside>
            <div className="space-y-4 p-4 box-border border border-[#c9c9c9] rounded-[20px]">
                <h2 className="text-[#282828] font-inter text-[25px] font-bold leading-[30px] border-b pb-6">
                    Categories
                </h2>
                <nav>
                    <ul className="list-disc list-inside custom-list">
                        {categories.map((category) => (
                            <li key={category}>
                                <button
                                    onClick={() => handleCategoryFilter(category)}
                                    className="text-[#676767] font-inter text-[16px] font-normal leading-[34px]"
                                >
                                    {category} ({categoryCounts[category]})
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="space-y-4 p-4 box-border border border-[#c9c9c9] rounded-[20px] mt-10">
                <h2 className="text-[#282828] font-inter text-[25px] font-bold leading-[30px] border-b pb-6">
                    Price
                </h2>
                <nav>
                    <ul className="list-disc list-inside custom-list">
                        {[
                            [0, 199],
                            [200, 299],
                            [300, 399],
                            [400, 499],
                            [500, 1000],
                        ].map((range) => (
                            <li key={range.join("-")}>
                                <button
                                    onClick={() => handlePriceFilter(range)}
                                    className="text-[#676767] font-inter text-[16px] font-normal leading-[34px]"
                                >
                                    ${range[0]} - ${range[1]}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="space-y-4 p-4 box-border border border-[#c9c9c9] rounded-[20px] mt-10">
                <h2 className="text-[#282828] font-inter text-[25px] font-bold leading-[30px] border-b pb-6">
                    Rating
                </h2>
                <nav>
                    <ul>
                        {[5, 4, 3, 2, 1].map((rating) => (
                            <li key={rating}>
                                <button
                                    onClick={() => handleRatingFilter(rating)}
                                    className="text-[#676767] font-inter text-[16px] font-normal leading-[34px] flex gap-1 items-center"
                                >
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={i < rating ? "text-[#FFAE00]" : ""}
                                        />
                                    ))}
                                    ({rating})
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
