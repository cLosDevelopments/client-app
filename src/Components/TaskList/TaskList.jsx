import React from "react";
import { Table } from "reactstrap";

export default function TaskList() {
  return (
    <div>
      <section className="Task-List">
        <section>
          <h1 className="Task-List-Header">Appointment List</h1>
        </section>
        <section>
          <Table>
            <thead>
              <tr>
                <th>Date / Time</th>
                <th>Client Name</th>
                <th>Technician</th>
                <th>Service / Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </section>
      </section>
    </div>
  );
}
