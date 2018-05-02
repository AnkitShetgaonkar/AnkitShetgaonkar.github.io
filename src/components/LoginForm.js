import React, { Component } from 'react';
import logo from '../logo.svg';

export default class LoginForm extends React.Component {
    render() {
        return (<div>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Enter your name to login</h1>
            <form onSubmit={this.props.onSubmitValue}>
                <label>
                    <input type="text" value={this.props.inputValue} onChange={this.props.onHandleValue} />
                </label>
                <input type="submit" value="Submit" id="button"/>
            </form>
        </div>);
    }

}