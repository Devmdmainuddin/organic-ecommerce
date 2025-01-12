import Image from "next/image";

const TrendingSidebar = ({
  filteredProducts,
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-col  space-y-4 mb-6 w-[267px] p-[22px] bg-[#FAFAFA] rounded-[25px]">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className="flex gap-2 items-center "
          >
            {/* Conditional Rendering for Images */}
            <Image
              src={
                category === "Beverages"
                  ? "/c-1.png"
                  : category === "Butter & Eggs"
                  ? "/c-2.png"
                  : category === "Dried Food"
                  ? "/c-3.png"
                  : category === "Fresh Meat"
                  ? "/c-4.png"
                  : category === "Fruits"
                  ? "/c-5.png"
                  : category === "Vegetables"
                  ? "/c-6.png"
                  : "/c-1.png"
              }
              alt={category}
              width="47"
              height="50"
            />
            <span
              className={`text-[#282828] font-inter text-[18px] font-semibold leading-[28px] flex gap-3 items-center hover:text-[#F47606] transition-all duration-500  ${
                selectedCategory === category ? "text-[#F47606] " : ""
              }`}
            >
              {category}
            </span>
          </button>
        ))}
      </div>

      <div className="w-[267px]   ">
        {/* <ul className="p-[22px] bg-[#FAFAFA] rounded-[25px]">
          <li
            onClick={() => filteredProducts("Beverages")}
            className="text-[#282828] font-inter text-[18px] font-semibold leading-[28px] flex gap-3 items-center hover:text-[#F47606] transition-all duration-500 "
          >
            {" "}
            <Image src="/c-1.png" alt="" width="47" height="50"></Image>
            Beverages
          </li>
          <li
            onClick={() => filteredProducts("Butter & Eggs")}
            className="text-[#282828] font-inter text-[18px] font-semibold leading-[28px] mt-[15px] flex gap-3 items-center hover:text-[#F47606] transition-all duration-500 "
          >
            {" "}
            <Image src="/c-2.png" alt="" width="47" height="50"></Image>Butter &
            Eggs
          </li>
          <li
            onClick={() => filteredProducts("Fruits")}
            className="text-[#282828] font-inter text-[18px] font-semibold leading-[28px] mt-[15px] flex gap-3 items-center hover:text-[#F47606] transition-all duration-500"
          >
            {" "}
            <Image src="/c-3.png" alt="" width="47" height="50"></Image>Fruits
          </li>
          <li
            onClick={() => filteredProducts("Fresh Meat")}
            className="text-[#282828] font-inter text-[18px] font-semibold leading-[28px] mt-[15px] flex gap-3 items-center hover:text-[#F47606] transition-all duration-500"
          >
            {" "}
            <Image src="/c-4.png" alt="" width="47" height="50"></Image>Fresh
            Meat
          </li>
          <li
            onClick={() => filteredProducts("Vegetables")}
            className="text-[#282828] font-inter text-[18px] font-semibold leading-[28px] mt-[15px] flex gap-3 items-center hover:text-[#F47606] transition-all duration-500"
          >
            {" "}
            <Image src="/c-5.png" alt="" width="47" height="50"></Image>
            Vegetable
          </li>
          <li
            onClick={() => filteredProducts("Dried Food")}
            className={`text-[#282828] font-inter text-[18px] font-semibold leading-[28px] mt-[15px] flex gap-3 items-center hover:text-[#F47606] transition-all duration-500`}
          >
            {" "}
            <Image src="/c-6.png" alt="" width="47" height="50"></Image>Dried
            Food
          </li>
        </ul> */}

        <div className="w-full h-[447px] relative rounded-[25px] mt-10">
          <Image
            src="/t-1.jpg"
            alt=""
            fill
            objectFit="cover"
            className=" rounded-[25px]"
          ></Image>
        </div>
        <div className="w-full h-[447px] relative rounded-[25px] mt-10">
          <Image
            src="/t-2.jpg"
            alt=""
            fill
            objectFit="cover"
            className=" rounded-[25px]"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default TrendingSidebar;
