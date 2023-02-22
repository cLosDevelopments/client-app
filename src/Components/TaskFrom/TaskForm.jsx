import React, {useState} from "react";
import { Form, FormGroup, Label, Input, Col, Button } from "reactstrap";

export default function TaskForm() {
  return (
    <div>
      <section className="Input-Section">
        <Form action="#" method="GET" className="Input-Section2">
          <h1 className="Client-Info">Client Information</h1>
          <FormGroup>
            <Label for="Client-Input">Client Name</Label>
            <Input
              id="Client-Input"
              name="Client-Name"
              placeholder="Client Name"
              type="text"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="Contact-Input">Contact</Label>
            <Input
              id="Contact-Input"
              name="Contact"
              placeholder="Form of Contacts"
              type="text"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="Service-rendered-Input">Service</Label>
            <Input
              id="Service-rendered-Input"
              name="Service"
              placeholder="Service / Job Rendered"
              type="text"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="Technician-Input">Technician</Label>
            <Input
              id="Technician-Input"
              name="Technician"
              placeholder="Technician Providing Service"
              type="text"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="Comments-Input">Comments</Label>
            <Input
              id="Comments-Input"
              name="Comments"
              placeholder="Comments"
              type="textarea"
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
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleTime">Time</Label>
            <Input
              id="exampleTime"
              name="time"
              placeholder="time placeholder"
              type="time"
              required
            />
          </FormGroup>
          <Col sm={10}>
            <FormGroup check>
              <Input
                name="radio2"
                type="radio"
                required
              />{" "}
              <Label check>Deposit Sent!</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                name="radio2"
                type="radio"
                required
              />{" "}
              <Label check  className="Deposit-Underline">No Deposit Sent!</Label>
            </FormGroup>
          </Col>
          <Button>
            Submit
          </Button>
        </Form>
      </section>
    </div>
  );
}
