import React from 'react';
import { auth } from '../Utils/fiberbase';
import {  signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const Browse = () => {
    const navigate = useNavigate()
    const signoutHadler = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")

        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div className='flex justify-between '>
            <div className='bg-gradient-to-b justify-around from-black px-6 py-2 ml-32 mt-6 w-48    z-50 '>
                <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix-logo" />

            </div>
            <div className='my-12 mx-36  cursor-pointer flex '>
                <img src="https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt="" className='w-75% ' />
                <button className='ml-4 border p-2 bg-red-600 text-gray-50 rounded-lg cursor-pointer  hover:bg-red-800 ease-in duration-300' onClick={signoutHadler}>Sign Out</button>
            </div>




        </div>
    );
}

export default Browse;
