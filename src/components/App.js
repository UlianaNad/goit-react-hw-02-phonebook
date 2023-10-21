import React from 'react';

import ContactList from './ContactList';
import { AddContact } from './AddContact';

class App extends React.Component {
  state = {
    contacts: [
      {id:"1", userName:"Suvi", phoneNumber:"040 44 00 440"},
      {id:"2", userName:"Tulli", phoneNumber:"040 55 00 550"},
    ],
    name: '',
  }
  handleAddNewContact = () => {

  }

  render() {
    const { contacts } = this.state;
    return <div>
            <AddContact />
            <ContactList contacts={contacts}/>
          </div>;
  }
}

export default App;
