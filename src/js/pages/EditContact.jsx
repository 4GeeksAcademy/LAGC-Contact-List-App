import React, { useContext, useState,useEffect  } from "react";
//import { Context } from "../Context/Provider.jsx";
//import { contactListActions } from '../Context/actions/ContactListActions.js'
//import ContactListPage from "./ContactListPage.jsx";
import { useNavigate } from "react-router-dom";
import { useContactList } from "../useContactList.js";
import { useParams } from "react-router-dom";

export default function EditContact() {
    //const { state, dispatch } = useContext(Context);
    const state = useContactList();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        fetchSingleContact();
    }, [])

    const fetchSingleContact = () => {
        fetch('/EditContac.jsx' + params.id, {
            method: 'get',
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                console.log(res.ok); // will be true if the response is successfull
                console.log(res.status); // the status code = 200 or code = 400 etc.
                console.log(res); // will try return the exact result as string
                return res.json();
            })
            .then(data => {
                console.log(data);
                setName(data.name);
                setEmail(data.email);
                setPhone(data.phone);
                setAddress(data.address)
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const onSubmit = () => {
        if (name === "") {
            alert('Enter Full Name')
        } else if (email === "" || !email.includes('@')) {
            alert('Enter correct Email')
        } else if (phone === "" || phone.length !== 10) {
            alert('Enter correct Phone Number')
        } else if (address === "") {
            alert('Enter a valid Adress')
        } else {

            const contact = {
                "name": name,
                "email": email,
                "agenda_slug": store.agenda,
                "address": address,
                "phone": phone
            }
            fetch('/EditContac.jsx' + params.id, {
                method: 'put',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contact)
            })
                .then(res => {
                    console.log(res.ok); // will be true if the response is successfull
                    console.log(res.status); // the status code = 200 or code = 400 etc.
                    console.log(res); // will try return the exact result as string
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    setName('');
                    setEmail('');
                    setPhone('');
                    setAddress('');
                    alert('Changes made succesfully')
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
    return (

        <div className="containerEditContact" >

            <h1>Edit Contact</h1>
            <label>Full Name</label>
            <input id="name" value={name} onChange={(ev) => { setName(ev.target.value) }} />
            <label>Email</label>
            <input id="email" value={email} onChange={(ev) => { setEmail(ev.target.value) }} />
            <label>Phone</label>
            <input id="phone" value={phone} onChange={(ev) => { setPhone(ev.target.value) }} />
            <label>Address</label>
            <input id="address" value={address} onChange={(ev) => { setAddress(ev.target.value) }} />

            <div className="d-grid">
                <button type="submit" onClick={onSubmit} className="btn btn-primary">Update</button>
            </div>



        </div>


    )
}
