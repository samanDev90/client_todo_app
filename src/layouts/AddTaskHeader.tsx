import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const AddTaskHeader = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  return (
    <div className="flex flex-col md:my-5">
      <Input
        className="text-sm font-semibold border p-2 md:text-md"
        onChange={(e) => setTodoTitle(e.target.value)}
        type="text"
        maxLength={20}
        value={todoTitle}
        placeholder="Type in a task"
      />
      <Input
        className="text-sm font-semibold border p-2 my-4 md:text-md"
        onChange={(e) => setTodoDescription(e.target.value)}
        type="text"
        maxLength={32}
        value={todoDescription}
        placeholder="Type in description"
      />
      <Button
        className="bg-orange-600 text-white text-nowrap transition-all duration-[250ms] hover:bg-white hover:border-orange-600 hover:text-orange-600"
        onClick={() => console.log("Add task button")}
        type="button"
      >
        Add Task
      </Button>
    </div>
  );
};

export default AddTaskHeader;
