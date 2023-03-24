import React, { useState } from "react";
import "../SearchFrom/Searchstyles.css";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { getData, getDataid } from "../../api";

export default function SearchForm() {
  const [name, setName] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value.toLowerCase());
  };
  const handleSubmit = event => {
      event.preventDefault();
      if (typeof name === 'string' && name.length > 0) {
      getDataid();
  } else {
    getData();
  }
};
    
  return (
    <div>
      <section className="Input-Section">
        <Form action="#" method="GET" onSubmit={handleSubmit}>
          <h1 className="search-header">Client Search</h1>
          <p>Search by CLIENT NAME to see certain appointments, or leave search EMPTY to see all appointments.</p>
          <FormGroup>
            <Input
              id="Search-Input"
              name="Client-Name"
              placeholder="Client Name"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </FormGroup>
          <Button type="Submit" className="search-button">
            Search
          </Button>
        </Form>
      </section>
    </div>
  );
}
