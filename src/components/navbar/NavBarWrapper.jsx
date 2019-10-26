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

  constructor(props){
    super(props)
    this.state = {
      mobileOpen:false,
      setMobileOpen:false,
      toggleSideBar:false
    }

  }


  render(){
    const  {classes} = this.props
    return(
      <Drawer
        className={classes.drawer}
        variant="persistent"
        classes={{
          paper: classes.drawerPaper,
        }}
        open={this.props.toggleSideBar}
        anchor="left"
      >
        <div className={classes.toolbar} >
          <Typography style={{textAlign:'center',lineHeight:'64px'}}>Nhân viên QC phôi</Typography>
        </div>
        <Divider />
        <List className='nav-link'>
          <NavLink  activeClassName='is-active' to='/tong-hop-phoi'>
            <ListItem button>
              <ListItemIcon className='icon'><CalendarTodayIcon /></ListItemIcon>
              <ListItemText  primary={<span className='text'>Tổng hợp phôi</span>} />
            </ListItem>
          </NavLink>
          <NavLink  activeClassName='is-active' to='/in-chung-chi'>
            <ListItem button>
              <ListItemIcon className='icon'><PrintIcon /></ListItemIcon>
              <ListItemText primary={<span className='text'>In chứng chỉ</span>} />
            </ListItem>
          </NavLink>
        </List>
      </Drawer>
    )
  }
}


NavBarWrapper.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NavBarWrapper)
