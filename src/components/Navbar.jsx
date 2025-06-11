import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navLinkClass = ({ isActive }) => {
    isActive ? "text-yellow-600 font-bold" : "text-gray-700";
  };

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        SkillVault
      </Link>
      <div className="space-x-4">
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to="/tracker" className={navLinkClass}>
          Tracker
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
