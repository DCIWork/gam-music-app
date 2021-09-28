// import React, { Component } from 'react';
// import "./Clicks.css";

// class Clicks extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       clicks: 0,
//       show: true
//     };
//   }

//   IncrementItem = () => {
//     this.setState({ clicks: this.state.clicks + 1 });
//   }
//   DecreaseItem = () => {
//     this.setState({ clicks: this.state.clicks - 1 });
//   }
//   ToggleClick = () => {
//     this.setState({ show: !this.state.show });
//   }

//   render() {
//     return (
//       <div className="d-flex justify-content-around  " style={{width: "100px"}}>
//         <span onClick={this.IncrementItem} className="fa fa-heart "></span><br />
//         <span onClick={this.IncrementItem} className="fa fa-thumbs-up "></span><br />
//         <span onClick={this.DecreaseItem} className="fa fa-thumbs-down "></span>
//         { this.state.show ? <span>{ this.state.clicks }</span> : '' } 
//         {/* <div class="social-buttons"> <button class="neo-button"><i onClick={this.IncrementItem} class="fa fa-heart fa-2x"></i> </button> <button class="neo-button"><i onClick={this.IncrementItem} class="fa fa-plus fa-2x"></i> </button> */}
// </div>
    
      
//     );
//   }
// }

// export default Clicks;


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    width: 320,
    marginTop: 50,
    // borderRadius: 5,
   
  },
});

export default function Clicks() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation style={{ borderBottom: "5px solid blue",
      borderRadius: "0px 20px 16px 0px"}}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
