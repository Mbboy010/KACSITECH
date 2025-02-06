
import LoginContent from "../../components/Login/LoginContent"
import Style from "../../components/style/style"
import {useGenerateState} from "@/context"
import NewProvider from "../../components/reduxComponent/newProvider"

import IsAuthConponet from "../../components/Signup/IsAuthConponet"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login account"
};



export default async function Login(){
  
await new Promise((resolve) => setTimeout(resolve,2000));
  
  
  return(
    <div className="w-screen h-screen">
    <div className="h-full w-full flex flex-col justify-center items-center">
      <LoginContent />
      <Style />
      <IsAuthConponet/>
      <NewProvider/>
    </div>
    </div>
    )
}