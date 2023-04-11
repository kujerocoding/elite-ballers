import { SelectedPage } from '@/shared/types'
import React from 'react'
import {motion} from 'framer-motion'
import HText from '@/shared/HText'
import AboutGraphic from '@/assets/image/AboutGraphic.jpg'
import ActionButton from '@/shared/ActionButton'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const AboutUs = ({setSelectedPage}: Props) => {
  return (
    <section id="aboutus" className='mx-auto min-h-full w-5/6 py-24 text-center'>
        <motion.div className='flex flex-col gap-14 justify-center items-center' onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}>
            <div className='sm:w-2/3'>
                <HText>About Us</HText>
                <p>We are a team of experienced basketball coaches who are passionate about helping players improve their skills and reach their full potential.</p>
            </div>
            <div className='sm:flex items-center gap-8'>
                <div className='mb-14 sm:mb-0 sm:basis-1/2'>
                    <img className='rounded-lg' src={AboutGraphic} alt="about-graphic" />
                </div>
                <div className='flex flex-col gap-4 px-4 sm:basis-2/3'>
                    <p>At Elite Ballers, we believe that anyone can improve their game with the right training and support. That's why we offer a range of services to help players of all ages and skill levels reach their full potential on the court.</p>
                    <p>Our experienced coaches are passionate about basketball and dedicated to helping our clients achieve their goals. Whether you're looking to improve your shooting, dribbling, defense, or teamwork, we have the knowledge and expertise to help you get there.</p>
                </div>
            </div>
            <div className='sm:w-2/3'>
                <p>So why choose Elite Ballers? With our personalized coaching plans, flexible online courses, and range of training materials, we offer a comprehensive approach to basketball training that is tailored to your unique needs and goals.</p>
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}} 
                    transition={{duration: 1}}
                    variants={{
                        hidden: {opacity: 0, y:100},
                        visible: {opacity: 1, y:0}
                    }}
                    className='flex items-center gap-4 text-sm mt-8 justify-center'>
                        <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                        <AnchorLink 
                            className='text-primary-orange font-bold underline'
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}>
                            <p>Learn More</p>
                        </AnchorLink>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default AboutUs