import React from "react";
import { useState } from "react";

interface IAddTodoProps {
  setAllTodo: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        task: string;
        completed: boolean;
      }[]
    >
  >;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
  dark: boolean;
}

const AddTodos: React.FC<IAddTodoProps> = ({ setAllTodo, dark, setDark }) => {
  const [newTodo, setNewTodo] = useState({
    id: Math.random(),
    task: "",
    completed: false,
  });

  const addTodo = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key == "Enter" && newTodo.task.trim() !== "") {
      setAllTodo((prevAllTodo) => [newTodo, ...prevAllTodo]);
      setNewTodo({
        id: Math.random(),
        task: "",
        completed: false,
      });
    }
  };

  return (
    <div className="max-w-[32.7rem] xl:max-w-[54rem] m-auto">
      <div className="flex justify-between items-center w-full mb-[3rem]">
        <h1 className="text-white text-[3rem] xl:text-[4rem]  tracking-[1rem]">
          TODO
        </h1>
        <img
          src={dark ? "./images/icon-sun.svg" : "./images/icon-moon.svg"}
          alt=""
          onClick={() => {
            setDark(!dark);
          }}
          className="xl:w-[2.6rem] xl:h-[2.6rem] hover:cursor-pointer"
        />
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Create a new todo..."
          className={`min-w-full  ${
            dark
              ? "text-[#c8cbe7] bg-todo-dark"
              : "text-[#393a4b] bg-todo-light"
          } rounded-lg text-[1.2rem] xl:text-[1.8rem] xl:tracking-[-0.25px] px-[5.2rem] py-[1.8rem] xl:py-[2.3rem] xl:pl-[7.2rem] outline-none`}
          value={newTodo.task}
          onChange={(event) => {
            setNewTodo({ ...newTodo, task: event.target.value });
          }}
          onKeyDown={(event) => addTodo(event)}
        />

        <label className="inline-flex items-center mr-[1.2rem]">
          <input
            type="checkbox"
            name="option"
            className="hidden peer"
            checked={newTodo.completed}
            onChange={() =>
              setNewTodo({
                ...newTodo,
                completed: !newTodo.completed,
              })
            }
          />
          <span
            className={`absolute left-[2rem] bottom-[50%] xl:left-[2.4rem] w-[2rem] h-[2rem] inline-block rounded-full border hover:cursor-pointer ${
              dark ? "border-[#393a4b]" : "border-[#e3e4f1]"
            } peer-checked:bg-[url('./images/icon-check.svg'),linear-gradient(to_bottom,#5df,#c058f3)] peer-checked:bg-center peer-checked:bg-no-repeat peer-checked:border-none`}
          ></span>
        </label>
      </div>
    </div>
  );
};

export default AddTodos;
