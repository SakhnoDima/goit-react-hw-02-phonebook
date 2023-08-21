import React from 'react';
import PropTypes from 'prop-types';
import { Button, Item, List } from './Contacts.styles';

const Contacts = ({ contacts, onDeleteContacts }) => {
  return (
    <div>
      <List>
        {contacts.map(({ name, number, id }) => {
          return (
            <Item key={id}>
              {name} : {number}
              <Button onClick={() => onDeleteContacts(id)}>Delete</Button>
            </Item>
          );
        })}
      </List>
    </div>
  );
};

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContacts: PropTypes.func.isRequired,
};
