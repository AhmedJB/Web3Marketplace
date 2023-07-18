import { useEffect, useState } from "react"


export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

 

  useEffect(() => {
    setWindowSize({
        width: window.innerWidth, height: window.innerHeight 
    })
    window.addEventListener("resize", () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight })
      })

    return () => window.removeEventListener("resize", () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight })
      })
    
  },[])

  

  return windowSize
}