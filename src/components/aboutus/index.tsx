import { SelectedPage } from '@/shared/types'
import React from 'react'
import {motion} from 'framer-motion'
import HText from '@/shared/HText'
import AboutGraphic from '@/assets/image/AboutGraphic.svg'
import ActionButton from '@/shared/ActionButton'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const AboutUs = ({setSelectedPage}: Props) => {
  return (
    <section id="aboutus" className='mx-auto min-h-full w-5/6 mt-10 py-10 text-primary-light-orange'>
        <motion.div className='flex flex-col gap-14' onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}>
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}} 
            transition={{duration: 0.5}}
            variants={{
                hidden: {opacity: 0, x:-100},
                visible: {opacity: 1, x:0}
            }}
            className='sm:w-2/3'>
                <HText>About Us</HText>
                <p>We are a team of experienced basketball coaches who are passionate about helping players improve their skills and reach their full potential.</p>
            </motion.div>
            <div className='sm:flex items-center gap-8'>
                <div className='mb-14 sm:mb-0 sm:max-w-sm'>
                    <img src={AboutGraphic} alt="about-graphic" />
                </div>
                <div className='flex flex-col gap-4 px-4 sm:basis-2/3'>
                    
                    <p>Our experienced coaches are passionate about basketball and dedicated to helping our clients achieve their goals. Whether you're looking to improve your shooting, dribbling, defense, or teamwork, we have the knowledge and expertise to help you get there.</p>
                    <div>
                <p>So why choose Elite Ballers? With our personalized coaching plans, flexible online courses, and range of training materials, we offer a comprehensive approach to basketball training that is tailored to your unique needs and goals.</p>
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}} 
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, y:100},
                        visible: {opacity: 1, y:0}
                    }}
                    className='flex items-center gap-4 text-sm mt-8'>
                        <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                        <ActionButton setSelectedPage={setSelectedPage}>Learn More</ActionButton>
                </motion.div>
            </div>
                </div>
            </div>
            
        </motion.div>
    </section>
  )
}

export default AboutUs