import stripeImport from 'stripe'
import getOrderAmount from '../helpers/getOrderAmount.js'
const stripe = stripeImport(process.env.STRIPE_SECRET_KEY)

const paymentIntent = async (req, res) => {
  const books = req.body

  const paymentIntent = await stripe.paymentIntents.create({
    amount: await getOrderAmount(books),
    currency: "ars",
    payment_method: books.pm,
    automatic_payment_methods: {
      enabled: true,
    }
  })
  // stripe.confirmCardPayment(paymentIntent.client_secret, books.pm)

  res.send({
    clientSecret: paymentIntent.client_secret,
  })
}

export {
  paymentIntent
}