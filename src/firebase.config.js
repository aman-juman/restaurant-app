import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCjH9GJJaFxcGClk4likS7g2EAlwVahpZs",
  authDomain: "restaurant-ecc49.firebaseapp.com",
  databaseURL:
    "https://restaurant-ecc49-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "restaurant-ecc49",
  storageBucket: "restaurant-ecc49.appspot.com",
  messagingSenderId: "1038907619517",
  appId: "1:1038907619517:web:35616284af776238809fd4",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
