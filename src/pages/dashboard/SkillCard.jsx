import { Trash2, Eraser } from "lucide-react";

const SkillCard = () => {
  return (
    <article className="bg-white rounded shadow p-4 max-w-xs mt-5">
      <header className="flex justify-between items-start mb-2">
        <h2 className="text-xl font-bold">React</h2>
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

      <span className="inline-block font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm mb-3">
        Frontend
      </span>

      <p className="mb-3 text-gray-700 text-sm">Component based framework</p>
    </article>
  );
};

export default SkillCard;
