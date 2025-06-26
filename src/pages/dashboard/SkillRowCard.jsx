import { Trash, Eraser } from "lucide-react";
import useBoardStore from "../../store/useBoardStore";

const SkillRowCard = ({ id, title, tags, level, handleEditClick }) => {
  const deleteSkill = useBoardStore((state) => state.deleteSkill);

  return (
    <div>
      <ul className="flex w-full mt-2   ">
        <li className="flex w-1/4 justify-center">
          <span>{title}</span>
        </li>

        <li className="w-1/4 flex justify-center">
          <div className="flex flex-wrap gap-2 justify-center max-w-32">
            {tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </li>

        <li className="flex w-1/4 justify-center">
          <span>{level}</span>
        </li>

        <li className="flex w-1/4 justify-center gap-5">
          <button
            onClick={() =>
              handleEditClick({
                id: id,
                title: title,
                tags: tags,
                level: level,
              })
            }
          >
            <Eraser />
          </button>
          <button onClick={() => deleteSkill("toLearn", id)}>
            <Trash />
          </button>
        </li>
      </ul>
      <hr className=" border-gray-200 mt-2"></hr>
    </div>
  );
};

export default SkillRowCard;
