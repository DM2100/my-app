import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDRgjux2O5_pBM5rkz6jCbYd5Fkolh_mdg",
    authDomain: "auth-commerce.firebaseapp.com",
    projectId: "auth-commerce",
    storageBucket: "auth-commerce.appspot.com",
    messagingSenderId: "191359290773",
    appId: "1:191359290773:web:5fb2390b6175979ae9fa9c",
    measurementId: "G-X2G7D8SZV0"
  };


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
