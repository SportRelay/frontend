import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import vImage from '../assets/banner.jpg'
import { Card, CardDeck, Row} from 'react-bootstrap'
                // {<Card.Link href="#">Like</Card.Link><Card.Link href="#">Relpy</Card.Link>}
              // <Card.Footer>
              //   <small className="text-muted">Last updated 3 mins ago</small>
              // </Card.Footer>
export default class myPosts extends Component {
    render() {
        return (
          <div>
            {this.props.post === undefined? null :
            <CardDeck style={{justifyContent: 'center'}}>
              <Row>
            <Card className= 'card w-100' >
              <Card.Body className='post-box'>
                <Card.Title>{this.props.post.title}</Card.Title>
                <Card.Text>
                  {this.props.post.body}
                </Card.Text>
              </Card.Body>
              <button className="submit-post" type="submit">Delete</button>
            </Card>
            </Row>
            <br />
            {!this.props.showComments? null: this.props.post.comments.map( comment => <div><h3>{comment.username}</h3><p>{comment.comment}</p></div>)}
            </CardDeck>}
            </div>
        )
    }
}
