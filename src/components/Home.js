import React, { Component } from 'react'
import { Card, Container, Row, Col, Table, Grid, Button } from 'react-bootstrap'
import SideBar from './SideBar';
import Post from './Post'
import axios from 'axios'


export default class Home extends Component {
    state = {
        posts: []
    }

    componentDidMount(){
        axios.get('http://localhost:5000/api/post').then(res => this.setState({posts: res.data.posts})).catch(err => console.log(err))
    }
    render() {
        return(
            
                <Row>
                    
                    <Col className="ml-5" md={7} sm={12} style={{background: "#EAEAEA"}}>
                    <br />
                    {/* <h1>Main</h1> */}
                    {this.state.posts.map( post => <Card onClick={() => this.props.clickHandlerForPost(post)}><Post post={post} showComments={false}/></Card>)}
                    </Col>
                    <Col className="ml-3" md={4} sm={12} style={{background: "#EAEAEA"}}>
                    <br />
                    {/* <h1>Side</h1> */}
                    <SideBar response={this.props.response}/>
                    </Col>
                </Row>
            
            
            // <div className="container">
            // <div className="main col-lg-8" style={{borderColor: "black", borderStyle: 'solid', height: '60px' }}></div>
            // <div className="sidebar col-lg-4" style={{borderColor: "black", borderStyle: 'solid', height: '60px'  }}></div>
            // </div>
        )
    }
}








// {/* <div>
// <div id="main" className="col-md-8">


// </div>

// {/* <!-- Sidebar --> */}
//     <div id="sidebar" className="col-lg-4 4u">
//         <section>
//             <header>
//                 <h2>Pellentesque vulputate</h2>
//             </header>
//             <ul class="style">
//                 <li>
//                     <p class="posted">August 11, 2002  |  (10 )  Comments</p>
//                     <img src="images/pic04.jpg" alt="" />
//                     <p class="text">Nullam non wisi a sem eleifend. Donec mattis libero eget urna. Pellentesque viverra enim.</p>
//                 </li>
//                 <li>
//                     <p class="posted">August 11, 2002  |  (10 )  Comments</p>
//                     <img src="images/pic05.jpg" alt="" />
//                     <p class="text">Nullam non wisi a sem eleifend. Donec mattis libero eget urna. Pellentesque viverra enim.</p>
//                 </li>
//                 <li>
//                     <p class="posted">August 11, 2002  |  (10 )  Comments</p>
//                     <img src="images/pic06.jpg" alt="" />
//                     <p class="text">Nullam non wisi a sem eleifend. Donec mattis libero eget urna. Pellentesque viverra enim.</p>
//                 </li>
//             </ul>
//         </section>
//     </div>
// </div> */}





//
// let today = new Date()
//         let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

//         let objStatus = this.props.response == null ? [] : this.props.response.data.matches.map((val, i) => {
//             let status = this.props.response.data.matches[i].status
//             if (status == "FINISHED") {
//               return(  <tr>
//                     <td>{val.competition.name}</td>
//                     <td>{val.homeTeam.name}</td>
//                     <td className='font-weight-bold'>{val.score.fullTime.homeTeam}  -  {val.score.fullTime.awayTeam}</td> 
//                     <td>{val.awayTeam.name}</td>
//                 </tr>
//                 )
//             }
//         })
//         return (
//             <div>
//                 <Container>
//                     <Col lg={4}>
//                     <Card  style={{ margin: '24px 24px 24px 24px',backgroundColor: '#030366', color: '#fff'}}>
//                         <Card.Title  >
//                             <h2 style={{ paddingTop: '20px' }}>TODAY'S MATCHES RESULTS</h2>
//                             <h3>{date}</h3>
//                         </Card.Title>
//                     </Card>
//                     </Col>
//                     <Row style={{ margin: '24px 24px 24px 24px' }}>
//                         <Col  >
//                             <Table striped bordered hover variant="light" style= {{opacity: .99}}>

//                                 <thead>
//                                     <tr>
//                                         <th>COMPETITION</th>
//                                         <th>HOME TEAM</th>
//                                         <th>RESULT</th>
//                                         <th>AWAY TEAM</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {objStatus}
//                                 </tbody>
//                             </Table>
//                         </Col>
//                     </Row>
//                 </Container>
//             </div>