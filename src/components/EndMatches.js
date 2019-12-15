import React, { Component } from 'react'
import { Card, Container, Row, Col, Table } from 'react-bootstrap'

export default class EndMatches extends Component {
    render() {
        console.log(this.props.response)
        let today = new Date()
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

        let objStatus = this.props.response == null ? [] : this.props.response.data.matches.map((val, i) => {
            let status = this.props.response.data.matches[i].status
            
            if (status == "FINISHED") {
              return(  
                <tr>
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
                
                    <Card style={{ backgroundColor: '#17a2b8', color: '#fff'}}>
                        <Card.Title  >
                            <h2 style={{ paddingTop: '20px', fontSize: '18px' }}>MATCHES RESULTS</h2>
                            {/* <h3>{date}</h3> */}
                        </Card.Title>
                    </Card>
                    <Row >
                        <Col  >
                            <Table style={{maxWidth: '100px'}} striped bordered hover variant="dark" size='sm' style= {{opacity: .99}}>

                                <thead>
                                    <tr>
                                        <th>COMPETITION</th>
                                        <th>HOME TEAM</th>
                                        <th>RESULT</th>
                                        <th>AWAY TEAM</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {objStatus}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                
            </div>
        )
    }
}
