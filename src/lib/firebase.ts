import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Import Firestore!

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//
const firebaseConfig = {
	apiKey: 'AIzaSyAPsysPihmkY_pNxerGoT_SQqVXGFQNobw',
	authDomain: 'nadiaspace-823eb.firebaseapp.com',
	projectId: 'nadiaspace-823eb',
	storageBucket: 'nadiaspace-823eb.firebasestorage.app',
	messagingSenderId: '386043499974',
	appId: '1:386043499974:web:5a4cb8bd7c80e795dc8ec7',
	measurementId: 'G-F2GBGXEX5F'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
