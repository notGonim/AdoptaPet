import Firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';
//import { seedDatabases } from '../seed';


//here i want to import seed file 


let config = {
    apiKey: "AIzaSyCuP95p1Z1hwemqq2BaN3wGqLlUFeRApqI",
    authDomain: "petadoption-c5bbe.firebaseapp.com",
    projectId: "petadoption-c5bbe",
    storageBucket: "petadoption-c5bbe.appspot.com",
    messagingSenderId: "180318309819",
    appId: "1:180318309819:web:4a373dfc23d249aa22c89e"
};



const firebase = Firebase.initializeApp(config) 
const { FieldValue } = Firebase.firestore





//here is where i wanna call the seed file (only once)

//seedDatabases(firebase)



export { firebase, FieldValue }

