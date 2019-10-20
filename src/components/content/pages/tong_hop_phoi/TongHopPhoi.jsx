import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';

import BangTongHop from './BangTongHop'


const styles = theme => ({
  toolbar: theme.mixins.toolbar
})

class TongHopPhoi extends React.Component{
  render(){
    const {classes} = this.props
    return(
      <div>
        <div className='page-title'>
          <div className={classes.toolbar}/>
          <Typography className='page-title-text' variant="h6" gutterBottom>
            Tổng hợp phôi
          </Typography>
        </div>
        <div className='page-content'>
          <BangTongHop />
        </div>
        <div>
        </div>
      </div>
    )
  }
}

TongHopPhoi.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TongHopPhoi)
