const firebaseConfig = window.FIREBASE_CONFIG;

if (!firebaseConfig) {
  throw new Error("Missing Firebase config. Create js/firebase-env.js from js/firebase-env.example.js.");
}

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const ADMIN_EMAILS = ["chottapreg@gmail.com"];

function isAdmin(email) {
  return ADMIN_EMAILS.includes((email || "").toLowerCase());
}
