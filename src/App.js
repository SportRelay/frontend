import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SideBar from './components/SideBar';
import Matches from './components/Matches'
import EndMatches from './components/EndMatches';
import axios from 'axios';
import CustomNavbar from './components/CustomNavbar';
import Profile from './components/Profile';
import ChangePassword from './components/ChangePassword';
import Favorite from './components/Favorite';
import EnglandTable from './components/EnglandTable';
import ItalianTable from './components/ItalianTable';
import SpainTable from './components/SpainTable';
import FranceTable from './components/FranceTable';
import GermanyTable from './components/GermanyTable';
import England from './components/SmalTables/England';
import Italy from './components/SmalTables/Italy';
import Spain from './components/SmalTables/Spain';
import France from './components/SmalTables/France';
import Germany from './components/SmalTables/Germany';

class App extends Component {

  state = {
    response: null,
  }

  componentDidMount() {
  
    let obj = this
    axios({
        headers: { 'X-Auth-Token': '24cff506e20140d3aea18a56e74c7ec7' },
        url: 'https://api.football-data.org/v2/matches?api-key=24cff506e20140d3aea18a56e74c7ec7',
        dataType: 'json',
        type: 'GET',
    })
        .then(function (response) {
           obj.setState({ response })
        })
}



  render(){
    console.log(this.state.response);
    
  return (
    <BrowserRouter>
    <div className="App">
    <CustomNavbar />
    
      <Switch>
      {/* <Route exact path="/" component ={Home} /> */}
      <Route exact path="/" render={(props) => <Home {...props} response={this.state.response} />} />

      <Route path="/SideBar" render={(props) => <SideBar {...props} response={this.state.response} />} />
      <Route exact path="/EndMatches" render={(props) => <EndMatches {...props} response={this.state.response} />} />
      <Route exact path="/Matches" render={(props) => <Matches {...props} response={this.state.response} />} />
      {/* <Route path="/Matches" component={Matches} /> */} 
      <Route path="/Profile" component={Profile} />
      <Route path="/ChangePassword" component={ChangePassword} />
      <Route path="/Favorite" component={Favorite} />
      <Route path="/EnglandTable" component={EnglandTable} />
      <Route path="/ItalianTable" component={ItalianTable} />
      <Route path="/SpainTable" component={SpainTable} />
      <Route path="/FranceTable" component={FranceTable} />
      <Route path="/GermanyTable" component={GermanyTable} />
      <Route path="/England" component={England} />
      <Route path="/Italy" component={Italy} />
      <Route path="/Spain" component={Spain} />
      <Route path="/France" component={France} />
      <Route path="/Germany" component={Germany} />
      </Switch>   
    </div>
    </BrowserRouter>
  )
  }
}

export default App;
