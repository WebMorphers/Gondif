// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjxdqXFscLVPEAKr5NXMjdyio14b7VbBE",
  authDomain: "gondif2-c5fd1.firebaseapp.com",
  projectId: "gondif2-c5fd1",
  storageBucket: "gondif2-c5fd1.appspot.com",
  messagingSenderId: "35329366197",
  appId: "1:35329366197:web:bb7750ffa687c8bb7fc6fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const DB = getFirestore(app);
export { DB,app,firebaseConfig };