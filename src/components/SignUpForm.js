// SignUpForm.jsx

import { Component } from 'react';
import {signUp} from '/Users/gregoryfontana/Desktop/Per Scholas/cohort27/Github/mern-infrastructure/src/utilities/users-service.js'

// src/components/SignUpForm/SignUpForm.jsx <--> users-service.js <--> users-api.js <-Internet-> server.js (Express)

export default class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
      };

      handleChange = (evt) => {
        this.setState({[evt.target.name]: evt.target.value, error: ''})
      }

      handleSubmit = async(evt) => {
evt.preventDefault()
//alert(JSON.stringify(this.state))
try {
    const formData = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
    }
// We don't want to send the 'error' or 'confirm' property,
  //  so let's make a copy of the state object, then delete them
//   const formData = {...this.state};
//   delete formData.error;
//   delete formData.confirm;
const user = await signUp(formData)
console.log(user)
} catch {
  // An error occurred
  this.setState({ error: 'Sign Up Failed - Try Again' });
}      

}
render() {
    const disable = this.state.password !== this.state.confirm;
  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
          <label>Email</label>
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
          <label>Confirm</label>
          <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
          <button type="submit" disabled={disable}>SIGN UP</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{this.state.error}</p>
    </div>
  );
  }}