import type { Metadata } from "next";
import Link from "next/link"
import NewProvider from "../components/reduxComponent/newProvider"

export const metadata: Metadata = {
  title: "Not-found"
};



export default async function NotFound(){
  await new Promise((resolve) => setTimeout(resolve,2000));
  
  
  
  return(
    <div className="w-screen h-screen flex justify-center items-center">
      <div>
      
      <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-4xl">404</h1>
      <h1 className="text-[16px]">Page not found</h1>
      <h1 className="mx-4 text-[10px]">The page you are looking for doesn't exist or and other error occurred.</h1>
      <h1 className="mx-4 text-[10px]">Go back, <Link className="font-bold" href="/">home page</Link> to choose new direction</h1>
      </div>
      </div>
      <NewProvider />
    </div>
    )
}