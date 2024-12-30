
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import { FaBriefcase, FaUsers, FaPlus } from "react-icons/fa";
// import CompanySIdebar from "../../components/CompanySIdebar";
// import { Link } from "react-router-dom";

// const CompanyDashboard = () => {
//   const [jobStats, setJobStats] = useState({
//     totalJobs: 0,
//     totalApplications: 0,
//   });
//   const [allJobs, setAllJobs] = useState([]);

//   const userStore = useSelector((state) => state.user);

//   // Fetch Dashboard Stats
//   const fetchStats = async () => {
//     let res = await axios.get("http://localhost:8080/company/dashboard/stats", {
//       headers: { Authorization: userStore.token },
//     });

//     let data = res.data;
//     if (data.success) {
//       setJobStats({
//         totalJobs: data.totalJobs,
//         totalApplications: data.totalApplications,
//       });
//     }
//   };

//   // Fetch Company Jobs
//   const fetchAllJobs = async () => {
//     let res = await axios.get("http://localhost:8080/job/singlecompanyalljob", {
//       headers: { Authorization: userStore.token },
//     });

//     let data = res.data;
//     if (data.success) {
//       setAllJobs(data.jobs);
//     }
//   };

//   useEffect(() => {
//     fetchStats();
//     fetchAllJobs();
//   }, []);

//   return (
//     <div className="flex bg-gray-100 min-h-screen">
//       {/* Sidebar */}
//       <CompanySIdebar/>

     


//       {/* Main Content */}
//       <div className="ml-60 w-full">
//         {/* Hero/Banner */}
//         <div className="bg-purple-700 m-3  text-white p-10  rounded-b-lg shadow-md">
//           <h1 className="text-4xl font-bold">Welcome to Your Dashboard</h1>
//           <p className="mt-2 text-lg">Manage your jobs, applications, and company profile efficiently.</p>
//         </div>

//         <div className="p-6">
//           {/* Summary Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//             <div className="p-6 bg-white shadow-md rounded-lg flex items-center">
//               <FaBriefcase size={36} className="text-blue-600 mr-4" />
//               <div>
//                 <h2 className="text-lg font-semibold">Total Jobs</h2>
//                 <p className="text-2xl font-bold text-blue-500">{jobStats.totalJobs}</p>
//               </div>
//             </div>
//             <div className="p-6 bg-white shadow-md rounded-lg flex items-center">
//               <FaUsers size={36} className="text-green-600 mr-4" />
//               <div>
//                 <h2 className="text-lg font-semibold">Total Applications</h2>
//                 <p className="text-2xl font-bold text-green-500">{jobStats.totalApplications}</p>
//               </div>
//             </div>
//             <div className="p-6 bg-white shadow-md rounded-lg flex items-center">
//               <FaBriefcase size={36} className="text-yellow-600 mr-4" />
//               <div>
//                 <h2 className="text-lg font-semibold">Active Jobs</h2>
//                 <p className="text-2xl font-bold text-yellow-500">
//                   {jobStats.totalJobs} {/* Modify logic if needed */}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Job Actions */}
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-2xl font-bold">My Job Listings</h2>
//             <Link to='/companyDashboard/createJob' className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
//               <FaPlus className="mr-2" />
//               Add New Job
//             </Link>
//           </div>

//           {/* Job List */}
//           <div className="bg-white shadow-lg rounded-lg">
//             <table className="w-full border-collapse">
//               <thead>
//                 <tr className="bg-gray-200 text-gray-700">
//                   <th className="p-3 text-left">Job Title</th>
//                   <th className="p-3 text-left">Salary</th>
//                   <th className="p-3 text-left">Applications</th>
//                   <th className="p-3 text-left">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {allJobs.map((job) => (
//                   <tr key={job._id} className="border-b hover:bg-gray-100">
//                     <td className="p-3">{job.title}</td>
//                     <td className="p-3">{job.salary} Rs</td>
//                     <td className="p-3">{job.applications || 0}</td>
//                     <td className="p-3">
//                       <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2">
//                         Edit
//                       </button>
//                       <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//                 {allJobs.length === 0 && (
//                   <tr>
//                     <td colSpan="4" className="text-center p-4">
//                       No jobs posted yet.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CompanyDashboard;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { FaBriefcase, FaUsers, FaPlus } from "react-icons/fa";
import CompanySIdebar from "../../components/CompanySIdebar";
import { Link } from "react-router-dom";

