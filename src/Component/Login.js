import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidate } from '../Utils/Validation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../Utils/fiberbase';
import { NetflixBackground } from '../Utils/Constant';


const Login = () => {
    const [isSignInToggling, setSignInToggling] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    

    const handleToggling = () => {
        setSignInToggling(!isSignInToggling);
        setErrorMessage(null); // Clear error when toggling
    };

    const buttonHandler = async () => {
        const message = checkValidate(emailRef.current.value, passwordRef.current.value);
        setErrorMessage(message);
    
        if (message) return; // Exit if there's a validation error
    
        try {
            if (!isSignInToggling) {
                // Sign-Up Logic
                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    emailRef.current.value,
                    passwordRef.current.value
                );
                alert("User signed up successfully!");
    
                await updateProfile(userCredential.user, {
                    displayName: nameRef.current.value // Set displayName correctly
                });
    
                 
    
            } else {
                // Sign-In Logic
                const userCredential = await signInWithEmailAndPassword(
                    auth,
                    emailRef.current.value,
                    passwordRef.current.value
                );
                
                
                
            }
        } catch (error) {
            console.error("Authentication error:", error);
            setErrorMessage(`${error.code}: ${error.message}`);
        }
    };
    

    return (
        <div>
            <Header />
            <div className="absolute">
                <img
                    src={NetflixBackground}
                    alt="Netflix background"
                    className="w-full h-full object-cover"
                />
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="absolute bg-black w-[31%] text-center p-12 my-36 mx-auto right-0 left-0 bg-opacity-80 rounded-xl"
            >
                <h1 className="text-white font-sans font-bold text-3xl">
                    {isSignInToggling ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInToggling && (
                    <input
                        ref={nameRef}
                        type="text"
                        placeholder="Full Name"
                        className="mt-4 w-11/12 py-3 rounded-lg opacity-40 border pl-3"
                    />
                )}
                <input
                    ref={emailRef}
                    type="text"
                    placeholder="Email"
                    className="mt-4 w-11/12 py-3 rounded-lg opacity-40 border pl-3"
                />
                <input
                    ref={passwordRef}
                    type="password"
                    placeholder="Password"
                    className="mt-4 w-11/12 py-3 border rounded-lg pl-3 opacity-40"
                />
                {errorMessage && (
                    <p className="text-red-600 text-sm text-left ml-4 mt-2">{errorMessage}</p>
                )}
                <button
                    className="bg-red-700 text-white mt-4 py-2 w-11/12 rounded-lg font-sans"
                    onClick={buttonHandler}
                >
                    {isSignInToggling ? "Sign In" : "Sign Up"}
                </button>
                <p
                    className="font-sans text-white mt-4 cursor-pointer"
                    onClick={handleToggling}
                >
                    {isSignInToggling ? "New to Netflix? Sign up now." : "Already Registered? Sign In"}
                </p>
            </form>
        </div>
    );
};

export default Login;
