import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SideBar from './components/SideBar';
import Matches from './components/Matches'
import EndMatches from './components/EndMatches';
import axios from 'axios';
import EnglandTable from './components/EnglandTable';
import CustomNavbar from './components/CustomNavbar';
import Profile from './components/Profile';
import ChangePassword from './components/ChangePassword';
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import SignOut from './components/SignOut'


class App extends Component {
  constructor(props){
    super(props);
    this.userLoggedIn = this.userLoggedIn.bind(this);
  }
  state = {
    response: null,
    loggedIn: localStorage.usertoken? true: false
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
  userLoggedIn(){
    this.setState({loggedIn: !this.state.loggedIn})
    console.log(this.state.loggedIn)
  }



  render(){
    console.log(this.state.response, this.state.loggedIn);
    
  return (
    <BrowserRouter>
    <div className="App">
    <CustomNavbar loggedIn={this.state.loggedIn}/> 
    
      <Switch>
      {/* <Route exact path="/" component ={Home} /> */}
      <Route exact path="/" render={(props) => <Home {...props} response={this.state.response} />} />

      <Route path="/SideBar" render={(props) => <SideBar {...props} response={this.state.response} />} />
      <Route exact path="/EndMatches" render={(props) => <EndMatches {...props} response={this.state.response} />} />
      <Route exact path="/Matches" render={(props) => <Matches {...props} response={this.state.response} />} />
      <Route path="/EnglandTable" component={EnglandTable} />
      {this.state.loggedIn? <Route path="/Profile" component={Profile} /> : null}
      {this.state.loggedIn? <Route path="/ChangePassword" component={ChangePassword} />: null}
      {this.state.loggedIn? <Route path="/SignOut" render={(props) => <SignOut {...props} signOut={this.userLoggedIn} />} />: null}
      {this.state.loggedIn? null :<Route path="/SignUp" render={(props) => <SignUp {...props} />} />}
      {this.state.loggedIn? null :<Route path="/SignIn" render={(props) => <SignIn {...props} login={this.userLoggedIn}/>} />}



      </Switch>   
    </div>
    </BrowserRouter>
  )
  }
}

export default App;
