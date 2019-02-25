import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import Login from './client/Login.jsx';
import CustomerInformation from './client/customerInformation.jsx';
import DisplayMessage from './client/DisplayMessage.jsx';
ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path='/' component={Login} />
      <Route exact path='/customerInformation' component={CustomerInformation} />
      <Route exact path='/displayMessage' component={DisplayMessage} />
    </div>
  </HashRouter>,
  document.getElementById('app'));
