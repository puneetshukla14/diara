import React from "react";

const products = [
  {
    id: 1,
    name: "Gold Necklace",
    price: "$199",
    image: "/images/gold-necklace.jpg",
  },
  {
    id: 2,
    name: "Diamond Ring",
    price: "$499",
    image: "/images/diamond-ring.jpg",
  },
  {
    id: 3,
    name: "Silver Bracelet",
    price: "$99",
    image: "/images/silver-bracelet.jpg",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-lg">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
              <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
