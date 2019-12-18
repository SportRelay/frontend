import React, { Component } from 'react'
import { Card, CardDeck, Row} from 'react-bootstrap'
import axios from 'axios'
export default class Post extends Component {
    constructor(props){
      super(props)
      this.handleChangeField = this.handleChangeField.bind(this)
      this.onSubmitHandelr  = this.onSubmitHandelr.bind(this)
    }
    state = {
      comment: ""
    }
    handleChangeField(key, event) {
    this.setState({
      [key]: event.target.value,
    });
  }
  async onSubmitHandelr(e){
      if(this.state.comment === ""){
        alert("Stop submitting an empty comment Ebere!!!")
        return
      }else if(localStorage.usertoken === undefined){
        alert("Hello!!! login dude! - (Eye roll effect - facepalm-ing) ")
        e.target.parentNode.childNodes[0].value = ""
        return
      }
      let config = {
            headers: {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${localStorage.usertoken}`
              }
      }
      await axios.put(`http://localhost:5000/api/post/comment/${this.props.post._id}`, {comment: this.state.comment} ,config).then(async (res) => {
       let postResponse = await axios.get(`http://localhost:5000/api/post/${this.props.post._id}`)
       this.props.post.comments.push(postResponse.data.post.comments[postResponse.data.post.comments.length-1])
     }).catch(err => console.log(err))
      this.setState({comment: ""})
    }
    render() {
      if(this.props.post === undefined){
        this.props.history.push('/');
      }
          const { comment } = this.state;
        return (
                <div>
            <Card className='post-card' style={{border: '1px solid rgba(0,0,0,.125)', justifyContent: 'center'}}>
              {this.props.post === undefined? null :
              <Card.Body className='post-box'>
                <Card.Title className="mb-1">{this.props.post.title}</Card.Title>
                <Card.Title className="text-muted"><h6>@{this.props.post.user_id.username}</h6></Card.Title>
                <Card.Text>
                  {this.props.post.body}
                </Card.Text>
                <Card.Text className="comment" style={{background: '#EAEAEA'}}>
                  {/* <br /> */}
                </Card.Text>
                {!this.props.showComments? null: this.props.post.comments.map( comment => <div  style={{marginLeft: '15px'}}><h6 className='text-muted'>@{comment.username}</h6><p>{comment.comment}</p></div>)}
              </Card.Body>}
              <br />
            </Card>
            {!this.props.showComments ? null:
            <Card>
            <Card.Body>
              <input
          onChange={(ev) => this.handleChangeField('comment', ev)}
          value={comment}
          className="form-control my-3"
          placeholder="Comment"/>
              <button className="submit-comment " onClick={this.onSubmitHandelr} type="submit" style={{position: 'relative', right: '10px', bottom: '10px'}}>Add Comment</button>
             </Card.Body>
            </Card>}
            </div>
        )
    }
}