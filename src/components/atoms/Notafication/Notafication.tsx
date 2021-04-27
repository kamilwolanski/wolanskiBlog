import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './Notafication.styles.css';

interface NotaficationI {
  isSubmitted: boolean | null;
  setIsSubmitted: Dispatch<SetStateAction<boolean | null>>;
}
const Notafication: React.FC<NotaficationI> = ({ isSubmitted, setIsSubmitted, children }) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setActive(false);
    }, 3000);
    setTimeout(() => {
      setIsSubmitted(null);
    }, 5000);
  }, [isSubmitted, setIsSubmitted]);

  useEffect(() => {
    if (isSubmitted === null) return;
    setActive(true);
  }, [isSubmitted]);

  const handleStyle = () => {
    if (isSubmitted) {
      return 'succes';
    } else if (isSubmitted === false) {
      return 'fail';
    } else {
      return '';
    }
  };

  return <div className={`notafication ${active ? 'active' : ''} ${handleStyle()}`}>{children}</div>;
};

export default Notafication;
