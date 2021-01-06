import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/index';

import Home from './pages/Home';
import Login from './pages/Login';

export default function Routes () {
  return (
    <Router>
      <Header />
      
      <section className="container">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </section>
    </Router>
  );
}