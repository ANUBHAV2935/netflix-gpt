import { onAuthStateChanged } from 'firebase/auth/cordova';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, RemoveUser } from '../Utils/Slice';
import { auth } from '../Utils/fiberbase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { netflixLogo } from '../Utils/Constant';
import { toggleGptSearch } from '../Utils/GptSearchSlice';
import { language_identifier } from '../Utils/Constant';
import { useRef } from 'react';
import { languageLingo } from '../Utils/ConfigSlice';


const Header = () => {
    const toggling = useSelector(store => store.gptReducer?.ShowGptSearch);

    const internalValue = useRef();
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

    const gptsearchHadler = () => {
        dispatch(toggleGptSearch());


    }
    const changeHadler = () => {
        dispatch(languageLingo(internalValue.current?.value));

    }

    return (
        <div className=' absolute flex  my-10 justify-around'>

            <div className=' bg-gradient-to-b  from-black  py-2 ml-32 mt-6 w-44 z-50 '>
                <img src={netflixLogo} alt="Netflix-logo" />


            </div>
            <div className='ml-[750px]'>
                {
                    currentUser && <div className='my-12  cursor-pointer flex justify-between '>
                        {toggling &&
                            <div>
                                <select ref={internalValue} className='ml-4 border p-2 bg-gray-700 text-gray-50 rounded-lg cursor-pointer  hover:bg-gray-800 ease-in duration-300' onChange={changeHadler}>
                                    {

                                        language_identifier.map((current) => <option key={current.identifier} value={current.identifier} >{current.name}</option>
                                        )
                                    }

                                </select>
                            </div>
                        }
                        <div>
                            <button className='ml-4 border p-2 bg-indigo-400 text-gray-50 rounded-lg cursor-pointer  hover:bg-indigo-800 ease-in duration-300' onClick={gptsearchHadler} >{toggling?"Home page":"Gpt Search"}</button>
                        </div>

                        {!toggling &&

                            <div>
                                <button className='ml-4 border p-2 bg-red-600 text-gray-50 rounded-lg cursor-pointer  hover:bg-red-800 ease-in duration-300' onClick={signoutHadler}>Sign Out</button>
                            </div>
                        }
                    </div>

                }
            </div>
        </div>






    );
}

export default Header;
