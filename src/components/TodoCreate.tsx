import React from 'react'

export default function TodoCreate() {
  return (
    <div className='w-[500px] flex flex-col justify-center items-center  !mt-10 !p-2 rounded'>
        <input placeholder='Todo Giriniz...' className='w-full outline-none border-b border-b-neutral-600' type='text' />
        <button className='!mt-3 !ml-auto bg-amber-300 !py-1 !px-2 hover:cursor-pointer rounded-md'>Oluştur</button>
    </div>
  )
}
