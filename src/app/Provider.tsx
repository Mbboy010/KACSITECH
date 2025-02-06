import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";



export default function Provider({children}) {
  
  return  <NextUIProvider>
    <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider>
  </NextUIProvider>
}