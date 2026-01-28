import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "./productCard";


export default function Marketplace() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || product.category === category;
    return matchesSearch && matchesCategory;
    });// 'includes' for partial matching

  return (
    <div className="p-8 font-[Roboto] bg-white">
      {/* Title */}
      <h1 className="font-[Merriweather] text-2xl font-bold text-green-800 mb-6">
        Marketplace
      </h1>

      {/* SEARCH INPUT */}
      <input
        type="text"
        placeholder="Search products"
        value={search}
        onChange={(product) => setSearch(product.target.value)}
        className="border px-4 py-2 rounded-md w-full max-w-sm mb-6"
      />

     {/* CATEGORY OPTIONS */}
    <div className="mb-6">
      <p className="text-lg font-semibold mb-2">Categories</p>

      <div className="gap-6  text-md">
        {["All", "Fruits", "Vegetables", "Grains"].map((categoryOption) => (
          <label key={categoryOption} className="flex items-center gap-2">
            <input
              type="radio"
              name="category"
              value={categoryOption}
              checked={category === categoryOption}
              onChange={(event) => setCategory(event.target.value)}
            />
            {categoryOption}
          </label>
        ))}
      </div>
    </div>


      {/* Product Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* not found */}
      {filteredProducts.length === 0 && (
        <p className="text-gray-500 mt-6">No products found.</p>
      )}
    </div>
  );
}
