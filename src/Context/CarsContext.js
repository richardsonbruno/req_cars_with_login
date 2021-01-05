import { useState, useEffect, createContext } from 'react';
import service from './service';

export const Cars = createContext();

export default function CarsContext({ children }) {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  const getApiCars = async () => {
    setLoading(true);
    const json = await service.getCars();
    setCars(json)
    setLoading(false);
  }

  useEffect(() => {
    getApiCars();
  }, []);

  return (
    <Cars.Provider value={{ cars, loading }}>
      {children}
    </Cars.Provider>
  );
}
