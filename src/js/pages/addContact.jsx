import react from "react";

export default function addContact() {

    return (
        <div>
            <h1>Add a new Contact</h1>
        <label>Full Name</label>
        <input type="text" name="name"/>
        <label>Email</label>
        <input type="text" name="email"/>
        <label>Phone</label>
        <input type="text" name="Phone"/>
        <label>Address</label>
        <input type="text" name="address"/>
        </div>


    )
}