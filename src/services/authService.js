import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';

export default class AuthService {
  async login(email, password) {
    if(!email || !password) throw new Error('Missing email or password');
    if(typeof email !== 'string' || typeof password !== 'string') throw new Error('Email and password must be strings');
    if(email.includes('@') === false) throw new Error('Email must be a valid email address');
    await signInWithEmailAndPassword(auth, email, password);
  }

  async logout() {
    // return await firebase.auth().signOut();
  }
}