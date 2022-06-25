import { app, db } from './firebase-settings';
import {
  collection,
  query,
  getDocs,
  doc,
  getDoc,
  where
} from 'firebase/firestore';

const q = query(collection(db, "articles"));

export const getArticle = async (id) => {
  const docRef = doc(db, "articles", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    throw new Error('No document with that ID')
  }
}

export let getArticles = async () => {
  const docs = await getDocs(q);
  return docs.map(doc => ({ ...doc.data(), id: doc.id }))
}