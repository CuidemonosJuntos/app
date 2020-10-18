import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import * as actions from '../actions';
//import Header from './Header/Header';
import Landing from './Landing/Landing';
import Dashboard from './Dashboard/Dashboard';


const ServiceNew = () => <h2>ServiceNew</h2>

class App extends Component {
  componentDidMount() {
      this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            {/* <Header /> */}
            <Route path="/" exact component={Landing}/>
            <Route path="/dashboard" exact component={Dashboard}/>
            <Route path="/dashboard/new" component={ServiceNew}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
