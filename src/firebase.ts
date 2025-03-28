import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, orderBy } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVPVPWGi1E0cpdBvdURY_4kwJmn4mLyRg",
  authDomain: "omme-acebc.firebaseapp.com",
  projectId: "omme-acebc",
  storageBucket: "omme-acebc.firebasestorage.app",
  messagingSenderId: "2133539721",
  appId: "1:2133539721:web:9d9aae544394c39b44ff58",
  measurementId: "G-EBCNRT4CGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs, query, where, orderBy };