import fakeTodos from "../data/todo.json";
import Todo from "../components/Todo";

const TodosTable = () => {
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
          <Todo title={title} description={description} key={id} />
        )
      )}
    </div>
  );
};

export default TodosTable;
