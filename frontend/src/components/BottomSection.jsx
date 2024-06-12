import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const BottomSection = () => {
  return (
    
<div className='container-fluid bottomSection  d-flex flex-column justify-content-center align-items-center' style={{height:'300px',backgroundImage:'url(\'/bottomSection.png\')',backgroundRepeat:'round' }}>
<div className='bottomSection d-flex flex-column justify-content-center align-items-center '>
    <h1 style={{width:'550px',textAlign:'center',color:'white'}}>Are you ready to order with the beast deals?</h1>
    <button className='my-5 btn btn-primary' style={{padding:'15px',backgroundColor: "rgb(241, 114, 40)", borderColor: "rgb(241, 114, 40)"}}>PROCEED TO ORDER <span><MdOutlineKeyboardArrowRight/></span></button>
</div>

    </div>
  )
}

export default BottomSection