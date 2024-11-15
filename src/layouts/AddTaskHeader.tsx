import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const AddTaskHeader = () => {
  const [todoVal, setTodoVal] = useState("");
  return (
    <div className="flex justify-between items-center">
      <Input
        className="basis-[90%] text-sm font-semibold border p-2 md:text-md"
        onChange={(e) => setTodoVal(e.target.value)}
        type="text"
        value={todoVal}
        placeholder="Type in a task"
      />
      <Button
        className="bg-orange-400 text-white text-nowrap"
        onClick={() => console.log("Add task button")}
        type="button"
      >
        Add Task
      </Button>
    </div>
  );
};

export default AddTaskHeader;
