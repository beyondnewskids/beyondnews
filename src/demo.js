import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import NewsItems from './NewsContext';

import ReactAudioPlayer from 'react-audio-player';
import ReactPlayer from 'react-player/youtube';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 800,
  },
  image: {
    width: 256,
    height: 256,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: "100%",
    maxHeight: "100%",
  }
}));

export default function ComplexGrid({showVideos}) {
	const classes = useStyles();
	const newsItems = useContext(NewsItems);
			
	return newsItems.map((newsItem, index) => {
		if (newsItem.type === "video" && showVideos) {
			return <div></div>;
		}
	  return (
	  
		<div className={classes.root} style={{ padding: 20 }}>
		  <Paper className={classes.paper}>
			<Grid container xl direction="row" spacing={2}>
			  
			  <Grid container item sm justifyContent="center">
				<ButtonBase className={classes.image}>
					{newsItem.type === "audio" ? 
					<img className={classes.img} src={newsItem.thumbnail} alt={newsItem.label}/>
					:<ReactPlayer height="256"
								  url={newsItem.link}
								  controls
								  controlsList={"nodownload"}
						/>}
				</ButtonBase>
			  </Grid>
			  
				<Grid container item sm direction="column" spacing={2}>
				  <Grid item xs>
					<Typography gutterBottom variant="subtitle1">
					{newsItem.label}
					</Typography>
					<Typography variant="body2" gutterBottom>
					  {newsItem.line1}
					</Typography>
					<Typography variant="body2" color="textSecondary">
					 {newsItem.line2}
					</Typography>
				  </Grid>
				  
					<Grid item xs>
						{newsItem.type === "audio" ? 
							<ReactAudioPlayer
								  src={newsItem.link}
								  controls
								  controlsList={"nodownload"}
								/>
						 :  ""
						  }
						
				  </Grid>
				  
				</Grid>
				<Grid item xs>
				  Date: <Typography variant="subtitle1">{newsItem.date}</Typography>
				</Grid>
			</Grid>
		  </Paper>
	
		</div>
	  )
	})
}
