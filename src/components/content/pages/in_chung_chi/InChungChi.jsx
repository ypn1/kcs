import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  toolbar: theme.mixins.toolbar
})

class InChungChi extends React.Component{
  render(){
    const {classes} = this.props
    return(
      <div>
        <div className='page-title'>
          <div className={classes.toolbar} style={{minHeight:50}}/>
          <Typography className='page-title-text' variant="h6" gutterBottom>
            In chứng chỉ
          </Typography>
        </div>
        <div>
        </div>
      </div>
    )
  }
}

InChungChi.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(InChungChi)
