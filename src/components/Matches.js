import React, { Component } from 'react'
import { Card, Container, Row, Col, Table } from 'react-bootstrap'
import axios from 'axios'

export default class SideBar extends Component {

    render() {
        console.log(this.props.response)
        let today = new Date()
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

        let objStatus = this.props.response == null ? [] : this.props.response.data.matches.map((val, i) => {
            let status = this.props.response.data.matches[i].status
            
            if (status == "SCHEDULED") {
                
                
              return(  <tr>
                    <td>{val.utcDate}</td>
                    <td>{val.competition.name}</td>
                    <td>{val.homeTeam.name}</td>
                    <td>{val.awayTeam.name}</td>
                    
                </tr>
                )
            }
        })
        return (
            <div>
                
                    <Card style={{backgroundColor: '#17a2b8', color: '#fff'}}>
                        <Card.Title  >
                            <h2 style={{ paddingTop: '20px', fontSize: '18px' }}>TODAY'S MATCHES</h2>
                            {/* <h3>{date}</h3> */}
                        </Card.Title>
                    </Card>
                    <Row >
                        <Col  >
                            <Table striped bordered hover variant="dark" size='sm' style= {{opacity: .99}}>
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
                    <br/>
            </div>
        )
    }  
}