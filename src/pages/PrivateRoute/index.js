import { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Auth } from '../../Context/AuthContext';

function PrivateRoute({children, ...rest}) {
  const { user } = useContext(Auth);
  return (
    <Route {...rest} render={() => user !== null ? 
      ( children ) : 
      (<Redirect to='/login' />)} />
  );
}

export default PrivateRoute;