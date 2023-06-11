import React from 'react'

const Button = (props) => {
    // console.log("ppp",props)
  return (
    // <div>
        <button style={{border: '2px solid #2898ec', backgroundColor: 'white', padding: '5px 20px', borderRadius:'20px', cursor:'pointer'}} onClick={() => props.actionProvider.handleGotIt()}>Got it</button>
  )
}

export default Button