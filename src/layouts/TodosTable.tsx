import fakeTodos from "../data/todo.json";
import Todo from "../components/Todo";
import { useNavigate } from "react-router-dom";

const TodosTable = () => {
  const navigate = useNavigate();
  return (
    <div>
      {fakeTodos.map(
        ({
          title,
          description,
          id,
        }: {
          title: string;
          description: string;
          id: number;
        }) => (
          <Todo
            onClick={() => {
              navigate(`/todo/${id}`);
            }}
            title={title}
            description={description}
            key={id}
          />
        )
      )}
    </div>
  );
};

export default TodosTable;
