import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBC5htuWbDlq7hf7XJsVCw1NgAO1nRzhOY",
  authDomain: "studios-eaeb2.firebaseapp.com",
  projectId: "studios-eaeb2",
  storageBucket: "studios-eaeb2.appspot.com",
  messagingSenderId: "84552852354",
  appId: "1:84552852354:web:b20480990201e07012e59b",
  measurementId: "G-HFJWHZ3HN1",
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

export default storage;
