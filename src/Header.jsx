import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-green-800 text-white p-5 mb-1">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-bold">CrudBlog</h1>
        <nav className="flex space-x-8">
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/create"
            className="text-white hover:text-gray-300 transition-colors duration-200"
          >
            Write Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
