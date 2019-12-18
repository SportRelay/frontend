import React, { Component } from 'react'
import axios from 'axios'

export default class CreatePost extends Component{
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    }

    this.handleChangeField = this.handleChangeField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e){
    e.preventDefault()
    const { title, body } = this.state;
    let config = {
            headers: {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${localStorage.usertoken}`
            }
    }
    let data = {title, body}
    await axios.post('http://localhost:5000/api/post', data, config).then(res => this.props.history.push('/')).catch( err => console.log(err))
  }

  handleChangeField(key, event) {
    this.setState({
      [key]: event.target.value,
    });
  }

  render() {
    const { title, body } = this.state;

    return (
      <div className="form-style col-12 col-lg-6 offset-lg-3" >
          <h1>Create Post</h1>
        <input
          onChange={(ev) => this.handleChangeField('title', ev)}
          value={title}
          className="form-control my-3"
          placeholder="Title"
        />
        <textarea
          onChange={(ev) => this.handleChangeField('body', ev)}
          className="form-control my-3"
          placeholder="Body"
          value={body}>
        </textarea>
        <button className="submit-post" onClick={this.handleSubmit} >Submit</button>
      </div>
    )
  }
}
