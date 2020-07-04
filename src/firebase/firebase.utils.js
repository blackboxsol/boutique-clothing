import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAEk4a3VhKITnEghZ6QkTInDeaRGF_GoCg",
    authDomain: "boutique-clothing.firebaseapp.com",
    databaseURL: "https://boutique-clothing.firebaseio.com",
    projectId: "boutique-clothing",
    storageBucket: "boutique-clothing.appspot.com",
    messagingSenderId: "796983205791",
    appId: "1:796983205791:web:26757b85cf4b6548bae7aa",
    measurementId: "G-VRZW7EL315"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {

    if(!userAuth) return;

    const userRef = await firestore.doc(`users/${userAuth.uid}`);

    const userSnapshot = await userRef.get();

    console.log(userSnapshot);

    if(await !userSnapshot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            });
        } catch (error) {
            console.log('error creating user: ' + error);
        }
    }

   

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();


const provider  = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;