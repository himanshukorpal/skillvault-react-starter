import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">SkillVault</h2>
      <nav className="flex flex-col space-y-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/dashboard/skills">Skills</Link>
        <Link to="/dashboard/goals">Goals</Link>
        <Link to="/dashboard/tracker">Tracker</Link>
        <Link to="/dashboard/settings">Settings</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
