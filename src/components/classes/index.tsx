import { SelectedPage, ClassType } from '@/shared/types'
import ClassesGraphic1 from '@/assets/image/ClassesGraphic1.jpg'
import ClassesGraphic2 from '@/assets/image/ClassesGraphic2.jpg'
import ClassesGraphic3 from '@/assets/image/ClassesGraphic3.jpg'
import ClassesGraphic4 from '@/assets/image/ClassesGraphic4.jpg'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Class from './Class'

const classes:Array<ClassType> =[
    {
        name: "Basketball Training Sessions",
        description: "Our basketball training sessions are designed to help players of all skill levels improve their game. Our experienced coaches will work with you to identify areas of strength and weakness, and develop a personalized training plan that will help you reach your goals.",
        image: ClassesGraphic1
    },
    {
        name: "Online Training Courses",
        description: "Our online training courses are perfect for players who want to improve their skills but can't attend in-person training sessions. Our courses cover a range of topics, from shooting and dribbling to defense and teamwork, and are designed to be flexible and convenient.",
        image: ClassesGraphic2
    },
    {
        name: "Training Materials and Resources",
        description: "We also offer a range of training materials and resources to help you take your game to the next level. From instructional videos to training equipment, we have everything you need to improve your skills and stay motivated.",
        image: ClassesGraphic3
    },
    {
        name: "Personalized Coaching Plans",
        description: "If you're serious about improving your game, our personalized coaching plans are the perfect solution. Our coaches will work with you one-on-one to develop a customized training plan that takes into account your strengths, weaknesses, and goals, and provides you with the individual attention you need to reach your full potential.",
        image: ClassesGraphic4
    },
    {
        name: "Personalized Coaching Plans",
        image: ClassesGraphic4
    }
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Classes = ({setSelectedPage}: Props) => {
  return (
    <section id='classes' className='w-full text-center pb-24'>
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Classes)}>
            <motion.div className='flex items-center justify-center'>
                <div className='sm:w-3/5 mb-14'>
                    <HText>Classes</HText>
                    <p>At Elite Ballers, we offer a range of services to help players improve their skills and reach their full potential on the court. Here are some of the services we offer:</p>
                </div>
            </motion.div>
            <div className='h-[400px] w-full overflow-x-auto overflow-y-hidden'>
                <ul className='w-[1800px] whitespace-nowrap'>
                    {classes.map((item,index) => (
                        <Class 
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default Classes