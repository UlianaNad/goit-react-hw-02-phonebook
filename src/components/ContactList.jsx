import React from 'react'
import ContactItem from './ContactItem'

function ContactList({contacts}) {
  return (
    <ul>
        {contacts.map(contact => <ContactItem  {...contact} key={contact.id}/>)}
    </ul>
  )
}


export default ContactList
