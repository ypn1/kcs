import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import {Route} from 'react-router-dom';

import TongHopPhoi from './pages/tong_hop_phoi/TongHopPhoi'
import InChungChi from './pages/in_chung_chi/InChungChi'

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
})


class ContentWrapper extends React.Component{
  render(){

    const {classes} = this.props

    return(
      <main className={classes.content}>        
        <div>
          <Route path='/tong-hop-phoi' component={TongHopPhoi}/>
          <Route path='/in-chung-chi' component={InChungChi}/>
        </div>
      </main>
    )
  }
}

ContentWrapper.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ContentWrapper)
