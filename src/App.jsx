import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div className="min-h-screen p-6">
      <Navbar />
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
