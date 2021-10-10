import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li>
      {name}: {number}
      <button type="submit" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.prototype = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
