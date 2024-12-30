

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import StudentRightBar from '../../components/StudentRightBar'

const Home = () => {

  let userStore = useSelector((state)=>state.user)
  console.log(userStore)

  const [AllJobs, setAllJobs] = useState([]);
  console.log(AllJobs)
  const getAllJobs = async()=>{
   try {
    let res = await axios.get('http://localhost:8080/job/getalljob')
    let data = res.data
    setAllJobs(data.jobs)
   } catch (error) {
      console.log(error)
   }
  }

  useEffect(()=>{
    getAllJobs()
  },[])

  const [selectedJob, setselectedJob] = useState("");
  const handleViewJob = (obj)=>{
      // console.log(obj)
    
      setselectedJob(obj)
  }
  return (
   <div>
     {/* <div className='w-full flex flex-col items-center gap-7'>
      {
        AllJobs.map((ele,index)=>{
          return <div key={ele._id} className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
  <div className="flex items-center justify-between">
    <span className="text-sm  text-gray-800 dark:text-gray-400 capitalize font-bold">{ele.company}</span>
          <img className='w-16 h-16 rounded-full'  src={ele.image} alt="" />
  </div>
  <div>
    <h1 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white capitalize">{ele.title}</h1>
    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{ele.description}</p>
  </div>
  <div>
    
    <div className="flex items-center justify-center mt-4">
      <a className="mr-2 text-gray-800 cursor-pointer dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" tabIndex={0} role="link" aria-label="twitter link">
          <button onClick={()=>handleViewJob(ele)} className='border-b-2 pb-2'>view full job detail</button>
      </a>
        
    </div>
  </div>
</div>

        })
      }
    </div> */}
     
     <div className="flex flex-col md:flex-row">
      <div className="flex-1 p-4 flex flex-col items-center gap-6 bg-gradient-to-b from-blue-50 via-indigo-100 to-white">
        {AllJobs.map((ele) => (
          <div
            key={ele._id}
            className="w-full max-w-sm px-4 py-3 bg-white bg-gradient-to-r from-white to-blue-50 rounded-md shadow-md "
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-indigo-700 font-semibold capitalize">{ele.company}</span>
              <img className="w-16 h-16 rounded-full" src={ele.image} alt={ele.company} />
            </div>
            <div className="mt-3">
              <h1 className="text-lg font-bold text-gray-800">{ele.title}</h1>
              <p className="text-sm text-gray-600 mt-2">{ele.description}</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={() => handleViewJob(ele)}
                className="text-indigo-600 border-b-2 border-indigo-600 hover:text-indigo-800 hover:border-indigo-800 transition"
              >
                View Full Details
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:block w-[350px]">
        <StudentRightBar job={selectedJob} />
      </div>
    </div>
   </div>
  )
}

export default Home


