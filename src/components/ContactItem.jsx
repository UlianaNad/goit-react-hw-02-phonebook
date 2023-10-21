import React from 'react';
import PropTypes from 'prop-types';

function ContactItem({ id,userName, phoneNumber }) {
  return (

    <div>
        <span>{id}</span>
      <span>{userName}</span>
      <span>{phoneNumber}</span>
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
