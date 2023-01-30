import React from 'react'
import {Form, FormGroup, Input, Label, Button} from "reactstrap";

export default function FormTask() {
  return (
    <div>
       <form action="#" className="busninput">
        <FormGroup floating>
          <Input
            id="exampleBusniessname"
            name="Busniessname"
            placeholder="Busniessname"
            type="text"
            required
          />
          <Label for="exampleBusniessname">Enter Busniess Name</Label>
        </FormGroup>
        <Button>Submit</Button>
      </form>
    </div>
  )
}
