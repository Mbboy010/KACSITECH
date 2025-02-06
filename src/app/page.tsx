import HomePage from '../../../../components/Signup/HomePage';

import HomePage from "../components/Signup/HomePage"
import NewProvider from "../components/reduxComponent/newProvider"


export default async function Home() {
  
 
 await new Promise((resolve) => setTimeout(resolve,2000));
 
 
  
  return (
   <div className="min-h-screen flex-col flex  items-center relative">
       <HomePage /> />

        <NewProvider/>
      </div>
  );
}
