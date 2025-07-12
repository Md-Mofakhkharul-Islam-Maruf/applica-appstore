import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import logo from '../../../assets/newlogoo.png';
import { AuthContext } from '../../../Auth/AuthContext';
import Swal from 'sweetalert2';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure you want to logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            navigate('/login');
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
          }
        >
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myProfile"
          className={({ isActive }) =>
            isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
          }
        >
          My Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/GamePage"
          className={({ isActive }) =>
            isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
          }
        >
          Game Zone
        </NavLink>
      </li>
    </>
  );

  return (
    <div className='bg-base-100'>
      <div className="navbar bg-base-100 shadow-sm max-w-7xl mx-auto">
        {/* Left (Logo + Mobile Menu) */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <img className="max-w-[120px] mt-2" src={logo} alt="Applica logo" />
          </Link>
        </div>

        {/* Center (Desktop Menu) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        {/* Right (Login/Profile/Logout) */}
        <div className="navbar-end gap-3">
          {user ? (
            <>
              {/* Profile Picture with Hover Tooltip */}
              <div className="relative group">
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-blue-500 cursor-pointer"
                />
                <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 whitespace-nowrap z-10">
                  {user.displayName || 'User'}
                </div>
              </div>

              {/* Logout Button */}
              <button onClick={handleLogout} className="btn btn-sm bg-red-500 text-white hover:bg-red-600">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="btn btn-primary btn-sm">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
