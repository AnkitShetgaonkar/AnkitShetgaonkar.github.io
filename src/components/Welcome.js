import React, { Component } from 'react';

export default class Welcome extends React.Component {
    render() {
      return <h1>Welcome, {this.props.name}</h1>;
    }
}