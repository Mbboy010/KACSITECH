import Changepass from "../../../../components/Signup/Changepass"
import NewProvider from "../../../../components/reduxComponent/newProvider"
import IsNotAuthConponet from "../../../../components/Signup/IsNotAuthConponet"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Change password"
};

export default async function ChangePassword(){
  
  await new Promise((resolve) => setTimeout(resolve,2000));
  
  
  return(
      <div className="min-h-screen min-w-full flex-col flex  items-center relative">
   <Changepass />
     <IsNotAuthConponet/>
    <NewProvider/>
    </div>
    )
}