import React from 'react';
import { Link } from 'react-router-dom';
import Button, { FontSizesButton } from '../../atoms/Button/Button';
import { ContactAsideWrapper } from './ContactAside.styles';

const ContactAside: React.FC = () => {
  return (
    <ContactAsideWrapper>
      <h3>Kontakt</h3>
      <p>Nie wahaj się i napisz do mnie!</p>
      <Link to="/contact">
        <Button>Napisz</Button>
      </Link>
    </ContactAsideWrapper>
  );
};

export default ContactAside;
