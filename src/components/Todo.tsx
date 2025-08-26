import React from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import type { TodoType } from "../types/Types";

// todoProps'un tipini belirtmediğimiz için hata veriyor, TodoType olarak belirtirsek kabul etmiyor {todoProps}:TodoType, bu yüzden burada bir tane interface tanımlayıp oraya tip veririz.

interface TodoPropsType {
  todoProps: TodoType;
}

export default function Todo({ todoProps } : TodoPropsType) {

  let {id,content} = todoProps;

  return (
    <div className="flex !mt-3 justify-between items-center border border-zinc-400 !p-2 rounded-lg ">
      <div> {content}</div>
      <div className="flex justify-center items-center gap-1">
        <MdDelete className="text-2xl hover:cursor-pointer" />
        <FaEdit className="text-2xl hover:cursor-pointer" />
        <FaCheck className="text-2xl hover:cursor-pointer" />
      </div>
    </div>
  );
}
