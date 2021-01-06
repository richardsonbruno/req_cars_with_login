import React from 'react';
import ReactDOM from 'react-dom';

import Global from './globalStyles';
import Routes from './routes';

import AuthContext from './Context/AuthContext';
import CarsContext from './Context/CarsContext';


ReactDOM.render(
  <React.StrictMode>
    <>
      <AuthContext>
        <CarsContext>
          <Global />
          <Routes />
        </CarsContext>
      </AuthContext>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

