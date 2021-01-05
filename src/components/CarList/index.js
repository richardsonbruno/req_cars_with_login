import { ListCard, Container } from './styles';
import { useContext } from 'react'
import { Cars } from '../../Context/CarsContext';

function CarList() {
  const { cars, loading } = useContext(Cars);

  if (loading) {
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <ListCard>
      {cars.cars.map((car, index) => {

        return (
          <Container key={index}>
            <img src={car.photo} alt={car.brand} />
            <div>
              <h1>{car.brand} {car.name}</h1>
              <h3>
                {car.price.toLocaleString('pt-br', { 
                  style: 'currency',
                  currency: 'BRL'
                })}
              </h3>
              <h4>
                Ano: {car.year}
              </h4>
            </div>
          </Container>  
        )
      })}
    </ListCard>
  );
}

export default CarList;