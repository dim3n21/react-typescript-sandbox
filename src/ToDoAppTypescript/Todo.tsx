import React, { useState } from "react";
import Form from "../sandbox/Form";
import Button from "../sandbox/Btn/Btn";

type FormElem = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string;
  complete: boolean;
}

interface ITodo2 extends ITodo { // example of extending interface
  somethingElse: string;
}

const Todo: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: FormElem):void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text: string):void => {
    const newTodos:ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index:number):void => {
    const newTodos:ITodo[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  }

  const removeTodo = (index:number):void => {
    setTodos([...todos.filter((todo, idx) => idx !== index)])
  }

  return (
    <>
      <Form btnTitle='Submit' />
      <Button primTitle='PRIM' secTitle='Sec' />

      <h1>ToDoListTypeScript</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button type='submit'>Add Todo</button>
      </form>
      <section>
        {todos.map((todo:ITodo, index:number) => {
          return (
            <>
              <div key={index}>{todo.text}</div>
              <button onClick={() => completeTodo(index)}>{todo.complete ? 'completed' : 'not completed'}</button>
              <button onClick={() => removeTodo(index)}>Delete</button>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Todo;
