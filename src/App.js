import React, { useContext } from 'react';

import { LoginContext } from './components/auth/context.js';
import { If, Else, Then } from 'react-if';
import ToDo from './components/todo/todo.js';


import Login from './components/auth/login.js';
import SignUp from './components/auth/signUp.js';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



function App() {
  const loginContext = useContext(LoginContext);
  return (
    <>      <Navbar bg="primary" variant="light">
	<Nav.Link style={{ color: 'white' }} href="#home">
	  <strong className="white-text">Home</strong>

	</Nav.Link>
	<Login />
			<SignUp />
  </Navbar>
   

			<If condition={loginContext.loggedIn}>
				<Then>
						<ToDo />
				</Then>
				<Else>
					<div></div>
				</Else>
			</If>
			;
    </>
  );
}

export default App;
// export default class App extends React.Component {
//   render() {
    // return (
    //   <>
    //     <ToDo />
    //   </>
    // );
//   }
// }