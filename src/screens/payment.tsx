import React from 'react'
import { 
    User 
} from '@firebase/auth-types'


import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, Stripe, StripeConstructorOptions} from '@stripe/stripe-js';

const PK = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY

let PUBLIC_KEY : string = ""

if(typeof(PK) === 'string'){
    PUBLIC_KEY = PK
}

const stripePromise = loadStripe(PUBLIC_KEY)
// stripe={stripePromise}

export default function Payment(props : User ){

    return (
        <Elements 
            stripe={stripePromise}
        >
        



        </Elements>
    )
}
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