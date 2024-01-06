import React from 'react'
import Laptop from '../assessts/lld.jpeg'


const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className=' w-[400px] mx-auto my-4'src={Laptop} alt="/"/>

            <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold text-2xl'>DATA ANALYTICS DASHBOARD</p>

          

                <h1 className='md-text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage data Analytics Centrally</h1>

                <p className='md-text-2xl text-2xl text-xl font-bold text-gray-500'>
                What is data analytics? Data analytics converts raw data into actionable insights. It includes a range of tools, technologies, and processes used to find trends and solve problems by using data. 
                Data analytics can shape business processes, improve decision-making, and foster business growth.
                </p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>


               
           
</div>
        </div>


    </div>
  )
}

export default Analytics