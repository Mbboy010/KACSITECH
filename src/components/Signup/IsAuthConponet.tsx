"use client"
import {useState,useEffect} from "react"
import type { RootState } from '../../components/reduxComponent/store'
import { useSelector, useDispatch } from 'react-redux'
import { setIsAuth } from '../../components/reduxComponent/slicerCom/isAuth'

import { useRouter } from 'next/navigation'
 

export default function IsAuthConponet(){
  
const isAuth = useSelector((state: RootState) => state.isAuth.value)
const dispatch = useDispatch()

const router = useRouter()

useEffect(() =>{
  
  
   if(isAuth){
    router.push('/profile')
   }

  
 })

  
  return(
    <div></div>
    )
}