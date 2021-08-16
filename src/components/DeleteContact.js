import React from "react";
import { Link } from "react-router-dom";



const DeleteContact = (props) => {

    const { name, email, id } = props.location.state.contact;
    return (
        <div>

            <h1> Are you really want to delete this contact? </h1>
            <div className="item">
                <div className="content">
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </div>

                <button className="ui button blue"
                    onClick={
                        () => {
                            props.removecontacthandler(id);
                            props.history.push("/");
                        }
                    }>YES</button>
                <Link to="/"  >
                    <button className="ui button blue" >NO</button>
                </Link>


            </div >
        </div>
    );
};

export default DeleteContact;