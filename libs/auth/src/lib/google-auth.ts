import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { auth } from './firebase-config';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error('Google sign-in failed:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Sign out failed:', error);
    throw error;
  }
};
