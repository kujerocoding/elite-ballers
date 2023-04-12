import { useState } from "react"
import {Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/image/Logo.png"
import Link from "./Link"
import { SelectedPage } from "@/shared/types"
import ActionButton from "@/shared/ActionButton"
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    isTopOfPage: boolean,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({isTopOfPage,selectedPage, setSelectedPage}: Props) => {

    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    const flexBetween = "flex items-center justify-between"
    const navbarBG = isTopOfPage ? "" : "bg-secondary-yellow drop-shadow"

  return (
    <nav>
        <div className={`${navbarBG} ${flexBetween} fixed top-0 z-50 w-full py-6 `}>
            <div className={`${flexBetween} mx-auto w-5/6 gap-16 `}>
                <AnchorLink href={`#${SelectedPage.Home}`}
                    onClick={() => setSelectedPage(SelectedPage.Home)}>
                    <img className="w-28" src={Logo} alt="logo" />
                </AnchorLink>
                    
                
                <div className={`sm:${flexBetween} w-full hidden`}>
                        <div className={`${flexBetween} gap-8 text-sm `}>
                                <Link 
                                    page="Home"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link 
                                    page="About Us"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link 
                                    page="Classes"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link 
                                    page="Contact Us"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                        </div>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <p>Sign in</p>
                            <ActionButton setSelectedPage={setSelectedPage}>Become an Apprentice</ActionButton>
                        </div>
                </div>
                <button 
                        className="block sm:hidden rounded-full bg-primary-orange p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <Bars3Icon className="h-6 w-6 text-primary-white"/>
                </button>
            </div>  
        </div>
        {isMenuToggled && (
            <div className="fixed sm:hidden right-0 bottom-0 z-60 h-full w-[300px] bg-primary-yellow">
                <div className="flex justify-end py-6 pr-12">
                    <button 
                    className="rounded-full bg-primary-orange p-2" 
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <XMarkIcon className="h-6 w-6 text-white"/>
                    </button>
                </div>
                <div className="ml-[20%] flex flex-col gap-10 text-xl">
                                <Link 
                                    page="Home"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link 
                                    page="About Us"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link 
                                    page="Classes"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link 
                                    page="Contact Us"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                </div>
            </div>
        )}
    </nav>
  )
}

export default Navbar