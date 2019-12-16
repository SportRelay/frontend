import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Image, Form, FormControl, Button } from 'react-bootstrap'

export default class CustomNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ bavbarHeight: '10px' }} >
                    <Navbar.Brand href="/"><h1 className="font-weight-bold"><span style={{ color: '#17a2b8' }}>Sport Relay</span></h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav >
                            <Nav.Link href="/">Home</Nav.Link>
                            <NavDropdown title="Matches" id="basic-nav-dropdown">
                                <NavDropdown.Item href="Matches">Today's Matches</NavDropdown.Item>
                                <NavDropdown.Item href="EndMatches">Result</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Top 5 Leagues" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/EnglandTable">
                                    <Image src={require("../assets/england.svg")} style={{ width: '25px', height: '25px' }} />{' '} Premier League</NavDropdown.Item>
                                <NavDropdown.Item href="/ItalianTable">
                                    <Image src={require("../assets/italy.svg")} style={{ width: '25px', height: '25px' }} />{' '} Serie A League</NavDropdown.Item>
                                <NavDropdown.Item href="/SpainTable">
                                    <Image src={require("../assets/spain.svg")} style={{ width: '25px', height: '25px' }} />{' '} La Liga</NavDropdown.Item>
                                <NavDropdown.Item href="/FranceTable">
                                    <Image src={require("../assets/france.svg")} style={{ width: '25px', height: '25px' }} />{' '}Ligue 1</NavDropdown.Item>
                                <NavDropdown.Item href="/GermanyTable">
                                    <Image src={require("../assets/germany.svg")} style={{ width: '25px', height: '25px' }} />{' '} Bundesliga</NavDropdown.Item>
                            </NavDropdown>

                            { this.props.loggedIn ?  <Nav.Link href="/Profile">Profile</Nav.Link>:
                                <Nav.Link href="/SignUp">SignUp</Nav.Link>
                            }
                            { this.props.loggedIn ?  <Nav.Link href="/CreatePost">Create Post</Nav.Link>:
                                null
                            }
                            { this.props.loggedIn ?  <Nav.Link href="/Favorite">Favorite</Nav.Link>:
                                null
                            }
                            { this.props.loggedIn ? <Nav.Link href="/SignOut">SignOut</Nav.Link>:
                                <Nav.Link href="/SignIn">SignIn</Nav.Link>
                            }

</Nav>                    
</Navbar.Collapse>
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form> */}
                    
                    
                </Navbar>
            </div>
        )
    }
}
