import React from 'react'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper';
import ReactToPrint from 'react-to-print';
import clsx from 'clsx';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import PrintIcon from '@material-ui/icons/Print';
import Tooltip from '@material-ui/core/Tooltip';

import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


const styles = theme =>({
  toolbar: theme.mixins.toolbar,
  left:{
    textAlign:'left'
  },
  height50:{
    height:30
  },
  fab:{
    position:'fixed',
    bottom:30,
    right:15
  }
})

const dslo = [{
  quycach:'130x130x12000mm',
  macthep:'SD295 A',
  solo:'4382',
  casx:'/B/',
  nsx:'24/10/2018',
  c:'0.28',
  si:'0.28',
  mn:'0.61',
  p:'0.029',
  s:'0.032',
  cr:'0.12',
  ni:'0.08',
  cu:'0.18'
},
{
  quycach:'130x130x12000mm',
  macthep:'SD295 A',
  solo:'4382',
  casx:'/B/',
  nsx:'24/10/2018',
  c:'0.28',
  si:'0.28',
  mn:'0.61',
  p:'0.029',
  s:'0.032',
  cr:'0.12',
  ni:'0.08',
  cu:'0.18'
},
{
  quycach:'130x130x12000mm',
  macthep:'SD295 A',
  solo:'4382',
  casx:'/B/',
  nsx:'24/10/2018',
  c:'0.28',
  si:'0.28',
  mn:'0.61',
  p:'0.029',
  s:'0.032',
  cr:'0.12',
  ni:'0.08',
  cu:'0.18'
},
{
  quycach:'130x130x12000mm',
  macthep:'SD295 A',
  solo:'4382',
  casx:'/B/',
  nsx:'24/10/2018',
  c:'0.28',
  si:'0.28',
  mn:'0.61',
  p:'0.029',
  s:'0.032',
  cr:'0.12',
  ni:'0.08',
  cu:'0.18'
},{
  quycach:'130x130x12000mm',
  macthep:'SD295 A',
  solo:'4382',
  casx:'/B/',
  nsx:'24/10/2018',
  c:'0.28',
  si:'0.28',
  mn:'0.61',
  p:'0.029',
  s:'0.032',
  cr:'0.12',
  ni:'0.08',
  cu:'0.18'
},
{
  quycach:'130x130x12000mm',
  macthep:'SD295 A',
  solo:'4382',
  casx:'/B/',
  nsx:'24/10/2018',
  c:'0.28',
  si:'0.28',
  mn:'0.61',
  p:'0.029',
  s:'0.032',
  cr:'0.12',
  ni:'0.08',
  cu:'0.18'
},
{
  quycach:'130x130x12000mm',
  macthep:'SD295 A',
  solo:'4382',
  casx:'/B/',
  nsx:'24/10/2018',
  c:'0.28',
  si:'0.28',
  mn:'0.61',
  p:'0.029',
  s:'0.032',
  cr:'0.12',
  ni:'0.08',
  cu:'0.18'
},
{
  quycach:'130x130x12000mm',
  macthep:'SD295 A',
  solo:'4382',
  casx:'/B/',
  nsx:'24/10/2018',
  c:'0.28',
  si:'0.28',
  mn:'0.61',
  p:'0.029',
  s:'0.032',
  cr:'0.12',
  ni:'0.08',
  cu:'0.18'
},
{
  quycach:'130x130x12000mm',
  macthep:'SD295 A',
  solo:'4382',
  casx:'/B/',
  nsx:'24/10/2018',
  c:'0.28',
  si:'0.28',
  mn:'0.61',
  p:'0.029',
  s:'0.032',
  cr:'0.12',
  ni:'0.08',
  cu:'0.18'
}
]

const fontFamily = 'Times New Roman'


class TrangInPhoi extends React.Component{

