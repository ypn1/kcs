import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Visibility from '@material-ui/icons/Visibility'
import Add from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import Drawer from '@material-ui/core/Drawer';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import PhanTrang from './PhanTrang'

import {dl_tong_hop_phoi} from '../../../../fake_data/dl_tong_hop_phoi'

export default class BangTongHop extends React.Component{

  constructor(){
    super()
    this.state = {
      drawerState:false,
      showNsx:true,
      showCaSxKCS:true,
      showCaSX:true,
      showMaPhoi:true,
      showLoNau:true,
      showSoThanhRaBai:true,
      showBaremRaBai:true,
      showSoThanhCan:true,
      showBaremCan:true,
      showDontrong:true,
      showTphh:true,
      showMacThep:true,
      showScLuyen:true,
      showScCan:true,
      showSEV:true,
      showMnPSi:true
    }
  }

  handleDrawerToggle(){
    this.setState({
      drawerState:!this.state.drawerState
    })
  }

  toggleColum(columnState,event){
    this.setState({
      [columnState]:event.target.checked
    })
  }


  render(){
    return(
      <div>
        <div style={{display:'inline-flex',width:'100%'}}>
          <div style={{flex:1}}>
            <Tooltip title='Tháng trước' placement="top"><IconButton><KeyboardArrowLeft/></IconButton></Tooltip>
            <label>Tháng 7/2019</label>
            <Tooltip title='Tháng sau' placement="top"><IconButton><KeyboardArrowRight/></IconButton></Tooltip>
          </div>
          <div>
            <Tooltip title='Tùy chọn hiển thị' placement="top"><IconButton onClick={this.handleDrawerToggle.bind(this)}><Visibility/></IconButton></Tooltip>
            <Tooltip title='Khai báo lô mới' placement="top"><IconButton><Add/></IconButton></Tooltip>
          </div>
        </div>
        <table className='full-width-table'>
          <thead>
            <tr>
              <th rowspan="2">STT</th>
              {
                this.state.showNsx && <th rowspan="2">Ngày SX</th>
              }
              {
                this.state.showCaSxKCS && <th rowspan="2">Ca SX KCS</th>
              }
              {
                this.state.showCaSX && <th rowspan="2">Ca SX</th>
              }
              {
                this.state.showMaPhoi && <th rowspan="2">Mã Phôi</th>
              }
              {
                this.state.showLoNau && <th rowspan="2">Lò nấu</th>
              }
              <th rowspan="2">Số lô</th>
              {
                (this.state.showSoThanhRaBai || this.state.showBaremRaBai) && (
                  <th colspan={this.state.showSoThanhRaBai &&  this.state.showBaremRaBai ? "2" : "1"}>Phôi ra bãi</th>
                )
              }
              {
                (this.state.showSoThanhCan || this.state.showBaremCan) && (
                  <th colspan={this.state.showSoThanhCan &&  this.state.showBaremCan ? "2" : "1"}>Phôi chuyển cán</th>
                )
              }
              {
                this.state.showDontrong&&  <th rowspan="2">Đơn<br/> trọng</th>
              }
              {
                this.state.showTphh&&<th colspan="10">Thành phần hóa (%)</th>
              }
              {
                this.state.showMacThep&&<th rowspan="2">Mác<br/> thép</th>
              }
              {
                (this.state.showScLuyen || this.state.showScCan) && (
                  <th colspan={this.state.showScCan && this.state.showScLuyen ? "2" : "1"}>Sự cố <br/> sản xuất</th>
                )
              }
              {
                this.state.showSEV && <th rowspan="2">SEV</th>
              }
              {
                this.state.showMnPSi && <th rowspan="2">Mn/Si</th>
              }
            </tr>
            <tr>
              {
                this.state.showSoThanhRaBai && <th>Số thanh</th>
              }
              {
                this.state.showBaremRaBai &&  <th>Khối lượng <br/> phôi ba zem</th>
              }
              {
                this.state.showSoThanhCan && <th>Số thanh</th>
              }
              {
                this.state.showBaremCan && <th>Khối lượng <br/> phôi ba zem</th>
              }
              {
                this.state.showTphh && (
                  <th>C</th>
                )
              }
              {
                this.state.showTphh && (
                  <th>Si</th>
                )
              }
              {
                this.state.showTphh && (
                <th>Mn</th>
                )
              }
              {
                this.state.showTphh && (
                  <th>P</th>
                )
              }
              {
                this.state.showTphh && (
                  <th>S</th>
                )
              }
              {
                this.state.showTphh && (
                  <th>Cr</th>
                )
              }
              {
                this.state.showTphh && (
                  <th>Mo</th>
                )
              }
              {
                this.state.showTphh && (
                <th>Ni</th>
                )
              }
              {
                this.state.showTphh && (
                  <th>Cu</th>
                )
              }
              {
                this.state.showTphh && (
                  <th>V</th>
                )
              }
              {
                this.state.showScLuyen && <th>Nguyên nhân<br/> luyện</th>
              }
              {
                this.state.showScCan && <th>Nguyên nhân<br/> cán</th>
              }

            </tr>
          </thead>
          <tbody>
          {
            dl_tong_hop_phoi.map((node,key)=>{
              return(
                <tr>
                  <td>{node.stt}</td>
                  {
                    this.state.showNsx &&   <td>{node.nsx}</td>
                  }
                  {
                    this.state.showCaSxKCS  &&   <td>{node.ca_sx_kcs}</td>
                  }
                  {
                    this.state.showCaSX && <td>{node.ca_sx}</td>
                  }
                  {
                    this.state.showMaPhoi && <td>{node.ma_phoi}</td>
                  }
                  {
                    this.state.showLoNau &&   <td>{node.lo_nau}</td>
                  }
                  <td>{node.so_lo}</td>
                  {
                    this.state.showSoThanhRaBai &&   <td>{node.prb_so_thanh}</td>
                  }
                  {
                    this.state.showBaremRaBai && <td>{node.prb_kl_phoi_ba_rem}</td>
                  }
                  {
                    this.state.showSoThanhCan && <td>{node.pc_so_thanh}</td>
                  }
                  {
                    this.state.showBaremCan &&   <td>{node.pc_kl_phoi_ba_rem}</td>
                  }
                  {
                    this.state.showDontrong && <td>{node.don_trong}</td>
                  }
                  {
                    this.state.showTphh && <td>{node.tp_C}</td>
                  }
                  {
                    this.state.showTphh && <td>{node.tp_Si}</td>
                  }
                  {
                    this.state.showTphh && <td>{node.tp_Mn}</td>
                  }
                  {
                    this.state.showTphh && <td>{node.tp_P}</td>
                  }
                  {
                    this.state.showTphh && <td>{node.tp_S}</td>
                  }
                  {
                    this.state.showTphh && <td>{node.tp_Cr}</td>
                  }
                  {
                    this.state.showTphh && <td>{node.tp_Mo}</td>
                  }
                  {
                    this.state.showTphh && <td>{node.tp_Ni}</td>
                  }
                  {
                    this.state.showTphh && <td>{node.tp_Cu}</td>
                  }
                  {
                    this.state.showTphh && <td>{node.tp_V}</td>
                  }
                  {
                    this.state.showMacThep && <td>{node.mac_thep}</td>
                  }
                  {
                    this.state.showScLuyen &&  <td>{node.scsx_nn_luyen}</td>
                  }
                  {
                    this.state.showScCan && <td>{node.scsx_nn_can}</td>
                  }
                  {
                    this.state.showSEV && <td>{node.cev}</td>
                  }

                  {
                    this.state.showMnPSi && <td>{node.mn_p_si}</td>
                  }

                </tr>
              )
            })
          }
          </tbody>
        </table>
        <Drawer anchor="right" open={this.state.drawerState} onClose={this.handleDrawerToggle.bind(this)}>
          <div  style={{width:300,padding:15}}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.showNsx}
                  onChange={this.toggleColum.bind(this,'showNsx')}
                  color="primary"
                />
              }
              label="Ngày sản xuất"
            /><br/>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.showCaSxKCS}
                  onChange={this.toggleColum.bind(this,'showCaSxKCS')}
                  color="primary"
                />
              }
              label="Ca sản xuất KCS"
            /><br/>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.showCaSX}
                  onChange={this.toggleColum.bind(this,'showCaSX')}
                  color="primary"
                />
              }
              label="Ca sản xuất"
            /><br/>

            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.showMaPhoi}
                  onChange={this.toggleColum.bind(this,'showMaPhoi')}
                  color="primary"
                />
              }
              label="Mã phôi"
            /><br/>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.showLoNau}
                  onChange={this.toggleColum.bind(this,'showLoNau')}
                  color="primary"
                />
              }
              label="Lò nấu"
            /><br/>

            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.showSoThanhRaBai}
                  onChange={this.toggleColum.bind(this,'showSoThanhRaBai')}
                  color="primary"
                />
              }
              label="Số thanh phôi ra bãi"
            /><br/>

            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.showBaremRaBai}
                  onChange={this.toggleColum.bind(this,'showBaremRaBai')}
                  color="primary"
                />
              }
              label="Khối lượng barem phôi ra bãi"
            /><br/>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.showSoThanhCan}
                  onChange={this.toggleColum.bind(this,'showSoThanhCan')}
                  color="primary"
                />
              }
              label="Số thanh chuyển cán"
            /><br/>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.showBaremCan}
                  onChange={this.toggleColum.bind(this,'showBaremCan')}
                  color="primary"
                />
              }
              label="Khối lượng barem cán"
            /><br/>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.showDontrong}
                  onChange={this.toggleColum.bind(this,'showDontrong')}
                  color="primary"
                />
              }
              label="Đơn trọng"
            /><br/>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.showTphh}
                  onChange={this.toggleColum.bind(this,'showTphh')}
                  color="primary"
                />
              }
              label="Thành phần hóa học"
            /><br/>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.showMacThep}
                  onChange={this.toggleColum.bind(this,'showMacThep')}
                  color="primary"
                />
              }
              label="Mác thép"
            /><br/>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.showScLuyen}
                  onChange={this.toggleColum.bind(this,'showScLuyen')}
                  color="primary"
                />
              }
              label="Sự cố SX nguyên nhân luyện"
            /><br/>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.showScCan}
                  onChange={this.toggleColum.bind(this,'showScCan')}
                  color="primary"
                />
              }
              label="Sự cố SX nguyên nhân cán"
            /><br/>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.showSEV}
                  onChange={this.toggleColum.bind(this,'showSEV')}
                  color="primary"
                />
              }
              label="SEV"
            /><br/>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.showMnPSi}
                  onChange={this.toggleColum.bind(this,'showMnPSi')}
                  color="primary"
                />
              }
              label="Mn/Si"
            /><br/>


          </div>

        </Drawer>
        <PhanTrang/>
      </div>

    )
  }
}
