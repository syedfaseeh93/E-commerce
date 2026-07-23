import React, { useEffect, useState } from 'react'
import OrderTracker from '../OrdersPage/OrderTracker'
import { Alert, AlertTitle, Grid } from '@mui/material'
import { useParams, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../state/Order/Action'
import { updatePayment } from '../../state/Payment/Action'

const PaymentSuccess = () => {
    const dispatch = useDispatch()
    const [paymentId, setPaymentId] = useState()
    const [paymentStatus, setPaymentStatus] = useState()
    const [referenceId, setReference] = useState()
    const { orderId } = useParams()

    const { order } = useSelector(store => store.order)
    console.log(order)

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        setPaymentId(searchParams.get("razorpay_payment_id"));
        setPaymentStatus(searchParams.get("razorpay_payment_link_status"));
    }, [])

    console.log(paymentId)

    useEffect(() => {
        if (!paymentId) return;

        dispatch(updatePayment({ paymentId, orderId }));
    }, [paymentId, orderId]);


    return (
        <div>
            <div className="flex flex-col justify-center my-4 items-center">
                <Alert
                    variant='filled'
                    severity='success'
                    sx={{ mb: 6, width: "fit-content" }}
                >
                    <AlertTitle>Payment Success</AlertTitle>
                    Congratulation Your Order is Placed
                </Alert>
            </div>
            <OrderTracker activeStep={1} />
            {order?.orderitems.map((item) => {
                return <Grid key={item.id} className="border border-gray-50 shadow-lg" container sx={{ p: 3, display: 'flex', gap: 4, m: 2 }}>
                    <Grid xs={6} >
                        <div>
                            <img className='w-25 h-25 object-cover object-top' src={item.product.imageURL} alt="" />
                        </div>
                    </Grid>
                    <Grid xs={6} sx={{ display: 'flex', flexDirection: 'column', gap: 1, fontSize: 14 }}>
                        <p className='font-bold text-lg'>{item.product.title}</p>
                        <p className='text-gray-800 text-md'>{item.product.description}</p>
                        <p className='font-bold text-md text-green-500'>${item.product.discountedPrice}</p>
                    </Grid>
                </Grid>

            })}
        </div>
    )
}

export default PaymentSuccess
