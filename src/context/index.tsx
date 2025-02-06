"use client"
import {create} from "zustand"

interface GenerateState{
  isDone: boolean;
  setIsDone: (isDone: boolean ) => void;
  
}

export const useGenerateState = create<GenerateState>()((set) => ({
  isDone: false,
  setIsDone: (isDone: boolean ) => set({isDone}),

}))


