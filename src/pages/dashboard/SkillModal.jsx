import Modal from "react-modal";

const SkillModal = () => {
  return (
    <Modal
      isOpen={modalRef}
      className="bg-white rounded-lg p-6  shadow-lg max-w-md mx-auto mt-40 outline-none fixed top-0 right-0 left-0"
    >
      <div className="flex justify-between  mb-5">
        <h2 className="font-semibold text-xl">Add Skill</h2>
        <button onClick={HandleClick}>
          <X />
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <input
          className="focus:outline-none w-full border border-gray-300 rounded p-1"
          type="text"
          name="title"
          id="title"
          value={skillset.title}
          onChange={HandleChange}
          placeholder="enter skill"
        />
        <input
          className="focus:outline-none w-full border border-gray-300 rounded p-1"
          type="text"
          name="tags"
          id="tags"
          value={skillset.tags}
          onChange={HandleChange}
          placeholder="enter tags"
        />
        <input
          className="focus:outline-none w-full border border-gray-300 rounded p-1"
          type="text"
          name="level"
          id="level"
          value={skillset.level}
          onChange={HandleChange}
          placeholder="enter level"
        />
        <button
          className="flex gap-1 border border-gray-300 font-medium  px-4 py-2 mt-1  shadow rounded "
          onClick={SetSkillValues}
        >
          <SmilePlus className="text-gray-600" /> Add
        </button>
      </div>
    </Modal>
  );
};

export default SkillModal;
