import React from 'react';
import PropTypes from 'prop-types';

const Contacts = ({ contacts, onDeleteContacts }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ name, number, id }) => {
          return (
            <li key={id}>
              {name} : {number}
              <button onClick={() => onDeleteContacts(id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContacts: PropTypes.func.isRequired,
};
