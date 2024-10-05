import { initializeApp } from 'firebase/app';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { Think } from '@/types/userData';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth();

const idDoc = doc(db, 'users', 'id');

async function getUser() {
  try {
    const querySnapshot = await getDoc(idDoc);
    if (querySnapshot.exists()) {
      const userData = querySnapshot.data();

      return userData;
    }
  } catch (error) {
    console.log(error);
  }
}

async function setUserThinks(
  set: React.Dispatch<React.SetStateAction<Think[] | null | undefined>>
) {
  try {
    const userData = await getUser();
    if (userData) {
      const userThinks = userData.thinks;
      set(userThinks);
    }
  } catch (error) {
    console.log(error);
  }
}

async function setUserRecents(
  set: React.Dispatch<React.SetStateAction<Think[] | null | undefined>>
) {
  try {
    const userData = await getUser();
    if (userData) {
      const userRecents = userData.recents;
      set(userRecents);
    }
  } catch (error) {
    console.log(error);
  }
}

async function signUp(email: string, password: string, name: string) {
  try {
    const userData = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const docRef = doc(db, 'users', userData.user.uid);
    const docData = {
      닉네임: name,
      이메일: email,
      recents: [],
      thinks: [],
    };
    setDoc(docRef, docData);
    console.log(userData.user.uid);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function signIn(email: string, password: string) {
  try {
    const userData = await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem('user', userData.user.uid);
    console.log(userData.user.uid);
    return true;
  } catch (error) {
    console.log(error);
    alert('회원정보가 잘못되었습니다.');
    return false;
  }
}

async function duplicate(field: string, confirm: string) {
  const validate = query(collection(db, 'users'), where(field, '==', confirm));
  const data = await getDocs(validate);
  if (data.empty) {
    return 'a';
  } else {
    alert(field + '이 이미 존재합니다');
    return '';
  }
}

export {
  getUser,
  analytics,
  setUserThinks,
  setUserRecents,
  signUp,
  signIn,
  duplicate,
};
