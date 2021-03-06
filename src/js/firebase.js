import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, deleteDoc, setDoc, addDoc, Timestamp, onSnapshot, query, where, orderBy } from "firebase/firestore";

class Firebase {
  constructor() {
    this.firebaseApp = initializeApp({
      apiKey: "AIzaSyD0Uhqh1JX3v1XCkDYgX-VL46rqWHNkgOI",
      authDomain: "test-97a2a.firebaseapp.com",
      projectId: "test-97a2a",
      storageBucket: "test-97a2a.appspot.com",
      messagingSenderId: "389104369163",
      appId: "1:389104369163:web:a93797fc51a6f8995cd10e",
      measurementId: "G-8D2DMGHGGE"
    });
    this.db = getFirestore(this.firebaseApp);
    this.highscoresRef = collection(this.db, "highscores");
  }
  async getHighscores(level) {
    const q = query(this.highscoresRef, where("game", "==", "memory game"), where("level", "==", level));
    const snapshot = await getDocs(q);
    let highscores = [];

    snapshot.docs.forEach(doc => highscores.push({name: doc.data().name, time: doc.data().time, id: doc.id}));

    return highscores;
  }
  async deleteHighscore(id) {
    await deleteDoc(doc(this.db, "highscores", id));
  }
  async setHighscore(name, time, level) {
    await addDoc(this.highscoresRef, {
      game: "memory game",
      name,
      time,
      level
    });
  }
}

export default new Firebase();