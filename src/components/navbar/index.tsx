import { useState } from "react"
import {Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/image/Logo.png"
import Link from "./Link"
import { SelectedPage } from "@/shared/types"
import ActionButton from "@/shared/ActionButton"

type Props = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {

    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    const flexBetween = "flex items-center justify-between"

  return (
    <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6 border-2 border-red-500`}>
            <div className={`${flexBetween} mx-auto w-5/6 border-2 border-green-500`}>
                <div className={`${flexBetween} w-full gap-16 border-2 border-orange-500`}>
                    <img className="w-14" src={Logo} alt="log" />
                    <div className={`sm:${flexBetween} w-full border-2 border-black hidden`}>
                        <div className={`${flexBetween} w-full border-2 border-blue-500`}>
                            <div className={`${flexBetween} gap-8 text-sm border-2 border-red-500`}>
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
                            <div className={`${flexBetween} gap-8 border-2 border-red-400`}>
                                <p>Sign in</p>
                                <ActionButton setSelectedPage={setSelectedPage}>Become an Apprentice</ActionButton>
                            </div>
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
        </div>
    </nav>
  )
}

export default Navbar