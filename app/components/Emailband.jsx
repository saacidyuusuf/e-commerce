import React from 'react'
import {image10} from '../assets/images/index'
import Image from 'next/image';

const Emailband = () => {
  return (
    <div className='email'>
        <h1>Our Email</h1>
        <div className="emailImghaye">
            <Image className='emailimg' src={image10}/>
        </div>
        <div className="emailContent">
            <h2>Messege Us We Are <br /> Always Here</h2>
            <form action="">
                <label htmlFor="">Email</label>
                <input type="Email" />
                <button className='emailbtn'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Emailband