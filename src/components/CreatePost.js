import React, { Component } from 'react'
import axios from 'axios'

export default class CreatePost extends Component{
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      user: '',
    }

    this.handleChangeField = this.handleChangeField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    const { title, body, user } = this.state;

    return axios.post('http://localhost:8000/api/posts', {
      title,
      body,
      user,
    });
  }

  handleChangeField(key, event) {
    this.setState({
      [key]: event.target.value,
    });
  }

  render() {
    const { title, body, user } = this.state;

    return (
      <div className="form-style col-12 col-lg-6 offset-lg-3" >
          <h1>Create Post</h1>
        <input
          onChange={(ev) => this.handleChangeField('title', ev)}
          value={title}
          className="form-control my-3"
          placeholder="Article Title"
        />
        <textarea
          onChange={(ev) => this.handleChangeField('body', ev)}
          className="form-control my-3"
          placeholder="Article Body"
          value={body}>
        </textarea>
        <input
          onChange={(ev) => this.handleChangeField('user', ev)}
          value={user}
          className="form-control my-3"
          placeholder="User"
        />
        <button className="submit-post" onClick={this.handleSubmit} >Submit</button>
      </div>
    )
  }
}
