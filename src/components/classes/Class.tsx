
type Props = {
    name: string;
    description?: string;
    image: string;

}

const Class = ({name, description, image}: Props) => {
  return (
    <li className='relative mx-5 inline-block h-[400px] w-[300px]'>
       <div className='p-5 absolute z-30 h-[400px] w-full  flex flex-col items-center justify-center whitespace-normal bg-primary-light-orange text-center text-white opacity-0 transition duration-500 hover:opacity-90'>
            <p className='text-2xl mb-4 font-bold animate-bounce'>{name}</p>
            <p className='text-sm font-bold'>{description}</p>
       </div>
       <img src={image} alt={`${image}`} />
    </li>
  )
}

export default Class