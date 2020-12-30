import React from 'react';
import { Switch,Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';


function App() {
  return (
    <Switch>
      <div className="App">
     <Route path='/' exact>
     <Login />
     </Route>
      <Route path='/logout' exact>
        <Logout/>
      </Route>
    
    
    </div>
    </Switch>
  );
}

export default App;