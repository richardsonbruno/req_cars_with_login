import { useState, useEffect, createContext } from 'react';
import service from './service';

export const Cars = createContext();

export default function CarsContext({ children }) {
  const [cars, setCars] = useState([]);
  const [year, setYear] = useState('');
  const [loading, setLoading] = useState(true);

  const getApiCars = async (year) => {
    setLoading(true);
    const json = await service.getCars(year);
    setCars(json)
    setLoading(false);
  }

  useEffect(() => {
    getApiCars(year);
  }, [year]);

  return (
    <Cars.Provider value={{ cars, loading, setYear }}>
      {children}
    </Cars.Provider>
  );
}
