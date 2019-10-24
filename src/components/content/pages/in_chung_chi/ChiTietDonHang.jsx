import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Tooltip from '@material-ui/core/Tooltip';
import PrintIcon from '@material-ui/icons/Print';
import {Link} from 'react-router-dom'

const styles = theme => ({
  toolbar: theme.mixins.toolbar
})

const lophoi = {
  quycach:'130x130x12000mm',
  macthep:'SD295 A',
  solo:'L184382',
  sothoi:'7',
  tong_so_thoi:'63',
  c:'0.28',
  si:'0.28',
  mn:'0.61',
  p:'0.029',
  s:'0.032',
  cr:'0.12',
  ni:'0.08',
  cu:'0.18'
}

class ChiTietDonHang extends React.Component{
  render(){

    const {classes} = this.props

    return(
      <div>
        <div className='page-title'>
          <div className={classes.toolbar} style={{minHeight:50}}/>
          <Typography className='page-title-text' variant="h6" gutterBottom>
            Chi tiết xuất bán hợp đồng Trang Khanh
          </Typography>
        </div>
        <div className='page-content'>
        <div style={{display:'inline-flex',width:'100%'}}>
          <div style={{flex:1}}>
            <Tooltip title='Trang trước' placement="top"><IconButton><KeyboardArrowLeft/></IconButton></Tooltip>
            <label>Trang 1/5</label>
            <Tooltip title='Trang sau' placement="top"><IconButton><KeyboardArrowRight/></IconButton></Tooltip>
          </div>
          <div>
            <Link to="/trang-in-phoi">
              <Tooltip title='In chứng chỉ' placement="top"><IconButton><PrintIcon/></IconButton></Tooltip>
            </Link>
          </div>
        </div>
        <table className="full-width-table tbl-height-row-40" aria-label="chi tiết đơn hàng">
          <thead>
            <tr>
              <th rowspan="2">STT</th>
              <th rowspan="2">Quy cách</th>
              <th rowspan="2">Mác thép</th>
              <th rowspan="2">Số lô</th>
              <th rowspan="2">Số thỏi xuất</th>
              <th rowspan="2">Tổng số thỏi</th>
              <th colspan="8">Thành phần hóa học(%)</th>
            </tr>
            <tr>
              <th>%C</th>
              <th>%Si</th>
              <th>%Mn</th>
              <th>%P</th>
              <th>%S</th>
              <th>%Cr</th>
              <th>%Ni</th>
              <th>%Cu</th>
            </tr>
          </thead>
          <tbody>
            {
              [1,2,3,4,5,6,7,8,9].map(node=>{
                return(
                  <tr>
                    <td>{node}</td>
                    <td>{lophoi.quycach}</td>
                    <td>{lophoi.macthep}</td>
                    <td>{lophoi.solo}</td>
                    <td>{lophoi.sothoi}</td>
                    {
                      node ==1 && <td rowspan="9">{lophoi.tong_so_thoi}</td>
                    }
                    <td>{lophoi.c}</td>
                    <td>{lophoi.si}</td>
                    <td>{lophoi.mn}</td>
                    <td>{lophoi.p}</td>
                    <td>{lophoi.s}</td>
                    <td>{lophoi.cr}</td>
                    <td>{lophoi.ni}</td>
                    <td>{lophoi.cu}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        </div>
      </div>
    )
  }
}

ChiTietDonHang.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ChiTietDonHang)
