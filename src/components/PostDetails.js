import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import vImage from '../assets/banner.jpg'
import { Card, CardDeck, Row} from 'react-bootstrap'
                // {<Card.Link href="#">Like</Card.Link><Card.Link href="#">Relpy</Card.Link>}
              // <Card.Footer>
              //   <small className="text-muted">Last updated 3 mins ago</small>
              // </Card.Footer>
export default class PostDetails extends Component {
    render() {
        return (
          <div>
            {this.props.post === undefined? null :
            <CardDeck style={{justifyContent: 'center'}}>
              
            <Card className= ' card ' style={{border: 'none'}}>
              <Card.Body className='post-box' >
                <Card.Title className="mb-1">{this.props.post.title}</Card.Title>
                <Card.Title className="text-muted"><h6>@{this.props.post.user_id.username}</h6></Card.Title>
                <Card.Text>
                  {this.props.post.body}
                </Card.Text>
                <button className="submit-comment " type="submit" style={{position: 'absolute', right: '10px', bottom: '10px'}}>Add Comment</button>
              </Card.Body>
            </Card>
            <br />
            {!this.props.showComments? null: this.props.post.comments.map( comment => <div className="comment"><h3>{comment.username}</h3><p>{comment.comment}</p></div>)}
            </CardDeck>
            }
            </div>


            
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
