import AddTodos from "./components/AddTodos";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(true);

  const [allTodo, setAllTodo] = useState([
    {
      id: 1,
      task: "Jog around the park 3x",
      completed: true,
    },
    {
      id: 2,
      task: "Create a todolist",
      completed: false,
    },
    {
      id: 3,
      task: "Create a todolist",
      completed: false,
    },
  ]);
  const [currentFilter, setCurrentFilter] = useState(0);

  return (
    <>
      <main
        className={`min-h-screen min-w-screen px-[2.4rem] pt-[4rem] xl:pt-[7rem]  ${
          dark
            ? "bg-mobile-bg-dark bg-no-repeat bg-[length:100%_220px] bg-body-dark md:bg-desktop-bg-dark xl:bg-[length:100%_300px]"
            : "bg-mobile-bg-light bg-no-repeat bg-body-light bg-[length:100%_220px]  md:bg-desktop-bg-light xl:bg-[length:100%_300px]"
        }`}
      >
        <AddTodos setAllTodo={setAllTodo} dark={dark} setDark={setDark} />
        <TodoList
          todos={allTodo}
          dark={dark}
          setCurrentFilter={setCurrentFilter}
          setAllTodo={setAllTodo}
          currentFilter={currentFilter}
        />
      </main>
    </>
  );
}

export default App;
