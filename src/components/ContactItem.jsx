import React from 'react';
import PropTypes from 'prop-types';

function ContactItem({ name, phone }) {
  return (

    <div>
      <span>{name}</span>
      <span>{phone}</span>
      <button>Delete</button>
    </div>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string,
  userName: PropTypes.string,
  phoneNumber: PropTypes.string,
};

export default ContactItem;
