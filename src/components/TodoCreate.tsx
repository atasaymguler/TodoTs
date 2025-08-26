import React, {  useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../redux/todoSlice'
import type { TodoType } from '../types/Types'

export default function TodoCreate() {

    const dispatch = useDispatch()

    const [newTodo,setNewTodo] = useState<string>('')

    const handleCreateTodo = () => {

        if(newTodo.trim().length==0){
            alert("Todo Giriniz !")
            return ;
        }
        
        const payload : TodoType = {
            id : Math.floor(Math.random()*999999),
            content : newTodo
        }
        dispatch(createTodo(payload))
        setNewTodo("")
    }

  return (
    <div className='w-[500px] flex flex-col justify-center items-center  !mt-10 !p-2 rounded'>
        <input value={newTodo} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} placeholder='Todo Giriniz...' className='w-full outline-none border-b border-b-neutral-600' type='text' />
        <button onClick={handleCreateTodo} className='!mt-3 !ml-auto bg-amber-300 !py-1 !px-2 hover:cursor-pointer rounded-md'>Oluştur</button>
    </div>
  )
}
