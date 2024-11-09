// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQLNS7ZPlLNNBnELso2HxCniVmShSRw0Q",
  authDomain: "netflix-gpt-3fdda.firebaseapp.com",
  projectId: "netflix-gpt-3fdda",
  storageBucket: "netflix-gpt-3fdda.firebasestorage.app",
  messagingSenderId: "670394576748",
  appId: "1:670394576748:web:d58fab0e319bc08ea98d49",
  measurementId: "G-D6TJKMEPGR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();