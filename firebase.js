import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyC4LEF6F5gzlI402a8NF2Q3nv3i6rZFQa4",
  authDomain: "civic-1a7c4.firebaseapp.com",
  projectId: "civic-1a7c4",
  storageBucket: "civic-1a7c4.firebasestorage.app",
  messagingSenderId: "93806118201",
  appId: "1:93806118201:web:48d177a13a9c5f655954e8",
  measurementId: "G-BCCVMM7WNF"
};
const app = initializeApp(firebaseConfig);

// Add these yourself:
const db = getFirestore(app);

export { db };