  render(){

    const {classes} = this.props

    return(
      <div>
        <ReactToPrint
          trigger={() =>
            <Tooltip title="In chứng chỉ">
              <Fab color="primary" aria-label="add" className={classes.fab}>
                <PrintIcon />
              </Fab>
            </Tooltip>
            }
          content={() => this.componentRef}
        />
        <div className='page-title'>
          <div className={classes.toolbar} style={{minHeight:50}}/>
          <Typography className='page-title-text' variant="h6" gutterBottom>
            In chứng chỉ
          </Typography>
        </div>

        <div style={{display:'inline-flex',width:'100%'}}>
          <div style={{flex:1}}>
            <Tooltip title='Trang trước' placement="top"><IconButton><KeyboardArrowLeft/></IconButton></Tooltip>
            <label>Trang 1/5</label>
            <Tooltip title='Trang sau' placement="top"><IconButton><KeyboardArrowRight/></IconButton></Tooltip>
          </div>
        </div>
        <Paper ref={el => (this.componentRef = el)} style={{boxShadow:'none',width:1080,height:690,margin:'auto',borderRadius:0,paddingTop:50}}>
          <h2 style={{fontFamily:'Times New Roman',textAlign:'center'}}>GIẤY CHỨNG NHẬN CHẤT LƯỢNG SẢN PHẨM</h2>
          <p style={{fontFamily:'Times New Roman',textAlign:'center'}}>(Product Quality Mill Test Certificate)</p>
          <div style={{paddingLeft:50}}>
            <table className='tbl-in-ttc' style={{fontFamily:'Times New Roman',color:'#000'}}>
              <tbody>
                <tr>
                  <td>Ngày phát hành</td>
                  <td>:</td>
                  <td>Ngày 04 tháng 10 năm 2019</td>
                </tr>
                <tr>
                  <td>Số phát hành(Issue No.)</td>
                  <td>:</td>
                  <td style={{fontWeight:'bold'}}>6</td>
                </tr>
                <tr>
                  <td>Tên khách hàng</td>
                  <td>:</td>
                  <td><label style={{fontWeight:'bold'}}>CÔNG TY CỔ PHẦN THÉP ĐẤT VIỆT</label></td>
                </tr>
                <tr>
                  <td>Hợp đồng số</td>
                  <td>:</td>
                  <td style={{fontWeight:'bold'}}>300819/HDPT2019/ĐV-LCC</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{padding:'5px 25px'}}>
            <table className='tlb-incc-solieu'>
              <thead>
                <tr>
                  <th rowspan="2">STT<br/>(No.)</th>
                  <th rowspan="2">Quy cách (size)</th>
                  <th rowspan="2">Mác thép (Grade)</th>
                  <th rowspan="2" colspan="3">Mẻ/ca/ngày sản xuất (Heat No/Sheft/Date of Production)</th>
                  <th rowspan="2">Số thỏi</th>
                  <th colspan="8">THÀNH PHẦN HÓA HỌC(CHAMICAL COMPOSITION)</th>
                  <th rowspan="2">Ghi chú (Remark)</th>
                </tr>
                <tr>
                  <th style={{paddingLeft:5,paddingRight:5}}>%C</th>
                  <th style={{paddingLeft:5,paddingRight:5}}>%Si</th>
                  <th style={{paddingLeft:5,paddingRight:5}}>%Mn</th>
                  <th style={{paddingLeft:5,paddingRight:5}}>%P</th>
                  <th style={{paddingLeft:5,paddingRight:5}}>%S</th>
                  <th style={{paddingLeft:5,paddingRight:5}}>%Cr</th>
                  <th style={{paddingLeft:5,paddingRight:5}}>%Ni</th>
                  <th style={{paddingLeft:5,paddingRight:5}}>%Cu</th>
                </tr>
              </thead>
              <tbody>
                {
                  dslo.map((node,key)=>{
                    return(
                      <tr>
                        <td>{key + 1}</td>
                        <td>{node.quycach}</td>
                        <td>{node.macthep}</td>
                        <td>{node.solo}</td>
                        <td>{node.casx}</td>
                        <td>{node.nsx}</td>
                        {
                          key==0 && <td rowspan={9}>160</td>
                        }
                        <td>{node.c}</td>
                        <td>{node.si}</td>
                        <td>{node.mn}</td>
                        <td>{node.p}</td>
                        <td>{node.s}</td>
                        <td>{node.cr}</td>
                        <td>{node.ni}</td>
                        <td>{node.cu}</td>
                        <td/>
                      </tr>

                    )
                  })
                }
              </tbody>
            </table>
            <div className='ket-luan' style={{width:400,color:'#000'}}>
              <label style={{paddingLeft:40,fontSize:18}}><b>Kết luận</b>(Conclusion)</label>
              <p>Lô phôi thép của công ty đạt mác SD296A theo TCCS VJS</p>
              <p>The above a found to comply with SD296A of TCCS VJS</p>
              <h4 style={{textAlign:'center'}}>PHÒNG QA</h4>
              <br/><br/>
              <h4 style={{textAlign:'center'}}>ĐOÀN THỊ HOA</h4>
            </div>
          </div>
        </Paper>
      </div>
    )
  }
}

TrangInPhoi.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TrangInPhoi)
