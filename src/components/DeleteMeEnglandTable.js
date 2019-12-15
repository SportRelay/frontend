import React, { Component } from 'react'
import { Card, Container, Row, Col, Table, Accordion, Button } from 'react-bootstrap'
import axios from 'axios'

export default class EnglandTable extends Component {

    state = {
        englandTable:[]
    }
    
    componentDidMount = () => {
        let obj = this
        let config = {
            headers:{
                'X-Auth-Token': '24cff506e20140d3aea18a56e74c7ec7'
            }
        }
        axios.all([
            axios.get('http://api.football-data.org/v2/competitions/2021/standings?api-key=24cff506e20140d3aea18a56e74c7ec7',config),
            axios.get('http://api.football-data.org/v2/competitions/2019/standings?api-key=24cff506e20140d3aea18a56e74c7ec7',config),
            axios.get('http://api.football-data.org/v2/competitions/2014/standings?api-key=24cff506e20140d3aea18a56e74c7ec7',config),
            axios.get('http://api.football-data.org/v2/competitions/2015/standings?api-key=24cff506e20140d3aea18a56e74c7ec7',config),
            axios.get('http://api.football-data.org/v2/competitions/2002/standings?api-key=24cff506e20140d3aea18a56e74c7ec7',config)
            ]).then(res => obj.setState({ englandTable: res})).catch(err => console.log(err))
    }

    render() {
        console.log(this.state.englandTable.length)
        return (
            <div>
                
                

                    <Card style={{backgroundColor: '#17a2b8', color: '#fff'}}>
                        <Card.Title  >
                            <h2 style={{paddingTop: '20px', fontSize: '18px'}}>Leagues</h2>
                            </Card.Title>
                    </Card>
                    <Row >
                        <Col  >
                            <Table striped bordered hover variant="dark" size='sm' style= {{opacity: .99}}>
                                <tbody>
                                    {!this.state.englandTable.length ? [] : this.state.englandTable.map( (league, i) => 
                                    <Accordion>
                                        <Card.Header> 
                                            <Accordion.Toggle as={Button} variant="link" eventKey={String(i)}>
                                                {league.data.competition.name}
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={String(i)}>
                                        <div>
                                            <tr>
                                                <th>NO</th>
                                                <th>TEAM</th>
                                                <th>PLAYED</th>
                                                <th>POINTS</th>
                                            </tr>
                                        {league.data.standings[0].table.map((val, i) => i < 5?(
                                            <tr>
                                                <td>{val.position}</td>
                                                <td><img src={val.team.crestUrl} style={{width: '50px', height: '50px'}} /><br/> {val.team.name}</td>
                                                <td>{val.playedGames}</td>
                                                {/* <td>{val.won}</td>
                                                <td>{val.draw}</td>
                                                <td>{val.lost}</td> */}
                                                {/* <td>{val.goalsFor}</td>
                                                <td>{val.goalsAgainst}</td>
                                                <td>{val.goalDifference}</td> */}
                                                <td>{val.points}</td>
                                            </tr>
                                    ): null
                                    )}
                                        </div>
                                        </Accordion.Collapse>
                                    </Accordion>
                                    )}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                
            </div>
        )
    }
}