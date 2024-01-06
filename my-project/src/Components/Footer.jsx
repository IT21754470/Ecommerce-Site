import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare

} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>

            <p className='py-4'>The UN General Assembly designated 5 June as World Environment Day, marking the first day of the Stockholm Conference on the Human Environment. Another resolution, adopted by the General Assembly the same day, led to the creation of UNEP.</p>

            <div className='flex justify-between md:w-[75%] my-6'>
            <FaDribbbleSquare size={35}/>
            <FaFacebookSquare size={35}/>
            <FaGithubSquare size={35}/>
            <FaInstagram size={35}/>
            <FaTwitterSquare size={35}/>



            </div>
        </div>

        <div className='lg:col-span-3 flex justify-between'> 

        <div>
            <h6 className='font-medium text-gray-400'>Solutions</h6>
            <ul>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>Insights</li>
            </ul>
        </div>

        <div>
            <h6 className='font-medium text-gray-400'>Support</h6>
            <ul>
                <li className='py-2 text-sm'>About</li>
                <li className='py-2 text-sm'>Blog</li>
                <li className='py-2 text-sm'>Jobs</li>
                <li className='py-2 text-sm'>Press</li>
            </ul>
        </div>

        <div>
            <h6 className='font-medium text-gray-400'>Contact</h6>
            <ul>
                <li className='py-2 text-sm'>mobile</li>
                <li className='py-2 text-sm'>Whatsapp</li>
                <li className='py-2 text-sm'>Email</li>
                <li className='py-2 text-sm'>Gmail</li>
            </ul>
        </div>

        <div>
            <h6 className='font-medium text-gray-400'>Company</h6>
            <ul>
                <li className='py-2 text-sm'>Claim</li>
                <li className='py-2 text-sm'>Policy</li>
                <li className='py-2 text-sm'>Terms</li>
                <li className='py-2 text-sm'>Conditions</li>
            </ul>
        </div>



        </div>
    
    </div>
  )
}

export default Footer