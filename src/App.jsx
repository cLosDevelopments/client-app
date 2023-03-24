import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import TaskForm from "./Components/TaskFrom/TaskForm";
import TaskList from "./Components/TaskList/TaskList";
import FooterForm from "./Components/FooterForm/FooterForm";
import SearchForm from "./Components/SearchFrom/SearchForm";

export default function App() {
  const [clientitems, setClientItems] = useState([
    {
      date: "2024-02-22",
      time: "13:00 ",
      name: "Ashley thomas",
      contact: "(800)234-3231",
      technician: "Rebecca jones",
      service: "Volume Lashes",
      comments: "Possible Fill",
      id: 1677037386071,
    },
  ]);

  function addClientItem(
    date,
    time,
    name,
    contact,
    technician,
    service,
    comments
  ) {
    setClientItems((oldClientItems) => {
      const newClientItems = structuredClone(oldClientItems);
      newClientItems.push({
        date,
        time,
        name,
        contact,
        technician,
        service,
        comments,
        id: new Date().getTime(),
      });
      return newClientItems;
    });
  }

  function deleteClientItem(id) {
    setClientItems((oldClientItems) => {
      let newClientItems = structuredClone(oldClientItems);
      newClientItems = newClientItems.filter(item => item.id !== id);
      return newClientItems;
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-Header-h1">Client Scheduler</h1>
        <Header />
      </header>
      <main>
        <TaskForm addClientItem={addClientItem} />
        <SearchForm addTask={addClientItem} />
        <TaskList
          clientItems={clientitems}
          deleteClientItem={deleteClientItem}
        />
      </main>
      <footer>
        <FooterForm />
      </footer>
    </div>
  );
}
