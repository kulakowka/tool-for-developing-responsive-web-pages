import React from 'react'

export default ({
  pic,
  title
}) =>
  <div className='card'>
    <div className='content'>
      <img className='pic' src={pic} />
      <div className='body'>
        <h1>{title}</h1>
      </div>
    </div>
  </div>
