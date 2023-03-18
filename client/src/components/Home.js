import BreakfastSec from "./BreakfastSec";
import Footer from "./Footer";
import HeroSec from "./HeroSec";
import NavBar from "./NavBar";

const Home = () => {
    return (
        <div>
            <NavBar/>
            <HeroSec/>
            <BreakfastSec/>
            <Footer/>
        </div>
    );
}

export default Home;
