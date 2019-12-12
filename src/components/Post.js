import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import vImage from '../assets/banner.jpg'
import { Card, CardDeck, Nav} from 'react-bootstrap'
export default class Post extends Component {
    render() {
        return (
            <CardDeck>
            <Card className= 'card w-100'>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Link href="#">Like</Card.Link>
                <Card.Link href="#">Relpy</Card.Link>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card md ={12}>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Link href="#">Like</Card.Link>
                <Card.Link href="#">Relpy</Card.Link>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card md ={12}>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Link href="#">Like</Card.Link>
                <Card.Link href="#">Relpy</Card.Link>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card md ={12}>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Link href="#">Like</Card.Link>
                <Card.Link href="#">Relpy</Card.Link>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            </CardDeck>

            
        //         <div className="detalilsform" style={{ backgroundColor: "#eff3f6" }}>
        //         <div>
                    
        //             <img className="Postimage"
        //                 src={vImage}
        //                 alt="post image"
        //                 style={{width: '40%'}}
        //             />
        //         </div>
        //         <div style={{ marginTop: "10%" }}>
        //             <h3>post details</h3>
        //             <br />
        //             <div>
        //                 <button  style={{ width: "10%", margin: "5px" }} type="button" class="btn btn-primary">Edit</button>
        //                 <button  style={{ width: "10%", margin: "5px" }} type="button" class="btn btn-primary">Delete</button>
        //             </div>
        //         </div>
        //     </div>
        )
    }
}
