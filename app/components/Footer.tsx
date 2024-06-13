import React from 'react'
import Container from './Container'

const Footer = () => {
  return (
    <div className='bg-slate-700 text-slate-200 text-sm mt-16'>
      <Container>
        <div className='flex md:flex-col justify-between mx-auto'>
          <span className='text-3xl font-bold'>
            KenzFoods
          </span>
          <span className='font-bold flex gap-4'>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </span>
        </div>
      </Container>
    </div>
  )
}

export default Footer