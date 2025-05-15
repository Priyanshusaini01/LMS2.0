import { Webhook } from "svix";
import User from "../models/User.js";
  
//the Clerk Webhook acts like a bridge to keep your MongoDB database synchronized with the authentication provider (Clerk).

// API Controller Function to Manage Clerk User with database
export const clerkWebhooks = async (req, res) => {
  try {
    console.log('Received webhook request:', req.body);

    // Create a Svix instance with clerk webhook secret.
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

    // Verifying Headers
    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"]
    })

    // Getting Data from request body
    const { data, type } = req.body
    console.log('Webhook type:', type);
    console.log('Webhook data:', data);

    // Switch Cases for differernt Events
    switch (type) {
      case 'user.created': {
        console.log('Processing user.created event');
        const userData = {
          _id: data.id,
          email: data.email_addresses[0].email_address,
          name: data.first_name + " " + data.last_name,
          imageUrl: data.image_url,
          resume: ''
        }
        console.log('Creating user with data:', userData);
        await User.create(userData)
        console.log('User created successfully');
        res.json({})
        break;
      }

      case 'user.updated': {
        console.log('Processing user.updated event');
        const userData = {
          email: data.email_addresses[0].email_address,
          name: data.first_name + " " + data.last_name,
          imageUrl: data.image_url,
        }
        // Updating User Data From Clerk
        await User.findByIdAndUpdate(data.id, userData)
        console.log('User updated successfully');
        res.json({})
        break;
      }

      case 'user.deleted': {
        console.log('Processing user.deleted event');
        await User.findByIdAndDelete(data.id)
        console.log('User deleted successfully');
        res.json({})
        break;
      }
      default:
        console.log('Unhandled webhook type:', type);
        break;
    }

  } 
  catch (error) {
    console.error('Webhook error:', error);
    res.json({ success: false, message: error.message })
  }
}


// Stripe Gateway Initialize
// const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY)


// // Stripe Webhooks to Manage Payments Action
// export const stripeWebhooks = async (request, response) => {
//   const sig = request.headers['stripe-signature'];

//   let event;

//   try {
//     event = stripeInstance.webhooks.constructEvent(request.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
//   }
//   catch (err) {
//     response.status(400).send(`Webhook Error: ${err.message}`);
//   }

//   // Handle the event
//   switch (event.type) {
//     case 'payment_intent.succeeded': {

//       const paymentIntent = event.data.object;
//       const paymentIntentId = paymentIntent.id;

//       // Getting Session Metadata
//       const session = await stripeInstance.checkout.sessions.list({
//         payment_intent: paymentIntentId,
//       });

//       const { purchaseId } = session.data[0].metadata;

//       const purchaseData = await Purchase.findById(purchaseId)
//       const userData = await User.findById(purchaseData.userId)
//       const courseData = await Course.findById(purchaseData.courseId.toString())

//       courseData.enrolledStudents.push(userData)
//       await courseData.save()

//       userData.enrolledCourses.push(courseData._id)
//       await userData.save()

//       purchaseData.status = 'completed'
//       await purchaseData.save()

//       break;
//     }
//     case 'payment_intent.payment_failed': {
//       const paymentIntent = event.data.object;
//       const paymentIntentId = paymentIntent.id;

//       // Getting Session Metadata
//       const session = await stripeInstance.checkout.sessions.list({
//         payment_intent: paymentIntentId,
//       });

//       const { purchaseId } = session.data[0].metadata;

//       const purchaseData = await Purchase.findById(purchaseId)
//       purchaseData.status = 'failed'
//       await purchaseData.save()

//       break;
//     }
//     default:
//       console.log(`Unhandled event type ${event.type}`);
//   }

//   // Return a response to acknowledge receipt of the event
//   response.json({ received: true });
// }