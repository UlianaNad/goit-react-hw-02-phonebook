import React from 'react';

import ContactList from './ContactList';
import { AddContact } from './AddContact';
import { nanoid } from 'nanoid';

class App extends React.Component {
  state = {
    contacts: [
      {id:"1", name:"Suvi", phone:"040 44 00 440"},
      {id:"2", name:"Tulli", phone:"040 55 00 550"},
    ],
    name: '',
  }
  handleAddNewContact = newData => {
    const newContact = {id:nanoid(), ...newData}
    this.setState(prevState => ({contacts: [...prevState.contacts, newContact]}))
  }

  render() {
    const { contacts } = this.state;
    return <div>
            <AddContact addContact ={this.handleAddNewContact}/>
            <ContactList contacts={contacts}/>
          </div>;
  }
}

export default App;
