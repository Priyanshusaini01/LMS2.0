import React, { use } from "react";
import { useLocation, Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react"; //The useUser() hook provides access to the current user's User object, which contains all the data for a single user in your application and provides methods to manage their account. This hook also allows you to check if the user is signed in and if Clerk has loaded and initialized.
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";
// import { useNavigate } from "react-router-dom"; //useNavigate is a hook that returns a function that lets you navigate programmatically, similar to the history.push method in React Router v5.

const Navbar=()=> {
  
  const {navigate,isEducator}=useContext(AppContext);

  const location = useLocation();
  const iscourselist = location.pathname.includes("/course-list"); // if true then show white background else cyan background
  const iseducator = location.pathname.includes("/educator"); // if true then show educator navbar else student navbar
    
   

  const { openSignIn } = useClerk(); //opensignin is a function that opens the sign-in modal when called.
  const { user } = useUser(); //user is an object that contains information about the current user, such as their ID, email address, and other profile information.
  
  
  return (
    // backgroun UI
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${
        iscourselist ? "bg-white" : "bg-cyan-100/70"
      }`}
    >
      <img onClick={()=>navigate('/')}
        src={assets.logo}
        alt="logo"
        className="w-28 lg:w-32 cursor-pointer"
      />

      <div className="hidden md:flex items-center gap-5 text-gray-500">
          <div className="flex items-center gap-5">
            {/*  if user login then only show  educator and my enrollement using use  <></>*/}
            { user &&<>   
            <button onClick={()=>{navigate('/educator')}}> { isEducator ? 'Educator Dashboard' : 'Become Educator'} </button>
            <Link to="/my-enrollment" className="ml-4">
              My Enrollments
            </Link>
          </>
}
        </div>
       {/*  if user alredy there*/}
         {user ? (
          <UserButton signOutUrl="/" />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-blue-600 text-white px-5 py-2 rounded-full"
          >
            Create Account
          </button>
        )}
      </div>
      {/*for phone screen */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
        <div className='flex items-center gap-1 sm:gap-5 max-sm:text-xs'> 
         { user &&<>   
          <button onClick={()=>{navigate('/educator')}}> { isEducator ? 'Educator dashboard' : 'Become Educator'}Become Educator</button>
            <Link to="/my-enrollment" className="ml-4">
              My Enrollments
            </Link>
          </>
          }
        </div>
        { user ? <UserButton/> :
          <button onClick={()=> openSignIn()}>
          <img src={assets.user_icon} alt="" />
        </button>}
      </div>
    </div>
  );
}
export default Navbar;