import React from 'react'

const Dk_Process = () => {
  return (
    <div className="bg-gradient-to-b from-white0 to-gray-500/20 h-full py-10 relative pl-4">
        
      <div className="grid lg:grid-cols-[30%_40%_30%] gap-10 sm:p-4 sm:justify-center w-full sm:w-[50%] lg:w-[85%] m-auto  ">

            <div id='center-circle' className="flex items-center justify-center order-1 lg:order-2 relative">
              <div className="border-20 border-gray-600 bg-gray-800/50  font-semibold text-white rounded-full w-[300px] h-[300px] xl:w-[460px] xl:h-[460px]  flex items-center justify-center flex-col">
                <p className='text-lg w-[60%] mb-4 text-white  text-center'>Ready to take your next step towards success?</p>
                <button className="bg-amber-500 px-4 py-1 rounded text-lg  hover:bg-amber-600 transition-colors duration-300">
                  Book Now
                </button>          
              </div>
          </div>


        
        <div id='no1' className="xs:hidden flex items-start justify-center flex-col text-white relative lg:p-8 order-2 lg:order-1 w-[300px] ">
            <div className=" flex items-center justify-center gap-2 ">
                <p className=' p-0.5 px-2 text-[.6rem] lg:text-sm text-gray-300/70 rounded-xl bg-gray-500/20'>01</p>
                <h3 className='font-bold text-[1.3rem] lg:text-4xl'>Booking</h3>
            </div>
            <p className=' text-[1.2rem] lg:text-[1.2rem] font-semibold mt-4 lg:mt-20'>100% Profit target</p>
            <p className='lg:text-sm text-[.7rem] text-gray-400 lg:mt-2 mt-1'>The evaluation process starts with the first challenge. You must pass all requirements of this stage to become eligible and move on to the verification stage and become an Alpha funded trader!</p>

             <img src="/src/assets/bg-high-1.png" className=' top-10 left-10 absolute hidden ' alt="" />
        </div>

    

        <div id='no2' className="flex items-start justify-center flex-col text-white relative lg:p-8 order-3 lg:order-3 w-[300px]">
            <div className=" flex items-center justify-center gap-2 ">
                <p className=' p-0.5 px-2 text-[.6rem] lg:text-sm text-gray-300/70 rounded-xl bg-gray-500/20'>02</p>
                <h3 className='font-bold text-[1.3rem] lg:text-4xl'>Booking</h3>
            </div>
            <p className=' text-[1.2rem] lg:text-[1.2rem] font-semibold mt-4 lg:mt-20'>100% Profit target</p>
            <p className='lg:text-sm text-[.7rem] text-gray-400 lg:mt-2 mt-1'>The evaluation process starts with the first challenge. You must pass all requirements of this stage to become eligible and move on to the verification stage and become an Alpha funded trader!</p>

             <img src="/src/assets/bg-high-1.png" className=' top-10 left-10 absolute hidden ' alt="" />
        </div>

      </div>


      <div className=" flex flex-col mt-4 sm:justify-center sm:items-center  lg:w-[80%] m-auto relative ">

        <img src="/src/assets/final.png" className='hidden lg:block' alt="" />

         <div className="flex lg:items-center  justify-center flex-col text-white lg:text-center lg:w-[30rem] sm:m-auto w-[300px]  ">
            <div className=" flex items-center justify-cente gap-2 ">
                <p className=' p-0.5 px-2 text-[.6rem] lg:text-sm text-gray-300/70 rounded-xl bg-gray-500/20'>03</p>
                <h3 className='font-bold text-[1.3rem] lg:text-4xl'>Booking</h3>
            </div>
            <p className='text-[1.2rem] lg:text-[1.2rem] font-semibold mt-4 lg:mt-20'>90:10 Simulated Performance Reward Structuret</p>
            <p className='lg:text-sm text-[.7rem] text-gray-400 lg:mt-2 mt-1'>T90:10 Simulated Performance Reward Structure</p>
        </div>
      </div>

      <img src="/src/assets/small-screen-ng.png" className='absolute top-72 right-10 sm:right-40 lg:hidden' alt="" />
    </div>
  )
}

export default Dk_Process
