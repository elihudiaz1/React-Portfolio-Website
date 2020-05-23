import React from 'react';
import Axios from 'axios';


class ContactPage extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   name: '',
   subject: '',
   message: '',
   disabled: false,
   emailSent: null,
  }
 }

componentDidMount() {
  this.callBackendAPI()
  .then(res => this.setState({ data: res.express }))
  .catch(err => console.log(err));
}

callBackendAPI = async () => {
  const response = await fetch('/express_backend');
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message)
  }
  return body;
};


 handleChange = (event) => {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;

  this.setState({
   [name]: value
  })
 }


 handleSubmit = (event) => {
  event.preventDefault();

  this.setState({
   disabled: true,
   emailSent: false
  })

  Axios.post('http://localhost:5000/express_backend/email', this.state)
  .then(res => {
   if(res.data.success) {
    this.setState({
     name: '',
     subject: '',
     message: '',
     disabled: false,
     emailSent: true
    })
   } else {
    this.setState({
     disabled: false,
     emailSent: false
   })
  }
 })
 .catch(err => {
  this.setState({
   disabled: false,
   emailSent: false
  });
 })
}

 render() {

  return(
   <div className="contact-page-container">
    <h1>Let's talk</h1>
    <form id="contact-form" className="form-body" onSubmit={this.handleSubmit}>
      <div className="form-container">
        <div className="row100">
          <div className="col">
            <div className="inputBox">
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required="required"></input>
              <span className="text">Full Name</span>
              <span className="line"></span>
            </div>
          </div>
        </div>
        <div className="row100">
          <div className="col">
            <div className="inputBox">
              <input type="text" name="subject" value={this.state.subject} onChange={this.handleChange} required="required"></input>
              <span className="text">Email</span>
              <span className="line"></span>
            </div>
          </div>
        </div>
        <div className="row100">
          <div className="col">
            <div className="inputBox textarea">
              <textarea name="message" value={this.state.message} onChange={this.handleChange} required="required"></textarea>
              <span className="text">Message</span>
              <span className="line"></span>
            </div>
          </div>
        </div>
        <div className="row100">
          <div className="col">
            <input type="submit" value="Send"></input>
          </div>
        </div>
      </div>
      {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
      {this.state.emailSent === false && <p className="d-inline error-msg">Email Not Sent</p>}
    </form>
   </div> 
  )
 }
}

export default ContactPage;