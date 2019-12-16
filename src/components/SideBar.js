import React, { Component } from 'react'
import { Card, Nav, Button, Accordion, Row, Col, Table } from 'react-bootstrap'
import axios from 'axios'
import EndMatches from './EndMatches'
import Post from './Post'
import Matches from './Matches'
import England from './SmalTables/England'
import Italy from './SmalTables/Italy'
import Spain from './SmalTables/Spain'
import France from './SmalTables/France'
import Germany from './SmalTables/Germany'


export default class SideBar extends Component {

    render() {
        console.log(this.props.response)

        return (
            <div>

                <Matches response={this.props.response} />
                <br />
                <EndMatches response={this.props.response} />
                <br />
                <Card style={{backgroundColor: '#17a2b8', color: '#fff'}}>
                        <Card.Title  >
                            <h2 style={{ paddingTop: '20px', fontSize: '18px' }}>STANDING TABLES</h2>
                        </Card.Title>
                    </Card>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header variant="none">
                            <Accordion.Toggle as={Button} variant="none" eventKey="0">
                            <Card.Img src={require('../assets/premier-league-logo-preview.png')} style={{width: '150px', height: '150px'}} /> 
                           </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <England />
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header variant="none">
                            <Accordion.Toggle as={Button} variant="none" eventKey="1">
                            <Card.Img src={require('../assets/Serie_A_logo.png')} style={{width: '150px', height: '150px'}} /> 
                           </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Italy />
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header variant="none">
                            <Accordion.Toggle as={Button} variant="none" eventKey="2">
                            <Card.Img src={require('../assets/La_Liga.png')} style={{width: '150px', height: '150px'}} /> 
                           </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Spain />
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header variant="none">
                            <Accordion.Toggle as={Button} variant="none" eventKey="3">
                            <Card.Img src={require('../assets/france-ligue-1.png')} style={{width: '150px', height: '150px'}} /> 
                           </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                            <France />
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header variant="none">
                            <Accordion.Toggle as={Button} variant="none" eventKey="4">
                            <Card.Img src={require('../assets/Bundesliga_logo.png')} style={{width: '150px', height: '150px'}} /> 
                           </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="4">
                            <Germany />
                        </Accordion.Collapse>
                    </Card>
                </Accordion>


            </div>
        )
    }
}