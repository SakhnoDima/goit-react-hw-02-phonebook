import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  idNameForm = nanoid();
  idTelForm = nanoid();

  //? === сабміт форми ===

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  //? === зміна інпут ===
  handleChangeTel = evt => {
    this.setState({ number: evt.target.value });
  };
  handleChangeName = evt => {
    this.setState({ name: evt.target.value });
  };
  //? === reset ===
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  //? === рендер ===

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} style={{ display: 'flex' }}>
        <label htmlFor={this.idNameForm}>
          Name
          <input
            value={name}
            onChange={this.handleChangeName}
            type="text"
            name="name"
            id={this.idNameForm}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={this.idTelForm}>
          Number
          <input
            value={number}
            onChange={this.handleChangeTel}
            id={this.idTelForm}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit" title={'Add contact'}>
          Add contact
        </button>
      </form>
    );
  }
}
export default Form;
