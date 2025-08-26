import React from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import type { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById } from "../redux/todoSlice";

interface TodoPropsType {
  todoProps: TodoType;
}

export default function Todo({ todoProps }: TodoPropsType) {
  
  let {id,content} = todoProps;

  let dispatch = useDispatch()

  const handleRemoveTodo = () =>{
    dispatch(removeTodoById(id))
  }
  
  return (
    <div className="flex !mt-3 justify-between items-center border border-zinc-400 !p-2 rounded-lg ">
      <div>{content}</div>
      <div className="flex justify-center items-center gap-1">
        <MdDelete onClick={handleRemoveTodo} className="text-2xl hover:cursor-pointer" />
        <FaEdit className="text-2xl hover:cursor-pointer" />
        <FaCheck className="text-2xl hover:cursor-pointer" />
      </div>
    </div>
  );
}
