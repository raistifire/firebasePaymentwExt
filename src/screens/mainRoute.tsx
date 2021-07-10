import React,{
    useState, 
    useEffect,
    useContext
} from 'react';

import { 
    UserCredential,
    AuthProvider, 
    User 
} from '@firebase/auth-types'

import Payment from './payment'

import { auth } from '../api/firebase/configApi';
import { Button } from '@material-ui/core';

import firebase from 'firebase'

export default function MainRoute(){

    const [currentUser, setcurrentUser] = useState<User | object | null>({})


    useEffect(()=>{
    
    },[])

    return (
        <div>
            <h1>Firebase Extension Function Testing</h1>

            <Payment user={currentUser} />
            
            <Button
            variant="contained"
            title='Hello World'
            color="primary"

                onClick={async()=>{
                
                console.log('google sign in')
                const provider : AuthProvider = new firebase.auth.GoogleAuthProvider()


                    const signInWithGoogle = () => {
                        auth.signInWithPopup(provider)
                            .then(
                                (res : UserCredential)=>{

                                    console.log('Click Sign-in')
                                    console.log(res.user)

                                    setcurrentUser(res.user)
                                
                                })
                            .catch((error)=>{console.log(error)})
                    
                    }
                
                signInWithGoogle()
                
                }

            }>Google Sign-in</Button>
            

        </div>
    )
}



// var provider = new firebase.auth.GoogleAuthProvider();

// Auth In Context============================

// const subscriber = auth
// .onAuthStateChanged((user) => {
//     setCurrentUser(user)
// });


// try {
            
//     auth.signInWithEmailAndPassword(userInput.email, userInput.password)
//     history.push("/dashboard")

// } catch (e) {
//     console.log(e)
// }

// var provider = new firebase.auth.GoogleAuthProvider();




        // db.collection('purchaseOfToken')
        // .where('active', '==', true)
        // .get()
        // .then(function (querySnapshot) {

        // querySnapshot.forEach(async function (doc) {

        //     console.log(doc.id, ' => ', doc.data());

        //     const priceSnap = await doc.ref.collection('prices').get();

        //     priceSnap.docs.forEach((doc) => {
                
        //     console.log(doc.id, ' => ', doc.data());
        //     });
        // });
        // });

        // return () =>{
        //     console.log('====================')
        //     console.log('Component unmount')
        //     console.log('====================')
        // }
