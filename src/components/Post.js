import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import vImage from '../assets/banner.jpg'
import { Card, CardDeck, Row} from 'react-bootstrap'
                // {<Card.Link href="#">Like</Card.Link><Card.Link href="#">Relpy</Card.Link>}
              // <Card.Footer>
              //   <small className="text-muted">Last updated 3 mins ago</small>
              // </Card.Footer>
export default class Post extends Component {
    render() {
        return (
            <CardDeck style={{justifyContent: 'center'}}>
              <Row>
            <Card className= 'card w-100'>
              <Card.Body>
                <Card.Title>{this.props.post.title}</Card.Title>
                <Card.Text>
                  {this.props.post.body}
                </Card.Text>
              </Card.Body>
            </Card>
            </Row>
            <br />
            {!this.props.showComments? null: this.props.post.comments.map( comment => <div><h3>{comment.username}</h3><p>{comment.comment}</p></div>)}
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
