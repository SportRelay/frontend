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
      let res = await axios.get("https://sportrelay-backend.herokuapp.com/api/user/userposts", config);
      this.setState({posts: res.data.posts})
    }
    async deletePostHandler(e, post){
      e.stopPropagation();
      e.preventDefault();
      await axios.delete(`https://sportrelay-backend.herokuapp.com/api/post/${post._id}`, config);
      let posts = this.state.posts
      posts.splice(this.state.posts.indexOf(post), 1);
      this.setState({posts: posts})
    }
    render() {
        return (
          <div>
            {this.state.posts === undefined? null : this.state.posts.map( post => 
            <CardDeck className="mypost-submit" style={{justifyContent: 'center', paddingLeft: '0', marginLeft: '0'}}>
              
              <Form onSubmit={(e) => this.deletePostHandler(e, post)} className="form-style" style={{background: 'none', width: '500px'}} >
            <Card className= 'card w-100' style={{marginLeft: '0'}} >
              <Card.Body className='post-box' onClick={() => this.props.clickHandlerForPost(post, this)}>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                  {post.body}
                </Card.Text>
              </Card.Body>
              <button className="delete-post" type="submit">Delete</button>
            </Card>
            </Form>
            
            <br />
            </CardDeck>)}
            </div>
        )
    }
}


// import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
// import { Card, CardDeck, Row} from 'react-bootstrap'
//                 // {<Card.Link href="#">Like</Card.Link><Card.Link href="#">Relpy</Card.Link>}
//               // <Card.Footer>
//               //   <small className="text-muted">Last updated 3 mins ago</small>
//               // </Card.Footer>
// export default class MyPosts extends Component {
//     render() {
//         return (
//           <div>
//             {this.props.post === undefined? null :
//             <CardDeck style={{justifyContent: 'center'}}>
//               <Row>
//             <Card className= 'card w-100'>
//               <Card.Body className='post-box'>
//                 <Card.Title>{this.props.post.title}</Card.Title>
//                 <Card.Text>
//                   {this.props.post.body}
//                 </Card.Text>
//               </Card.Body>
//               <button className="submit-post" type="submit">Delete</button>
//             </Card>
//             </Row>
//             <br />
//             {!this.props.showComments? null: this.props.post.comments.map( comment => <div><h3>{comment.username}</h3><p>{comment.comment}</p></div>)}
//             </CardDeck>}
//             </div>
//         )
//     }
// }
