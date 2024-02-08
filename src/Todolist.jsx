import List from "@mui/material/List";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import NewTodo from "./NewTodo";

const getTodosData = () => {
    let data = JSON.parse(localStorage.getItem("todos"));
    if (!data) return [];
    return data;
};

export default function Todolist() {
    const [todos, setTodos] = useState(getTodosData);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const deleteTodo = (deletedTodoId) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== deletedTodoId));
    };

    const changeStatus = (targetTodoId) => {
        const newTodos = todos.map((todo, index) => {
            if (todo.id == targetTodoId) {
                todo.status = todo.status == "completed" ? "uncomplete" : "completed";
                return todo;
            } else {
                return todo;
            }
        });
        setTodos(newTodos);
    };

    const addTodo = (todoName) => {
        setTodos((prevTodos) => {
            return [...prevTodos, { name: todoName, status: "uncompleted", id: uuidv4() }];
        });
    };
    return (
        <>
            <List sx={{ m: "0 auto", width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
                {todos.map((todo) => {
                    return (
                        <Todo
                            key={todo.id}
                            todo={todo}
                            changeStatus={() => changeStatus(todo.id)}
                            deleteTodo={() => deleteTodo(todo.id)}
                        />
                    );
                })}
            </List>
            <div
                style={{
                    width: "100%",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                }}
            >
                <NewTodo addTodo={addTodo} />
            </div>
        </>
    );
}
