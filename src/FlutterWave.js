import React from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useStateContext } from './context/StateContext'

export default function FlutterWave() {

    const {totalPrice} = useStateContext();
    const config = {
        public_key: process.env.NEXT_PUBLIC_FLUTTER_PUBLIC_KEY,
        tx_ref: Date.now(),
        amount: totalPrice,
        currency: 'USD',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
        email: 'user@gmail.com',
        phonenumber: '07064586146',
        name: 'joel ugwumadu',
        },
        customizations: {
        title: 'my Payment Title',
        description: 'Payment for items in cart',
        logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
    };

    const handleFlutterPayment = useFlutterwave(config);

    return (
        <div className="btn-container">
        {/* <h1>Hello Test user</h1> */}

        <button
            className='btn'
            onClick={() => {
            handleFlutterPayment({
                callback: (response) => {
                console.log(response);
                    closePaymentModal() // this will close the modal programmatically
                },
                onClose: () => {},
            });
            }}
        >
            Pay with Flutterwave
        </button>
        </div>
    );
}