"use client"

import {useState,useRef,useEffect} from "react"
import type { RootState } from './store'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './slicerCom/handAside'

export default function NewProvider(){
  
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  
 useEffect(() =>{
   if(count){
     dispatch(increment(false))
   }
 },[])
  
  
  return(
    <div>
    </div>
    )
}