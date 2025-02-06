import type { Metadata } from "next";
import NewProvider from "../../components/reduxComponent/newProvider"
import Aboutt from "../../components/about/about"
export const metadata: Metadata = {
  title: "About"
};

export default async function About(){
  
  await new Promise((resolve) => setTimeout(resolve,2000));
  
  return(
   <div className="min-h-screen min-w-full flex-col flex  items-center relative">
   <div className="mt-20">
       <Aboutt /> 
      <NewProvider />
   </div>
    </div>
    )
  
  
}