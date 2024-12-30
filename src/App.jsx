import { useState } from 'react'

import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/student/Home'
import Login from './pages/student/Login'
import Signup from './pages/student/Signup'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import CompanySignup from './pages/company/CompanySignup'
import CompanyDashboard from './pages/company/CompanyDashboard'
import LandingPage from './pages/LandingPage'
import { useSelector } from 'react-redux'
import PNF from './pages/PNF'
import Navbar from './components/Navbar'
import CreateJob from './pages/company/CreateJob'
import AllCompanyJob from './pages/company/AllCompanyJob'
import Companies from './pages/company/Companies'
import ApplyJob from './pages/student/ApplyJob'
// import StudentNavbar from './components/StudentNavbar'

function App() {

  let userStore = useSelector((state) => state.user);
  console.log(userStore)
  let login = userStore.login;
  let role = userStore.role;

  return (
    <>
      <BrowserRouter>
        <div className='mb-[60px]'>
          {login === true && <Navbar />}
        </div>

        <Routes>
          <Route path='/' element={login === true && role === 'student' ? <Home /> : <Navigate to={'/landingPage'} />} />
          <Route path='/landingPage' element={login === false ? <LandingPage /> : login === true && role === 'student' ? <Navigate to='/' /> : <Navigate to={'/companyDashboard'} />} />

          <Route path='/login' element={login === false ? <Login /> : role === 'company' ? <Navigate to="/companyDashboard" /> : <Navigate to={'/'} />} />

          <Route path='/signup' element={<Signup />} />

          <Route path='/companySignup' element={<CompanySignup />} />
          <Route path='/companyDashboard' element={login === true && role === 'company' ? <CompanyDashboard /> : <Navigate to='/login' />} />
          <Route path="/companyDashboard/createJob" element={<CreateJob />} />
          <Route path="/companyDashboard/AllJob" element={<AllCompanyJob />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/applyjob" element={<ApplyJob />} />
          
         

          <Route path='/*' element={<PNF />} />
        </Routes>

        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App



// import { useState } from 'react'

// import './App.css'
// import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// import Home from './pages/student/Home'
// import Login from './pages/student/Login'
// import Signup from './pages/student/Signup'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';
// import CompanySignup from './pages/company/CompanySignup'
// import CompanyDashboard from './pages/company/CompanyDashboard'
// import LandingPage from './pages/LandingPage'
// import { useSelector } from 'react-redux'
// import PNF from './pages/PNF'
// import Navbar from './components/Navbar'
// import CreateJob from './pages/company/CreateJob'

// function App() {
  
//   let userStore = useSelector((state)=>state.user);
//   console.log(userStore)
//   let login = userStore.login;
//   let role = userStore.role;

//   return (
//     <>
//       <BrowserRouter>
//    {login ===true &&   <Navbar/>}
   
//         <Routes>
//           <Route path='/' element={login===true && role==='student' ? <Home/> : <Navigate to={'/landingPage'}/>}/>
//         <Route path='/landingPage' element={login===false ? <LandingPage/> : login===true && role==='student'?<Navigate to='/'/>:<Navigate to={'/companyDashboard'}/> }/>
         
//           <Route path='/login' element={login===false ? <Login/> : role==='company'?<Navigate to="/companyDashboard"/>:<Navigate to={'/'}/>}/>

//           <Route path='/signup' element={<Signup/>}/>
      
//           <Route path='/companySignup' element={<CompanySignup/>}/>
         
//           <Route path='/companyDashboard' element={login===true && role==='company'?  <CompanyDashboard/>:<Navigate to='/login'/>}/>
//           <Route path='/companyDashboard/createJob' element={<CreateJob/>}/>
//         <Route path='/*' element={<PNF/>}/>
//         </Routes>

//         <ToastContainer/>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App
