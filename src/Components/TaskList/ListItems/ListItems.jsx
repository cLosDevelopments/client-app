import React, { useState } from "react";
import axios from "axios";
import ClientData from "../../../App";

export default function ListItems(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [itemname, setItemname] = useState(props.item.name);
  const [itemdate, setItemdate] = useState(props.item.date);
  const [itemtime, setItemtime] = useState(props.item.time);
  const [itemcontact, setItemcontact] = useState(props.item.contact);
  const [itemservice, setItemservice] = useState(props.item.service);
  const [itemtechnician, setItemtechnician] = useState(props.item.technician);
  const [itemcomments, setItemcomments] = useState(props.item.comments);

  function handleDelete() {
    props.deleteClientItem(props.item.id);
  }

  function handleUpdate(
    name,
    contact,
    service,
    technician,
    comments,
    date,
    time
  ) {
    axios.put(
      "https://client-scheduler.azurewebsites.net/api/schedules/" +
        props.item.id,
      {
        name: itemname,
        contact: itemcontact,
        service: itemservice,
        technician: itemtechnician,
        comments: itemcomments,
        date: itemdate,
        time: itemtime
      }
    )
    .then(ClientData);
  }

  const handleNameChange = (event) => {
    setItemname(event.target.value);
  };
  const handleDateChange = (event) => {
    setItemdate(event.target.value);
  };
  const handleTimeChange = (event) => {
    setItemtime(event.target.value);
  };
  const handleContactChange = (event) => {
    setItemcontact(event.target.value);
  };
  const handleServiceChange = (event) => {
    setItemservice(event.target.value);
  };
  const handleCommmentsChange = (event) => {
    setItemcomments(event.target.value);
  };
  const handleTechnicianChange = (event) => {
    setItemtechnician(event.target.value);
  };

  function toggleEditMode() {
    setIsEditing(true);
  }

  function toggleSaveMode() {
    setIsEditing(false);
    handleUpdate();
  }

  if (isEditing) {
    return (
      <tr>
        <td>
          <input
            type="date"
            name="Date"
            value={itemdate}
            onChange={handleDateChange}
          />
          <input
            type="time"
            name="Time"
            value={itemtime}
            onChange={handleTimeChange}
          />
        </td>
        <td>
          <input
            type="text"
            name="clientname"
            value={itemname}
            onChange={handleNameChange}
          />
        </td>
        <td>
          <input
            type="text"
            name="Contact"
            value={itemcontact}
            onChange={handleContactChange}
          />
        </td>
        <td>
          <input
            type="text"
            name="Technician"
            value={itemtechnician}
            onChange={handleTechnicianChange}
          />
        </td>
        <td>
          <input
            type="text"
            name="Service"
            value={itemservice}
            onChange={handleServiceChange}
          />
          <input
            type="textarea"
            name="Comments"
            value={itemcomments}
            maxLength="30"
            onChange={handleCommmentsChange}
          />
        </td>
        <td className="btn-sec">
          <button className="update-btn" onClick={toggleSaveMode}>
            Save
          </button>
          <button className="delete-btn" onClick={handleDelete}>
            Delete
          </button>
        </td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>
          {itemdate} / {itemtime}
        </td>
        <td>{itemname}</td>
        <td>{itemcontact}</td>
        <td>{itemtechnician}</td>
        <td>
          {itemservice} / {itemcomments}
        </td>
        <td className="btn-sec">
          <button className="update-btn" onClick={toggleEditMode}>
            Edit
          </button>
          <button className="delete-btn" onClick={handleDelete}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
