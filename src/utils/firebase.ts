let db: any;

// Instance of Firebase FireStore
const getFirestoreInstance = async () => {
    if (!db) {
        const { initializeApp } = await import('firebase/app');
        const { getFirestore } = await import('firebase/firestore');
        const firebaseConfig = {
            apiKey: "AIzaSyAGmPUQLXkmC5kwgKJR9HQcf5w6rLq_OFo",
            authDomain: "parcial-corte-3.firebaseapp.com",
            projectId: "parcial-corte-3",
            storageBucket: "parcial-corte-3.firebasestorage.app",
            messagingSenderId: "534588026588",
            appId: "1:534588026588:web:b67942dc1eb271c61d0e19"
          };

       

        const app = initializeApp(firebaseConfig);
        db = getFirestore(app);
    }
    return db;
}

// Functions
export const addEvent = async (event: any) => {
    try {
        const db = await getFirestoreInstance();
        const { setDoc, doc } = await import('firebase/firestore');
        const docRef = doc(db, 'events', event.id);
        await setDoc(docRef, event);
        return true;
    } catch (error) {
        console.error("Error adding document:", error);
        return false;
    }
};

export const getEvent = async () => {
    try {
        const db = await getFirestoreInstance();
        const { getDocs, collection } = await import('firebase/firestore');

        const where = collection(db, 'events');
        const querySnapshot = await getDocs(where);
        const data: any[] = [];

        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        });

        return data;
    } catch (error) {
        console.error("Error getting document:", error);
    };
};

export const deleteEvent = async (uid: string) => {

    const db = await getFirestoreInstance();

    const { doc, deleteDoc } = await import('firebase/firestore');

    const deleteRef = doc(db, 'events', uid);

    await deleteDoc(deleteRef).then(() => {
        console.log("Document successfully deleted!");
    }).catch((error: any) => {
        console.error("Error removing document: ", error);
    });
};
