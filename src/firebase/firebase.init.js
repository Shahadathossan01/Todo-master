// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5u0eao2n81HVt5ELA3McZw7oIEF5SqMQ",
  authDomain: "todomaster-1.firebaseapp.com",
  projectId: "todomaster-1",
  storageBucket: "todomaster-1.appspot.com",
  messagingSenderId: "912897750248",
  appId: "1:912897750248:web:93bdfa6849c7758392455d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;