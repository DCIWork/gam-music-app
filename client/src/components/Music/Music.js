// import {useState, useEffect} from 'react';
// import Player from './components/Player/Player';

// function Music() {
//   const [songs] = useState([
//     {
//       title: "Forget me too ft. Halsey",
//       artist: "Machine Gun Kelly",
//       img_src: "./images/song-1.jpg",
//       src: "./static/Audio/Young"
//     },
//     {
//       title: "Song 2",
//       artist: "Artist 2",
//       img_src: "./images/song-2.jpg",
//       src: "./music/somebody-new.mp3"
//     },
//     {
//       title: "Song 3",
//       artist: "Artist 3",
//       img_src: "./images/song-3.jpg",
//       src: "./music/on-n-on.mp3"
//     },
//     {
//       title: "Song 4",
//       artist: "Artist 4",
//       img_src: "./images/song-4.jpg",
//       src: "./music/somebody-new.mp3"
//     }
//   ]);

//   const [currentSongIndex, setCurrentSongIndex] = useState(0);
//   const [nextSongIndex, NextSongIndex] = useState(0);

//   useEffect(() => {
//     setNextSongIndex(() => {
//       if (currentSongIndex + 1 > songs.length - 1) {
//         return 0;
//       } else {
//         return currentSongIndex + 1;
//       }
//     });
//   }, [currentSongIndex]);

//   return (
//     <div className="App">
//       <Player 
//         currentSongIndex={currentSongIndex} 
//         setCurrentSongIndex={setCurrentSongIndex} 
//         nextSongIndex={nextSongIndex} 
//         songs={songs}
//       />
//     </div>
//   );
// }

// export default Music;







import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: 'linear-gradient(45deg, #162e6e 30%, #59226c 60%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    // height: 48,
    padding: '0 30px',
    width: 360,
    margin: "0 auto",
    marginTop: 20,
    
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    transform: "scale(1.2)" ,
    transition: "all 0.8s ease",
  },
  controls: {
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
    color: 'white',
  },
  previous:{
    color: 'white',
  }
}));

export default function Music() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Live From Gambia
          </Typography>
          <Typography variant="subtitle1" color="secondary">
            Mbalax
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.afrocharts.com%2Ffile%2Fafrocharts-media%2Fwp%2Fwp-content%2Fuploads%2F2017%2F01%2FPana-By-Tekno-cover-Michael.jpg&f=1&nofb=1"
        title="Live from space album cover"
      />
    </Card>
  );
}

// import React, { Component } from "react"

// // eslint-disable-next-line import/no-anonymous-default-export
// export default class extends Component {
//   playAudio() {
//     const audioEl = document.getElementsByClassName("audio-element")[0]
//     audioEl.play()
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.playAudio}>
//           <span>Play Audio</span>
//         </button>
//         <audio className="audio-element">
//           <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
//         </audio>
//       </div>
//     )
//   }
// }



<div class="wrapper">

<div class="tower">
    <div class="signal">
        <div class="rings circle animated"></div>
    </div>
    <div class="dot circle"></div>
    <div class="triangle"></div>
</div>

<div class="player circle">
    <div class="buffering circle animated"></div>
    <div class="triangle"></div>
</div>

<div class="text">
    <div class="pulsing animated">Buffering</div>
</div>

</div> 



// rotation */
// @keyframes rotate {
//     from {transform: rotate(0deg);}
//     to {transform: rotate(360deg);}
// }
// @-moz-keyframes rotate {
//     from {transform: rotate(0deg);}
//     to {transform: rotate(360deg);}
// }
// @-ms-keyframes rotate {
//     from {transform: rotate(0deg);}
//     to {transform: rotate(360deg);}
// }
// @keyframes rotate {
//     from {transform: rotate(0deg);}
//     to {transform: rotate(360deg);}
// }

// /* pulse */
// @keyframes pulse {
//     0%   { opacity: 0; }
//     100% { opacity: 1; }
// }
// @-moz-keyframes pulse {
//     0%   { opacity: 0; }
//     100% { opacity: 1; }
// }
// @-ms-keyframes pulse {
//     0%   { opacity: 0; }
//     100% { opacity: 1; }
// }
// @keyframes pulse {
//     0%   { opacity: 0; }
//     100% { opacity: 1; }
// }

// /* scale */
// @keyframes scale {
//     0%   { transform: scale(1.0); }
//     100% { transform: scale(1.2); }
// }
// @-moz-keyframes scale {
//     0%   { transform: scale(1.0); }
//     100% { transform: scale(1.2); }
// }
// @-ms-keyframes scale {
//     0%   { transform: scale(1.0); }
//     100% { transform: scale(1.2); }
// }
// @keyframes scale {
//     0%   { transform: scale(1.0); }
//     100% { transform: scale(1.2); }
// }

// /* globals */
// body {
//     background-color: #E5DFDF;
// }
// .wrapper {
//     position: relative;
//     background-color: #E5DFDF;
//     margin: 40px auto 0 auto;
//     height: 480px;
//     width: 320px;
// }
// .circle {
//     /* Draw circles */
//     border-radius: 50%;
//     -moz-border-radius: 50%;
//     border-radius: 50%;
// }
// .animated {
//     /* Smoother animations */
//     transform: translateZ(0); 
// }

// /* tower */
// .tower {
//     position: absolute;
//     top: 12.5%;
//     width: 100%;
//     margin: -20px 0 0 0;
// }
// .tower .signal {
//     position: absolute;
//     top: 0px;
//     left: 50%;
//     margin: 0 0 0 -15px;
// }
// .tower .signal .rings {
//     width: 30px;
//     height: 30px;
//     border: 6px double #F2F0F0;
//     animation: scale 1s infinite linear;
// }
// .tower .dot {
//     margin: 10px auto 0 auto;
//     width: 10px;
//     height: 10px;
//     background-color: #F2F0F0;
// }
// .tower .triangle {
//     margin: -5px auto 0 auto;
//     width: 0;
//     height: 0;
//     border-left: 10px solid transparent;
//     border-right: 10px solid transparent;
//     border-bottom: 30px solid #F2F0F0;
// }

// /* player */
// .player {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     margin: -120px 0 0 -120px;
//     height: 240px; 
//     width: 240px; 
//     background-color: #F2F0F0;
//     cursor: pointer;
// }
// .player .triangle {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     width: 0;
//     height: 0;
//     margin: -15px 0 0 -10px;
//     border-top: 20px solid transparent;
//     border-left: 30px solid #4BEADE;
//     border-bottom: 20px solid transparent;
// }
// .player:hover .triangle {
//     border-top: 20px solid transparent;
//     border-left: 30px solid #46CCBF;
//     border-bottom: 20px solid transparent;
// }
// .player .buffering {
//     position: absolute;
//     top: 5px;
//     left: 5px;
//     width: 230px;
//     height: 230px;
//     border-right: 2px solid #D3D1D1;
//     border-bottom: 2px solid #D3D1D1;
//     border-left: 2px solid #F2F0F0;
//     border-top: 2px solid #F2F0F0;
//     animation: rotate 3s infinite linear;
// }

// /* text */
// .text {
//     position: absolute;
//     top: 85%;
//     text-align: center;
//     text-transform: uppercase;
//     color: #C1B8B8;
//     font-family: "Helvetica Neue", Helvetica, sans-serif;
//     font-size: 14px;
//     width: 100%;
//     animation: pulse 1.3s infinite;
// }