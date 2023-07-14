import React,{useContext, useState} from "react";
import { Context } from "../Context/Provider.jsx";
import { contactListActions } from '../Context/actions/ContactListActions.js'
import ContactListPage from "./ContactListPage.jsx";
import { useNavigate } from "react-router-dom";
import { useContactList } from "../useContactList.js";


export default function AddContact() {
    //const { state, dispatch } = useContext(Context);
    const state=useContactList();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();
    
    return (
        
        <div className="containeraddcontact" >
               
            <h1>Add a new Contact</h1>
        <label>Full Name</label>
        <input value={name} onChange={(ev) => { setName(ev.target.value) }} />
        <label>Email</label>
        <input value={email} onChange={(ev) => { setEmail(ev.target.value) }} />
        <label>Phone</label>
        <input value={phone} onChange={(ev) => { setPhone(ev.target.value) }} />
        <label>Address</label>
        <input value={address} onChange={(ev) => { setAddress(ev.target.value) }} />   

        <button className="addbotom btn btn-success" onClick={() =>{
            state.addContact({name,email,phone,address });
            navigate("/");
        }}>Add test contact</button>
        
        

        </div>


    )
}


// import React from 'react'; 

// const ListComponent = (props) => { 
  
//   return ( 
    
//     <div> 
    
//       <h1>{props.text}</h1> 
      
//     </div> 
    
//   ); 
  
// }; 

// export {ListComponent};