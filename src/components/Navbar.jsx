import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-gray-700 shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-white">
        SkillVault
      </Link>
      <div className="space-x-4 text-white">
        <Link to="/">Home</Link>
        <Link to="/tracker">Tracker</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
