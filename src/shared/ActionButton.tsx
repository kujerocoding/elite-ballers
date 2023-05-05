import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";


type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void
}

const ActionButton = ({children, setSelectedPage}: Props) => {

  const joinNowStyles = 'rounded-md bg-primary-yellow px-8 text-primary-orange py-2 hover:bg-primary-light-orange hover:text-white'

  const learnMoreStyles = 'text-primary-orange font-bold underline hover:text-white'

  return (
   <AnchorLink className={`${children !== 'Learn More' ? joinNowStyles : learnMoreStyles}`}
   onClick={() => setSelectedPage(SelectedPage.ContactUs)}
   href={`#${SelectedPage.ContactUs}`}
   >
    {children}
   </AnchorLink>
  )
}

export default ActionButton