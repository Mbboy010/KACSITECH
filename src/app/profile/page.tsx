import type { Metadata } from "next";
import NewProvider from "../../components/reduxComponent/newProvider"
import ProfileConponent from "../../components/profile/profile"
import IsNotAuthConponet from "../../components/Signup/IsNotAuthConponet"



export const metadata: Metadata = {
  title: "Profile"
};


export default async function Profile(){
  
  await new Promise((resolve) => setTimeout(resolve,2000));
  
  return(
   <div className="min-h-screen min-w-full flex-col flex  items-center relative">
     <ProfileConponent/>
       <NewProvider />
         <IsNotAuthConponet/>
    </div>
    )
}