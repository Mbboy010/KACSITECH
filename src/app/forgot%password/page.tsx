import Forgotpass from "../../components/Signup/Forgotpass"

 import NewProvider from "../../components/reduxComponent/newProvider"
 
 import IsAuthConponet from "../../components/Signup/IsAuthConponet"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot password"
};


export default async function ForgotPassword(){
  
  
  await new Promise((resolve) => setTimeout(resolve,2000));
  

  
return(
    <div className="flex flex-col w-screen h-screen gap-3 justify-center items-center ">
      <Forgotpass />
        
       <NewProvider/>
    </div>
    )
}