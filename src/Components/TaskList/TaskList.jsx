import React from "react";
import { Table } from "reactstrap";

export default function TaskList({ items }) {
  const itemsJsx = items.map((item) => (
    <tr key={item.id}>
      <td>
        {item.date} / {item.time}
      </td>
      <td>{item.clientname}</td>
      <td>{item.contact}</td>
      <td>{item.technician}</td>
      <td>
        {item.service} / {item.comments}
      </td>
      <td>
        <button>Delete</button>
      </td>
    </tr>
  ));
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
            <tbody>{itemsJsx}</tbody>
          </Table>
        </section>
      </section>
    </div>
  );
}
