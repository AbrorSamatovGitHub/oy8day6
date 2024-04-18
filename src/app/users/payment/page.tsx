import React from 'react'
import PaymentImg1 from '@/img/paymentImg1'
import Link from 'next/link'
const PaymentPage = () => {
  return (

    <div>
      <div className='p-8 pb-[78px] shadow-lg rounded-sm w-full '>
        <h1 className=' text-cart1 mb-[34px]'>Хисобни тулдириш</h1>
        <div className='relative'>
          <PaymentImg1 />
          <div className='absolute top-[10%] left-[3%]'>
            <p className='text-cart4 text-white opacity-[50%]'>ID: 0001</p>
            <h1 className='text-cart1 text-white mt-[12px]'>45 000 сўм</h1></div>
        </div>
        <form >
          <div className='flex flex-col'>
            <label className='text-cart5 mt-[30px] mb-[6px]' >Сумма</label>
            <input className='border w-[343px] p-4 rounded-[10px]' type="text" placeholder='Сум' />
          </div>
          <Link href={`/users/payment2`}>          
          <button className='w-[343px] bg-primary py-2 text-white mt-[34px] rounded-lg text-cart3'>Тулдириш</button>
          </Link>


        </form>
      </div>
    </div>
  )
}

export default PaymentPage
