import React, { Component } from 'react';
import NavBar from './Components/Navigation';
// import LogIn from './Component/Login/Login';
// import Dashboard from './Component/Dashboard/Dashboard';
// import LoginButton from './Component/Login/Button';
import UserForm from './Components/Login/Form';
import { Button } from '@material-ui/core';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			logStatus: false
		};
		this.loggedIn = this.loggedIn.bind(this);
	}

	loggedIn = () => {
		this.setState({
			logStatus: true
		});
		console.log(`isloggedIn running: ${this.state.logStatus}`);
	};

	render() {
		// eslint-disable-next-line
		if (this.state.logStatus == true) {
			return (
				<div>
					<NavBar loggedIn={this.loggedIn} />

					{/* <Dashboard /> */}
				</div>
			);
		} else {
			return (
				<div>
					<NavBar loggedIn={this.loggedIn} />
          <div className="mainForm">
					<UserForm />
					<UserForm />
          <Button size="large" variant="contained" color="primary" onClick = {this.loggedIn}> 
      Login
    </Button>
      </div>
		</div>
			);
		}
		
	}
}