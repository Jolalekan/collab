import React from 'react'
import Container from './Container'

const Footer = () => {
  return (
    <div className='bg-blue-950'>
      <Container>
        <div className='flex flex-col lg:flex-row items-center gap-6 py-20'>
          <div className='w-full lg:flex-1 text-center lg:text-left'>
            <h3 className='text-white text-base leading-tight font-medium'>Address</h3>
            <p className='text-white text-base leading-tight'>12, London Street off Micheal <br /> Street Mary Land <br /> United Kingdom</p>
          </div>
          <div className='w-full lg:flex-1 mt-8 lg:mt-0'>
            <div className='flex justify-center gap-10'>
              <div className='text-white flex flex-col'>
                <h3 className='font-medium text-base leading-tight'>About</h3>
                <div className='font-medium text-sm leading-tight'>About Us</div>
                <div className='font-medium text-sm leading-tight'>Location</div>
                <div className='font-medium text-sm leading-tight'>What we do</div>
              </div>
              <div className='text-white flex flex-col'>
                <h3 className='font-medium text-base leading-tight'>Policy</h3>
                <div className='font-medium text-sm leading-tight'>Privacy</div>
                <div className='font-medium text-sm leading-tight'>License</div>
                <div className='font-medium text-sm leading-tight'>Affiliate</div>
              </div>
              <div className='text-white flex flex-col'>
                <h3 className='font-medium text-base leading-tight'>Account</h3>
                <div className='font-medium text-sm leading-tight'>Create</div>
                <div className='font-medium text-sm leading-tight'>Sign-in</div>
                <div className='font-medium text-sm leading-tight'>Product</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer