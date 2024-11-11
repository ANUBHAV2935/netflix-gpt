import { onAuthStateChanged } from 'firebase/auth/cordova';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, RemoveUser } from '../Utils/Slice';
import { auth } from '../Utils/fiberbase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { netflixLogo, Signo } from '../Utils/Constant';

const Header = () => {
    const [currentUser, SetcurrentUser] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signoutHadler = () => {
        signOut(auth).then(() => {
            // Sign-out successful.


        }).catch((error) => {
            // An error happened.
        });
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                SetcurrentUser(user)
                navigate("/browse")



            } else {

                dispatch(RemoveUser());
                navigate("/")


            }
        });
        // unsbscribe when comonent unmout 
        return () => unsubscribe();

    }, [dispatch, navigate])

    return (
        <div className=' absolute flex   '>

            <div className=' bg-gradient-to-b  from-black px-6 py-2 ml-32 mt-6 w-48 z-50 '>
                <img src={netflixLogo} alt="Netflix-logo" />


            </div>
            <div className='ml-[850px]'>
                {
                    currentUser && <div className='my-12  cursor-pointer flex justify-between '>
                        <img src={Signo} alt="Sign-outLogo" className='w-75% ' />
                        <div>
                            <button className='ml-4 border p-2 bg-red-600 text-gray-50 rounded-lg cursor-pointer  hover:bg-red-800 ease-in duration-300' onClick={signoutHadler}>Sign Out</button>
                        </div>
                    </div>

                }
            </div>
        </div>






    );
}

export default Header;
