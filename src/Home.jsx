import './App.css';
import React from 'react';
import {Nav} from 'react-bootstrap';
import NewsContext from './NewsContext';

import ReactAudioPlayer from 'react-audio-player';
import ReactPlayer from 'react-player/youtube';

class Home extends React.Component {
	static contextType = NewsContext;
	
	
    render() {
		const newsItems = this.context;
		console.log(newsItems);
		const newsItem = newsItems[0];
		console.log(newsItem);
		return (
		<div className="Home">
            <h2> Welcome to Beyond News</h2><br/>
			<h3>Lorem Ipsum </h3><br/>
			<h3>Latest News</h3><br/><br/>
			{newsItem.type === "audio" ? 
						<ReactAudioPlayer
							  src={newsItem.link}
							  controls
							  controlsList={"nodownload"}
							/>
					 : 
					  <ReactPlayer
							  url={newsItem.link}
							  controls
							  controlsList={"nodownload"}
			/>}
			<br/><br/>For more news head to <Nav.Link href="#news">News</Nav.Link>
            </div>
        );
    }

}

export default Home;