import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import TaskForm from "./Components/TaskFrom/TaskForm";
import TaskList from "./Components/TaskList/TaskList";
import FooterForm from "./Components/FooterForm/FooterForm";

export default function App() {
  const [items, setItems] = useState([
    {
      date: "2024-02-22",
      time: "12:00 PM",
      clientname: "Ashley thomas",
      contact: "(800)234-3231",
      technician: "Rebecca jones",
      service: "Volume Lashes",
      comments: "Possible Fill",
      id: 1677037386071,
    }
  ]);

  const addTask = (
    date,
    time,
    clientname,
    contact,
    technician,
    service,
    comments
  ) => {
    setItems((oldItems) => {
      const newItems = [...oldItems];
      newItems.push({
        date,
        time,
        clientname,
        contact,
        technician,
        service,
        comments,
        id: new Date().getTime(),
      });
      return newItems;
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-Header-h1">Client Scheduler</h1>
        <Header />
      </header>
      <main>
        <TaskForm addTask={addTask} />
        <TaskList items={items} />
      </main>
      <footer>
        <FooterForm />
      </footer>
    </div>
  );
}
