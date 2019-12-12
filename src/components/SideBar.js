import React, { Component } from 'react'
import { Card, Container, Row, Col, Table } from 'react-bootstrap'
import axios from 'axios'
import EndMatches from './EndMatches'
import Post from './Post'
import EnglandTable from './EnglandTable'
import Matches from './Matches'



export default class SideBar extends Component {

    render() {
        return (
            <div>
                
                    <Matches />
                    <br/>
                    <EndMatches />
                    <br/>
                    <EnglandTable />
                
            </div>
        )
    }  
}