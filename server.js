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
        console.log(req.body.data.items.map(e => e.name));
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
           
            line_items: req.body.data.items.map((item) => {
            //     const storeItems =  storeItems.get(item.id);
            return {
               
                price_data:{
                    currency:"usd",
                    product_data:{
                        name:"MENS COTTON JACKET"
                    },
                    unit_amount :7500,
                },
                quantity:1
            }
        }),
        success_url:`${process.env.SERVER_URL}/`,
        cancel_url:`${process.env.SERVER_URL}/`
    })
    res.json({ url: session.url })
} catch (error) {
    res.json({error: error});
}
})

app.listen(5000,()=>{
    console.log("server listing on port 5000");
})