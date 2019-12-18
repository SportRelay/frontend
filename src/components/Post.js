import React, { Component } from 'react'

import { Container } from '@material-ui/core';

import { Card, CardDeck, Row} from 'react-bootstrap'
              
export default class Post extends Component {
    render() {
        return (
                
            <Card style={{border: '1px solid gray', justifyContent: 'center'}}>
              {this.props.post === undefined? null :
              <Card.Body className='post-box'>
                <Card.Title className="mb-1">{this.props.post.title}</Card.Title>
                <Card.Title className="text-muted"><h6>@{this.props.post.user_id.username}</h6></Card.Title>
                <Card.Text>
                  {this.props.post.body}
                </Card.Text>
                <button className="submit-comment " type="submit" style={{position: 'absolute', right: '10px', bottom: '10px'}}>Add Comment</button>
                <Card.Text className="comment" style={{background: '#EAEAEA'}}>
                  {/* <br /> */}
               
                </Card.Text>
                {!this.props.showComments? null: this.props.post.comments.map( comment => <div  style={{marginLeft: '15px'}}><h6 className='text-muted'>@{comment.username}</h6><p>{comment.comment}</p></div>)}
              </Card.Body>}
              <br />
            </Card>
            
            
        )
    }
}
