import React from 'react'

import IconButton from '@material-ui/core/IconButton';

var days = []

for(let i=1; i<=31;i++){
  days.push(i);
}

export default class PhanTrang extends React.Component{
  render(){
    return(
      <div>
        <ul className='paging'>
          {
            days.map(node=>{
              return(
                <li>
                    <IconButton  className={'paging-button ' + (node == 8 ? 'active':'') }>
                        {node}
                    </IconButton>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
