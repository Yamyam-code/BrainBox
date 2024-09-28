import { initializeApp } from 'firebase/app';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { Think } from '@/types/userData';

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

export { getUser, analytics, setUserThinks, setUserRecents };
