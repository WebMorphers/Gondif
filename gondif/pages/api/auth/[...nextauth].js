import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import { initializeApp } from "firebase/app"
import { getFirestore, doc, setDoc } from "firebase/firestore"
 
// Initialize Firebase
const firebaseApp = initializeApp({
    apiKey: "AIzaSyDjxdqXFscLVPEAKr5NXMjdyio14b7VbBE",
  authDomain: "gondif2-c5fd1.firebaseapp.com",
  projectId: "gondif2-c5fd1",
  storageBucket: "gondif2-c5fd1.appspot.com",
  messagingSenderId: "35329366197",
  appId: "1:35329366197:web:bb7750ffa687c8bb7fc6fc"
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
    ],
    callbacks: {
        async signIn(user, account, profile) {
            try { 
                    const docRef = doc(db, "users", user.user.id);
                    const userData = {
                        id: user.user.id,
                        email: user.profile.email,
                        provider: user.account.provider
                    };
                  
              
                    await setDoc(docRef, userData);
                    console.log("User data saved successfully ");
               
            } catch (error) {
                console.error("Error saving user data:", error);
            }
            return true;  
        }
        
      }
}

export default NextAuth(authOptions)
