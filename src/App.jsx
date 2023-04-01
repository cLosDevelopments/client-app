import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import TaskForm from "./Components/TaskFrom/TaskForm";
import TaskList from "./Components/TaskList/TaskList";
import FooterForm from "./Components/FooterForm/FooterForm";

export default function App() {
  const [clientitems, setClientItems] = useState([]);
  const ClientData = () => {
    axios
      .get("https://client-scheduler.azurewebsites.net/api/schedules")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setClientItems(response.data);
        } else {
          setClientItems([]);
        }
      })
      .catch((error) => {
        setClientItems([]);
      });
  };

  useEffect(ClientData, []);

  function addClientItem(
    date,
    time,
    name,
    contact,
    technician,
    service,
    comments
  ) {
    axios
      .post("https://client-scheduler.azurewebsites.net/api/schedules/new", {
        name,
        contact,
        service,
        technician,
        comments,
        date,
        time,
      })
      .then(ClientData);
  }

  function deleteClientItem(id) {
    axios
      .delete("https://client-scheduler.azurewebsites.net/api/schedules/" + id)
      .then(ClientData);
  }

  function updateClientItem() {
    ClientData();
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-Header-h1">Client Scheduler</h1>
        <Header />
      </header>
      <main>
        <TaskForm addClientItem={addClientItem} />
        <TaskList
          clientItems={clientitems}
          deleteClientItem={deleteClientItem}
          updateClientItem={updateClientItem}
        />
      </main>
      <footer>
        <FooterForm />
      </footer>
    </div>
  );
}
