import React from 'react';
import ReactDOM from 'react-dom';

import Global from './globalStyles';
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <>
      <Global />
      <Routes />
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

