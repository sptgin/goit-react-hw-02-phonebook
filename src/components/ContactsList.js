import ContactListItem from './ContactListItem';
import PropTypes from 'prop-types';

const ContactsList = ({ findContact, onDeleteContact }) => {
  return (
    <ul>
      {findContact().map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </ul>
  );
};

ContactsList.prototype = {
  findContact: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
