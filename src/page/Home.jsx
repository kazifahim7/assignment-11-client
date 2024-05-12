import { Helmet} from 'react-helmet-async';
import Slider from '../components/Slider';
import About from '../components/About';
import Review from '../components/Review';
import Faq from '../components/Faq';
import PopularServies from '../components/PopularServies';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <Slider></Slider>
            <About></About>

            <PopularServies></PopularServies>

            <Review></Review>

           <Faq></Faq>

            

            
        </div>
    );
};

export default Home;