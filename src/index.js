import React from 'react';
import ReactDOM from 'react-dom';

import Global from './globalStyles';
import Routes from './routes';
import CarsContext from './Context/CarsContext';


ReactDOM.render(
  <React.StrictMode>
    <>
      <CarsContext>
        <Global />
        <Routes />
      </CarsContext>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

