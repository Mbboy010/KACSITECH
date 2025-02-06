import type { Metadata } from "next";
import NewProvider from "../../components/reduxComponent/newProvider"

import PolicyTerms from "../../components/policy/policy"

export const metadata: Metadata = {
  title: "Policy terms"
};


export default async function Policy(){
  
  await new Promise((resolve) => setTimeout(resolve,2000));
  
  return(
   <div className="min-h-screen min-w-full flex-col flex  items-center relative">
       <PolicyTerms/>
       <NewProvider />
    </div>
    )
}