import React from 'react';
import Demo from './demo';
import ToggleSwitch from './ToggleSwitch'

class News extends React.Component {
	constructor() {
		super();
		this.recordToggle = this.recordToggle.bind(this);
		this.state = {
			showVideos : false
		}
	}
	
	recordToggle(checked) {
		this.setState({showVideos : checked});
	}

	
	  render() {
		return (
		  <div>
					<h2>News for Kids</h2>
					<ToggleSwitch id="toggleSwitch" Name="ShowVideos" recordToggle={this.recordToggle} />
					<div className="News">
						<Demo showVideos = {this.state.showVideos}/>
					</div>
				</div>
		);
	  }
}



export default News;