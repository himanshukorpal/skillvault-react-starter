import { Link } from "react-router-dom";
import { Home, Lightbulb, Target, KanbanSquare, Settings } from "lucide-react";
const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">SkillVault</h2>
      <nav className="flex flex-col space-y-4">
        <Link
          to="/dashboard"
          className="flex items-center gap-3 hover:text-blue-400"
        >
          <Home size={20} /> Dashboard
        </Link>
        <Link
          to="/dashboard/skills"
          className="flex items-center gap-3 hover:text-blue-400"
        >
          <Lightbulb size={20} /> Skills
        </Link>
        <Link
          to="/dashboard/goals"
          className="flex items-center gap-3 hover:text-blue-400"
        >
          <Target size={20} /> Goals
        </Link>
        <Link
          to="/dashboard/tracker"
          className="flex items-center gap-3 hover:text-blue-400"
        >
          <KanbanSquare size={20} /> Tracker
        </Link>
        <Link
          to="/dashboard/settings"
          className="flex items-center gap-3 hover:text-blue-400"
        >
          <Settings size={20} /> Settings
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
