import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useSendLogoutMutation } from "../features/auth/authApiSlice";
import { Menu, X } from "lucide-react"; // icons for hamburger
import logo from "../img/logo.png";

const Header = () => {
  const { username, roles } = useAuth();
  const navigate = useNavigate();
  const [sendLogout, { isLoading }] = useSendLogoutMutation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await sendLogout().unwrap();
      navigate("/login");
    } catch (err) {
      console.error("Logout failed: ", err);
    }
  };

  // common link styles
  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-green-400 font-semibold border-b-2 border-green-400 pb-1"
      : "text-white hover:text-green-400 transition";

  return (
    <header className="bg-blue-900 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="TalentHub Logo" className="w-14 h-14 rounded-full" />
          <h1 className="text-2xl font-bold text-white">TalentHub</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>

          {roles.includes("Admin") && (
            <NavLink to="/users" className={linkClasses}>
              Users
            </NavLink>
          )}

          {roles.includes("Developer") && (
            <>
              <NavLink to="/jobs" className={linkClasses}>
                Jobs
              </NavLink>
              <NavLink to="/dashboard/applicant" className={linkClasses}>
                My Applications
              </NavLink>
            </>
          )}

          {roles.includes("employer") && (
            <>
              <NavLink to="/employer/job" className={linkClasses}>
                Jobs Posted
              </NavLink>
              <NavLink to="/dashboard/employer" className={linkClasses}>
                Dashboard
              </NavLink>
            </>
          )}

          <NavLink to="/about" className={linkClasses}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={linkClasses}>
            Contact Us
          </NavLink>
        </nav>

        {/* Auth + Hamburger */}
        <div className="flex items-center space-x-4">
          {/* Desktop Auth */}
          <div className="hidden md:flex space-x-4 items-center">
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
                <span className="text-white mr-2">Hi, {username}</span>
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

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {/* Mobile Dropdown */}
{mobileMenuOpen && (
  <div className="md:hidden bg-blue-800 px-6 pb-4 flex flex-col space-y-4">
    <NavLink to="/" className={linkClasses} onClick={() => setMobileMenuOpen(false)}>
      Home
    </NavLink>

    {roles.includes("Admin") && (
      <NavLink to="/users" className={linkClasses} onClick={() => setMobileMenuOpen(false)}>
        Users
      </NavLink>
    )}

    {roles.includes("Developer") && (
      <>
        <NavLink
          to="/jobs"
          className={linkClasses}
          onClick={() => setMobileMenuOpen(false)}
        >
          Jobs
        </NavLink>
        <NavLink
          to="/dashboard/applicant"
          className={linkClasses}
          onClick={() => setMobileMenuOpen(false)}
        >
          My Applications
        </NavLink>
      </>
    )}

    {roles.includes("employer") && (
      <>
        <NavLink
          to="/employer/job"
          className={linkClasses}
          onClick={() => setMobileMenuOpen(false)}
        >
          Jobs Posted
        </NavLink>
        <NavLink
          to="/dashboard/employer"
          className={linkClasses}
          onClick={() => setMobileMenuOpen(false)}
        >
          Dashboard
        </NavLink>
      </>
    )}

    <NavLink to="/about" className={linkClasses} onClick={() => setMobileMenuOpen(false)}>
      About Us
    </NavLink>
    <NavLink to="/contact" className={linkClasses} onClick={() => setMobileMenuOpen(false)}>
      Contact Us
    </NavLink>

    {/* Mobile Auth */}
    {!username ? (
      <>
        <Link
          to="/login"
          className="text-white hover:text-green-400 transition"
          onClick={() => setMobileMenuOpen(false)}
        >
          Login
        </Link>
        <Link
          to="/register"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md transition text-center"
          onClick={() => setMobileMenuOpen(false)}
        >
          Register
        </Link>
      </>
    ) : (
      <>
        <span className="text-white">Hi, {username}</span>
        <button
          onClick={() => {
            handleLogout();
            setMobileMenuOpen(false);
          }}
          disabled={isLoading}
          className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition"
        >
          Logout
        </button>
      </>
    )}
  </div>
)}

    </header>
  );
};

export default Header;
