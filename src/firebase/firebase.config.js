// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgiJ43SmTjof1I8taUf7lMC8AtT_aWW8o",
  authDomain: "tastebite-chef-recipe.firebaseapp.com",
  projectId: "tastebite-chef-recipe",
  storageBucket: "tastebite-chef-recipe.appspot.com",
  messagingSenderId: "792688310145",
  appId: "1:792688310145:web:e5e8cd42e7e155a3a4da80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;