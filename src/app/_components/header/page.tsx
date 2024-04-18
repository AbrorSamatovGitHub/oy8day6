import React from 'react'
import HeaderLogo from '../../../../public/header_logo'
import HeaderImg1 from '@/img/headerImg1'
const Header = () => {
  return (
    <div>
      <div>
        <HeaderLogo />
        <div>
          <div className='relative'>
            <div className='absolute top-[50%] left-3   translate-y-[-50%]'>
              <HeaderImg1 />
            </div>
            <select className='border  py-2 pl-[60px] pr-[22px] text-primary text-cart6 ' name="name" id="">
              <option value="name">Рукнлар</option>
            </select>
          </div>
          <div>
            <form>
              <input placeholder='Қидириш' type="text" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
