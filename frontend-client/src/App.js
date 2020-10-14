import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Room from './screens/Room/Room';

function App() {
  return (
   <Router>
     <Switch>
       <Route exact path='/' component={Room}/>
     </Switch>
   </Router>
  );
}

export default App;
