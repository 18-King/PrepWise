// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBjYwl56W6_Z8gpHlfVVPNz7mXMz6pIJss",
  authDomain: "prepwise-851f5.firebaseapp.com",
  projectId: "prepwise-851f5",
  storageBucket: "prepwise-851f5.firebasestorage.app",
  messagingSenderId: "833934511128",
  appId: "1:833934511128:web:5325893ac2acf5e566876d",
  measurementId: "G-BBV3V15EMS"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);