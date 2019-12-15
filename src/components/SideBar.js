import React, { Component } from 'react'
import { Card, Nav, Button, Container, Row, Col, Table } from 'react-bootstrap'
import axios from 'axios'
import EndMatches from './EndMatches'
import Post from './Post'
import EnglandTable from './EnglandTable'
import Matches from './Matches'



export default class SideBar extends Component {

    render() {
        console.log(this.props.response)

        return (
            <div>

                <Matches response={this.props.response} />
                <br />
                <EndMatches response={this.props.response} />
                <br />
                <EnglandTable />

            </div>
        )
    }
}