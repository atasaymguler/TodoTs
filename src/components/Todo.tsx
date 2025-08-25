import React from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

export default function Todo() {
  return (
    <div className="flex justify-between items-center border border-zinc-400 !p-2 rounded-lg "> 
      <div > İlk Todo</div>
      <div className="flex justify-center items-center gap-1">
        <MdDelete className="text-2xl hover:cursor-pointer" />
        <FaEdit className="text-2xl hover:cursor-pointer"  />
        <FaCheck className="text-2xl hover:cursor-pointer"  />
      </div>
    </div>
  );
}
