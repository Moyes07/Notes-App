import { initializeApp } from "firebase/app";
import {getFirestore,collection} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4gXSlY9pJooxbAHlr_t01XCjxw4iJ4Pk",
  authDomain: "web-notes-e21e3.firebaseapp.com",
  projectId: "web-notes-e21e3",
  storageBucket: "web-notes-e21e3.appspot.com",
  messagingSenderId: "27554624251",
  appId: "1:27554624251:web:0acd67c8a0787f9a74765e",
  measurementId: "G-NJQX5ZP3XW"
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const notesCollection=collection(db,"notes");