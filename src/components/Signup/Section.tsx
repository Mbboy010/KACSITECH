"use client"
import Input from "./Input"

import Style from "../../components/style/style"

export default function Section() {
  return(
    <div>
    <div   className="mt-20 w-screen h-full flex flex-col justify-center items-center">
       <h1 style={{zIndex: "20"}} className="text-2xl mb-4 font-bold">Create account</h1>
       <Input />
       <Style />
    </div>
    </div>
    )
}