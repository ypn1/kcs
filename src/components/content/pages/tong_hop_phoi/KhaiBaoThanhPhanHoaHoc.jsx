import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';


import _  from 'lodash'

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  title:{
    flex:1
  },
  noPadding:{
    padding:'0px!important'
  },
  input:{
    width:50,
    outline:'none',
    border:'1px dashed #ddd'
  }
});

function createData(thoigian,c,si,mn,p,s,cr,cu,al) {
  return { thoigian, c, si, mn, p,s,cr,cu,al };
}

const rows = [
  createData('15h30', 159, 6.0, 24, 4.0,159, 6.0, 24, 4.0),
  createData('16h30', 237, 9.0, 37, 4.3,237, 9.0, 37, 4.3),
  createData('17h30', 262, 16.0, 24, 6.0,262, 16.0, 24, 6.0),
  createData('18h30', 305, 3.7, 67, 4.3,305, 3.7, 67, 4.3),
  createData('19h30', 356, 16.0, 49, 3.9,356, 16.0, 49, 3.9)
];

var context = null

class KhaiBaoThanhPhanHoaHoc extends React.Component {

  constructor(){
    super()
    context = this
    this.state = ({
      danhsachbanthu:[],
      selected:[],
      thanhpham:null
    })
  }

  checkAll(e){
    if(e.target.checked){
      var temp = [];
      this.state.danhsachbanthu.map(function(node){
        temp.push(node.id)
      })

      this.setState({
        selected:temp
      })
      return;
    }
    this.setState({
      selected:[]
    })
  }

  checkMe(itemId,e){
    if(e.target.checked){
      this.setSelected(itemId)
      return;
    }
    this.setUnSelected(itemId)
  }

  setSelected(itemId){
    this.setState({
      selected:[...this.state.selected,itemId]
    },()=>{
      console.log('selected')
      console.log(this.state.selected)
    })
  }

  setUnSelected(itemId){
    this.setState({
      selected: _.remove(this.state.selected,function(n){
        return n != itemId
      })
    })
  }

  addRow(){
    this.setState({
      danhsachbanthu:[...this.state.danhsachbanthu,{
        id:Date.now(),
        thoigian:'',
        c:'',
        si:'',
        mn:'',
        p:'',
        s:'',
        cr:'',
        cu:'',
        al:''
      }]
    })
  }

  removeRow(){
    this.setState({
      danhsachbanthu: _.remove(this.state.danhsachbanthu,function(n){
        let idx = (context.state.selected).indexOf(n.id)
        return n.id != (context.state.selected)[idx]
      })
    },()=>{
      this.setState({
        selected:[]
      })
    })
  }

  isCheckall(){
    return (this.state.selected).length!=0 && (this.state.selected).length == (this.state.danhsachbanthu).length
  }

  chonThanhPham(itemId){
    this.setState({
      thanhpham:itemId
    })
  }

  render(){
    const {classes} = this.props;
    return (
      <Paper style={{minHeight:400}}>
        <Toolbar style={{paddingRight:10,background:'#f1f1f1',minHeight:48}}>
          <Typography className={classes.title} color="inherit" variant="subtitle1">
            Nhập thành phần hóa học
          </Typography>
          {
            (this.state.selected).length > 0 && (
              <span style={{fontWeight:500}}>{(this.state.selected).length} dòng đã chọn</span>
            )
          }
          {
            this.state.selected.length > 0 && (
              <Tooltip title="Delete">
                <IconButton onClick={this.removeRow.bind(this)} aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            )
          }
          <Tooltip title="Thêm dòng mới">
            <IconButton onClick={this.addRow.bind(this)}>
              <AddIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
        <table className="tbl-nhap-tphh">
          <thead>
            <tr>
              <th><Checkbox checked={this.isCheckall()} onChange={this.checkAll.bind(this)}/></th>
              <th>TT mẫu</th>
              <th>Thời gian</th>
              <th>%C</th>
              <th>%Si</th>
              <th>%Mn</th>
              <th>%P</th>
              <th>%S</th>
              <th>%Cr</th>
              <th>%Cu</th>
              <th>%Al</th>
              <th><Tooltip title='Đánh dấu thành phẩm'><label>TP</label></Tooltip></th>
            </tr>
          </thead>
          <tbody>
            {this.state.danhsachbanthu.map(function(row,key){
              return(
                <tr key={row.id}>
                  <td component="th" scope="row">
                    <Checkbox checked={(context.state.selected).indexOf(row.id) != -1} onChange={context.checkMe.bind(context,row.id)} />
                  </td>
                  <td>{context.state.thanhpham == row.id ?<span style={{fontWeight:'bold'}}>T/phẩm</span> :'Mẫu' + (key+1)}</td>
                  <td><input className={classes.input} type='text' /></td>
                  <td><input className={classes.input} type='text' /></td>
                  <td><input className={classes.input} type='text' /></td>
                  <td><input className={classes.input} type='text' /></td>
                  <td><input className={classes.input} type='text' /></td>
                  <td><input className={classes.input} type='text' /></td>
                  <td><input className={classes.input} type='text' /></td>
                  <td><input className={classes.input} type='text' /></td>
                  <td><input className={classes.input} type='text' /></td>
                  <td><Radio checked={context.state.thanhpham == row.id} onChange={context.chonThanhPham.bind(context,row.id)}/></td>
                </tr>
              )
            }
            )}
          </tbody>
        </table>

      </Paper>
    );
  }

}

KhaiBaoThanhPhanHoaHoc.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(KhaiBaoThanhPhanHoaHoc)
