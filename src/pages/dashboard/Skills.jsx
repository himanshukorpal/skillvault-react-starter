import { Search } from "lucide-react";
import useBoardStore from "../../store/useBoardStore";

const Skills = () => {
  const columns = useBoardStore((state) => state.columns);
  const addSkill = useBoardStore((state) => state.addSkill);
  console.log(columns);
  return (
    <div>
      <div className="flex justify-between p-2 mb-4">
        <h1 className="text-3xl font-semibold font-Inter ">Skills</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            return (
              <dialog open>
                <p>Greetings, one and all!</p>
                <form method="dialog">
                  <button>OK</button>
                </form>
              </dialog>
            );
          }}
        >
          Add Skill
        </button>
      </div>
      <div className="flex w-full p-2 0 rounded-lg  hover:ring-1 hover:ring-blue-400 gap-2 bg-gray-100 ">
        <Search className="text-gray-500" />
        <input
          className="focus:outline-none w-full"
          type="search"
          name="search"
          id="search"
          placeholder="Search Skills..."
        />
      </div>

      <div className="flex  justify-around border-b border-gray-300 mt-4 py-3 font-medium">
        <h3>Name</h3>
        <h3>Tags</h3>
        <h3>Level</h3>
        <h3>Action</h3>
      </div>
    </div>
  );
};

export default Skills;
