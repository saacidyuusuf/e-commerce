import { loadStripe } from "@stripe/stripe-js";
import process from 'process'

let stripePromise;

const getStripe =() =>{
    if(!stripePromise){
        stripePromise = loadStripe(`${process.env.PUBLISH_KEY}`)
    }
    return stripePromise
}


export default getStripe