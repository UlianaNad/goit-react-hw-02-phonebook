import React from 'react';
import { StyledButtonSubmit, StyledForm, StyledInput } from './AddContact.styled';

export class AddContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeInput = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.addContact(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <StyledForm onSubmit={this.handleSubmit}>
          <StyledInput
            value={name}
            onChange={this.handleChangeInput}
            type="text"
            name="name"
            required
            placeholder="New name"
          />
          <StyledInput
            value={number}
            onChange={this.handleChangeInput}
            type="tel"
            name="number"
            required
            placeholder="Phone number"
          />

          <StyledButtonSubmit>Add new contact</StyledButtonSubmit>
        </StyledForm>
      </div>
    );
  }
}
