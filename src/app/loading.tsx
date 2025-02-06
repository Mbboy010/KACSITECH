"use client"

import {Spinner} from "@nextui-org/react";

import {useState,useRef,useEffect} from "react"
import type { RootState } from '../components/reduxComponent/store'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../components/reduxComponent/slicerCom/handAside'

export default  function Loading(){
  
 const count = useSelector((state: RootState) => state.counter.value)
const dispatch = useDispatch()
  
 useEffect(() =>{
   if(count){
    dispatch(increment(false))
   }
 },[])

  return(
    <div className="w-screen h-screen flex justify-center items-center">
    <div className="w-full h-full flex flex-col justify-center items-center">
    <Spinner/>
    <h1 className="mt-3">loading...</h1>
    </div>
    </div>
    )
}