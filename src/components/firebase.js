import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8bDeOy8Psx_nAMHfxWpQRVmYdSPew5MQ",
  authDomain: "image-app-ee2e2.firebaseapp.com",
  projectId: "image-app-ee2e2",
  storageBucket: "image-app-ee2e2.appspot.com",
  messagingSenderId: "248304911824",
  appId: "1:248304911824:web:de1f29751845df6e5565d5",
  measurementId: "G-GTZ17PS4YS"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


