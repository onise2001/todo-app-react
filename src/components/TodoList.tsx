import React from "react";
import ITodo from "../type";

interface TodoListProps {
  todos: ITodo[];
  dark: boolean;
  setCurrentFilter: React.Dispatch<React.SetStateAction<number>>;
  setAllTodo: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        task: string;
        completed: boolean;
      }[]
    >
  >;

  currentFilter: number;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  dark,
  setCurrentFilter,
  setAllTodo,
  currentFilter,
}) => {
  //const filters = ["All", "Active", "Completed"];

  //const [displayTodos, setDisplayTodos] = useState(todos);

  const todosLeft = todos.reduce((accoumulator, todo) => {
    if (!todo.completed) {
      accoumulator += 1;
    }
    return accoumulator;
  }, 0);

  const completeTodo = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setAllTodo(newTodos);
  };

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setAllTodo(newTodos);
  };

  const clearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setAllTodo(newTodos);
  };

  return (
    <section
      className={`overflow-hidden ${
        dark
          ? "text-[#c8cbe7] xl:shadow-custom-dark-desktop"
          : "text-[#494c6b] xl:shadow-custom-light-desktop"
      } max-w-[32.7rem] xl:max-w-[54rem] m-auto`}
    >
      <div
        className={`${
          dark
            ? "bg-todo-dark shadow-custom-dark "
            : "bg-todo-light shadow-custom-light "
        } flex flex-col h-[36.8rem] xl:h-[43.9rem] rounded-lg`}
      >
        <div className=" overflow-y-scroll">
          {todos
            .filter((todo) => {
              if (currentFilter === 1) {
                return !todo.completed;
              } else if (currentFilter === 2) {
                return todo.completed;
              } else {
                return true;
              }
            })
            .map((todo: ITodo) => {
              return (
                <div
                  key={todo.id}
                  className={`flex items-center justify-between px-[2rem] py-[1.6rem] xl:px-[2.4rem] xl:pt-[2.1rem] xl:pb-[2.4rem] border-b-[1px] ${
                    dark ? "border-[#393a4b] " : "border-[#e3e4f1] "
                  }`}
                >
                  <div className="flex items-center">
                    <label className="inline-flex items-center mr-[1.2rem] xl:mr-[2.4rem]">
                      <input
                        type="checkbox"
                        name="option"
                        className="hidden peer "
                        checked={todo.completed}
                        onChange={() => {
                          completeTodo(todo.id);
                        }}
                      />
                      <span
                        className={`w-[2rem] h-[2rem] xl:w-[2.4rem] xl:h-[2.4rem] inline-block rounded-full border hover:cursor-pointer ${
                          dark ? "border-[#393a4b]" : "border-[#e3e4f1]"
                        } peer-checked:bg-[url('/images/icon-check.svg'),linear-gradient(to_bottom,#5df,#c058f3)] peer-checked:bg-center peer-checked:bg-no-repeat peer-checked:border-none`}
                      ></span>
                    </label>
                    <p
                      className={` ${
                        todo.completed
                          ? dark
                            ? "line-through text-[#4d5067] "
                            : " line-through text-[#d1d2da]"
                          : ""
                      }text-[1.2rem] xl:text-[1.8rem]  tracking-[-0.17] xl:tracking-[-0.25px] `}
                    >
                      {todo.task}
                    </p>
                  </div>

                  <img
                    src="./images/icon-cross.svg"
                    alt=""
                    className="w-[1.2rem] h-[1.2rem] xl:w-[1.77rem] xl:h-[1.77rem] hover:cursor-pointer"
                    onClick={() => {
                      deleteTodo(todo.id);
                    }}
                  />
                </div>
              );
            })}
        </div>
        <div
          className={`mt-auto border-t-[1px] ${
            dark ? "border-[#5b5e7e]" : "border-[#e3e4f1]"
          } flex justify-between text-[1.2rem] xl:text-[1.4rem] px-[2rem] pt-[1.6rem] pb-[2.2rem] xl:px-[2.4rem] xl:pb-[2rem]`}
        >
          <p className=" text-[#5b5e7e] tracking-[-0.17px] ">
            {todosLeft} items left
          </p>

          <div
            className={` hidden xl:flex  gap-[1.9rem] items-center  ${
              dark
                ? "bg-todo-dark shadow-custom-dark text-[#5b5e7e]"
                : "bg-todo-light shadow-custom-light text-[#9495a5]"
            }  tracking-[-0.19px] flex`}
          >
            <p
              onClick={() => setCurrentFilter(0)}
              className={`hover:cursor-pointer ${
                dark ? "hover:text-[#e3e4f1]" : "hover:text-[#494c6b]"
              } ${currentFilter === 0 ? "text-[#3a7cfd]" : "text-[#5b5e7e]"}`}
            >
              All
            </p>
            <p
              onClick={() => setCurrentFilter(1)}
              className={`hover:cursor-pointer ${
                dark ? "hover:text-[#e3e4f1]" : "hover:text-[#494c6b]"
              } ${currentFilter === 1 ? "text-[#3a7cfd]" : "text-[#5b5e7e]"}`}
            >
              Active
            </p>
            <p
              onClick={() => setCurrentFilter(2)}
              className={`hover:cursor-pointer ${
                dark ? "hover:text-[#e3e4f1]" : "hover:text-[#494c6b]"
              } ${currentFilter === 2 ? "text-[#3a7cfd]" : "text-[#5b5e7e]"}`}
            >
              Completed
            </p>
          </div>

          <p
            onClick={() => {
              clearCompleted();
            }}
            className={`text-[1.2rem]  text-[#5b5e7e] tracking-[-0.17px] hover:cursor-pointer ${
              dark ? "hover:text-[#e3e4f1]" : "hover:text-[#494c6b]"
            }`}
          >
            Clear completed
          </p>
        </div>
      </div>

      <div
        className={`mt-[1.6rem] xl:hidden rounded-lg justify-between pt-[1.6rem] px-[8rem] pb-[1.9rem]  text-[1.4rem] ${
          dark
            ? "bg-todo-dark shadow-custom-dark text-[#5b5e7e]"
            : "bg-todo-light shadow-custom-light text-[#9495a5]"
        }  tracking-[-0.19px] flex`}
      >
        <p
          onClick={() => setCurrentFilter(0)}
          className={` hover:cursor-pointer ${
            currentFilter === 0 ? "text-[#3a7cfd]" : "text-[#5b5e7e]"
          }`}
        >
          All
        </p>
        <p
          onClick={() => setCurrentFilter(1)}
          className={` hover:cursor-pointer ${
            currentFilter === 1 ? "text-[#3a7cfd]" : "text-[#5b5e7e]"
          }`}
        >
          Active
        </p>
        <p
          onClick={() => setCurrentFilter(2)}
          className={`hover:cursor-pointer ${
            currentFilter === 2 ? "text-[#3a7cfd]" : "text-[#5b5e7e]"
          }`}
        >
          Completed
        </p>
      </div>
    </section>
  );
};

export default TodoList;
