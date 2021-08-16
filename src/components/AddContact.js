import React, { useState } from "react";


const AddContact = (props) => {


    const [userInput, setUserInput] = useState({ name: "", email: "", id: "" });

    const handleForm = (e) => {
        e.preventDefault();
        props.addContactHandler(userInput)
        setUserInput({ name: "", email: "", id: "" });
        props.history.push("/");
    };
    return (



        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={handleForm}>
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

                    ADD

                </button>

            </form>
        </div >

    );
}

export default AddContact;