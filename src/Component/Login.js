import React from 'react';
import Header from './Header';

const Login = () => {
    return (
        <div>
            <Header/>
            <div className='absolute '>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/151f3e1e-b2c9-4626-afcd-6b39d0b2694f/web/IN-en-20241028-TRIFECTA-perspective_bce9a321-39cb-4cce-8ba6-02dab4c72e53_large.jpg" alt="background-image " />
            </div>
            <form className='absolute bg-black w-[31%] text-center p-12  my-36 mx-auto right-0 left-0 bg-opacity-80'>
               <h1 className='text-white font-sans font-bold text-3xl'>Sign In</h1>
                <input type="text" placeholder='Email'  className='mt-4 w-11/12 py-3 rounded-sm bg-black  opacity-30 border pl-3'/><br />
                <input type="password" placeholder='Password'className=' mt-4 w-11/12  py-3 bg-[#A7C7E7] opacity-40  border rounded-sm pl-3 ' /><br />
                <button className='bg-red-700  text-white mt-4 py-2 w-11/12 rounded-sm font-sans'> Sign In </button><br />
                <p className='font-sans text-white mt-4'>New to Netflix? Sign up now.</p>

            </form>
        </div>
    );
}

export default Login;

