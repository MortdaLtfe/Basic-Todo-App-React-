import { React, useState, useRef } from "react";
import "./App.css";

function App(props) {
    const [todos, setTodos] = useState([]);
    const inputText = useRef();

    function handelTodo() {
      if (inputText.current.value !== "") {
            var text = inputText.current.value;

            const todo = {
                complate: false,
                text: text
            };
            setTodos([...todos, todo]);
            inputText.current.value = "";
        }
    }
    function handelDone (index) {
        const newTodos = [...todos];
        newTodos[index].complate = !newTodos[index].complate;
        setTodos(newTodos);
    };
    function deleTodo(index){
      const newTodo = [...todos]
      newTodo.splice(index, 1)
      setTodos(newTodo)
    }
    return (
        <div className="App">
            <div className="todo-container">
                <div>
                    <ul>
                        {todos.map((todo, index) => {
                            return (
                                <div>
                                 <li
                                    className={
                                        todo.complate
                                            ? "done todo"
                                            : "n-done todo"
                                    }
                                    onClick={() => handelDone(index)}
                                >
                                    {todo.text}      </li>
                                <button className="dele-btn" onClick={()=>
                                deleTodo(index)}>X</button>
                                </div>
                            );
                        })}
                        {
                            // Setup Todos
                        }
                        
                    </ul>
                </div>

                <div className="inputForm">
                    <input placeholder="Enter The Mission..." ref={inputText} />
                    <button onClick={handelTodo}>Add</button>
                </div>
            </div>
        </div>
    );
}

export default App;
