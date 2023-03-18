import BreakfastSec from "./BreakfastSec";
import Footer from "./Footer";
import HeroSec from "./HeroSec";
import InfoSec from "./InfoSec";
import NavBar from "./NavBar";

const Home = () => {
    return (
        <div>
            <NavBar/>
            <HeroSec/>
            <BreakfastSec/>
            <InfoSec/>
            <Footer/>
        </div>
    );
}

export default Home;
