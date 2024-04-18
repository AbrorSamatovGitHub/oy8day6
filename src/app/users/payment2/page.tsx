import Click from '@/img/click'
import PaymentImg1 from '@/img/paymentImg1'
import Paymi from '@/img/paymi'
import React from 'react'

const PaymentPage = () => {
    return (
        <div className='p-8 pb-[78px] shadow-lg rounded-sm w-full '>
            <h1 className=' text-cart1 mb-[34px]'>Э-Хисоб</h1>
            <div className='relative'>
                <PaymentImg1 />
                <div className='absolute top-[10%] left-[3%]'>
                    <p className='text-cart4 text-white'>Баланс</p>
                    <h1 className='text-cart1 text-white mt-[12px]'>45 000 сўм</h1></div>
            </div>
            <div className=' shadow py-[32px] rounded-2xl mt-[33px] relative '>
                <div className='absolute top-[50%] right-[50%] translate-x-[50%]  translate-y-[-50%]'>
                    <Paymi />
                </div>
            </div>
            <div className=' shadow py-[32px] rounded-2xl mt-[33px] relative '>
                <div className='absolute top-[50%] right-[50%] translate-x-[50%]  translate-y-[-50%]'>
                    <Click />
                </div>
            </div>
        </div>
    )
}

export default PaymentPage
