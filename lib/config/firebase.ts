// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA3WZmH6A_nNTtFSCGVEBymCjDROZ4xdZg',
  authDomain: 'bim-web-2e40e.firebaseapp.com',
  projectId: 'bim-web-2e40e',
  storageBucket: 'bim-web-2e40e.appspot.com',
  messagingSenderId: '726452021139',
  appId: '1:726452021139:web:b6264c9d27abb4e47a6a66',
  measurementId: 'G-FEHY2W550K',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
