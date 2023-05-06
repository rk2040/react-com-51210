
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//Vamos a importar dos funciones de la libreria FireBase.
//initializaApp = se usa para iniciar una instancia de FireBase en la APP.
//getFirestore = se utiliza para obtener una instancia de Firestore.

//Creamos un Obj con toda nuestra informacion de la cuenta de la base de datos.
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Inicializamos Firebase y se pasa la configuracion como argumento. Esto devuelve una instanmcia de Firebase.
const app = initializeApp(firebaseConfig);

//Uso esa instancia de Firebase para obtener una instancia de Firestore.

export const db = getFirestore(app);
//Exportamos esta referencia para que este disponible en toda nuestra aplicacion.

