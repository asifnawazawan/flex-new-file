import Navbar from "./component/Navbar"
import MobileNavbar from "./component/MobileNavbar"
import FigmaToCode from "./component/FigmaToCode"
import Herosec from "./component/HeroSec"

export default function Home() {
  return(
    <main>
      <div className="hidden lg:block">
      <Navbar />
      </div>
      <div>
        <Herosec />
      </div>
      <div>
      <MobileNavbar />
      </div>
      <div>
        <FigmaToCode />
      </div>
    </main>
  )
}
    