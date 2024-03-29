import Chat from './Chat.js';
import './App.css';
import Sidebar from './Sidebar';
import firebase from "firebase";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useState} from 'react'
import Login from './Login.js';
import { useStateValue } from "./StateProvider";



function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user?(
        <Login/>
      ):(
    <div className="app_body">
        <Router>
          <Sidebar />                 
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <Chat />
            </Route>
          </Switch>
        </Router>
    </div>
  )}
    </div>
  );
}


export default App;
