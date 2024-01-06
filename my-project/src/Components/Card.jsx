import React from 'react'

import Single from "../assessts/Sin.jpg"
import Single2 from "../assessts/Sin3.jpg"
import Single3 from "../assessts/Sin5.jpg"


const Card = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>

        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-40 mx-auto mt-[-3rem] bg-white'src={Single} alt=""/>

                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font bold'>$149</p>
                <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>500GB stoarage</p>
                  <p className='py-2 border-b mx-8 mt-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8 mt-8'>+Send up to 2 GB</p>
                
                </div>
                <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px]  my-6 mx-auto px-6 py-3 '>Start Trial</button>
            </div>
            <div className='bg-gray-100 w-full shadow-2xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-40 mx-auto mt-[-3rem]'src={Single2} alt=""/>

                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font bold'>$149</p>
                <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>500GB stoarage</p>
                  <p className='py-2 border-b mx-8 mt-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8 mt-8'>Send up to 2 GB</p>
                
                </div>
                <button className='bg-black text-[#00df9a] rounded-md font-medium w-[200px]  my-6 mx-auto px-6 py-3 '>Start Trial</button>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-40 mx-auto mt-[-3rem] bg-white'src={Single3} alt=""/>

                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font bold'>$149</p>
                <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>500GB stoarage</p>
                  <p className='py-2 border-b mx-8 mt-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8 mt-8'>Send up to 2 GB</p>
                
                </div>
                <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px]  my-6 mx-auto px-6 py-3 '>Start Trial</button>
            </div>

        </div>




    </div>
  )
}

export default Card