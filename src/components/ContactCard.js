import React from "react";
import { Link } from "react-router-dom";



const ContactCard = (props) => {
    const { name, email, id } = props.contact;
    return (
        <div className="item">
            <div className="content">
                <Link to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </Link>

            </div>
            <Link to={{ pathname: "/edit", state: { contact: props.contact } }}>
                <i className="edit alternate outline icon" style={{ color: "red", marginTop: "10px", marginRight: "20px" }} ></i>
            </Link>

            <Link to={{ pathname: "/deleteconfirmation", state: { contact: props.contact } }}>
                <i className="trash alternate outline icon" style={{ color: "red", marginTop: "10px" }} ></i>
            </Link>




        </div >
    );
};

export default ContactCard;