import React from "react";
import { Link } from "react-router-dom"


const ContactDetails = (props) => {


    const { name, email } = props.location.state.contact
    return (
        <div className="content">

            <div className="header">{name}</div>
            <div>{email}</div>
            <Link to="/">
                <button className="ui button blue center">GO BACK</button>
            </Link>


        </div>
    );
};

export default ContactDetails;