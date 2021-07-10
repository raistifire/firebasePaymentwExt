import React,{useEffect} from 'react'
import { 
    User 
} from '@firebase/auth-types'


// import { Elements } from '@stripe/react-stripe-js'; , Stripe, StripeConstructorOptions
import { loadStripe} from '@stripe/stripe-js';
import { db } from '../api/firebase/configApi';

const PK = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY

let PUBLIC_KEY : string = ""

if(typeof(PK) === 'string'){
    PUBLIC_KEY = PK
}


// stripe={stripePromise}

// Need to sub1  type the UID  either string | null 
export default function Payment(props : {user : User | object | null | any} ){
    
    useEffect(()=>{

        console.log('Component did mount Payment ')
        console.log(props.user.uid)
            
        const stripeCheckout = async() => {

            console.log('stripeCheckout')
            if(props.user.uid){

                const docRef = await db
                .collection('customers')
                .doc(props.user.uid)
                .collection('checkout_sessions')
                .add({
                    price: 'price_1J8hNzIRx5ymj2h5RVUFIpHx',
                    success_url: window.location.origin,
                    cancel_url: window.location.origin,
                });


                docRef.onSnapshot(async (snap : any ) => {

                    const { error, sessionId } = snap.data();

                    if (error) {
                    // Show an error to your customer and 
                    // inspect your Cloud Function logs in the Firebase console.
                    alert(`An error occured: ${error.message}`);
                    }
                    if (sessionId) {
                    // We have a session, let's redirect to Checkout
                    // Init Stripe
                    
                    const stripe = loadStripe(PUBLIC_KEY)
                    
                        if(stripe){
                            stripe.redirectToCheckout({ sessionId });
                        }
                    
                    }
                });

            }

        }

        stripeCheckout()
        

        return (()=>{
             console.log('Umount - Payment.tsx ')
            console.log(props.user)
        })
    })
        

    return (


        // <Elements 
        //     stripe={stripePromise}
        // >
            <div>
                {
                props.user.uid
                ? 
                <><h3>{props.user.uid}</h3></> 
                : 
                <><h3>nothing</h3> </>}

            </div>



        // </Elements>
    )
}



// Elements component is a useContext wrap for Payment form

// Payment form can be customise inside Element Component 


// e.g. 

// StripeContainer.js

// <Elements 
//             stripe={stripePromise}
//         >
        
        // <PaymentForm />

// </Elements>


// The mainRoute call StripeContainer to call the payment customise form
// function App(){    return (<div> StripeContainer </div>)  }
// 
// 


// =================================================================
// import {loadStripe} from '@stripe/stripe-js';

// // [...]

// // Wait for the CheckoutSession to get attached by the extension

// docRef.onSnapshot(async (snap) => {

//   const { error, sessionId } = snap.data();
//   if (error) {
//     // Show an error to your customer and 
//     // inspect your Cloud Function logs in the Firebase console.
//     alert(`An error occured: ${error.message}`);
//   }
//   if (sessionId) {
//     // We have a session, let's redirect to Checkout
//     // Init Stripe

//     const stripe = await loadStripe('pk_test_1234');

//     stripe.redirectToCheckout({ sessionId });
//   }
// });
// =================================================================

// const docRef = await db
//   .collection('customers')
//   .doc(currentUser.uid)
//   .collection('checkout_sessions')
//   .add({
//     price: 'price_1GqIC8HYgolSBA35zoTTN2Zl',
//     success_url: window.location.origin,
//     cancel_url: window.location.origin,
//   });



// // Wait for the CheckoutSession to get attached by the extension
// docRef.onSnapshot((snap) => {
//   const { error, sessionId } = snap.data();
//   if (error) {
//     // Show an error to your customer and 
//     // inspect your Cloud Function logs in the Firebase console.
//     alert(`An error occured: ${error.message}`);
//   }
//   if (sessionId) {
//     // We have a session, let's redirect to Checkout
//     // Init Stripe
//     const stripe = Stripe('pk_test_1234');
//     stripe.redirectToCheckout({ sessionId });
//   }
// });


// import {loadStripe} from '@stripe/stripe-js';
// // [...]
// // Wait for the CheckoutSession to get attached by the extension
// docRef.onSnapshot(async (snap) => {
//   const { error, sessionId } = snap.data();
//   if (error) {
//     // Show an error to your customer and 
//     // inspect your Cloud Function logs in the Firebase console.
//     alert(`An error occured: ${error.message}`);
//   }
//   if (sessionId) {
//     // We have a session, let's redirect to Checkout
//     // Init Stripe
//     const stripe = await loadStripe('pk_test_1234');
//     stripe.redirectToCheckout({ sessionId });
//   }
// });


/* 
// import stripe from 'stripe';


// type PublicKey = "" | string | StripeConstructorOptions | undefined
// type IsString = PublicKey extends string ? string : StripeConstructorOptions | undefined | ''

Conditional Type

type IsNumber<T> =
T extends number ? 'number' : 'other'


const isNumber = x => 
    typeof x === 'number'
    ? 'number'
    : 'other'

*/




// const PK = process.env.STRIPE_PUBLISHABLE_KEY
// let PUBLICKEY = ''

// if(PK === 'string'){
//     PUBLICKEY = PK
// }


// const stripePromise = loadStripe(PUBLICKEY)

// export default function StripeContainer(){


//     return (
//         <Elements stripe={stripePromise}>
        
//         </Elements>
//     )



// }