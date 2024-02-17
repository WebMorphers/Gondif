import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import { initializeApp } from "firebase/app"
import { getFirestore, doc, setDoc } from "firebase/firestore"
import CredentialsProvider from "next-auth/providers/credentials";

// Initialize Firebase
const firebaseApp = initializeApp({
    apiKey: "AIzaSyDZsf2TYH8EQMcsYLe8AeznHZr8DTIOMOE",
  authDomain: "gondif-41a6f.firebaseapp.com",
  projectId: "gondif-41a6f",
  storageBucket: "gondif-41a6f.appspot.com",
  messagingSenderId: "209509389570",
  appId: "1:209509389570:web:24bec4a63c933d59d85e1b"
})

// Initialize Firestore
const db = getFirestore(firebaseApp)

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),  
    FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET
      }),
      CredentialsProvider({
        // The name to display on the sign-in form (e.g., 'Sign in with Phone')
        credentials: {
          phone: {
            label: "Phone Number",
            type: "text",
            placeholder: "Enter your phone number"
          },
          password: { label: "Password", type: "password" }
        },
        authorize: async ({ phone, password }) => {
          // Implement your own logic here to authenticate the user with phone and password
          // For example, you can use Firebase Auth for phone number authentication
          try {
            // Your authentication logic here, e.g., Firebase Auth
            // Example:
            // const userCredential = await signInWithPhoneNumber(phone, password);
            // if (userCredential) {
            //   return Promise.resolve(userCredential.user);
            // } else {
            //   return Promise.resolve(null);
            // }
          } catch (error) {
            console.error("Error authenticating user:", error);
            return Promise.resolve(null);
          }
        }
      })
    ],
  callbacks: {
    async signIn(user, account, profile) {
      console.log("Signing in user:", user);
      try {
        await setDoc(doc(db, "users", user.id), {
          name: user.name,
          email: user.email,
         });
        console.log("User data saved successfully");
      } catch (error) {
        console.error("Error saving user data:", error);
      }
      return true;  
    }
  }
}

export default NextAuth(authOptions)
