import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
    try {
      const items = [];
      const q = query(collection(db, "users", userId, "items"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      return items;
    } catch (error) {
      console.error("Error fetching items:", error);
      throw error; // rethrow the error for higher-level error handling
    }
}

export async function addItem(userId, item) {
    try {
      return (await addDoc(collection(db, "users", userId, "items"), item)).id;
    } catch (error) {
      console.error("Error adding item:", error);
      throw error;
    }
}
  