import React from "react";
import { Router, Route } from "react-router-dom";
import UserList from "./Users/UserList";
import UserCreate from "./Users/UserCreate";
import UserEdit from "./Users/UserEdit";
import history from "../history";
import "../styles/component/app.scss";

const App = () => {
  return (
    <div className='app'>
      <div className='title'>
        Cube<span>19</span> Leaderboard
      </div>
      <Router history={history}>
        <Route path='/' exact component={UserList} />
        <Route path='/users/edit/:name' component={UserEdit} />
        <Route path='/users/new/' component={UserCreate} />
      </Router>
    </div>
  );
};

export default App;
