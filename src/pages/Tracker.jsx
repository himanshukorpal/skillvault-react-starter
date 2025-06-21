import SkillCard from "./dashboard/SkillCard";
const Tracker = () => {
  return (
    <div>
      <div className="flex justify-between p-6">
        <h1 className="text-3xl font-medium">Tracker</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          + Add Skill
        </button>
      </div>
      <div className="flex w-1/2 justify-between px-6">
        <button className="border border-gray-300 font-medium  px-4 py-1 mt-5  shadow rounded">
          To Learn
        </button>
        <button className="border border-gray-300 font-medium  px-4 py-1 mt-5  shadow rounded">
          Learning
        </button>
        <button className="border border-gray-300 font-medium  px-4 py-1 mt-5  shadow rounded">
          Learned
        </button>
      </div>
      <SkillCard></SkillCard>
    </div>
  );
};

export default Tracker;
