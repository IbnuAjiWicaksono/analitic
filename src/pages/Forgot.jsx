import React from 'react';
import Pass from '../images/Pass.png';
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';

const Forgot = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-screen">
    <div className="flex flex-col justify-center items-center p-10 text-white bg-violet-500">
        <img src={Pass} className="w-full object-contain max-w-md" alt="Pass"/>
        <div className="mt-5 text-left">
          <h3 className="text-lg font-semibold pt-12">Change Your Password</h3>
          <p className="text-sm">
          The initial step to secure your account is to regain access if you forget the password you currently have
          </p>
        </div>
      </div>
      <div className="p-5 bg-white place-content-center flex flex-col items-center text-center">
      <img src={logo} className="w-10 h-10 object-contain max-w-full mb-6" alt="Logo" />
        <h1 className="text-3xl font-semibold mb-3">Forgot your pass?</h1>
        <h2 className="text-sm text-gray-700 mb-4 w-80">Please fill in the email associated with your account, we will send you an email with a link for you to change your password</h2>
        <form className='items-center'>
          <div className="flex flex-col mb-4 items-center pt-5">
            <input type="text" id="email" placeholder="Email" className="p-2 border bg-white border-violet-400 rounded-md w-80"/>
          </div>
          <div>
            <Link to={"/"}>  
            <button type="submit" id="submit" className="p-3 w-80 text-white text-sm rounded-md bg-blue-500 hover:bg-blue-700">Send Code</button>
            </Link>
          </div>
        </form>
        <div>
            <p className="text-sm pt-6">Cancel the process?<span className=" text-blue-400  hover:text-blue-600">
            <Link to={"/"}> Back to login page</Link>
            </span>
            </p>
        </div>
      </div>

    </div>
  );
}

export default Forgot;
