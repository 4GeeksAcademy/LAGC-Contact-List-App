import React, { useContext } from 'react';

import { Context } from '../Context/Provider.jsx'

import { contactListActions } from '../Context/actions/ContactListActions.js'
import addContact from './addContact.jsx';

import { AiFillPhone, AiFillMail, AiFillCaretRight,AiFillEdit,AiFillDelete } from 'react-icons/ai';
import { FaLocationArrow  } from 'react-icons/fa';

export default function ContactListPage() {


    const { state, dispatch } = useContext(Context);

    return (
        <div>
            <h1>Contact List Page</h1>

            {/* <button onClick={addContact.dispatch}>Add test contact</button> */}
            <button onClick={() => dispatch(contactListActions.ADD_CONTACT({ name: 'added something else' }))}>Add test contact</button>

            {state.contacts.map((contact) => (
                <div key={state} id="contact" className="contact">
          
                        <div className='imagen'>
                            <img src='https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                        </div>

                        <div className='info'>
                            <p><AiFillCaretRight />   {contact.name}</p>
                            <p><FaLocationArrow />   {contact.address}</p>
                            <p><AiFillMail />   {contact.email}</p>
                            <p><AiFillPhone />   {contact.phone}</p>
                        </div>
                        <div  className='righthicon'>
                            <AiFillEdit />
                            <AiFillDelete/>
                        </div>
                    

                </div>
            ))}

        </div>
    )
}