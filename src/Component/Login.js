import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidate } from '../Utils/Validation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Utils/fiberbase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [isSignInToggling, setSignInToggling] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

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
                console.log("User signed up:", userCredential.user);
                navigate("/browse"); // Redirect to browse on successful sign-up
            } else {
                // Sign-In Logic
                const userCredential = await signInWithEmailAndPassword(
                    auth,
                    emailRef.current.value,
                    passwordRef.current.value
                );
                console.log("User signed in:", userCredential.user);
                navigate("/browse"); // Redirect to home on successful sign-in
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
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/151f3e1e-b2c9-4626-afcd-6b39d0b2694f/web/IN-en-20241028-TRIFECTA-perspective_bce9a321-39cb-4cce-8ba6-02dab4c72e53_large.jpg"
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