const CompanyDashboard = () => {
  const [jobStats, setJobStats] = useState({
    totalJobs: 0,
    totalApplications: 0,
  });
  const [allJobs, setAllJobs] = useState([]);

  const userStore = useSelector((state) => state.user);

  // Fetch Dashboard Stats
  const fetchStats = async () => {
    try {
      let res = await axios.get("http://localhost:8080/company/dashboard/stats", {
        headers: { Authorization: userStore.token },
      });

      let data = res.data;
      if (data.success) {
        setJobStats({
          totalJobs: data.totalJobs, // Set total jobs dynamically
          totalApplications: data.totalApplications,
        });
      }
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  // Fetch Company Jobs
  const fetchAllJobs = async () => {
    try {
      let res = await axios.get("http://localhost:8080/job/singlecompanyalljob", {
        headers: { Authorization: userStore.token },
      });

      let data = res.data;
      if (data.success) {
        setAllJobs(data.jobs);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  // Calculate Total Jobs from Job List if API doesn't provide it
  const calculateTotalJobs = () => {
    setJobStats((prevStats) => ({
      ...prevStats,
      totalJobs: allJobs.length,
    }));
  };

  useEffect(() => {
    fetchStats();
    fetchAllJobs();
  }, []);

  useEffect(() => {
    calculateTotalJobs();
  }, [allJobs]);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <CompanySIdebar />

      {/* Main Content */}
      <div className="ml-60 w-full">

<div className="bg-gray-800 font-sans min-h-[350px] relative max-w-6xl mx-auto rounded overflow-hidden">
  <div className="grid lg:grid-cols-2 w-full h-full absolute inset-0">
    {/* Left Section - Image */}
    <div className="p-4 max-lg:hidden">
      <img src="https://readymadeui.com/image-1.webp" className="object-cover w-full h-full" alt="img" />
    </div>
    {/* Right Section - Content */}
    <div className="flex flex-col items-end justify-center text-right px-8 relative bg-[#262464] rounded-tl-[206px] z-20 before:absolute before:inset-0 before:!left-auto before:bg-[#293587] before:w-2/3 before:rounded-bl-[206px] before:-z-10">
      <h3 className="font-bold sm:text-4xl text-2xl text-yellow-400">Explore the Dashboard</h3>
      <p className="text-sm text-gray-300 mt-4">Manage all your business needs in one place. Enhance productivity with seamless integration and intuitive design.</p>
     
    </div>
  </div>
</div>

        <div className="p-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-white shadow-md rounded-lg flex items-center">
              <FaBriefcase size={36} className="text-blue-600 mr-4" />
              <div>
                <h2 className="text-lg font-semibold">Total Jobs</h2>
                <p className="text-2xl font-bold text-blue-500">
                  {jobStats.totalJobs || allJobs.length}
                </p>
              </div>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg flex items-center">
              <FaUsers size={36} className="text-green-600 mr-4" />
              <div>
                <h2 className="text-lg font-semibold">Total Applications</h2>
                <p className="text-2xl font-bold text-green-500">{jobStats.totalApplications}</p>
              </div>
            </div>
            
          </div>

          {/* Job Actions */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">My Job Listings</h2>
            <Link
              to="/companyDashboard/createJob"
              className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
            >
              <FaPlus className="mr-2" />
              Add New Job
            </Link>
          </div>

          {/* Job List */}
          <div className="bg-white shadow-lg rounded-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="p-3 text-left">Job Title</th>
                  <th className="p-3 text-left">Salary</th>
                  <th className="p-3 text-left">Applications</th>
                  <th className="p-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {allJobs.map((job) => (
                  <tr key={job._id} className="border-b hover:bg-gray-100">
                    <td className="p-3">{job.title}</td>
                    <td className="p-3">{job.salary} Rs</td>
                    <td className="p-3">{job.applications || 0}</td>
                    <td className="p-3">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2">
                        Edit
                      </button>
                      <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {allJobs.length === 0 && (
                  <tr>
                    <td colSpan="4" className="text-center p-4">
                      No jobs posted yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;


