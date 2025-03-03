import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Importa auth correctamente

const firebaseConfig = {
    apiKey: "AIzaSyCW9xvuDC6KHK255y2FhU05LkNEuRMDMTo",
    authDomain: "proyecto-da3d6.firebaseapp.com",
    projectId: "proyecto-da3d6",
    storageBucket: "proyecto-da3d6.appspot.com", // Estaba mal escrito
    messagingSenderId: "214973010453",
    appId: "1:214973010453:web:0675ec4f1f312030c2341c",
    measurementId: "G-BDTMMTHKGW"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener la autenticación
const auth = getAuth(app); 

// Exportaciones
export { auth };
export default app;
