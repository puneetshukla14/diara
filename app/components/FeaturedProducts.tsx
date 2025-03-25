"use client";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Gold Necklace",
    price: "$199",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Diamond Ring",
    price: "$499",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Silver Bracelet",
    price: "$99",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    name: "Pearl Earrings",
    price: "$129",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 5,
    name: "Luxury Watch",
    price: "$999",
    image: "https://via.placeholder.com/300",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10">✨ Featured Products ✨</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-10">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden p-4 hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-4 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition">
              Buy Now
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
