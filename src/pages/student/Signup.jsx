import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Signup = () => {
  let nameRef = useRef()
  let emailRef = useRef()
  let passwordRef = useRef()

  let navigate = useNavigate()

  const handleSubmit = async(e)=>{
      e.preventDefault();

      let obj = {
          name:nameRef.current.value,
          email:emailRef.current.value,
          password:passwordRef.current.value
      }

      console.log(obj)
    try {
      let res = await fetch('http://localhost:8080/users/create',{
          method:"POST",
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(obj)
      })

      let data = await res.json();
      console.log(data)
      if(data.success){
          navigate('/login')
          toast.success(data.msg,{position:'top-left'})
      }
      else{
          toast.error(data.msg,{position:'top-left'})
      }
    } catch (error) {
      toast.error('server error',{position:'top-left'})
    }
  }


  return (
   

<div class="font-[sans-serif] bg-gradient-to-r from-purple-900 via-purple-800 to-purple-600 text-gray-800">
      <div class="min-h-screen flex fle-col items-center justify-center lg:p-6 p-4">
        <div class="grid md:grid-cols-2 items-center gap-10 max-w-6xl w-full">
          
          <div>
  <a href="javascript:void(0)">
    <img
      src="https://readymadeui.com/readymadeui-white.svg"
      alt="Job Portal Logo"
      class="w-52 mb-12 inline-block"
    />
  </a>
  <h2 class="text-4xl font-extrabold lg:leading-[50px] text-white">
    Login to Access Your Career Dashboard
  </h2>
  <p class="text-sm mt-6 text-white">
    Discover personalized job recommendations, manage your applications, and connect with top employers effortlessly.
  </p>
  <p class="text-sm mt-6 text-white">
  Already have an account?
    <Link to="/login" class="text-white font-semibold underline ml-1">
      login
    </Link>
  </p>
</div>

          <form class="bg-white rounded-xl px-6 py-8 space-y-6 max-w-md md:ml-auto w-full">
            <h3 class="text-3xl font-extrabold mb-12">
              Sign in
            </h3>

            <div>
              <input   ref={nameRef} type="text" autocomplete="name" required class="bg-gray-100 focus:bg-transparent w-full text-sm px-4 py-3.5 rounded-md outline-gray-800" placeholder="Enter name" />
            </div>
            <div>
              <input   ref={emailRef} type="email" autocomplete="email" required class="bg-gray-100 focus:bg-transparent w-full text-sm px-4 py-3.5 rounded-md outline-gray-800" placeholder="Email address" />
            </div>
            <div>
              <input   ref={passwordRef} type="password" autocomplete="current-password" required class="bg-gray-100 focus:bg-transparent w-full text-sm px-4 py-3.5 rounded-md outline-gray-800" placeholder="Password" />
            </div>
           
            <div>
              <button   onClick={handleSubmit} type="button" class="w-full shadow-xl py-3 px-6 text-sm font-semibold rounded-md text-white bg-gray-800 hover:bg-[#222] focus:outline-none">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Signup;





// import React, { useRef } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'

// const Signup = () => {
//     let nameRef = useRef()
//     let emailRef = useRef()
//     let passwordRef = useRef()

//     let navigate = useNavigate()

//     const handleSubmit = async(e)=>{
//         e.preventDefault();

//         let obj = {
//             name:nameRef.current.value,
//             email:emailRef.current.value,
//             password:passwordRef.current.value
//         }

//         console.log(obj)
//       try {
//         let res = await fetch('http://localhost:8080/users/create',{
//             method:"POST",
//             headers:{
//                 'content-type':'application/json'
//             },
//             body:JSON.stringify(obj)
//         })

//         let data = await res.json();
//         console.log(data)
//         if(data.success){
//             navigate('/login')
//             toast.success(data.msg,{position:'top-left'})
//         }
//         else{
//             toast.error(data.msg,{position:'top-left'})
//         }
//       } catch (error) {
//         toast.error('server error',{position:'top-left'})
//       }
//     }

//   return (
//     <div>


// <section className="relative flex flex-wrap lg:h-screen lg:items-center">
//   <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
//     <div className="mx-auto max-w-lg text-center">
//       <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

//       <p className="mt-4 text-gray-500">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
//         ipsa culpa autem, at itaque nostrum!
//       </p>
//     </div>

//     <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
//       <div>
//         <label htmlFor="name" className="sr-only">Name</label>

//         <div className="relative">
//           <input
//           ref={nameRef}
//             type="text"
//             className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
//             placeholder="Enter name"
//           />

       
//         </div>
//       </div>
//       <div>
//         <label htmlFor="email" className="sr-only">Email</label>

//         <div className="relative">
//           <input
//           ref={emailRef}
//             type="email"
//             className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
//             placeholder="Enter email"
//           />

//           <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="size-4 text-gray-400"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
//               />
//             </svg>
//           </span>
//         </div>
//       </div>

//       <div>
//         <label htmlFor="password" className="sr-only">Password</label>

//         <div className="relative">
//           <input
//           ref={passwordRef}
//             type="password"
//             className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
//             placeholder="Enter password"
//           />

//           <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="size-4 text-gray-400"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//               />
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//               />
//             </svg>
//           </span>
//         </div>
//       </div>

//       <div className="flex items-center justify-between">
//         <p className="text-sm text-gray-500">
//           Already have an account?
//           <Link className="underline" to="/login">Log in</Link>
//         </p>

//         <button

//         onClick={handleSubmit}
//           type="submit"
//           className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
//         >
//           Sign up
//         </button>
//       </div>
//     </form>
//   </div>

//   <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
//     <img
//       alt=""
//       src="https://wallpaperaccess.com/full/6434096.jpg"
//       className="absolute inset-0 h-full w-full object-cover"
//     />
//   </div>
// </section>
//     </div>
//   )
// }

// export default Signup