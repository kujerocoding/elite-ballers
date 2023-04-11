import { useState } from "react"
import {Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/image/Logo.png"
import Link from "./Link"
import { SelectedPage } from "@/shared/types"

type Props = {
    
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {

    const flexBetween = "flex items-center justify-between"

  return (
    <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6 border-2 border-red-500`}>
            <div className={`${flexBetween} mx-auto w-5/6 border-2 border-green-500`}>
                <div className={`${flexBetween} w-full gap-16 border-2 border-orange-500`}>
                    <img className="w-14" src={Logo} alt="log" />

                    <div className={`${flexBetween} w-full border-2 border-black`}>
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
                                <button>Become an Apprentice</button>
                            </div>
                        </div>
                        <div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar