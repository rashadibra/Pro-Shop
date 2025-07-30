import {auth} from "../../firebase/Firebase"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from "firebase/auth"

// Register

export const registerUser=async(email,password)=>{
return await createUserWithEmailAndPassword(auth,email,password);
}

// Log in

export const loginUser=async(email,password)=>{
return await signInWithEmailAndPassword(auth,email,password);
}

// log out

export const logOutUser=async()=>{
    return await signOut(auth);
}
