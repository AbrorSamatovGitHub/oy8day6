import React from 'react'
import SubscribelImg from '@/img/subscribelImg'
const SubscribePage = () => {
  return (
    <div>
      <div className='relative'>
        <SubscribelImg />
        <h1 className='absolute top-[30%] text-white text-cart1 w-[331px] left-[5%]  '>Узингиз севган булимга
          обуна бўлинг</h1>
      </div>
      <div className='p-8 pb-[121px] shadow-lg rounded-sm mt-[23px] flex justify-between items-center'>
        <div>
          <h1 className=' text-h5 '>Обуна</h1>
          <form >
            <div className='flex flex-col'>
              <label className='text-cart mt-[30px] mb-[6px]'>Обуна давом этиш вакти</label>
              <select className='border w-[400px] p-2 rounded-[10px]' name="kun" id="1">
                <option value="kun">1kun</option>
                <option value="kun">2kun</option>
                <option value="kun">3kun</option>
              </select>
            </div>
            <div className='flex flex-col'>
              <label className='text-cart mt-[30px] mb-[6px]'>Булимни танланг</label>
              <select className='border w-[400px] p-2 rounded-[10px]' name="janr" id="2">
                <option value="Фантастика">Фантастика</option>
                <option value="Драма">Драма</option>
                <option value="Комедия">Комедия</option>
              </select>
            </div>
          </form>
          <h1 className=' text-h5  mt-[24px]' >Обуна 30 кун давом этади</h1>

        </div>
        <div>
          <div className='flex w-[368px] justify-between p-4 pb-[27px] bg-slate-100'>
            <ul className='text-cart'>
              <li>Бошланиш вакти</li>
              <li>Якунланиш вакти</li>
              <li>Обуна нархи</li>
            </ul>
            <ul className='text-cart2'>
              <li>12/09/2021</li>
              <li>12/10/2021</li>
              <li className='text-primary'>12 000 сум</li>
            </ul>
          </div>
          <button className='w-full bg-primary py-2 text-white mt-[34px] rounded-lg text-cart3' >Обуна булиш</button>
        </div>
      </div>
    </div>
  )
}

export default SubscribePage
