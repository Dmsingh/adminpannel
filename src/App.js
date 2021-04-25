import React, { Component } from 'react';
import Dashboard from './components/DashBoard/Dashboard';
import Login from './components/Login page/Login';
import { HashRouter, Route, Switch } from 'react-router-dom';

import './scss/style.scss';
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)



class App extends Component {

  render() {
    return (
   <div>
     <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/" name="Login Page" component={Login} />
           
              <Route exact path="/dashboard" name="dashboard"  component={Dashboard} />
              
           </Switch>
          </React.Suspense>
      </HashRouter>
   </div>
    );
  }
}

export default App;
