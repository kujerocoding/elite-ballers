import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import {useForm} from 'react-hook-form'
import ContactUsGraphic from '@/assets/image/ContactUsGraphic.svg'
import HText from '@/shared/HText'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({setSelectedPage}: Props) => {

    const inputStyles = `mb-5 rounded-lg w-full rounde-lg bg-primary-light-orange px-5 py-3 placeholder-gray-200 focus:outline-primary-yellow`

    const {
        register,
        trigger,
        formState:{errors}
    } =useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if(!isValid) {
            e.preventDefault();
        }
    }

  return (
    <section id='contactus' className='mx-auto w-5/6 py-24 text-primary-light-orange'>
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}} 
            transition={{duration: 0.5}}
            variants={{
                hidden: {opacity: 0, x:-100},
                visible: {opacity: 1, x:0}
            }}
            className='sm:w-2/3 pb-0 sm:pb-14'>
                <HText>Join now to get to the next level</HText>
                <p>Our coaches will work with you one-on-one to develop a customized training plan that takes into account your strengths, weaknesses, and goals, and provides you with the individual attention you need to reach your full potential.</p>
            </motion.div>
            <div className='relative sm:flex items-start justify-between'>
            <div className='mt-10 sm:mt-0 justify-between gap-8 flex sm:basis-3/5'>
                <motion.div
                className='w-full'
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}} 
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, y:100},
                    visible: {opacity: 1, y:0}
                }}
                >
                    <form 
                    target='_blank'
                    onSubmit={onSubmit}
                    method='POST'
                    action='https://formsubmit.co/e7ca1745125bc360de8abee9d08098d6'>

                        <input 
                            type="text" 
                            className={inputStyles}
                            placeholder='Name'
                            {...register("name", {
                                required: true,
                                maxLength: 100
                            })}
                        />
                        {errors.name && (
                            <p className='mb-5 text-red-500'>
                                {errors.name.type === "required" && "This field is required"}
                                {errors.name.type === "maxLength" && "Max length is 100 character"}
                            </p>
                        )}
                        <input 
                            type="text" 
                            className={inputStyles}
                            placeholder='Email'
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                        />
                        {errors.email && (
                            <p className='mb-5 text-red-500'>
                                {errors.email.type === "required" && "This field is required"}
                                {errors.email.type === "pattern" && "Invalid email address"}
                            </p>
                        )}
                        <textarea 
                            
                            className={inputStyles}
                            placeholder='Message'
                            rows={4}
                            cols={50}
                            {...register("message", {
                                required: true,
                                maxLength: 1000
                            })}
                        />
                        {errors.message && (
                            <p className=' text-red-500'>
                                {errors.message.type === "required" && "This field is required"}
                                {errors.message.type === "maxLength" && "Max length is 1000 character"}
                            </p>
                        )}

                        <button type='submit' className='mt-5 rounded-lg text-primary-orange bg-primary-yellow px-20 py-3 transition duration hover:text-white hover:bg-primary-orange text-sm '>
                            SUBMIT
                        </button>

                    </form>
                </motion.div>
            </div>
            <div className='hidden sm:block sm:absolute right-0 -top-32 mt-10 sm:mt-0 sm:w-[250px]'>
                <img src={ContactUsGraphic} alt="contactus-graphic" />
            </div>
            </div>
            
        </motion.div>
    </section>
  )
}

export default ContactUs