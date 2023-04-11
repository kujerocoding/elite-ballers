import { SelectedPage } from '@/shared/types'
import ActionButton from '@/shared/ActionButton'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import HomeGraphic from '@/assets/image/HomeGraphic.jpg'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({setSelectedPage}: Props) => {
  return (
    <section id='home' className='mt-32'>
        <div className='sm:flex w-5/6 mx-auto items-center justify-between'>
            <div className='text-center flex flex-col items-center gap-4 mb-4 sm:mb-0 sm:basis-3/5'>
                <h1 className='font-anton text-4xl sm:text-6xl sm:leading-tight max-w-sm'>Welcome to the <span className='whitespace-nowrap'>Elite Ballers</span> <span className='whitespace-nowrap'>Training Camp</span> </h1>
                <p>Here you'll find everything you need to take your basketball skills to the next level.</p>
                <div className='flex items-center gap-4 text-sm'>
                    <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                    <AnchorLink 
                        className='text-primary-orange font-bold underline'
                        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                        href={`#${SelectedPage.ContactUs}`}>
                        <p>Learn More</p>
                    </AnchorLink>
                </div>
            </div>
            <div className='sm:w-[300px]'>
                <img className='rounded-lg' src={HomeGraphic} alt="home-graphic" />
            </div>
        </div>
    </section>
  )
}

export default Home