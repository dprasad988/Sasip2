import admin from './firebaseAdmin.js';  // Import the Firebase Admin setup

const db = admin.firestore();

async function checkFirestoreConnection() {
  try {
    // Try writing to Firestore
    await db.collection('Test').doc('ConnectionTest').set({ status: 'Firestore is connected' });
    console.log('Firestore connection successful');

    // Try reading from Firestore
    const doc = await db.collection('Test').doc('ConnectionTest').get();
    if (doc.exists) {
      console.log('Data read from Firestore:', doc.data());
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.error('Error connecting to Firestore:', error);
  }
}

checkFirestoreConnection();
