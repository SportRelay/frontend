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
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import SignOut from './components/SignOut'
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
import CreatePost from './components/CreatePost';
import Post from './components/Post'
import myPosts from './components/myPosts'

class App extends Component {
  constructor(props){
    super(props);
    this.userLoggedIn = this.userLoggedIn.bind(this);
    this.clickHandlerForPost = this.clickHandlerForPost.bind(this)
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
  clickHandlerForPost(post, obj){
    this.setState({post});
    obj.props.history.push('/Post')
//Stopped here
  }


  render(){
    console.log(this.state.response, this.state.loggedIn);
    
  return (
    <BrowserRouter>
    <div className="App">
    <CustomNavbar loggedIn={this.state.loggedIn}/> 
    
      <Switch>
      {/* <Route exact path="/" component ={Home} /> */}
      <Route exact path="/" render={(props) => <Home {...props} clickHandlerForPost={this.clickHandlerForPost} response={this.state.response} />} />
      <Route path="/SideBar" render={(props) => <SideBar {...props} response={this.state.response} />} />
      <Route exact path="/EndMatches" render={(props) => <EndMatches {...props} response={this.state.response} />} />
      <Route exact path="/Matches" render={(props) => <Matches {...props} response={this.state.response} />} />
      {this.state.loggedIn? <Route path="/Profile" component={Profile} /> : null}
      {this.state.loggedIn? <Route path="/ChangePassword" component={ChangePassword} />: null}
      {this.state.loggedIn? <Route path="/SignOut" render={(props) => <SignOut {...props} signOut={this.userLoggedIn} />} />: null}
      {this.state.loggedIn? null :<Route path="/SignUp" render={(props) => <SignUp {...props} />} />}
      {this.state.loggedIn? null :<Route path="/SignIn" render={(props) => <SignIn {...props} login={this.userLoggedIn}/>} />}
      {this.state.loggedIn? <Route path="/Favorite" component={Favorite} />: null}
      {this.state.loggedIn? <Route path="/CreatePost" component={CreatePost} />: null}
      {this.state.loggedIn? <Route path="/myPosts" component={myPosts} />: null}
      <Route path="/Post" render={(props) => <Post {...props} showComments={true} post={this.state.post} />} />
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
