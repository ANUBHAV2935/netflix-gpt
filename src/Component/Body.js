import React, { useEffect } from 'react';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { auth } from '../Utils/fiberbase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, RemoveUser } from '../Utils/Slice';

const Body = () => {
    const dispatch = useDispatch();
    
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }

    ])
    useEffect(() => {
        
        onAuthStateChanged(auth, (user) => {
            if (user) {
                
                const {uid,email,displayName} = user;
                dispatch(addUser({uid:uid,email:email,displayName:displayName}));
               

                
            } else {
              
                dispatch(RemoveUser());
                

            }
        });

    }, [])
    return (

        <div>
            <RouterProvider router={appRouter} />

        </div>
    );
}

export default Body;
