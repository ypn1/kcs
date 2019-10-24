import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import {Route} from 'react-router-dom';

import TongHopPhoi from './pages/tong_hop_phoi/TongHopPhoi'
import InChungChi from './pages/in_chung_chi/InChungChi'
import clsx from 'clsx';

import TrangInPhoi from './pages/trang_in/TrangInPhoi'
import ChiTietDonHang from './pages/in_chung_chi/ChiTietDonHang'


const drawerWidth = 240;

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
})


class ContentWrapper extends React.Component{
  render(){

    const {classes} = this.props

    return(
      <main className={clsx(classes.content, {
          [classes.contentShift]: this.props.toggleSideBar,
        })}>
        <div>
          <Route path='/tong-hop-phoi' component={TongHopPhoi}/>
          <Route path='/in-chung-chi' component={InChungChi}/>
          <Route path='/trang-in-phoi' component={TrangInPhoi}/>
          <Route path='/chi-tiet-don-hang' component={ChiTietDonHang} />
        </div>
      </main>
    )
  }
}

ContentWrapper.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ContentWrapper)
