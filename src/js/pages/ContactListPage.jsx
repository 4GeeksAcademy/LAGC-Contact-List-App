import React, { useContext } from 'react';
import { Context } from '../Context/Provider.jsx'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import { contactListActions } from '../Context/actions/ContactListActions.js'
import AddContact from './AddContact.jsx';

import { AiFillPhone, AiFillMail, AiFillCaretRight, AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { FaLocationArrow } from 'react-icons/fa';
import { useContactList } from '../useContactList.js';

export default function ContactListPage() {


    //const { state, dispatch } = useContext(Context);
    const state = useContactList();
    const navigate = useNavigate();
    return (
        <div>
            <h1>Contact List Page</h1>
            {/*<Link to="/addcontact">
                 <button className='addbotom btn btn-success' onClick={() => dispatch(contactListActions.ADD_CONTACT({ name: 'added something else' }))}>Add test contact</button> 
                <button className='addbotom btn btn-success' >Add test contact</button>
            </Link>*/}

            <button className="addbotom btn btn-success" onClick={() => {
                navigate("/addContact");
            }}>Add test contact</button>

            {state.contacts.map((contact) => (
                <div key={state} id="contact" className="contact">

                    <div className='imageinfo'>
                        <div className='imagen'>
                            <img src='https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                        </div>

                        <div className='info'>
                            <p><AiFillCaretRight />   {contact.name}</p>
                            <p><FaLocationArrow />   {contact.address}</p>
                            <p><AiFillMail />   {contact.email}</p>
                            <p><AiFillPhone />   {contact.phone}</p>
                        </div>
                    </div>
                    <div className='righthicon'>
                        <AiFillEdit onClick={() => {
                            //state.EditContact(props);
                            navigate("/EditContact");
                        }} />
                        <AiFillDelete />
                    </div>


                </div>
            ))}

        </div>
    )
}