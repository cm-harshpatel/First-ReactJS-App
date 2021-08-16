import React from "react";
import ContactCard from "./ContactCard"
import { Link } from "react-router-dom";

const ContactList = (props) => {

    const deleteClickHandler = (id) => {
        props.getContactId(id);
    };

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={deleteClickHandler} key={contact.id} />
        );
    })
    return (
        <div style={{ marginTop: "15px" }}>
            <div style={{ width: "inherit", display: "flex", justifyContent: "spacebetween" }}>
                <h2   > Contact List
                </h2>
                <div style={{ width: "60vw" }}>

                    <Link to="/add"  >
                        <button style={{ position: "absolute", right: "0" }} className="ui button blue" >Add Contact</button>
                    </Link>
                </div>

            </div>

            <div className="ui celled list">
                {
                    renderContactList
                /* {props.contacts.map((contact) => {
                    return (
                        <ContactCard contact={contact} clickHandler={deleteClickHandler} />
                        );
                    })} */}
            </div>
        </div>

    );
}

export default ContactList;