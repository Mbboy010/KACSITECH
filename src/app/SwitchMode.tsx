"use client";

import {Button,Switch} from "@nextui-org/react"
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import {MoonIcon} from "../components/svg/MoonIcon";
import {SunIcon} from "../components/svg/SunIcon";

export default function SwitchMode(){
  
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null


  
  return(
    <div>
<Switch
      defaultSelected
      size="sm"
      color="secondary"
      thumbIcon={({ isSelected, className }) =>
         theme == "light" ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
      onValueChange={() => setTheme(theme == "light" ? "dark" : "light")}
    >
    </Switch>
    </div>
    )
}