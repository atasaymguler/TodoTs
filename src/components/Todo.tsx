import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import type { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById, updateTodo } from "../redux/todoSlice";

interface TodoPropsType {
  todoProps: TodoType;
}

export default function Todo({ todoProps }: TodoPropsType) {
  
  let {id,content} = todoProps;

  let dispatch = useDispatch()

  const [editable,seteditable] = useState<boolean>(false)

  const [newTodo,setNewTodo] = useState<string>(content)

  const handleRemoveTodo = () =>{
    dispatch(removeTodoById(id))
  }

  const handleUpdateTodo = () => {

    let payload = {
      id,
      content : newTodo
    }
    dispatch(updateTodo(payload))
    seteditable(false)
  }
  
  return (
    <div className="flex !mt-3 justify-between items-center border gap-4 border-zinc-400 !p-2 rounded-lg ">
      <div className="grow">{ editable ? <input className="w-full outline-none border-b !px-2 border-b-gray-400" value={newTodo} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setNewTodo(e.target.value)} type="text" /> : content}</div>
      <div className="flex justify-center items-center gap-1">
        <MdDelete onClick={handleRemoveTodo} className="text-2xl hover:cursor-pointer" />
        { editable ?
        <FaCheck onClick={handleUpdateTodo} className="text-2xl hover:cursor-pointer" /> : <FaEdit onClick={()=> seteditable(true)} className="text-2xl hover:cursor-pointer" />}
      </div>
    </div>
  );
}
