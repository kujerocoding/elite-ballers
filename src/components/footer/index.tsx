import Logo from '@/assets/image/Logo.png'
import Link from '../navbar/Link'
import { SelectedPage } from '@/shared/types'

type Props = {
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void
}

const Footer = ({selectedPage, setSelectedPage}: Props) => {
  return (
    <footer className='pt-10 text-primary-light-orange bg-gray-800'>
        <div className='mx-auto w-5/6 gap-16 md:flex'>
            <div className='basis-1/2'>
                <img className='w-24' src={Logo} alt="logo" />
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold mb-8'>Links</h4>
                <div className="flex flex-col gap-4 text-sm">
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
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold mb-8'>Contact Us</h4>
                <p className='my-5 text-sm'>Santa Maria, Makati City, Philippines</p>
                <p className='my-5 text-sm'>+63 817 342 6235</p>
            </div>
        </div>
        <p className='w-full text-xs text-center mx-auto mt-10 py-10'>
            &copy; Copyright 2023 - EliteBallers - All Rights Reserved</p>
    </footer>
  )
}

export default Footer