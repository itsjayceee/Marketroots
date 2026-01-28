import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "./ProductCard"; 

export default function Marketplace() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "All" || product.category === category;

    const matchesMin = minPrice === "" || product.price >= parseFloat(minPrice);
    const matchesMax = maxPrice === "" || product.price <= parseFloat(maxPrice);

    return matchesSearch && matchesCategory && matchesMin && matchesMax;
  }); // 'includes' for partial matching

  // show only 1 item per product name
  const uniqueProducts = filteredProducts.filter(
    (product, index, self) =>
      index === self.findIndex((p) => p.name === product.name)
  );

  return (
    <div className="p-8 font-[Roboto] bg-white relative pointer-events-auto">
      {/* Title */}
      <h1 className="font-[Merriweather] text-2xl font-bold text-green-800 mb-6">
        Marketplace
      </h1>

      {/*SIDE BAR */}
      <div className="grid grid-cols-[260px_1fr] gap-8 items-start">
        <aside className="bg-green-100 p-4 pointer-events-auto">
          {/* SEARCH INPUT */}
          <input
            type="text"
            placeholder="Search products"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="border px-4 py-2 rounded-md w-full max-w-sm mb-6"
          />

          {/* PRICE RANGE */}
          <div className="border border-gray-700 rounded-lg p-4 mb-5">
            {/*border and height of the box*/}
            <p className="text-lg font-semibold mb-2">Price</p>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={(event) => setMinPrice(event.target.value)}
                className="w-full border rounded-md px-3 py-2 text-sm bg-white"
              />

              <input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(event) => setMaxPrice(event.target.value)}
                className="w-full border rounded-md px-3 py-2 text-sm bg-white"
              />
            </div>
          </div>

          {/* CATEGORY OPTIONS */}
          <div className="border border-gray-700 rounded-lg p-4 mb-5">
            <p className="text-lg font-semibold mb-2">Categories</p>

            <div className="gap-6 text-md">
              {["All", "Fruits", "Vegetables", "Grains", "Crop"].map(
                (categoryOption) => (
                  <label
                    key={categoryOption}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="radio"
                      name="category"
                      value={categoryOption}
                      checked={category === categoryOption}
                      onChange={(event) => setCategory(event.target.value)}
                    />
                    {categoryOption}
                  </label>
                )
              )}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="relative z-50 pointer-events-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {uniqueProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* not found */}
          {uniqueProducts.length === 0 && (
            <p className="text-gray-500 mt-6">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
