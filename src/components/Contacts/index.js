import {useState,useEffect} from 'react'
import './style.css';
import Form from './Form'
import List from './List'


function Contacts() {
  const [contacts,setContacts]=useState([
    {
      fullname:'serkan',
      phone_number:'123'
    },
    {
      fullname:'serhat',
      phone_number:'456'
    },
    {
      fullname:'bedriye',
      phone_number:'789'
    }

  ]);
  useEffect(()=>{
    console.log(contacts);

  },[contacts])

  return (
    <div id="container">
      <h1>CONTACTS</h1>
      <Form addContacts={setContacts} contacts={contacts}/>
      <List contacts={contacts}/>
    </div>
  )
}

export default Contacts