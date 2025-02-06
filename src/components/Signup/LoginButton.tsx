import { FcGoogle } from "react-icons/fc";
import {Button} from "@nextui-org/react"
import Link from "next/link"
import {motion,useScroll,useTransform} from "framer-motion"
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";

import {auth,db,storage} from "../../server/firebase.cong"

interface props {
  text: string;
  link: string;
  textS: string;
}




export default function LoginButton({text,link,textS}:props){
  
  
  const handlePro =  () => {
    
  const provider = new GoogleAuthProvider();
    
  signInWithPopup(auth,provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    console.log(token)
    console.log(user)
    
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  
  
  }
  
  
  return(
    <div className="w-full h-full my-5 flex-col justify-center items-center flex  gap-5">
    
    <div className="w-full h-full justify-center items-center flex  ">
    
    <Button onClick={handlePro} className="bg-white  flex items-center  justify-center hidden  w-[25%] text-black font-bold border border-foreground"  type="button"><span className=""><FcGoogle className="" /></span><span className="">Google</span></Button>
    
    <span className="hidden">or</span>
    
    <Button  className="w-[25%] font-bold" type="submit">{text}</Button>
    
        </div>

    
    <div className="w-full h-full flex justify-center items-center ">
    
    <div className="w-full h-full mt-3 flex items-center justify-center ">
    <motion.div
    whileHover={{scale: 1.02}}
    whileTap={{scale: 0.98  }}
    >
    <Link className=" text-[12px] hidden text-blue-700 active:text-red-600 visited:text-fuchsia-800 font-bold" href="/forgot%password">Forgot password</Link>
    </motion.div>
    
    <motion.div
    whileHover={{scale: 1.02}}
    whileTap={{scale: 0.98  }}
    >
    <Link className=" text-[12px] text-blue-700  active:text-red-600 visited:text-fuchsia-800 font-bold" href={link}>{textS}</Link>
    </motion.div>
    </div>
    
    </div>
    
    
    </div>
    )
}