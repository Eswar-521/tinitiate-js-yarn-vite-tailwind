import { ShoppingCart } from "lucide-react";

const ShoppingCartPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-700 via-pink-700 to-rose-700 p-8 text-white">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-5xl font-extrabold flex items-center gap-3">
          <ShoppingCart size={40} /> Shopping Cart
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="bg-white/20 backdrop-blur p-6 rounded-xl border border-white/30 shadow-xl"
            >
              <h2 className="text-xl font-bold mb-2">Item {item}</h2>
              <p className="text-white/80">Price: ₹{item * 1000}</p>
              <button className="mt-4 px-4 py-2 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-500 transition">
                Checkout
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
