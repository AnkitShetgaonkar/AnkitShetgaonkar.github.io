import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome'
import LoginForm from './components/LoginForm'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };
    this.state = { isLoggedin: false };
    this.state = { loginName: '' };
    //bind the handles to a handle function
    this.handleSubmitValue = this.handleSubmitValue.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {

    const sessionMessage = sessionStorage.getItem('message');
    const sessionIsLoggedIn = sessionStorage.getItem('loggedin');
    const loginName = sessionStorage.getItem('loginName');
    if(sessionIsLoggedIn){
      this.setState({message:sessionMessage});
      this.setState({isLoggedin:sessionIsLoggedIn});
      this.setState({loginName:loginName});
    }
    fetch('/api/message')
      .then(response => response.json())
      .then(json => this.setState({ message: json }));
  }


  handleSubmitValue(event) {
    event.preventDefault();
    if (!this.state.loginName) {
      alert('Please tell me who you are!');
      return;
    }
    //mark as logged in
    sessionStorage.setItem('loggedin', true );
    sessionStorage.setItem('message', this.state.message );
    sessionStorage.setItem('loginName', this.state.loginName );
    this.setState({isLoggedin:true});
  }

  handleChange(event) {
    this.setState({ loginName: event.target.value });
  }

  render() {
    //home
    if (this.state.isLoggedin) {
      return (
        <div className="App">
          <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>{this.state.message}</h2>
            <Welcome name={this.state.loginName} />
          </div>
          <p className="App-intro">
            You are now logged in!
          </p>
        </div>
      );
    } else {
      //login
      return (
        <div className="App-login">
          <LoginForm inputValue={this.state.loginName}
            onSubmitValue={this.handleSubmitValue}
            onHandleValue={this.handleChange}
          />
        </div>
      );
    }
  }

}

export default App;
