import GridContainer from "../GridContainer"
import GroupFooterLinks from "./components/GroupFooterLinks"
import { Rights } from "./components/Rights"

const Footer = () => {
  return (
    <footer>
      <GridContainer>
        <div className="flex flex-col pb-10 mb-6 border-b border-solid border-gray-700">
          <GroupFooterLinks />
        </div>
        <Rights />
      </GridContainer>
    </footer>
  )
}

export default Footer