import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <label>
        <input type="text" value={value} onChange={onChange} />
      </label>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired),
  onChange: PropTypes.func.isRequired,
};
