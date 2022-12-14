require("dotenv").config()
const express = require('express');
var cors = require("cors");
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);


const app = express()

app.use(express.json());
app.use(cors());


app.route("/")
.get(async (req, res) => {
    console.log("home hitted");
})
.post(async (req, res) => {
    
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            customer_email:"dpakeswar@gmail.com",
            line_items:req.body.data.items.map((items) => {
                return { 
                    price_data:{
                        currency:"usd",
                        product_data:{
                            name:items.name
                        },
                        unit_amount:items.price * 100,
                    },
                    quantity:items.quantity
                 }
                 
            }),
            success_url:`${process.env.SERVER_URL}/sucess/{CHECKOUT_SESSION_ID}`,
            cancel_url:`${process.env.SERVER_URL}/failed`
        })
        console.log(session)
    res.json({ url: session.url })
} catch (error) {
    res.json({error: error});
}
})
app.route(`/checkPayment/:id`)
    .post(async (req,res) => {
    const session = await stripe.checkout.sessions.retrieve(req.params.id);
    // const customer = await stripe.customers.retrieve(session.customer);
   res.status(200).json(session);
    // console.log(customer);

    console.log(req.params.id);
    })

app.listen(5000,()=>{
    console.log("server listing on port 5000");
})