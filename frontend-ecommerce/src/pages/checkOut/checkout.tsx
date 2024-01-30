import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { useState } from 'react' 

const stripePromise=loadStripe('')


const CheckOutForm=()=>{
const [isProcessing,setIsProcessing] =useState()
    const submitHndler=()=>{

    }
    return <div className='checkout-container'>
            <form onSubmit={submitHndler}>

            </form>
            </div>
}


const Checkout = () => {
  return <Elements stripe={stripePromise}>
    <CheckOutForm/>
  </Elements>
}

export default Checkout 
