
type Props = {
    plan: string;
    price: string;
    description: string[];

}

const Price = ({plan, price, description}: Props) => {
  return (
    <li className='list-none text-center'>
            <h3 className='pb-8 font-bold'>{plan}</h3>
            <h2 className='text-3xl pb-8 font-bold'>₱{price}</h2>
            {description.map((item, i)=> (
                <p key={i} className='pb-4 text-sm'>{item}</p>
            ))}
    </li>
  )
}

export default Price