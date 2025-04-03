import img from '/imgwsv.png'

function votersLogin() {
  return (
    <>
    {/*Report*/}
    <div className='flex justify-center items-center flex-col md:flex-row gap-5 w-full p-5'>
    <div className='md:w-1/2 md:px-10'>
        <img src={img} alt="" />
    </div>
    <div className="md:w-1/2">
    <div className="max-w-2xl text-justify">
        <h1 className='font-semibold text-3xl sm:text-4xl md:text-5xl my-5'> Of Course You Have The Right To Vote...</h1>
        <p className='my-1'>But only members of NAMSSN UI are eligble to vote in this election. If you think this is a mistake, please <a className='text-amber-500 text-underline'>send us a message</a> to resolve this. 
        </p>
    </div>
    </div>
    </div>

    <div className="bg-black text-white p-10 my-10">
        <div className="flex justify-around flex-col md:flex-row items-center m-10">
        <div className="flex">
             <svg width="100" height="100" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-5'>
             <path d="M15 30C10.8333 30 7.29167 28.5417 4.375 25.625C1.45833 22.7083 0 19.1667 0 15C0 10.8333 1.45833 7.29167 4.375 4.375C7.29167 1.45833 10.8333 0 15 0C18.75 0 22.0108 1.1875 24.7825 3.5625C27.5542 5.9375 29.2308 8.91667 29.8125 12.5H50V17.5H29.8125C29.2292 21.0833 27.5517 24.0625 24.78 26.4375C22.0083 28.8125 18.7483 30 15 30Z" fill="#FF9900"/>
             </svg>
            <div className="mt-8">
             <h1 className='text-2xl font-bold'>
              Begin  
             </h1>
             <p>
              Begin the process by inputing your unique identifier and password in the fields for unique identifier and password and hit the login button.
             </p>
             </div>
        </div>
        <div className="flex">
        <svg width="100" height="100" viewBox="0 0 70 30" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-5'>
        <path fillRule="evenodd" clipRule="evenodd" d="M21.0603 20.6992C21.9311 22.8961 23.3168 24.8088 25.2175 26.4375C27.9833 28.8075 31.2362 29.995 34.9762 30C34.9841 30 34.9921 30 35 30C37.1128 30 39.0649 29.625 40.8563 28.8751C42.2579 28.2905 43.5658 27.4779 44.78 26.4375C46.6321 24.8505 47.9956 22.9937 48.8705 20.8672C49.3176 19.8017 49.632 18.6793 49.8136 17.5H70V12.5H49.8136C49.6415 11.3825 49.3502 10.3161 48.9397 9.30084C48.0689 7.10395 46.6832 5.19117 44.7825 3.5625C43.4008 2.37858 41.8976 1.48975 40.2729 0.896009C38.6433 0.29867 36.8856 0 35 0C32.8869 0 30.9345 0.375083 29.1429 1.12524C27.7416 1.70986 26.434 2.52228 25.22 3.5625C23.3679 5.1495 22.0044 7.00627 21.1295 9.13281C20.6824 10.1983 20.368 11.3207 20.1864 12.5H0V17.5H20.1864C20.3585 18.6175 20.6498 19.6839 21.0603 20.6992Z" fill="#FF9900"/>
        </svg>
            <div className="mt-8">
            <h1 className='text-2xl font-bold'>
                Verify
            </h1>
            <p>
            Verify that the information that is displayed on the page is yours and tallies with your personal information. If not, contact support.
            </p>
            </div>
        </div>
        <div className="flex">
        <svg width="100" height="100" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-5'>
        <path d="M35 30C31.25 30 27.9892 28.8125 25.2175 26.4375C22.4458 24.0625 20.7692 21.0833 20.1875 17.5H0V12.5H20.1875C20.7708 8.91667 22.4483 5.9375 25.22 3.5625C27.9917 1.1875 31.2517 0 35 0C39.1667 0 42.7083 1.45833 45.625 4.375C48.5417 7.29167 50 10.8333 50 15C50 19.1667 48.5417 22.7083 45.625 25.625C42.7083 28.5417 39.1667 30 35 30Z" fill="#FF9900"/>
        </svg>
        <div className="mt-8">
            <h1 className='text-2xl font-bold'>
                Vote
            </h1>
            <p>
            Remember, your vote matters. Choose wisely, but don&apos;t overthink it. Somewhere inside us resides the power to change the world.
            </p>
        </div>
        </div>
        </div>
        <div className=" flex justify-center">
        <button className='border-2 border-gray-500 font-bold py-3 px-4 rounded-lg hover:bg-gray-500 hover:text-black transition-colors'> Begin the Process</button>
        </div>
    </div>
         
    </>
  )
}

export default votersLogin