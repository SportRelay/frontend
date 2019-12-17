import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import vImage from '../assets/banner.jpg'
import { Card, CardDeck, Row, Form, Button} from 'react-bootstrap'
import axios from 'axios'
                // {<Card.Link href="#">Like</Card.Link><Card.Link href="#">Relpy</Card.Link>}
              // <Card.Footer>
              //   <small className="text-muted">Last updated 3 mins ago</small>
              // </Card.Footer>
let config = {
      headers: {
          "Content-Type" : "application/json",
          "Authorization": `Bearer ${localStorage.usertoken}`
      }
}
export default class myPosts extends Component {
    state = {
      posts: undefined
    }
    async componentDidMount(){
      let res = await axios.get("http://localhost:5000/api/user/userposts", config);
      this.setState({posts: res.data.posts})
    }
    async deletePostHandler(e, post){
      e.stopPropagation();
      e.preventDefault();
      await axios.delete(`http://localhost:5000/api/post/${post._id}`, config);
      let posts = this.state.posts
      posts.splice(this.state.posts.indexOf(post), 1);
      this.setState({posts: posts})
    }
    render() {
        return (
          <div>
            {this.state.posts === undefined? null : this.state.posts.map( post => 
            <CardDeck style={{justifyContent: 'center'}}>
              <Row>
              <Form onSubmit={(e) => this.deletePostHandler(e, post)} className="form-style" >
            <Card className= 'card w-100'  >
              <Card.Body className='post-box' onClick={() => this.props.clickHandlerForPost(post, this)}>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                  {post.body}
                </Card.Text>
              </Card.Body>
              <Button className="submit-post" type="submit">Delete</Button>
            </Card>
            </Form>
            </Row>
            <br />
            </CardDeck>)}
            </div>
        )
    }
}
