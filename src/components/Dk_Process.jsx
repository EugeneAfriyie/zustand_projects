import React from 'react'

const Dk_Process = () => {
  return (
    <div className="bg-gradient-to-b from-white20 to-gray-500/20 h-screen ">
        
      <div className="grid grid-cols-[30%_40%_30%] gap-4 p-4 justify-center w-[85%] m-auto">
        
        <div className="flex items-start justify-center flex-col text-white">
            <div className=" flex items-center justify-center gap-2 ">
                <p className=' p-0.5 px-2 text-md text-gray-300/30 rounded-xl bg-gray-500/50'>01</p>
                <h3 className='font-bold text-4xl'>Booking</h3>
            </div>
            <p className='text-[1.3rem] font-semibold mt-10'>100% Profit target</p>
            <p className='text-sm text-gray-400 mt-2'>The evaluation process starts with the first challenge. You must pass all requirements of this stage to become eligible and move on to the verification stage and become an Alpha funded trader!</p>
        </div>

        <div className="flex items-center justify-center">
            <div className="border-20 border-gray-600 bg-gray-800/50  font-semibold text-white rounded-full w-[25rem] h-[25rem]  flex items-center justify-center flex-col">
                <p className='text-lg w-[60%] mb-4 text-white  text-center'>Ready to take your next step towards success?</p>
              <button className="bg-amber-500 px-4 py-1 rounded text-lg  hover:bg-amber-600 transition-colors duration-300">
                Book Now
              </button>            </div>
        </div>

         <div className="flex items-start justify-center flex-col text-white">
            <div className=" flex items-center justify-center gap-2 ">
                <p className=' p-0.5 px-2 text-md text-gray-300/30 rounded-xl bg-gray-500/50'>02</p>
                <h3 className='font-bold text-4xl'>Booking</h3>
            </div>
            <p className='text-[1.3rem] font-semibold mt-10'>100% Profit target</p>
            <p className='text-sm text-gray-400 mt-2'>The evaluation process starts with the first challenge. You must pass all requirements of this stage to become eligible and move on to the verification stage and become an Alpha funded trader!</p>
        </div>

      </div>
      <div className="flex justify-center items-center ">

        <img src="." alt="" />

         <div className="flex items-center justify-center flex-col text-white w-[20rem]">
            <div className=" flex items-center justify-center gap-2 ">
                <p className=' p-0.5 px-2 text-md text-gray-300/30 rounded-xl bg-gray-500/50'>03</p>
                <h3 className='font-bold text-4xl'>Booking</h3>
            </div>
            <p className='text-[1.3rem] font-semibold mt-6'>100% Profit target</p>
            <p className='text-sm text-gray-400 mt-2'>The evaluation process starts with the first challenge. You must pass all requirements of this stage to become eligible and move on to the verification stage and become an Alpha funded trader!</p>
        </div>
      </div>
    </div>
  )
}

export default Dk_Process
