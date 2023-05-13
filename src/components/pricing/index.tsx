import ActionButton from "@/shared/ActionButton"
import { PriceType, SelectedPage } from '@/shared/types'
import Price from "./price"
import HText from "@/shared/HText"
import { motion } from "framer-motion"

const prices:Array<PriceType> =[
    {
        plan: "Free",
        price: '0.00/Mo',
        description: ['Beginners Intro', 'Basic Topic','2 Practical Sessions']
    },
    {
        plan: "Premium",
        price: '200.00/Mo',
        description: ['Advanced Course Material', '30 Online Sessions','5 Practical Sessions']
    },
    {
        plan: "Pro",
        price: '500.00/Mo',
        description: ['Advanced Course Material', '50 Online Sessions','20 Practical Sessions']
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Pricing = ({setSelectedPage}: Props) => {
  return (
    <section id="pricing" className="w-full py-24 text-primary-light-orange">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Pricing)}>
            <motion.div className="w-5/6 mx-auto pb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}} 
            transition={{duration: 0.5}}
            variants={{
                hidden: {opacity: 0, x:-100},
                visible: {opacity: 1, x:0}
            }}>
                <HText>Plans and Pricing</HText>
            </motion.div>
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.3}} 
            transition={{delay: 0.3, duration: 0.5}}
            variants={{
                hidden: {opacity: 0, y:100},
                visible: {opacity: 1, y:0}
            }}>
            <div className="text-center pb-4 text-primary-orange">
            <p className="text-xl font-bold">Choose a plan</p>
            <p className="">Find one that works for you</p>
            </div>
            <div className="flex items-center justify-center gap-10 flex-wrap">
            
                {prices.map((item, i) => (
                    <div key={i} className="w-52 h-96 bg-gray-100 flex flex-col items-center justify-around">
                        <Price 
                        plan={item.plan}
                        price={item.price}
                        description={item.description}
                        />
                    <ActionButton setSelectedPage={setSelectedPage}>Enroll Now</ActionButton>
                    </div>
                ))}
        
            
            </div>
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Pricing