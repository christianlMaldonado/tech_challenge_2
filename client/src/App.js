// Importing React and using components to make the whole app work
import React from 'react';
// This imports the styling into our 'main' page
import './App.css';
// This is the SongList API to call from to gather our songs from the local API
import SongsList from './components/SongsList';
// This imports the Nav compoenent into our 'main' page
import Nav from './components/Nav';
// This imports our Routes, browseRoutes, switches, and links from node module react-router-dom
import { Route, BrowserRouter as Router, Switch, } from "react-router-dom";
// this imports the the 'home page' component into our 'main page component'
import Home from './components/Home';
// This imports the bootstrap css to make bootsrap styling components
import 'bootstrap/dist/css/bootstrap.min.css';

//lets us export as a render page to index.js
function App(){
  
  // This is where the routing takes place
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/SongsList" component={SongsList} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
