import Userimg from '@/img/userimg'
import React from 'react'

const SettingsPage = () => {
  return (
    <div className='w-[966px] p-8 pb-[78px] shadow-lg rounded-sm  '>
      <h1 className=' text-cart1 mb-[34px]'>Хисобни тулдириш</h1>
      <div>
        <Userimg />
        <form >
          <div className='flex flex-col mt-[45px]'>
            <label className='text-cart5 mt-[30px] mb-[6px]' >Исмингиз</label>
            <input className='border w-[343px] p-4 rounded-[10px]' type="text" placeholder='Исмингиз' />
          </div>
          <button className='w-[343px] bg-primary py-2 text-white mt-[34px] rounded-lg text-cart3'>Сақлаш</button>

        </form>
      </div>
    </div>
  )
}

export default SettingsPage
