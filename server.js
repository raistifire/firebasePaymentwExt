// This example uses Express to receive webhooks
const express = require('express');
const app = express();

const Stripe = require('stripe');
const stripe = Stripe('sk_test_51J6ZGZIRx5ymj2h5T68vXExHyZ7QI3T0ygXPZDoDTZVA2JdRinuACrApMsvwARI7FE5JIRR53x0KO5FYBlRz7YHl00ijxehqju');

// whsec_OayJnMB0daMDuxJ3bflbIHh7Fozq6zPi

// Match the raw body to content type application/json
// If you are using Express v4 - v4.16 you need to use body-parser, not express, to retrieve the request body
app.post('/webhook', express.json({type: 'application/json'}), async (request, response) =>  {

    const event = request.body;
/*    console.log(`start`);
    console.log(`event type ${event.type}`);
    console.log(`event type ${JSON.stringify(event)}`);
    console.log(`FINISH`);*/
    if(event.type==="checkout.session.completed"){
        console.log("session+"+event.data.object.id);
        var charge = await stripe.checkout.sessions.retrieve(
            event.data.object.id,
            {
              //  apiKey: 'sk_test_51J6ZGZIRx5ymj2h5T68vXExHyZ7QI3T0ygXPZDoDTZVA2JdRinuACrApMsvwARI7FE5JIRR53x0KO5FYBlRz7YHl00ijxehqju',
                expand: ['line_items','line_items.data.price'],
            }
        );
        //line_items.data.price.product
    //    console.log(charge);
        console.log(charge.line_items.data[0].price.product);
    }
/*    switch (event.type) {
        case 'payment_intent.succeeded':

            const paymentIntent = event.data.object;
            // Then define and call a method to handle the successful payment wintent.
            // handlePaymentIntentSucceeded(paymentIntent);
            break;

        case 'payment_intent.succeeded':
            let amount = event.data.object.amount //amount in cents they have paid
            console.log(amount)

        case 'checkout.session.completed':// 'charge.succeeded':

            try{
                const invoice = await stripe.invoices.create({
                    customer: event.data.object.customer,
                });

                console.log(invoice);

            }catch(e){
                console.log(e)
            }

            //transaction
            break;

        case 'payment_method.attached':
            const paymentMethod = event.data.object;
            // Then define and call a method to handle the successful attachment of a PaymentMethod.
            // handlePaymentMethodAttached(paymentMethod);
            break;
        // ... handle other event types
        default:
            console.log(`Unhandled event type ${event.type}`);
    }
*/
    // Return a response to acknowledge receipt of the event
    response.json({received: true});
});

app.listen(8000, () => console.log('Running on port 8000'));

//CUGobtt2lzXIdJ1gb4cp



//console.log(JSON.stringify(event,null,2));

// const paymentIntent = await stripe.paymentIntents.retrieve(
//   event.data.object.id,
//   {expand : ['line_items.data']}
// )
//  console.log(paymentIntent)
//  var charge = await stripe.checkout.sessions.retrieve(
//    event.data.object.id,
//    {
//      apiKey: 'sk_test_51J6ZGZIRx5ymj2h5T68vXExHyZ7QI3T0ygXPZDoDTZVA2JdRinuACrApMsvwARI7FE5JIRR53x0KO5FYBlRz7YHl00ijxehqju'
//    }
//  );

// var charge = await stripe.events.retrieve(
//   event.id.object.id,
//   {
//     apiKey: 'sk_test_51J6ZGZIRx5ymj2h5T68vXExHyZ7QI3T0ygXPZDoDTZVA2JdRinuACrApMsvwARI7FE5JIRR53x0KO5FYBlRz7YHl00ijxehqju'
//   }
// );

//  console.log(JSON.stringify(charge,null,2));

// console.log(JSON.stringify(paymentIntent,null,2));


//  const Stripe = require('stripe');
//  const stripe = Stripe('sk_test_51J6ZGZIRx5ymj2h5T68vXExHyZ7QI3T0ygXPZDoDTZVA2JdRinuACrApMsvwARI7FE5JIRR53x0KO5FYBlRz7YHl00ijxehqju');
//  stripe.checkout.sessions.listLineItems(
//    'cs_test_KTdIZnSpF0hA1MVCba1vRKHSc0ctDBXeTqKhtkFTbUlpMrd6DjErvu17',
//    { limit: 5 },
//    function(err, lineItems) {
//      // asynchronously called
//    }
//  );

// const invoice = await stripe.invoices.create({
//   customer: event.data.object.customer,
// });

// console.log(invoice);


// Handle the event