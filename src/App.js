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





function App() {
  return (
    <div className="app">
    <div className="app_body">
        <Router>
          <Sidebar />                 
          <Switch>
            <Route path="/rooms/:roomid">
              <Chat />
            </Route>
            <Route path="/">
              <Chat />
            </Route>
          </Switch>
        </Router>
    </div>
    </div>
  );
}


export default App;
