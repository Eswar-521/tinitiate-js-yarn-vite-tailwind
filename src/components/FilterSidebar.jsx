import React from "react";

const FilterSidebar = ({ setFilteredProducts, productsData }) => {
  const filterByCategory = (category) => {
    if (category === "All") {
      setFilteredProducts(productsData);
    } else {
      setFilteredProducts(productsData.filter((product) => product.category === category));
    }
  };

  return (
    <div className="w-1/4 p-4 border-r">
      <h2 className="text-lg font-bold mb-3">Categories</h2>
      <button onClick={() => filterByCategory("All")} className="block">All</button>
      <button onClick={() => filterByCategory("Electronics")} className="block">Electronics</button>
      <button onClick={() => filterByCategory("Clothing")} className="block">Clothing</button>
      <button onClick={() => filterByCategory("Furniture")} className="block">Furniture</button>
    </div>
  );
};

export default FilterSidebar;
