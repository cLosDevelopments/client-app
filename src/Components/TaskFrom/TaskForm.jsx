import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

export default function TaskForm() {
  return (
    <div>
      <Form action="#" className="Input-Section">
        <h1 className="Client-Info">Client Information</h1>
        <FormGroup>
          <Label for="Client-Input">Client Name</Label>
          <Input
            id="Client-Input"
            name="Client-Name"
            placeholder="Client Name"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="Contact-Input">Contact</Label>
          <Input
            id="Contact-Input"
            name="Contact"
            placeholder="Form of Contacts"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="Service-rendered-Input">Service</Label>
          <Input
            id="Service-rendered-Input"
            name="Service"
            placeholder="Service / Job Rendered"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="Technician-Input">Technician</Label>
          <Input
            id="Technician-Input"
            name="Technician"
            placeholder="Technician Providing Service"
            type="text"
          />
        </FormGroup>
        <h1 className="Client-Info">Appointment Time</h1>
        <FormGroup>
          <Label for="exampleDate">Date</Label>
          <Input
            id="exampleDate"
            name="date"
            placeholder="date placeholder"
            type="date"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleTime">Time</Label>
          <Input
            id="exampleTime"
            name="time"
            placeholder="time placeholder"
            type="time"
          />
        </FormGroup>
      </Form>
    </div>
  );
}
