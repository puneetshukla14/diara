import Navbar from "@/app/components/Navbar";
import FeaturedProducts from "@/app/components/FeaturedProducts";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Navbar />
      <section className="flex items-center justify-center h-[80vh]">
        <h1 className="text-5xl font-bold">Timeless Jewelry, Crafted for You</h1>
      </section>
      
      {/* Add Featured Products Section */}
      <FeaturedProducts />
    </main>
  );
}
