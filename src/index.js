import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.js';
import LoginProvider from './components/auth/context.js';


function Main(params) {

  return (
    <LoginProvider>
    <App />
    </LoginProvider>

  );
  
}

// class Main extends React.Component {
//   render() {
//     return <App />;
//   }
// }

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);