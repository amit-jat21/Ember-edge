
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ember-estate.firebaseapp.com",
  projectId: "ember-estate",
  storageBucket: "ember-estate.appspot.com",
  messagingSenderId: "384745250739",
  appId: "1:384745250739:web:ca6163d4156786dff3f5c6"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);



