import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PrintIcon from '@material-ui/icons/Print';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';

import Typography from '@material-ui/core/Typography';

import {NavLink} from 'react-router-dom'


const drawerWidth = 240
const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
})


class NavBarWrapper extends React.Component{

  constructor(){
    super()
    this.state = {
      mobileOpen:false,
      setMobileOpen:false
    }

  }


  render(){
    const  {classes} = this.props
    return(
      <Hidden xsDown implementation="css">
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} >
          <Typography style={{textAlign:'center',lineHeight:'64px'}}>Nhân viên QC phôi</Typography>
        </div>
        <Divider />
        <List className='nav-link'>
          <NavLink to='/tong-hop-phoi'>
            <ListItem button>
              <ListItemIcon><CalendarTodayIcon /></ListItemIcon>
              <ListItemText primary="Tổng hợp phôi" />
            </ListItem>
          </NavLink>
          <NavLink to='/in-chung-chi'>
            <ListItem button>
              <ListItemIcon><PrintIcon /></ListItemIcon>
              <ListItemText primary="In chứng chỉ" />
            </ListItem>
          </NavLink>
        </List>
      </Drawer>
      </Hidden>
    )
  }
}


NavBarWrapper.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NavBarWrapper)
