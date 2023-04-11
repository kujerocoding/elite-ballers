import React, { useState, useEffect } from 'react'
import Navbar from '@/components/navbar'
import { SelectedPage } from '@/shared/types'
import Home from '@/components/home'
import AboutUs from '@/components/aboutus'


const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll =() =>{
      if(window.scrollY === 0 ) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home)
      }else if(window.scrollY !== 0) {
        setIsTopOfPage(false)
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  },[])

  return (
    <div className='app'>
      <Navbar 
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}/>
      <Home setSelectedPage={setSelectedPage}/>
      <AboutUs setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App