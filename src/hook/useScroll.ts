import { useState,useEffect } from "react";

const useScroll = () => {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScrollY = () =>{
            setScrollY(()=>{
                return (Math.floor((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100))
            })
        }
        window.addEventListener('scroll', handleScrollY)

        return () => window.removeEventListener('scroll', handleScrollY)
    },[])
  return { scrollY }
}

export default useScroll;