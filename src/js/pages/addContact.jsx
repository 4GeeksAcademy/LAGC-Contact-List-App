import react from "react";
import { contactListActions } from '../Context/actions/ContactListActions.js'

// export default function addContact() {

//     return (
//         <div>
//             <h1>Add a new Contact</h1>
//         <label>Full Name</label>
//         <input type="text" name="name"/>
//         <label>Email</label>
//         <input type="text" name="email"/>
//         <label>Phone</label>
//         <input type="text" name="Phone"/>
//         <label>Address</label>
//         <input type="text" name="address"/>
//         {/*<button onClick={() => dispatch(contactListActions.ADD_CONTACT({ name: {name}}))}>Add test contact</button>*/}
//         {/*<button onClick={() => dispatch(contactListActions.ADD_CONTACT({ name: 'added something else' }))}>Add test contact</button>*/}
//         </div>


//     )
// }


import React from 'react'; 

const ListComponent = (props) => { 
  
  return ( 
    
    <div> 
    
      <h1>{props.text}</h1> 
      
    </div> 
    
  ); 
  
}; 

export {ListComponent};