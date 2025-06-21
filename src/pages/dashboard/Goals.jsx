import { Plus } from "lucide-react";

import GoalCard from "./GoalCard";

const Goals = () => {
  return (
    <div>
      <div>
        <h1
          className="text-3xl font-medium
        "
        >
          Goals
        </h1>
        <button className="flex gap-1 border border-gray-300 font-medium  px-4 py-2 mt-5  shadow rounded ">
          <Plus /> New Goal
        </button>
      </div>
      <GoalCard></GoalCard>
    </div>
  );
};

export default Goals;
