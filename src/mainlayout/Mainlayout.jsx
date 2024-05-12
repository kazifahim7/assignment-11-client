import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../shareComponents/Navbar";
import Footer from "../shareComponents/Footer";


const Mainlayout = () => {
    const navigation = useNavigation()
    return (
        <div>

            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-338px)]">
                {
                    navigation.state === "submitting"
                        ? <div className="flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div> : <Outlet></Outlet>
                }

            </div>
            
            <Footer></Footer>
            
        </div>
    );
};

export default Mainlayout;