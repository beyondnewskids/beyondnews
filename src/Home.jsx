import './App.css';
import React from 'react';
import ReactAudioPlayer from 'react-audio-player';


const audioClips = [
{sound: "https://dl.prokerala.com/downloads/ringtones/files/mp3/emergency-3087.mp3", label: "September 12"},
{sound: "https://dl.prokerala.com/downloads/ringtones/files/mp3/horn-23360.mp3", label: "September 13"}
]

class Home extends React.Component {

	RenderButtonSound = () => {
		return audioClips.map((soundObj, index) => {
			  return (<div>{soundObj.label}<br/><ReactAudioPlayer
					  src={soundObj.sound}
					  controls
					/></div>)
			})	
	}
  
    render() {
        return (
		<div className="Home">
            <h2>Our Podcasts</h2>
			{this.RenderButtonSound()}
			
			
            </div>
        );
    }

}

export default Home;