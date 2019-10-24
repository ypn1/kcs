import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import PrintIcon from '@material-ui/icons/Print';
import {Link} from 'react-router-dom'

const danhsachhopdong = [
  {
    so_hop_dong:'HĐ01',
    khach_hang:'Công ty cổ phần thép trang khanh',
    ngay_ket_thuc_hop_dong:'19/5/2019',
    so_luong:'5.000 tấn',
    nguoi_tac_nghiep:'Huyền PKD. Nguyễn Thị'
  },
  {
    so_hop_dong:'HĐ02',
    khach_hang:'Công ty cổ phần thép trang khanh',
    ngay_ket_thuc_hop_dong:'19/5/2019',
    nguoi_tac_nghiep:'Huyền PKD. Nguyễn Thị',
    so_luong:'5.000 tấn'
  },
  {
    so_hop_dong:'HĐ03',
    khach_hang:'Công ty cổ phần thép trang khanh',
    ngay_ket_thuc_hop_dong:'19/5/2019',
    so_luong:'5.000 tấn',
    nguoi_tac_nghiep:'Huyền PKD. Nguyễn Thị',
  },
  {
    so_hop_dong:'HĐ04',
    khach_hang:'Công ty cổ phần thép trang khanh',
    ngay_ket_thuc_hop_dong:'19/5/2019',
    so_luong:'5.000 tấn',
    nguoi_tac_nghiep:'Huyền PKD. Nguyễn Thị'
  },
  {
    so_hop_dong:'HĐ05',
    khach_hang:'Công ty cổ phần thép trang khanh',
    ngay_ket_thuc_hop_dong:'19/5/2019',
    so_luong:'5.000 tấn',
    nguoi_tac_nghiep:'Huyền PKD. Nguyễn Thị'
  }
]

export default class ChungChiPhoiChoIn extends React.Component{
  render(){
    return(
      <div>
        <Paper>
            <Toolbar style={{paddingRight:10,background:'#f1f1f1',minHeight:48}}>
              <Typography color="inherit" variant="subtitle1">
                Chứng chỉ phôi chờ in (5 đang chờ)
              </Typography>
            </Toolbar>

            <Table aria-label="danh sách phôi chờ in">
              <TableHead>
                <TableRow>
                  <TableCell>STT</TableCell>
                  <TableCell>Số hợp đồng</TableCell>
                  <TableCell>Khách hàng</TableCell>
                  <TableCell>Ngày kết thúc HĐ</TableCell>
                  <TableCell>Số lượng (tấn)</TableCell>
                  <TableCell>Trạng thái</TableCell>
                  <TableCell>Người tác nghiệp</TableCell>
                  <TableCell>Xem đơn hàng</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {danhsachhopdong.map((row,key) => (
                  <TableRow key={key}>
                    <TableCell component="th" scope="row">
                      {key+1}
                    </TableCell>
                    <TableCell>{row.so_hop_dong}</TableCell>
                    <TableCell>{row.khach_hang}</TableCell>
                    <TableCell>{row.ngay_ket_thuc_hop_dong}</TableCell>
                    <TableCell>{row.so_luong}</TableCell>
                    <TableCell>chờ in</TableCell>
                    <TableCell>{row.nguoi_tac_nghiep}</TableCell>
                    <TableCell>
                      <Link to="/chi-tiet-don-hang">
                          Chi tiết
                      </Link>
                      </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

        </Paper>
      </div>
    )
  }
}
