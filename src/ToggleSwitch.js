import React, { Component } from 'react';
import './ToggleSwitch.scss';

class ToggleSwitch extends Component {
	
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			checked : true
		}
	}
	
	handleSubmit(event) {
		this.setState({checked : !this.state.checked});
		this.props.recordToggle(this.state.checked);
	}


  render() {
    return (
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          name={this.props.Name}
          id={this.props.Name}
		  checked={this.state.checked}
		   onChange={this.handleSubmit} 
        />
        <label className="toggle-switch-label" htmlFor={this.props.Name}>
          <span className="toggle-switch-inner" />
          <span className="toggle-switch-switch" />
        </label>
      </div>
    );
  }
}

export default ToggleSwitch;