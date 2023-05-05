import { SelectedPage } from '@/shared/types'
import ActionButton from '@/shared/ActionButton'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import HomeGraphic from '@/assets/image/HomeGraphic.svg'
import { motion } from 'framer-motion'


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({setSelectedPage}: Props) => {
  return (
    <section id='home' className='pt-32 pb-10'>
        <motion.div 
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className='sm:flex w-5/6 mx-auto items-center justify-between'>
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}} 
            transition={{duration: 0.5}}
            variants={{
                hidden: {opacity: 0, x:-100},
                visible: {opacity: 1, x:0}
            }}
            className='flex flex-col gap-4 mb-8 sm:mb-0 sm:basis-3/5'>
                <h1 className='text-primary-orange font-anton text-4xl sm:text-5xl sm:leading-tight max-w-sm'>Welcome to the <span className='whitespace-nowrap'>Elite Ballers</span> <span className='whitespace-nowrap'>Training Camp</span> </h1>
                <p className='text-primary-light-orange'>Here you'll find everything you need to take your basketball skills to the next level.</p>
                <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}} 
                transition={{delay: 0.3, duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x:-100},
                    visible: {opacity: 1, x:0}
                }}
                className='flex items-center gap-8 text-sm'>
                    <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                    <ActionButton setSelectedPage={setSelectedPage}>Learn More</ActionButton>
                    
                </motion.div>
            </motion.div>
            <div className='sm:mr-10 max-w-md'>
                <img className='rounded-t-full' src={HomeGraphic} alt="home-graphic" />
            </div>
        </motion.div>
    </section>
  )
}

export default Home