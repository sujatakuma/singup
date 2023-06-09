import React from 'react'

const Navication = ({ onRouteChange, isSigendIn }) => {
  if (isSigendIn) {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <h1 onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'> sing out </h1>
      </nav>
    )
  } else {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <h1 onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'> sign up </h1>
        <h1 onClick={()=>onRouteChange('register')} className='f3 link dim black underline pa3 pointer'> Register </h1>
      </nav>
      
    )
  }
}

export default Navication
