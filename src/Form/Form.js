import React from 'react'
import './Form.css'

export default class Form extends React.Component {
  state = {
    first_name: '',
    last_name: '',
    age: '',
    user_type: '',
    investing_experience: [],
    notes: ''
  }

  humanize = (str) => {
    var i, frags = str.split('_');
    for (i=0; i<frags.length; i++) {
      frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
    return frags.join(' ');
  }

  makeUserTypeList = () => {
    const options = this.props.structure[3].options.map(option => {
      let display_name = this.humanize(option)
      return <option key={option} value={option}>{display_name}</option>
    })
    return options
  }

  makeInvestingExperienceList = () => {
    const options = this.props.structure[4].options.map(option => {
      let display_name = this.humanize(option)
      return <option key={option} value={option}>{display_name}</option>
    })
    return options
  }

  handleChangeFirstName = (e) => {
    this.setState({
      first_name: e.target.value
    })
  }

  handleChangeLastName = (e) => {
    this.setState({
      last_name: e.target.value
    })
  }

  handleChangeAge = (e) => {
    this.setState({
      age: e.target.value
    })
  }

  handleChangeUserType = (e) => {
    this.setState({
      user_type: e.target.value
    })
  }

  handleChangeInvestingExperience = (e) => {
    let options = Array.from(e.target.selectedOptions, (option) => option.value)
    this.setState({
      investing_experience: options
    })
  }

  handleChangeNotes = (e) => {
    this.setState({
      notes: e.target.value
    })
  }

  validateFirstName = (e) => {
    e.preventDefault()
    if (this.state.first_name === "") {
      alert(`First Name required`)
    } else {
      this.validateLastName()
    }
  }

  validateLastName = () => {
    if(this.state.last_name === "") {
      alert(`Last Name required`)
    } else {
      this.handleSubmit()
    }
  }

  handleSubmit = () => {
    console.log(this.state)
  }

  render(){
    return (
      <div className="Form">
        <form onSubmit={this.validateFirstName}>
          <h2>User Information</h2>
          <label htmlFor={this.props.structure[0].field}>{this.props.structure[0].display_name}</label>
          <input id={this.props.structure[0].field} type={this.props.structure[0].type} onChange={this.handleChangeFirstName} required></input>
          <br/>
          <label htmlFor={this.props.structure[1].field}>{this.props.structure[1].display_name}</label>
          <input id={this.props.structure[1].field} type={this.props.structure[1].type} onChange={this.handleChangeLastName} required></input>
          <br/>
          <label htmlFor={this.props.structure[2].field}>{this.props.structure[2].display_name}</label>
          <input id={this.props.structure[2].field} type={this.props.structure[2].type} onChange={this.handleChangeAge}></input>
          <br/>
          <label htmlFor={this.props.structure[3].field}>{this.props.structure[3].display_name}</label>
          <select id={this.props.structure[3].field} onChange={this.handleChangeUserType}>
            <option key="0" value="">Select an option</option>
            {this.makeUserTypeList()}</select>
          <br/>
          <label htmlFor={this.props.structure[4].field}>{this.props.structure[4].display_name}</label>
          <select id={this.props.structure[4].field} multiple onChange={this.handleChangeInvestingExperience}>
            <option key="0" value="">Press CTRL to select all that apply</option>
            {this.makeInvestingExperienceList()}</select>
          <br/><br/>
          <label htmlFor={this.props.structure[5].field}>{this.props.structure[5].display_name}</label>
          <br/>
          <textarea id={this.props.structure[5].field} type={this.props.structure[5].type} onChange={this.handleChangeNotes}></textarea>
          <br/>
          <div className="Form__button-container">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}