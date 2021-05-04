import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import { hydrate, render } from 'react-dom';

ReactDOM.hydrate(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// const rootElement: any = document.getElementById('root');
// if (rootElement.hasChildNodes()) {
//   hydrate(<App />, rootElement);
// } else {
//   render(<App />, rootElement);
// }
