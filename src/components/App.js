import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import api from "../api/contacts"
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";
import DeleteContact from "./DeleteContact";
import EditContact from "./EditContact";

const App = () => {
  // const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);


  const alldata = async () => {
    const data = await api.get("/contacts");
    return data.data;
  }









  const addContactHandler = async (contact) => {


    const request = {
      ...contact,
      id: uuid()
    };




    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data])
    // setContacts([...contacts, { ...contact, id: uuid() }])

  }



  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);

    const newContactList = contacts.filter(
      (contact) => {
        return contact.id !== id;
      }
    );

    setContacts(newContactList);
  }


  const editContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact)
    const { id, name, email } = response.data;
    setContacts(
      contacts.map((contact) => {

        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };



  useEffect(() => {
    const fetchAllData = async () => {
      const getAllData = await alldata();
      if (getAllData) setContacts(getAllData);
    }

    fetchAllData();

  }, [])

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  // const contacts = [
  //   {
  //     id: "1",
  //     name: "zzz Patel",
  //     email: "zzz@gmail.com",
  //   },
  //   {
  //     id: "2",
  //     name: "Harsh Patel",
  //     email: "harshp062@gmail.com",
  //   },
  //   {
  //     id: "1",
  //     name: "zzz Patel",
  //     email: "zzz@gmail.com",
  //   },
  //   {
  //     id: "2",
  //     name: "Harsh Patel",
  //     email: "harshp062@gmail.com",
  //   }

  // ];
  return (
    <div className="ui container">
      <div>

        <h1>this is from app js</h1>
      </div >
      <Router>
        <Header />
        <Switch>


          {/* route ma component pass krie props wala to anonymus function ma { } vaprvu nai*/}

          {/* <Route
            path="/" exact
            component={() =>
              <ContactList contacts={contacts} getContactId={removeContactHandler} />
            } />
          <Route
            path="/add"
            component={() =>
              <AddContact addContactHandler={addContactHandler} />
            } /> */}
          <Route
            path="/" exact
            render={(props) =>
              (<ContactList {...props} contacts={contacts} getContactId={removeContactHandler} />)
            } />
          <Route
            path="/add"
            render={(props) =>
              (<AddContact {...props} addContactHandler={addContactHandler} />)
            } />

          <Route
            path="/contact/:id"

            component={ContactDetails}
          />

          <Route
            path="/deleteconfirmation"

            render={(props) =>
              (<DeleteContact {...props} removecontacthandler={removeContactHandler} />)
            } />

          <Route
            path="/edit"

            render={(props) =>
              (<EditContact {...props} editcontacthandler={editContactHandler} />)
            } />



        </Switch>
        {/* <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}

      </Router>
    </div>
  );
}

export default App;
