import {initializeApp} from 'firebase/app';

const firebaseConfig = {
  databaseURL: '',
  apiKey: 'A',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
};

export const firebaseApp = await initializeApp(firebaseConfig);
