import React from 'react'
import { Testimonio } from '../components'

export const Testimonials = () => {
  return (
    <div className='is_centered'>
      <div className='title'>
        <h1>Testimonios</h1>
      </div>
      <Testimonio 
        name='Jhon Doe'
        country='Colombia'
        role='Frontend Developer'
        company='Google'
        testimony='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        nameImage='jhon'
      />
      <Testimonio 
        name='Emma Doe'
        country='Colombia'
        role='Backend Developer'
        company='Google'
        testimony='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        nameImage='emma'
      />
      <Testimonio 
        name='Carl Doe'
        country='Colombia'
        role='Project Manager'
        company='Google'
        testimony='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        nameImage='carl'
      />
    </div>
  )
}
