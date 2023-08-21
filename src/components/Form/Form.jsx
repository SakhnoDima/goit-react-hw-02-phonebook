import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { Forms, Label, Input, Button } from './Form.styles';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  idNameForm = nanoid();
  idTelForm = nanoid();

  // === сабміт форми ===

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  // === зміна інпут ===
  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  // === reset ===
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  // === рендер ===

  render() {
    const { name, number } = this.state;

    return (
      <Forms onSubmit={this.handleSubmit}>
        <Label htmlFor={this.idNameForm}>
          Name
          <Input
            value={name}
            onChange={this.handleChange}
            type="text"
            name="name"
            id={this.idNameForm}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor={this.idTelForm}>
          Number
          <Input
            value={number}
            onChange={this.handleChange}
            id={this.idTelForm}
            type="tel"
            name="number"
            pattern="+?d{1,4}?[ .-s]?(?d{1,3}?)?[ .-s]?d{1,4}[ .-s]?d{1,4}[ .-s]?d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <Button type="submit" title={'Add contact'}>
          Add contact
        </Button>
      </Forms>
    );
  }
}
export default Form;
