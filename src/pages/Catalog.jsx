import { useState, useEffect } from "react";

// Generate 50 sample products with images
const generateProducts = () => {
  return Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: `$${(Math.random() * 1000).toFixed(2)}`,
    description: `This is a description for Product ${index + 1}. High quality and reliable.`,
    image: `https://source.unsplash.com/200x200/?product,tech&random=${index}`,
  }));
};

const Catalog = () => {
  const [products] = useState(generateProducts());
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter products when searchQuery changes
  useEffect(() => {
    if (!searchQuery) {
      setFilteredProducts(products);
    }
  }, [searchQuery, products]);

  const handleSearch = () => {
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.price.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Product Catalog</h2>

      {/* Search Bar */}
      <div className="flex justify-center items-center mb-6">
        <input
          type="text"
          placeholder="Search by name, price, or description..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-3 w-64 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="p-3 bg-blue-600 text-white font-semibold rounded-r-md hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="p-4 border rounded-lg shadow-md bg-white">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-500">{product.price}</p>
            <p className="text-gray-700">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
