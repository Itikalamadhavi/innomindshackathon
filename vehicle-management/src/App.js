import React, { useState ,useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import { DataGrid } from '@mui/x-data-grid';
//import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
//import EditableRow from "./components/EditableRow";
import Buttons from "./components/Button/Button.js";
import Header from "./components/Header/Header.js";
import Stack from '@mui/material/Stack';
      

const App = () => {
  const [contacts, setContacts] = useState();
  // const [data, setData] = useState();
  // const [vehicle, setvehicle]= useState(setdata);
  const [addFormData, setAddFormData] = useState({
    name: "",
    manufacturer: "",
    model: "",
    fuel: "",
    color:"",
    price:"",
    currency:"",
    city:"",
    country:"",
  });
  // async function fetchData() {
  //   const res = await fetch("https://63037d409eb72a839d824580.mockapi.io/Vehicle");
  //   res
  //     .json()
  //     .then(res => setContacts(res))
  //     .catch(err => setErrors(err));
  // }
  
const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("https://63037d409eb72a839d824580.mockapi.io/Vehicle")
      .then((response) => response.json())
      .then((json) => setInfo(json));
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: addFormData.name,
      manufacturer: addFormData.manufacturer,
      model: addFormData.model,
      fuel: addFormData.fuel,
      color:addFormData.color,
      price:addFormData.price,
      currency:addFormData.currency,
      city:addFormData.city,
      country:addFormData.country,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === contactId);
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  return (

    <div className="app-container">
       <Stack direction="row" spacing={5}>
      <Header/>
      <Buttons/>
      </Stack>
      <form>
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>MANUFACTURER</th>
              <th>MODEL</th>
              <th>FUEL</th>
              <th>COLOR</th>
              <th>PRICE</th>
              <th>CURRENCY</th>
              <th>CITY</th>
              <th>COUNTRY</th>
            </tr>
          </thead>
          <tbody>

            {contacts.map((contact) => (
                  <ReadOnlyRow
                    contact={contact}
                    handleDeleteClick={handleDeleteClick}
                  />
            ))}
          </tbody>
        </table>
      </form>
      <h2>Add a Contact</h2>
      <DataGrid
        rows={info}
       
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
     
      <form onSubmit={handleAddFormSubmit}>
        
          <input
          type="text"
          name="name"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
          />
        
        <input
          type="text"
          name="manufacturer"
          required="required"
          placeholder="Enter manufacturer..."
          onChange={handleAddFormChange}
          />
         
        <input
          type="text"
          name="model"
          required="required"
          placeholder="Enter a model..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="fuel"
          required="required"
          placeholder="Enter fuel..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="color"
          required="required"
          placeholder="Enter a color..."
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          name="price"
          required="required"
          placeholder="Enter an price..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="currency"
          required="required"
          placeholder="Enter a currency..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="city"
          required="required"
          placeholder="Enter a city..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="country"
          required="required"
          placeholder="Enter an country..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
   
  );
};
export default App;
