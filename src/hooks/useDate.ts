import { useEffect, useState } from 'react';

type dateInPolishType = {
  day: number | string;
  month: string;
  year: number;
};

const months = ['St', 'lut', 'mrz', 'kw', 'maj', 'cz', 'lip', 'sier', 'wrz', 'paź', 'lis', 'gr'];

export const useDate = (date: Date) => {
  const [dateInPolish, setDateInPolish] = useState<dateInPolishType>({ day: 0, month: '', year: 0 });

  useEffect(() => {
    setDateInPolish({ day: date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(), month: months[date.getMonth()], year: date.getFullYear() });
  }, []);

  return { dateInPolish };
};
