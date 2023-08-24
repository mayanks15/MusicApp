import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyApQI2SY59aRRGLW7jp3mzD_zbRN83xS64",
  authDomain: "musicapp-59f0e.firebaseapp.com",
  projectId: "musicapp-59f0e",
  storageBucket: "musicapp-59f0e.appspot.com",
  messagingSenderId: "424283395371",
  appId: "1:424283395371:web:9bf82fbe86e35ce532e16e",
  measurementId: "G-G4SLRP76W8",
  databaseURL: "https://musicapp-59f0e-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
export default app;
