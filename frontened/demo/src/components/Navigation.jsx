import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useState } from "react";

export default function Navigation() {
  const { name, success,isLoggedIn,logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function showName() {
    return name.split(" ")[0];
  }

  function handleLogout() {
    // Handle logout logic here, for example:
    // localStorage.removeItem("authToken");
    // Redirect to login page or refresh state
    logout()
  }

  return (
    <header className="bg-blue-600 text-white">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold">
          EventHUB
        </Link>
        <ul className="flex space-x-4 items-center">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/create-event" className="hover:underline">
              Create Event
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:underline">
              Services
            </Link>
          </li>
          <li className="relative">
            {isLoggedIn ? (
              <>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="hover:underline focus:outline-none"
                >
                  {showName()}
                </button>
                {dropdownOpen && (
                  <ul className="absolute right-0 mt-2 w-32 bg-white text-black rounded-lg shadow-lg">
                    <li>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </>
            ) : (
              <Link to="/login" className="hover:underline">
                Login
              </Link>
            )}
          </li>
          <li>
            <Link to="/signup" className="hover:underline">
              Signup
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
