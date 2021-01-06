import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/index';
import PrivateRoute from './pages/PrivateRoute';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NewCar from './pages/NewCar';

export default function Routes () {
  return (
    <Router>
      <Header />
      
      <section className="container">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <PrivateRoute exact path='/add'>
            <NewCar />
          </PrivateRoute>
        </Switch>
      </section>
    </Router>
  );
}