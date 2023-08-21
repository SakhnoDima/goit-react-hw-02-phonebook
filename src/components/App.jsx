import { Component } from 'react';
import { nanoid } from 'nanoid';

import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';
import { MainPage } from './styles/App.styles';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  // === сабміт форми ===

  formSubmitData = ({ name, number }) => {
    const { contacts } = this.state;
    // ===  перевірка на вже існуюче ім'я ===

    const includeName = contacts.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );
    if (includeName) {
      alert(`${name} Is already in contacts`);
      return;
    }
    // === додавання до списку крнтакту ===

    const updateContacts = { id: nanoid(2), name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, updateContacts],
    }));
  };

  // === ім'я в полі фільтру ===

  onFilterChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  // === фільтруємо по імені ===

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizeFilter);
    });
  };

  // === видаляю контакт ===

  deleteContact = idCard => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== idCard),
    }));
  };
  render() {
    const { contacts } = this.state;
    const { filter } = this.state;
    const filteredContacts = this.filterContacts();
    return (
      <MainPage>
        <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
        <Form onSubmit={this.formSubmitData} />
        {contacts.length > 0 && (
          <>
            <h2 style={{ textAlign: 'center' }}>Contacts</h2>
            <Filter value={filter} onChange={this.onFilterChange} />
            <Contacts
              contacts={filteredContacts}
              onDeleteContacts={this.deleteContact}
            />
          </>
        )}
      </MainPage>
    );
  }
}
