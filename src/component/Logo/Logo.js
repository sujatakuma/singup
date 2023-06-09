import React from 'react'
import { Tilt } from 'react-tilt'
import icon from './icons8-brain-26.png'
import './Logo.css'

const Logo = () => {
  return (
    <div className='ma4 mt0'>
         <Tilt className='Tilt br2 shadow-2' options={{max:25}} style={{ height: 150, width: 150 }}>
      <div className='Tilt-inner-pa3'>
        <img style={{paddingTop:'20px',}} src={icon} alt="logo" srcset="" height={80} width={60} />
        </div>
    </Tilt>

      
    </div>
  )
}

export default Logo
