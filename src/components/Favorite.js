import React, { Component } from 'react'
import { Card, Container, Row, Col, Table, DropdownButton, Dropdown, Image } from 'react-bootstrap'
import axios from 'axios'


const liverpol = '64'
const manUnited = '66'
const barcelona = '81'
const realMadrid = '86'
const interMilan = '108'

export default class Favorite extends Component {

    state = {
        response: null,
        teamName: ['Liverpool', 'Manchester United', 'Barcelona', 'Real Madrid', 'Inter Milan'],
        teamNum: [liverpol, manUnited, barcelona, realMadrid, interMilan],
        listUrl: [
            'http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg',
            'http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg',
            'http://upload.wikimedia.org/wikipedia/de/a/aa/Fc_barcelona.svg',
            'http://upload.wikimedia.org/wikipedia/de/3/3f/Real_Madrid_Logo.svg',
            'https://upload.wikimedia.org/wikipedia/de/4/48/Internazionale_Milano_2014.svg'
        ],
        url: '',
        
    }
    config = {
            headers: {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${localStorage.usertoken}`
            }
        }
    async componentDidMount(){
        try{
        let favorite = Number((await axios.get('https://sportrelay-backend.herokuapp.com/api/user/favorites', this.config)).data.favorites[0])
        await axios({
            headers: { 'X-Auth-Token': '24cff506e20140d3aea18a56e74c7ec7' },
            url: `https://api.football-data.org/v2/teams/${this.state.teamNum[favorite]}/matches`
           
        })
            .then( (response)=> {
                this.setState({ response, url: this.state.listUrl[favorite], teamName1: this.state.teamName[favorite] })
            })
        }catch(err){
            console.log(err.response)
        }
    }
    
    onSubmitHandler = async ({target :{name , value}}) => {
       try{
        let obj = {...this.state}
        let ele = obj.teamName.indexOf(name)

        console.log(ele.toString(  ))
        await axios({
            headers: { 'X-Auth-Token': '24cff506e20140d3aea18a56e74c7ec7' },
            url: `https://api.football-data.org/v2/teams/${this.state.teamNum[ele]}/matches`
           
        })
            .then( (response)=> {
                this.setState({ response, url: this.state.listUrl[ele.toString()], teamName1: name   })
            })

        let data = {favorite: String(ele)}
        console.log(data)
        await axios.put('https://sportrelay-backend.herokuapp.com/api/user/favorites', data, this.config).then(res => console.log(res)).catch( err => console.log(err.response))
    }catch(err){
        console.log(err.response)
    }
    }
    render() {

        var scheduledMatches = !this.state.response ? [] : this.state.response.data.matches.filter(ele => ele.status == "SCHEDULED")
        console.log(scheduledMatches)
        
        // let today = new Date()
        // let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

        let objStatus = this.state.response == null ? [] : scheduledMatches.map((val, i) => {
            let status = this.state.response.data.matches[i].status

            if ( i < 5) {
                return (
                    <tr>
                        <td>{val.utcDate.replace("T", " at ").slice(0, -4)}</td>
                        <td>{val.competition.name}</td>
                        <td>{val.homeTeam.name}</td>
                        <td>{val.awayTeam.name}</td>
                    </tr>
                )
            }
        })
        let finishedMatches = !this.state.response ? [] : this.state.response.data.matches.filter(ele=>ele.status == "FINISHED")
        let objStatus1 = this.state.response == null ? [] : finishedMatches.reverse().map((val, i) => {
            let status1 = this.state.response.data.matches[i].status
    
            if ( i < 5) {
                return (
                    <tr>
                        <td>{val.utcDate.replace("T", " at ").slice(0, 10)}</td>
                        <td>{val.competition.name}</td>
                        <td>{val.homeTeam.name}</td>
                        <td className='font-weight-bold'>{val.score.fullTime.homeTeam}  -  {val.score.fullTime.awayTeam}</td>
                        <td>{val.awayTeam.name}</td>
                    </tr>
                )
            }
        })

        return (
            <div>
                <Row>
                    <Col className="ml-5" md={3} sm={12} style={{ background: "#EAEAEA" }}>
                        <br />
                        {/* <h1>Side</h1> */}
                        <DropdownButton id="dropdown-basic-button" title="Choose your favorite team" variant='info'>

                            <Dropdown.Item onClick={this.onSubmitHandler}  name="Liverpool"> <Image src='http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg' style={{ width: '25px', height: '25px' }} />{' '} Liverpool</Dropdown.Item>
                            <Dropdown.Item onClick={this.onSubmitHandler} name="Manchester United"> <Image src='http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg' style={{ width: '25px', height: '25px' }} />{' '} ManChester United</Dropdown.Item>
                            <Dropdown.Item onClick={this.onSubmitHandler} name="Barcelona"> <Image src='http://upload.wikimedia.org/wikipedia/de/a/aa/Fc_barcelona.svg' style={{ width: '25px', height: '25px' }} /> {' '} Barcelona</Dropdown.Item>
                            <Dropdown.Item onClick={this.onSubmitHandler} name="Real Madrid"> <Image src='http://upload.wikimedia.org/wikipedia/de/3/3f/Real_Madrid_Logo.svg' style={{ width: '25px', hieght: '25px' }} /> {' '} Real Madrid</Dropdown.Item>
                            <Dropdown.Item onClick={this.onSubmitHandler} name="Inter Milan"> <Image src='https://upload.wikimedia.org/wikipedia/de/4/48/Internazionale_Milano_2014.svg' style={{ width: '25px', hieght: '25px' }} /> {' '} Inter Milan</Dropdown.Item>
                        </DropdownButton>
                        <br />
                        {/* if choose your favorite team  */}
        <Card style={{ justifyContent: 'center' }}><br /><Card.Img src={this.state.url} style={{ width: '250px', hieght: '250px', marginLeft: 'auto', marginRight: 'auto' }} />  <br /> <h1>{this.state.teamName1}</h1> </Card>

                    </Col>
                    <Col className="ml-3" md={8} sm={12} style={{ background: "#EAEAEA" }}>
                        <br />
                        {/* <h1>Main</h1> */}
                        <Card style={{ backgroundColor: '#17a2b8', color: '#fff' }}>
                            <Card.Title  >
                                <h2 style={{ paddingTop: '20px', fontSize: '18px' }}>UPCOMING MATCHES</h2>
                                <br />
                                {/* <h3>{date}</h3> */}
                            </Card.Title>
                        </Card>
                        <Row >
                            <Col  >
                                <Table striped bordered hover variant="dark" size='sm' style={{ opacity: .99 }}>
                                    <thead>
                                        <tr>
                                            <th>DATE / Time</th>
                                            <th>COMPETITION</th>
                                            <th>HOME TEAM</th>
                                            <th>AWAY TEAM</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {objStatus}
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                        <br />
                        <Card style={{ backgroundColor: '#17a2b8', color: '#fff' }}>
                            <Card.Title  >
                                <h2 style={{ paddingTop: '20px', fontSize: '18px' }}>MATCHES RESULTS</h2>
                                {/* <h3>{date}</h3> */}
                            </Card.Title>
                        </Card>
                        <Row >
                            <Col  >
                                <Table striped bordered hover variant="dark" size='sm' style={{ opacity: .99 }}>

                                    <thead>
                                        <tr>
                                            <th>DATE</th>
                                            <th>COMPETITION</th>
                                            <th>HOME TEAM</th>
                                            <th>RESULT</th>
                                            <th>AWAY TEAM</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {objStatus1}
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}