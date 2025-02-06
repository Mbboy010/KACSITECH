import type { Metadata } from "next";
import NewProvider from "../../components/reduxComponent/newProvider"
import Reportco from "../../components/report/ReportCo"
import IsNotAuthConponet from "../../components/Signup/IsNotAuthConponet"


export const metadata: Metadata = {
  title: "Report"
};


export default async function Report(){
  
  await new Promise((resolve) => setTimeout(resolve,2000));
  
  return(
    <div className="w-screen h-screen">
      <Reportco/>
      <NewProvider />
     <IsNotAuthConponet/>
    </div>
    )
  
}