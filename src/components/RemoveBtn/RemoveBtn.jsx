import React from 'react'
import { IoMdClose } from "react-icons/io";

function RemoveBtn() {
  return (
    <div>
               <button className="absolute top-0 right-0 h-10 w-10 bg-[#edeef5]  text-sm font-semibold  rounded-full active:scale-90 transition flex justify-center items-center">
                    <IoMdClose />
                </button>

    </div>
  )
}

export default RemoveBtn