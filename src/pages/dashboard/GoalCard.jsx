import { Trash2, Eraser } from "lucide-react";

const GoalCard = () => {
  return (
    <article className="bg-white rounded shadow p-4 max-w-xs mt-5">
      <header className="flex justify-between items-start mb-2">
        <h2 className="text-lg font-bold">Finish React Course</h2>
        {/* Action icons for edit/delete (optional) */}
        <div className="flex gap-2">
          <button
            aria-label="Edit goal"
            className="text-gray-500 hover:text-blue-600"
          >
            <Eraser />
          </button>
          <button
            aria-label="Delete goal"
            className="text-gray-500 hover:text-red-600"
          >
            <Trash2 />
          </button>
        </div>
      </header>

      <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium mb-3">
        Learning
      </span>

      <time className="block text-sm text-gray-600 mb-2" dateTime="2025-06-30">
        Due: 30 Jun 2025
      </time>

      <p className="mb-3 text-gray-700 text-sm">Build a real-world project</p>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
        <div
          className="bg-blue-400 h-2.5 rounded-full"
          style={{ width: "70%" }}
        ></div>
      </div>
      <span className="text-sm font-medium text-gray-600">70%</span>
    </article>
  );
};

export default GoalCard;
