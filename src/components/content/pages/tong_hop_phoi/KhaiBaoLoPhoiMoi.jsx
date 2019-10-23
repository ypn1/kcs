import React from 'react'
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import KhaiBaoThanhPhanHoaHoc from './KhaiBaoThanhPhanHoaHoc'
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'

const styles = theme => ({
  marginRight:{
    marginRight:15
  }
})

class KhaiBaoLoPhoiMoi extends React.Component{
  render(){

    const {classes} = this.props

    return(
      <DialogContent dividers>   
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Paper style={{minHeight:400}}>
              <Toolbar style={{background:'#f1f1f1',minHeight:48}}>
                <Typography color="inherit" variant="subtitle1">
                  Khai báo chung
                </Typography>
              </Toolbar>
              <div style={{padding:15}}>
                <Grid container spacing={2}>
                  <Grid item xs={6} >
                    <TextField
                      className={classes.marginRight}
                      label="Số lô"
                      margin="normal"
                      defaultValue="5122"
                      type='number'
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      className={classes.marginRight}
                      label="Ngày SX"
                      value="22/20/2019"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      className={classes.marginRight}
                      label="Ca SX KCS"
                      margin="normal"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      className={classes.marginRight}
                      label="Ca SX"
                      margin="normal"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      className={classes.marginRight}
                      label="Mã phôi"
                      margin="normal"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      label="Lò nấu"
                      margin="normal"
                    />
                  </Grid>
                </Grid>

              </div>
            </Paper>
          </Grid>
          <Grid item xs={7}>
            <KhaiBaoThanhPhanHoaHoc/>
          </Grid>
        </Grid>
      </DialogContent>
    )
  }
}

KhaiBaoLoPhoiMoi.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(KhaiBaoLoPhoiMoi)
