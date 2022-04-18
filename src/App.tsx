import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

const App: React.FunctionComponent = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todo);
  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Tasks</span>

      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;

// let name: string;
// name = "Jeff";
// let age: number | string;
// age = "22";
// let isStudent: boolean;
// isStudent = true;
// let hobbies: string[];
// hobbies = ["ten", "four"];
// let ages: number[];
// ages = [2, 3, 4];
// let role: [number, string];
// role = [4, "hello"];

// const printName = (name: string) => {
//   console.log(name);
// };
// printName("Rick");
