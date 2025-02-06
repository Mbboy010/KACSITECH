"use client"
import {useState,useEffect} from "react"

import type { RootState } from '../components/reduxComponent/store'
import { useSelector, useDispatch } from 'react-redux'

import { doc, setDoc,collection, addDoc , getDocs } from "firebase/firestore";
import {auth,db,storage} from "../server/firebase.cong"


export default function MessageCont(){
  
  
 const isAuth = useSelector((state: RootState) => state.isAuth.value)
  
  
  interface array {
     bodyMess?: string,
     user?: string,
     messNum?: number,
     time?: string,
     date?: string,
     fullDate?: string,
     dataFill?: boolean
    }
    
  
  const [data,setData] = useState<array[]>([])
  const [state,setState] = useState<array[]>([])
  const [istrue,setIstrue] = useState<boolean>(false)
  
  const user = auth.currentUser
  
  useEffect(() =>{
    
    
    
   if(user){
    async function dat(){
      
        
      
        
      let docSnap = await getDocs(collection(db, "message"+user.uid))
            .then(async (querySnapshot)=>{              
                const newData = await querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
               await setData(newData);
               
              if (data.length >= 1) {
                       await setIstrue(true)
                         }      
      
               
            })
            
   const sorted = await data.sort((a: any, b: any) => b.messNum - a.messNum);
    
   await setState(sorted)

      
   }
    
    
    
    dat()
    
   }else{
     
     
     
   }
    
    
    
    
    
    
    
  })
  
  return(
    <div className="w-full overflow-y-auto  h-[95%]  backdrop-blur-md">
    {
      
      istrue ?
    
    <div className="w-full mb-20 flex flex-col h-full my-20">
    
      {
        
        state.map((e,i) =>  <div className="w-full relative" key={i}>
         <div className=" w-full mt-2 relative ">
             
             

        
          {
        e.user == "admin" ?
        <div className="w-full">
      
      <div className="w-full mb-2 flex ">
      
      <div className="rounded-r-xl bg-gray-400 rounded-bl-xl mx-3  mr-[10%] ml-2">
      <h1 className="text-white  mt-2 mx-2">
      {e.bodyMess}
      </h1> 
      <div className="w-full border-t border-fuchsia-600 relative  ">
      <h1 className="text-gray-100 mr-2 ml-2 w-full text-[10px] font-semibold ">{e.time} - {e.date}</h1>

      </div>
      
      </div>
      
      
      </div> 
      
      </div>
      :
        <div className="w-full flex mb-2 flex-col h-full ">
      <div className="w-full flex justify-between">
      <p className="w-1 h-1"></p>
      <div className="rounded-l-xl bg-blue-500 rounded-tr-xl mx-3 ml-[10%] mr-2">
      <h1 className="text-white mt-2 mx-2">
      {e.bodyMess}
      </h1> 
      <div className=" w-full border-t border-fuchsia-600    font-seri "> <h1 className="text-gray-100 text-right text-[10px] ml-2 font-semibold mr-2">{e.time} - {e.date}</h1> </div>
      </div>

      </div>
      </div>
      
            
          
          
          }
         
         </div>
         </div>
         )
        
      }
      
   
      
      
    </div>
    : 
    <div className="w-full h-full justify-center items-center flex">
     <h1>there is not message</h1>
    </div>
    }
    </div>
    )
}

const dat = [
   {
     bodyMess: "salm",
     user: "client",
     date: "2033, sat 12",
     messNum: 1,
     time: "20:50:38",
     dataFill: false
   },
   {
     bodyMess: "wslm",
     user: "admin",
     date: "2033, sat 12",
     messNum: 2,
     time: "20:50:38",
   },
   {
     bodyMess: "The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values.",
     user: "client",
     messNum: 3,
     time: "20:50:38",
     date: "2033, sat 12",
     dataFill: false
   },

   {
     bodyMess: "salm",
     user: "client",
     messNum: 5,
     date: "2033, sat 12",
     time: "20:50:38",
     dataFill: false
   },
   {
     bodyMess: "salm",
     user: "client",
     messNum: 6,
     date: "2033, sat 12",
     time: "20:50:38",
     dataFill: false
   },
   {
     bodyMess: "The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values.",
     user: "admin",
     messNum: 7,
     date: "2033, sat 12",
     time: "20:50:38",
   },

   {
     bodyMess: " ya lbr",
     user: "client",
     messNum: 9,
     time: "20:50:38",
     date: "2033, sat 12",
     dataFill: false
   },
   {
     bodyMess: "salm",
     user: "client",
     messNum: 10,
     time: "20:50:38",
     date: "2033, sat 12",
     dataFill: false
   },
   {
     bodyMess: "salm",
     user: "client",
     messNum: 11,
     time: "20:50:38",
     date: "2033, sat 12",
     dataFill: false
   },
   {
     bodyMess: "wslm",
     user: "admin",
     messNum: 12,
     date: "2033, sat 12",
     time: "20:50:38",
   },

   {
     bodyMess: " ya lbr",
     user: "client",
     messNum: 14,
     date: "2033, sat 12",
     time: "20:50:38",
     dataFill: false
   },
   {
     bodyMess: "salm last",
     user: "client",
     messNum: 15,
     time: "20:50:38",
     date: "2033, sat 12",
     dataFill: false
   },
  ]


const dataM = [
  {
    actor: "admin",
    message: "hello",
    time: "1d ago"
  },
  {
    actor: "user",
    message: "hi",
    time: "1d ago"
  },
  {
    actor: "admin",
    message: "how are you",
    time: "1d ago"
  },
  {
    actor: "user",
    message: "fine",
    time: "1d ago"
  },
  {
    actor: "user",
    message: "none for the quality use client service provider to help you with your purchase order please complete your registration form onSubmit using your personal information to complete your personal registration process and the",
    time: "1d ago"
  },
  ]