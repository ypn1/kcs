import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import BangTongHop from './BangTongHop'

const drawerWidth = 240;

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background:'red'
  }

})

class TongHopPhoi extends React.Component{
  render(){
    const {classes} = this.props
    return(
      <div>
        <div className='page-title'>
          <div className={classes.toolbar + ' none-min-height'}/>
          <Typography className='page-title-text' variant="h6" gutterBottom>
            Tổng hợp phôi
          </Typography>
        </div>
        <div className='page-content'>
          <BangTongHop />
        </div>
      </div>
    )
  }
}

TongHopPhoi.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TongHopPhoi)
