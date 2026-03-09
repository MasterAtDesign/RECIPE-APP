import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold">
        🍽 Recipe Explorer
      </h1>

      <div className="flex gap-6 text-lg">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </div>

    </div>
  );
}
