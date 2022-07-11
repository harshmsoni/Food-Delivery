import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNdbmNlutYck-9Yvsy0r2bd5pSk6ZIYik",
  authDomain: "restro-food-delivery-app-44615.firebaseapp.com",
  projectId: "restro-food-delivery-app-44615",
  storageBucket: "restro-food-delivery-app-44615.appspot.com",
  messagingSenderId: "243667209287",
  appId: "1:243667209287:web:7541f0c6c03b52f4fe7562"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app)

export default fireDB