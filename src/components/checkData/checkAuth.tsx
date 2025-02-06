"use client"
import {useState, useEffect} from "react"
import type { RootState } from '../../components/reduxComponent/store'
import { useSelector, useDispatch } from 'react-redux'
import { setIsAuth } from '../../components/reduxComponent/slicerCom/isAuth'
import { setIsVer } from '../../components/reduxComponent/slicerCom/isVerified'
import {auth} from "../../server/firebase.cong"

export default function CheckAuth(){
  
  
  const [isDone] = useState<boolean>(false)
  const [istrue] = useState<boolean>(false)
  
  const dispatch = useDispatch()
  
  
  useEffect(() => {
    
    setInterval(() =>{
      if(auth.currentUser){
      dispatch(setIsAuth(true))
      
      if(auth.currentUser.emailVerified){
      dispatch(setIsVer(true))
    } else{
      dispatch(setIsVer(false))
    }
      
      
    } else{
      dispatch(setIsAuth(false))
    }
    
    
    
    },1)
    
  })
  
  
  return(
    <div></div>
    )
}