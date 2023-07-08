import React, { useContext } from 'react';

import { Context } from '../Context/Provider.jsx'

import { contactListActions } from '../Context/actions/ContactListActions.js'

export default function ContactListPage() {

    const { state, dispatch } = useContext(Context);

    return (
        <div>
            <h1>Contact List Page</h1>

            <button onClick={() => dispatch(contactListActions.ADD_CONTACT({ name: 'added something else' }))}>Add test contact</button>
            {/*<button onClick={() => dispatch(contactListActions.ADD_CONTACT({ name: 'added something else' }))}>Add test contact</button>*/}

            {state.contacts.map((contact) => (
                <div>
                    <p>{contact.name}</p>

                </div>
            ))}

        </div>
    )
}