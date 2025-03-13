import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaC47B0ISU36gHc-xVQRDwZWbjGfUwcGg",
  authDomain: "fakexpose-9cdfb.firebaseapp.com",
  projectId: "fakexpose-9cdfb",
  storageBucket: "fakexpose-9cdfb.firebasestorage.app",
  messagingSenderId: "232781143805",
  appId: "1:232781143805:web:f840db7b3e26a4dca26894",
  measurementId: "G-8JQJYHMPG6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;