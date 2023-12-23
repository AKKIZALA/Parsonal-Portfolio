import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBDjoxPKvIP7hiWnW45X96jhTvIpeP3sMs",
  authDomain: "portfolio-a53fa.firebaseapp.com",
  projectId: "portfolio-a53fa",
  storageBucket: "portfolio-a53fa.appspot.com",
  messagingSenderId: "746839205102",
  appId: "1:746839205102:web:0ed397f4cb68afb4d1bfff",
  measurementId: "G-7KYTQBWMDH"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore()