import React from "react";

export default function ListItems(props) {
    function handleDelete() {
        props.deleteClientItem(props.item.id);
    }

    return (
        <tr>
            <td>{props.item.date} / {props.item.time}</td>
            <td>{props.item.name}</td>
            <td>{props.item.contact}</td>
            <td>{props.item.technician}</td>
            <td>{props.item.service} {props.item.comments}</td>
            <td><button className="delete-btn" onClick={handleDelete}>Delete</button></td>
        </tr>
    );
}