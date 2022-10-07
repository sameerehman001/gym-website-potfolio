import React from 'react'
import './Join.css'

const Join = () => {
  return (
    <div className="join" id='join-us'>
        <div className="left-j">
            <div>
                <hr />
                <span className='stroke-text'>READY TO </span>
                <span>LEAVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className="right-j">
            <form action="" className='email-conatiner'>
                <input type="email" name='user_email' placeholder='Enter your email address' />
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join