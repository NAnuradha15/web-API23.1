import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function ServiceCard(props) {

  const {data} = props;

  const navigation = useNavigate()

  return (
<div style={{backgroundColor : 'white',opacity : 1,borderRadius : 5,display : 'flex',marginTop : 20,height : 60,justifyContent:'space-between',padding : 10
}}>
  <div style={{display : 'block',textAlign : 'left'}}>

    <div style={{fontSize : 15}}>
        Train Name : {data.name}
    </div>
    <div style={{fontSize : 15}}>
        Route : {data.Route_name}
    </div>
  </div>
  <div style={{display : 'block'}}>

    <div style={{fontSize : 15}}>
        Status : {data.Status} {data.Status == 'Active' ? <>🟢</> : <>🔴</>}
    </div>
    <div style={{fontSize : 15,marginTop : 10}}>
        <Button variant='outlined' onClick={() => {navigation('/Map',{ state: { props: data } })}}>View Map</Button>

    </div>
  </div>
    
</div>
  )
}

export default ServiceCard


