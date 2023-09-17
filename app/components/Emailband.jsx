import React from 'react'
import {dele, image10} from '../assets/images/index'
import Image from 'next/image';

const Emailband = () => {
  return (
    <>
    <div className='email'>
        <h1>Our Email</h1>
       <div className="emailhaye">
            <Image className='emailimg' src={dele}/>
        <div className="emailContent">
            <h2>Messege Us We Are <br /> Always Here</h2>
            <form action="">
                <label htmlFor="">Email</label>
                <input type="Email" /><br />
                <button className='shopNow'>Submit</button>
            </form>
        </div>
        </div>
    </div>
    </>
  )
}

export default Emailband