import React from "react";
import "../TaskList/liststyles.css";
import { Table } from "reactstrap";
import ListItems from "./ListItems/ListItems";
import "./ListItems/ListItems";

export default function TaskList(props) {
  let tableRowsJsx = [];
  for (let item of props.clientItems) {
    tableRowsJsx.push(
      <ListItems
        key={item.id}
        item={item}
        deleteClientItem={props.deleteClientItem}
        updateClientItem={props.updateClientItem}
      />
    );
  }
  return (
    <div>
      <section className="Task-List">
        <section>
          <h1 className="Task-List-Header">Appointment List</h1>
        </section>
        <section className="Outputform">
          <Table>
            <thead>
              <tr>
                <th>Date / Time</th>
                <th>Client Name</th>
                <th>Contact</th>
                <th>Technician</th>
                <th>Service / Notes</th>
              </tr>
            </thead>
            <tbody>{tableRowsJsx}</tbody>
          </Table>
        </section>
      </section>
    </div>
  );
}
