import React from 'react';
import PropTypes from 'prop-types';
import { RiContactsBook2Fill, RiDeleteBin5Line } from 'react-icons/ri';
import { Button, Item, List } from './Contacts.styles';

const Contacts = ({ contacts, onDeleteContacts }) => {
  return (
    <div>
      <List>
        {contacts.map(({ name, number, id }) => {
          return (
            <Item key={id}>
              <RiContactsBook2Fill />
              {name} : {number}
              <Button onClick={() => onDeleteContacts(id)}>
                <RiDeleteBin5Line />
              </Button>
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
