import { FC, useState } from "react";
import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";

interface TodoTypes {
  title: string;
  description: string;
  onClick(): void;
}

const Todo: FC<TodoTypes> = ({ title, description, onClick }) => {
  const [isCrossed, setIsCrossed] = useState(false);

  return (
    <div
      onClick={onClick}
      className="flex mt-4 p-5 justify-between items-center bg-white border-2 border-slate-300"
    >
      <div>
        <h2 className={`${isCrossed && "line-through"} text-md md:text-lg`}>
          {title}
        </h2>
        <p
          className={`${
            isCrossed && "line-through"
          }  text-sm text-ellipsis overflow-hidden md:text-nowrap md:text-md`}
        >
          {description}
        </p>
      </div>
      <div className="flex justify-between items-center ml-2 md:ml-0">
        <FaCheck
          size={"20px"}
          onClick={() => setIsCrossed((prevState) => !prevState)}
          className="cursor-pointer text-green-600"
        />
        <FaTrash size={"20px"} className="mx-5 cursor-pointer text-red-600" />
        <FaEdit size={"20px"} className="cursor-pointer text-orange-600" />
      </div>
    </div>
  );
};

export default Todo;
