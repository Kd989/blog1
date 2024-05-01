import React from 'react'

const MaincontentLayout = (props) => {
  return (
    <div className='row g-5'>
        {props.children}
    </div>
  )
}

export default MaincontentLayout