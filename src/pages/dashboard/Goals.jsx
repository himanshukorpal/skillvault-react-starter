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
        <button className="border border-gray-300 font-medium  px-4 py-1 mt-5  shadow rounded">
          + New Goal
        </button>
        <div id="goal-cards" className="mt-5"></div>
        <article className="bg-white rounded shadow p-4 max-w-xs">
          <header className="flex justify-between items-start mb-2">
            <h2 className="text-lg font-bold">Finish React Course</h2>
            {/* Action icons for edit/delete (optional) */}
            <div className="flex gap-2">
              <button
                aria-label="Edit goal"
                className="text-gray-500 hover:text-blue-600"
              >
                ✏️
              </button>
              <button
                aria-label="Delete goal"
                className="text-gray-500 hover:text-red-600"
              >
                🗑️
              </button>
            </div>
          </header>

          <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs mb-1">
            Learning
          </span>

          <time
            className="block text-sm text-gray-500 mb-2"
            dateTime="2025-06-30"
          >
            Due: 30 Jun 2025
          </time>

          <p className="mb-3 text-gray-700 text-sm">
            Build a real-world project
          </p>

          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
            <div
              className="bg-blue-400 h-2.5 rounded-full"
              style={{ width: "70%" }}
            ></div>
          </div>
          <span className="text-xs text-gray-600">70%</span>
        </article>
      </div>
    </div>
  );
};

export default Goals;
