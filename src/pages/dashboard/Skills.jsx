const Skills = () => {
  return (
    <div>
      <div className="flex justify-between p-2 mb-4">
        <h1 className="text-3xl font-semibold">Skills</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Skill
        </button>
      </div>
      <div>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search Skills"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 "
        />
      </div>

      <div className="flex  justify-around border-b border-gray-300 mt-4 py-3 font-medium">
        <h3>Name</h3>
        <h3>Level</h3>
        <h3>Action</h3>
      </div>
    </div>
  );
};

export default Skills;
