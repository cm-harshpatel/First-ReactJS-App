import React, { useState } from "react";


const EditContact = (props) => {

    const id = props.location.state.contact.id;
    console.log(id);
    const [userInput, setUserInput] = useState({ name: "", email: "", id: id });

    const update = (e) => {
        e.preventDefault();
        console.log(userInput)
        props.editcontacthandler(userInput);
        setUserInput({ name: "", email: "", id: id });
        props.history.push("/");
    };
    return (



        <div className="ui main">
            <h2>Edit Contact</h2>
            <form className="ui form" onSubmit={update}>
                <div>
                    <label>
                        NAME:
                    </label>
                    <input type="text" name="name" placeholder="name" value={userInput.name} onChange={
                        (e) => {
                            setUserInput({ ...userInput, name: e.target.value });



                        }
                    }></input>


                </div>
                <div>
                    <label>
                        E-mail:
                    </label>
                    <input type="email" name="email" placeholder="name@email.com" value={userInput.email} onChange={
                        (e) => {
                            setUserInput({ ...userInput, email: e.target.value });
                        }
                    }></input>


                </div>
                <button className="ui button blue">

                    EDIT

                </button>

            </form>
        </div >

    );
}

export default EditContact;