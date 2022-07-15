import React from 'react'
import './index.css';

function Card(props) {
  return (
    <div className={[`${props.className}`].join(" ") + " card"}>
        {console.log(props.className)}
        {props.children}
    </div>
  )
}

export default Card