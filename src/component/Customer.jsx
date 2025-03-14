import React from 'react'
import Container from "../component/Container"
const Customer = () => {
  return (
  
    <div className='hidden lg:block bg-blue-950 '>
        <div className='flex justify-between p-8 '>      
                <div className='flex  items-center'>
                <img src="/assets/google.png" width={48} height={48} alt="" />
                <h2 className='font-medium text-white text-2xl'>oogle</h2>
                </div>
                <div className='flex items-center gap-2'>
                <img src="/assets/dropbox.png" width={48} height={48} alt="" />
                <h2 className='font-medium text-white text-2xl'>Dropbox</h2>
                </div>
                <div className='flex items-center gap-2'>
                <img src="/assets/paytm.png" width={48} height={48} alt="" />
                <h2 className='font-medium text-white text-2xl'>Paytm</h2>
                </div>
                <div className='flex items-center gap-2'>
                <img src="/assets/sportify.png" width={48} height={48} alt="" />
                <h2 className='font-medium text-white text-2xl'>sportify</h2>
                </div>


            
        </div>
    </div>
  )
}

export default Customer