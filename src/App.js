import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import ToDo from "./ToDo";
import db from "./firebase";

import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(snapshot.docs.map((doc) => doc.data().todo));
      });
  }, []);

  const addTodo = (event) => {
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput(""); //clear the input
  };

  return (
    <div className="App">
      <h1>Hello world Welcome to React functional programming</h1>
      <FormControl>
        <InputLabel>Write To Do</InputLabel>
        <Input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </FormControl>
      <Button
        disabled={!input}
        onClick={addTodo}
        variant="contained"
        color="primary"
      >
        Add ToDo
      </Button>
      <ul>
        {todos.map((todo) => (
          <ToDo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
