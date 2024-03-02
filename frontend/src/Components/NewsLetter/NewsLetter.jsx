import React from 'react'
import './NewsLetter.css'

const NewLetter = () => {
    return (
        <div className='newsletter'>
            <h1>Get Exclusive Offers on your Email</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div>
                <input type="email" placeholder='Your Email id' />
                <button>Subscribe</button>
                
            </div>
        </div>
    )
}

export default NewLetter
