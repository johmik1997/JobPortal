import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // custom hook
import { useSendLogoutMutation } from "../features/auth/authApiSlice";
import logo from "../img/logo.png";

const Header = () => {
  const { username, roles } = useAuth();
  const navigate = useNavigate();
  const [sendLogout, { isLoading }] = useSendLogoutMutation();

  const handleLogout = async () => {
    try {
      await sendLogout().unwrap();
      navigate("/login"); // redirect to login page
    } catch (err) {
      console.error("Logout failed: ", err);
    }
  };

  return (
    <header className="bg-blue-900 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="TalentHub Logo" className="w-14 h-14 rounded-full" />
          <h1 className="text-2xl font-bold text-white">TalentHub</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-green-400 font-semibold border-b-2 border-green-400 pb-1"
                : "text-white hover:text-green-400 transition"
            }
          >
            Home
          </NavLink>
             {roles.includes("Admin") && (
              <>
              <NavLink
                to="/users"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400 font-semibold border-b-2 border-green-400 pb-1"
                    : "text-white hover:text-green-400 transition"
                }
              >
                Users
              </NavLink>
              </>
             )}
          {/* Developer Links */}
          {roles.includes("Developer") && (
            <>
              <NavLink
                to="/jobs"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400 font-semibold border-b-2 border-green-400 pb-1"
                    : "text-white hover:text-green-400 transition"
                }
              >
                Jobs
              </NavLink>
              <NavLink
                to="/dashboard/applicant"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400 font-semibold border-b-2 border-green-400 pb-1"
                    : "text-white hover:text-green-400 transition"
                }
              >
                My Applications
              </NavLink>
            </>
          )}

          {/* Employer Links */}
          {roles.includes("employer") && (
            <>
              <NavLink
                to="/employer/job"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400 font-semibold border-b-2 border-green-400 pb-1"
                    : "text-white hover:text-green-400 transition"
                }
              >
                Jobs Posted
              </NavLink>
              <NavLink
                to="/dashboard/employer"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-400 font-semibold border-b-2 border-green-400 pb-1"
                    : "text-white hover:text-green-400 transition"
                }
              >
                Dashboard
              </NavLink>
            </>
          )}

          {/* Common Links */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-green-400 font-semibold border-b-2 border-green-400 pb-1"
                : "text-white hover:text-green-400 transition"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-green-400 font-semibold border-b-2 border-green-400 pb-1"
                : "text-white hover:text-green-400 transition"
            }
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Auth Links */}
        <div className="space-x-4 flex items-center">
          {!username ? (
            <>
              <Link to="/login" className="text-white hover:text-green-400 transition">
                Login
              </Link>
              <Link
                to="/register"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md transition"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <span className="text-white mr-4">Hi, {username}</span>
              <button
                onClick={handleLogout}
                disabled={isLoading}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
