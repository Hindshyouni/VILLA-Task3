import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <form className='form'>
        <div>
        <label>Full Name</label>
        <input type="text" placeholder='Your Name..'></input>
        </div>

        <div>
        <label>Email Address</label>
        <input type="text" placeholder='Your-Email..'></input>
        </div>

        <div>
        <label>Subject</label>
        <input type="text" placeholder='Subject..'></input>
        </div>

        <div>
        <label>Message</label>
        <textarea className='textarea' placeholder='Your Message'></textarea>
        </div>

        <button>Send Message</button>
        

    </form>
  )
}

export default Form