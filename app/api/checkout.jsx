import Stripe from 'stripe';

const stripe = new Stripe(process.env.SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    try {
      const params = {
        submit_type: "pay",
        payment_method_type: ["card"],
        mode: "payment",
        billing_address_collection: "auto",
        shipping_options: [
          { shipping_rate: "shr_1NptKhHahUokiXyYDWxAl3GL" },
          { shipping_rate: "shr_1NptMIHahUokiXyY0zaMkFHb" },
        ],
        line_items: req.body.map((item) => {
          return {
            price_data:{
              currency: 'usd',
              product_data: {
                name: item.name,
              },
              unit_amount: item.price * 100 ,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1
            },
            quantity: item.quantity
          }
        }),
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      };
      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session)
    } catch (err) {
      res.status(err.statusCode || 500).json({error: err.message});
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
