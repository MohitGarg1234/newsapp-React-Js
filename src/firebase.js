import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';

// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAwZnjmG0PtPw51ewISYy8umVuSc1BOfg4",
  authDomain: "newsapp-auth-74aee.firebaseapp.com",
  projectId: "newsapp-auth-74aee",
  storageBucket: "newsapp-auth-74aee.appspot.com",
  messagingSenderId: "882200868567",
  appId: "1:882200868567:web:2b8584fbbe1fee3e33a292",
  measurementId: "G-GC42RXVLVY"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export {app , auth, database};
