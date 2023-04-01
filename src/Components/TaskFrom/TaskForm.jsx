import React, { useState } from "react";
import '../TaskFrom/formstyles.css';
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default function TaskForm(props) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [service, setService] = useState("");
  const [technician, setTechnician] = useState("");
  const [comments, setComments] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value.toLowerCase());
  };
  const handleContactChange = (event) => {
    setContact(event.target.value);
  };
  const handleServiceChange = (event) => {
    setService(event.target.value);
  };
  const handleTechnicianChange = (event) => {
    setTechnician(event.target.value);
  };
  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };
  function handleSubmit(event){
    event.preventDefault();
    let trimmedName = name.trim();
    let trimmedContact = contact.trim();
    let trimmedService = service.trim();
    let trimmedTechnician = technician.trim();
    let trimmedDate = date.trim();
    let trimmedTime = time.trim();
    if (trimmedName.length > 0 && trimmedContact.length > 0 && trimmedService.length > 0 && trimmedTechnician.length > 0
      && trimmedDate.length > 0 && trimmedTime.length > 0) {
      props.addClientItem(date, time, name, contact, technician, service, comments);
      setName("");
      setContact("");
      setService("");
      setTechnician("");
      setComments("");
      setDate("");
      setTime("");
    }
  }


  return (
    <div>
      <section className="Input-Section">
        <Form
          action="#"
          method="POST"
          className="Input-Section2"
          onSubmit={handleSubmit}
        >
          <h1 className="Client-Info">Client Information</h1>
          <FormGroup>
            <Label for="Client-Input">Client Name</Label>
            <Input
              id="Client-Input"
              name="Client-Name"
              placeholder="Client Name"
              type="text"
              value={name}
              onChange={handleNameChange}
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
              value={contact}
              onChange={handleContactChange}
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
              value={service}
              onChange={handleServiceChange}
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
              value={technician}
              onChange={handleTechnicianChange}
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
              maxLength="30"
              value={comments}
              onChange={handleCommentsChange}
              required
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
              value={date}
              onChange={handleDateChange}
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
              value={time}
              onChange={handleTimeChange}
              required
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </section>
    </div>
  );
}
