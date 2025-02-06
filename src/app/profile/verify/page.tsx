import type { Metadata } from "next";
import NewProvider from "../../../components/reduxComponent/newProvider"
import IsNotAuthConponet from "../../../components/Signup/IsNotAuthConponet"

import Verif from "../../../components/verify/Verify"

export const metadata: Metadata = {
  title: "Verify"
};


export default async function Verify(){
  
await new Promise((resolve) => setTimeout(resolve,2000));
  
  
  return(
    <div className="w-screen min-h-screen">
      <Verif/>
      <NewProvider />
     <IsNotAuthConponet/>
    </div>
    )
}