
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//Vamos a importar dos funciones de la libreria FireBase.
//initializaApp = se usa para iniciar una instancia de FireBase en la APP.
//getFirestore = se utiliza para obtener una instancia de Firestore.

//Creamos un Obj con toda nuestra informacion de la cuenta de la base de datos.
const firebaseConfig = {
    apiKey: "AIzaSyDmzvI_AkKl_HnSaQ_bpva0gHS1WWM_EJM",
    authDomain: "proyectoreact-9dfc1.firebaseapp.com",
    projectId: "proyectoreact-9dfc1",
    storageBucket: "proyectoreact-9dfc1.appspot.com",
    messagingSenderId: "672947051911",
    appId: "1:672947051911:web:7d4c3bad6ef20d95b48722"
};

// Inicializamos Firebase y se pasa la configuracion como argumento. Esto devuelve una instanmcia de Firebase.
const app = initializeApp(firebaseConfig);

//Uso esa instancia de Firebase para obtener una instancia de Firestore.

export const db = getFirestore(app);
//Exportamos esta referencia para que este disponible en toda nuestra aplicacion.

