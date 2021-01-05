import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/index';

import Home from './pages/Home';

export default function Routes () {
  return (
    <Router>
      <Header />
      
      <section className="container">
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </section>
    </Router>
  );
}