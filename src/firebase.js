import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuC2N6bxSrm9VYNFKwZOZthlS1oaCS6qc",
  authDomain: "gifsearch-9c256.firebaseapp.com",
  projectId: "gifsearch-9c256",
  storageBucket: "gifsearch-9c256.appspot.com",
  messagingSenderId: "609864187336",
  appId: "1:609864187336:web:12a5762892d93f187f94fd",
  measurementId: "G-JJ01H1PEFP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export{app,auth};
