import axios from "axios";
import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";
import { Link } from "react-router-dom";


const PopularServies = () => {
    const [Services, setServices] = useState([])
    const [spin,setSpin]=useState(true)
    const[show,setShow]=useState(false)
    useEffect(() => {
        axios.get(`http://localhost:7000/services`)
            .then(data => setServices(data.data))



    }, [])

    setTimeout(()=>{
        setSpin(false)
        setShow(true)

    },5000)


    return (
        <div className="my-8">
            <h1 className="text-center font-bold text-[#e26d2f]">ELECTRONICS SERVICES</h1>
            <h1 className="text-5xl font-extrabold text-center mt-5">What We <span className="text-[#e26d2f]">Provide</span></h1>

           {
                spin && <div className="flex items-center justify-center">
                    <span className="loading loading-bars loading-lg"></span>
                </div>
           }


           {
                show && <div className="container my-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {
                        Services.slice(0, 6).map((service) => <ServicesCard key={service._id} service={service}></ServicesCard>)
                    }

                </div>
           }

            <div className="flex justify-center items-center my-10">
                <Link to={'/allServices'}><button className="btn  bg-[#e26d2f] text-white border-none">All Services</button></Link>
            </div>
            
        </div>
    );
};

export default PopularServies;