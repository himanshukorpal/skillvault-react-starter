import { Search, SmilePlus, X, Trash, Eraser } from "lucide-react";
import useBoardStore from "../../store/useBoardStore";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import SkillRowCard from "./SkillRowCard";
const Skills = () => {
  const skillLearn = useBoardStore((state) => state.columns.toLearn);
  const addSkill = useBoardStore((state) => state.addSkill);
  const editSkill = useBoardStore((state) => state.editSkill);
  const [modalRef, setModalRef] = useState(false);
  Modal.setAppElement("#root");
  console.log(skillLearn);
  const [skillset, setSkillSet] = useState({
    title: "",
    tags: [],
    level: "",
  });

  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleEditClick = (skill) => {
    setSelectedSkill(skill);
    setModalRef(true);
  };

  const saveEditSkill = () => {
    const tagsArray = selectedSkill.tags.split(/[\s,]+/).filter(Boolean);
    editSkill("toLearn", selectedSkill.id, {
      ...selectedSkill,
      tags: tagsArray,
    });
    setModalRef(false);
    setSelectedSkill(null);
    setSkillSet({
      title: "",
      tags: [],
      level: "",
    });
  };

  const HandleChange = (e) => {
    const { name, value } = e.target;
    if (selectedSkill) {
      setSelectedSkill((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
    setSkillSet((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const SetSkillValues = () => {
    const tagsArray = skillset.tags.split(/[\s,]+/).filter(Boolean);
    addSkill("toLearn", skillset.title, tagsArray, skillset.level);

    // Reset the form after adding
    setSkillSet({
      title: "",
      tags: [],
      level: "",
    });

    // Optional: Close modal
    setModalRef(false);
  };

  const HandleClick = () => {
    return setModalRef(!modalRef);
  };

  return (
    <div>
      <div className="flex justify-between p-2 mb-4">
        <h1 className="text-3xl font-semibold font-Inter ">Skills</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={HandleClick}
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

      <div>
        <div className="flex  justify-around border-b border-gray-300 mt-4 py-3 font-medium">
          <h3>Name</h3>
          <h3>Tags</h3>
          <h3>Level</h3>
          <h3>Action</h3>
        </div>
        {/* skill row card here */}
        {skillLearn.map((skill) => (
          <SkillRowCard
            key={skill.id}
            id={skill.id}
            title={skill.title}
            tags={skill.tags}
            level={skill.level}
            handleEditClick={handleEditClick}
          />
        ))}
      </div>
      {/* modal to add skills */}
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
            value={selectedSkill ? selectedSkill.title : skillset.title}
            onChange={HandleChange}
            placeholder="enter skill"
          />
          <input
            className="focus:outline-none w-full border border-gray-300 rounded p-1"
            type="text"
            name="tags"
            id="tags"
            value={selectedSkill ? selectedSkill.tags : skillset.tags}
            onChange={HandleChange}
            placeholder="enter tags"
          />
          <input
            className="focus:outline-none w-full border border-gray-300 rounded p-1"
            type="text"
            name="level"
            id="level"
            value={selectedSkill ? selectedSkill.level : skillset.level}
            onChange={HandleChange}
            placeholder="enter level"
          />

          <button
            className="flex gap-1 border border-gray-300 font-medium  px-4 py-2 mt-1  shadow rounded "
            onClick={selectedSkill ? saveEditSkill : SetSkillValues}
          >
            <SmilePlus className="text-gray-600" />{" "}
            {selectedSkill ? "Save" : "Add"}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Skills;
