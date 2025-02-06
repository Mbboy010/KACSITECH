import "../../components/animation.css"
import Section from "../../components/Signup/Section"

import IsAuthConponet from "../../components/Signup/IsAuthConponet"


import {motion} from "framer-motion"
import type { Metadata } from "next";
import NewProvider from "../../components/reduxComponent/newProvider"


export const metadata: Metadata = {
  title: "Create account"
};


export default async function Signup(){
  
  await new Promise((resolve) => setTimeout(resolve,2000));
  
  return(
   <div className="min-h-screen min-w-full flex-col flex  items-center relative">
       <Section/>
        <NewProvider/>
        <IsAuthConponet/>
    </div>
    )
}