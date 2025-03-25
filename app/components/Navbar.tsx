export default function Navbar() {
    return (
      <nav className="flex justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold">Diara by Kohinoor</h1>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-gray-600">Home</a></li>
          <li><a href="#" className="hover:text-gray-600">Shop</a></li>
          <li><a href="#" className="hover:text-gray-600">Collections</a></li>
          <li><a href="#" className="hover:text-gray-600">Contact</a></li>
        </ul>
        <button className="bg-black text-white px-4 py-2 rounded-md">
          Shop Now
        </button>
      </nav>
    );
  }
  