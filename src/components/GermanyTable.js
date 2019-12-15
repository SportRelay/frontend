import React, { Component } from 'react'
import { Card, Container, Row, Col, Table } from 'react-bootstrap'
import axios from 'axios'


export default class GermanyTable extends Component {

    state = {
        response:null
    }
    
    componentDidMount = () => {
        let obj = this
        axios({
            headers: { 'X-Auth-Token': '24cff506e20140d3aea18a56e74c7ec7' },
            url: 'http://api.football-data.org/v2/competitions/2002/standings?api-key=24cff506e20140d3aea18a56e74c7ec7',
            dataType: 'json',
            type: 'GET',
        })
            .then(function (response) {
                obj.setState({ response })
            })
    }
    
    render() {
        console.log(this.state.response);
        
        return (
            <div>
                
                

                    <Card style={{backgroundColor: '#17a2b8', color: '#fff'}}>
                        <Card.Title  >
                            <h2 style={{paddingTop: '20px', fontSize: '18px'}}>BUNDESLIGA</h2>
                            </Card.Title>
                    </Card>
                    <Row >
                        <Col  >
                            <Table striped bordered hover variant="dark" size='sm' style= {{opacity: .99}}>

                                <thead>
                                    <tr>
                                        <th>NO</th>
                                        <th >TEAM</th>
                                        <th>PLAYED</th>
                                        <th>WON</th>
                                        <th>DRAW</th>
                                        <th>LOST</th>
                                        <th>GOALS FOR</th>
                                        <th>GOALS AGAINST</th>
                                        <th>GOALS DIFFERENCE</th>
                                        <th>POINTS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.response == null ? [] : this.state.response.data.standings[0].table.map((val, i) => (
                                        <tr>
                                            <td>{val.position}</td>
                                            <td><img src={val.team.crestUrl} style={{width: '50px', height: '50px'}} /><br/> {val.team.name}</td>
                                            <td>{val.playedGames}</td>
                                            <td>{val.won}</td>
                                            <td>{val.draw}</td>
                                            <td>{val.lost}</td>
                                            <td>{val.goalsFor}</td>
                                            <td>{val.goalsAgainst}</td>
                                            <td>{val.goalDifference}</td>
                                            <td>{val.points}</td>
                                        </tr>
                                    )
                                    )}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                
            </div>
        )
    }
}