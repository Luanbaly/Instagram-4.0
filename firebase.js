// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7rxffK5mlzFF6PQCwYmR5UvmtxMYksJg",
  authDomain: "ig-luan.firebaseapp.com",
  projectId: "ig-luan",
  storageBucket: "ig-luan.appspot.com",
  messagingSenderId: "577419429785",
  appId: "1:577419429785:web:1aa0c3f611fa8b8596b508"
};

// Initialize Firebase
const app = !getApps(). length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };