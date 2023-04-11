import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";


type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
   <AnchorLink className="rounded-md bg-primary-yellow px-10 py-2 hover:bg-primary-light-orange hover:text-white" 
   onClick={() => setSelectedPage(SelectedPage.ContactUs)}
   href={`#${SelectedPage.ContactUs}`}
   >
    {children}
   </AnchorLink>
  )
}

export default ActionButton