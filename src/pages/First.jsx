import React from 'react';
import login from '../images/login.png';
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';

const First = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-screen">
    <div className="flex flex-col justify-center items-center p-10 text-white bg-violet-500">
        <img src={login} className="w-full object-contain max-w-md" alt="Login"/>
        <div className="mt-5 text-left">
          <h3 className="text-lg font-semibold pt-12">AnalyticBox</h3>
          <p className="text-sm">
          Use the data analysis platform on various platforms and get the benefits of convenience by using AnalyticBox
          </p>
        </div>
      </div>
      <div className="p-5 bg-white place-content-center flex flex-col items-center text-center">
      <img src={logo} className="w-10 h-10 object-contain max-w-full mb-6" alt="Logo" />
        <h1 className="text-3xl font-semibold mb-3">Login to your account</h1>
        <h2 className="text-sm text-gray-700 mb-4">Welcome back! Input your account details!</h2>
        <form className='items-center'>
          <div className="flex flex-col mb-4 items-center pt-5">
            <input type="text" id="email" placeholder="Email" className="p-2 border bg-white border-violet-400 rounded-md w-80"/>
          </div>
          <div className="flex flex-col items-center mb-4">
            <input type="password" id="password" placeholder="Password" className="p-2 border bg-white border-violet-400 rounded-md w-80"/>
          </div>
          <div className="flex flex-col-2 gap-20 mb-4 place-content-center pt-2 pb-2">
            <div className="flex items-center">
              <input type="checkbox" id="rememberMe" className="mr-2"/>
              <label htmlFor="rememberMe" className="text-sm mr-5">Remember me</label>
            </div>
            <div>
            <Link to={"/Forgot"} className="text-sm text-blue-400  hover:text-blue-600">
            Forgot password?
            </Link>
            </div>
          </div>
          <div>
            <Link to={"/Dashboard"}>  
            <button type="submit" id="submit" className="p-3 w-80 text-white text-sm rounded-md bg-blue-500 hover:bg-blue-700">Login</button>
            </Link>
          </div>
        </form>
        <div>
            <p className='text-sm pt-6'>Contact admin to create your account</p>
        </div>
      </div>


      
    </div>
  );
}

export default First;
