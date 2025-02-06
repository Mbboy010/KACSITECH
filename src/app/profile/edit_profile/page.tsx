import IsNotAuthConponet from "../../../components/Signup/IsNotAuthConponet"
import Style from "../../../components/style/style"
import UpdateProfile from "../../../components/Signup/UpdateProfile"
import NewProvider from "../../../components/reduxComponent/newProvider"
import {useGenerateState} from "@/context"
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Edit profile"
};

export default async function EditProfile(){
  
  await new Promise((resolve) => setTimeout(resolve,2000));
  
  return(
   <div className="min-h-screen min-w-full flex-col flex  items-center relative">
    <UpdateProfile />
    <Style/>
    <NewProvider/>
    <IsNotAuthConponet/>
    </div>
    
    )
}