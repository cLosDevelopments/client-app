import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import TaskForm from "./Components/TaskFrom/TaskForm";
import TaskList from "./Components/TaskList/TaskList";
import FooterForm from "./Components/FooterForm/FooterForm";
import SearchForm from "./Components/SearchFrom/SearchForm";

export default function App() {
  const [clientitems, setClientItems] = useState([]);

  useEffect(() => {
    axios
      .get('https://client-scheduler.azurewebsites.net/api/schedules')
      .then((response) => {
        console.log(response);
        if (Array.isArray(response.data)) {
          setClientItems(response.data);
        } else {
          setClientItems([]);
        }
      })
  }, []);

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
        <SearchForm addClientItem={addClientItem} />
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
