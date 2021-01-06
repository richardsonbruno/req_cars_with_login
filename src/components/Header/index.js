import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Cars } from '../../Context/CarsContext';
import { Auth } from '../../Context/AuthContext';
import { Container, Menu } from './styles'

function Header() {
  const { setYear } = useContext(Cars);
  const { user, signOut } = useContext(Auth);

  return (
    <Container>
      <div className='container'>
        <div>
          <Link to='/'>400</Link>
        </div>

        <select onChange={e => setYear(e.target.value)}>
          <option value="">Selecione um Ano</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
        </select>

        <Menu>
          {user === null ? (
            <>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Cadastrar</Link>
            </>
          ) : (
            <>
              <Link to='/add'>Adicionar Carro</Link>
              <Link onClick={signOut}>sair</Link>
            </>
          )}
        </Menu>
      </div>
    </Container>
  );
}

export default Header;