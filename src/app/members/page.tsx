import type { Metadata } from "next";
import NewProvider from "../../components/reduxComponent/newProvider"
import MembersC from "../../components/MemberComp/MembersC"
import IsNotAuthConponet from "../../components/Signup/IsNotAuthConponet"



export const metadata: Metadata = {
  title: "Members"
};


export default async function Member(){
  
  await new Promise((resolve) => setTimeout(resolve,2000));
  
  return(
   <div className="min-h-screen min-w-full flex-col flex  items-center relative">
      <MembersC/>
       <NewProvider />
         <IsNotAuthConponet/>
    </div>
    )
}