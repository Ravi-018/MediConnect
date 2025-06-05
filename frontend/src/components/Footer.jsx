import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-20 h-30 m-0' src={assets.web_logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>© 2025 MediConnect. All rights reserved.Connecting you with trusted healthcare professionals anytime, anywhere. Book appointments, access medical services, and manage your health with ease.
                       <br></br> Follow us: Facebook | Instagram | Twitter | LinkedIn
                       <br></br> Privacy Policy | Terms of Service | Contact Us</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+1-212-456-7890</li>
            <li>MediConnect@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 @ MediConnect.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
