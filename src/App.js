import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import SideBar from './components/SideBar';
import EndMatches from './components/EndMatches'
import axios from 'axios'
import EnglandTable from './components/EnglandTable'
import CustomNavbar from './components/CustomNavbar';


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
  return (
    <BrowserRouter>
    <div className="App">
    <CustomNavbar />
    
      <Switch>
      <Route exact path="/" component ={Home} />
      {/* <Route exact path="/" render={(props) => <Home {...props} response={this.state.response} />} /> */}

      <Route path="/SideBar" render={(props) => <SideBar {...props} response={this.state.response} />} />
      <Route exact path="/EndMatches" render={(props) => <EndMatches {...props} response={this.state.response} />} />
      <Route path="/EnglandTable" component= {EnglandTable}/>
      </Switch>   
    </div>
    </BrowserRouter>
  )
  }
}

export default App;
