import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
const ReadOnlyRow = ({ contact, handleDeleteClick}) => {
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.manufacturer}</td>
      <td>{contact.model}</td>
      <td>{contact.fuel}</td>
      <td>{contact.color}</td>
      <td>{contact.price}</td>
      <td>{contact.currency}</td>
      <td>{contact.city}</td>
      <td>{contact.country}</td>
      <td>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
        <DeleteIcon/>
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
