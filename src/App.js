import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme , createMuiTheme,MuiThemeProvider } from '@material-ui/core/styles';
import ThemeContext from './context/ThemeContext'

import {  BrowserRouter as Router, NavLink} from "react-router-dom";

import purple from '@material-ui/core/colors/purple';
import lightBlue from '@material-ui/core/colors/lightBlue';


import Header from './components/header/HeaderWrapper'
import Content from './components/content/ContentWrapper'
import NavBar from './components/navbar/NavBarWrapper'


const themez = createMuiTheme({
  palette: {
    primary: purple
  },
  status: {
    danger: 'orange',
  },
});

const styles = theme=>({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
})


class App extends React.Component {

  constructor(){
    super()
    this.state = {
      showSideBar:true
    }
  }

  toggleLeftSideBar(){
    this.setState({
      showSideBar:!this.state.showSideBar
    })
  }

  render(){
    const {classes} = this.props;
    return (
      <MuiThemeProvider theme={themez}>
        <ThemeContext.Provider>
          <Router>
          <div className={classes.root}>
            <CssBaseline />
            <Header toggleSideBar ={this.state.showSideBar} toggleShowSideBar = {this.toggleLeftSideBar.bind(this)}/>
            <NavBar toggleSideBar = {this.state.showSideBar} />
            <Content toggleSideBar = {this.state.showSideBar}/>
          </div>
          </Router>
        </ThemeContext.Provider>
      </MuiThemeProvider>
    );
  }
}

// App.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
// };


App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)

//export default App;
