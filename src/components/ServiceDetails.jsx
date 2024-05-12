import { useLoaderData } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { Helmet } from "react-helmet-async";


const ServiceDetails = () => {
    const service=useLoaderData()
    return (
        <div>
            <Helmet>
                <title>Details</title>
            </Helmet>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={service.servicePhoto} className=" rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="font-bold">Service Section:</h1>
                        <h1 className="text-5xl font-bold">{service.serviceName}</h1>
                        <p className="py-6"> <span className="font-bold">Description :</span> {service.description}</p>
                        <p> price : {service.price} $</p>
                        <p className="flex items-center gap-2"><IoLocationSharp /> <span>{service.area}</span></p>

                        <br />

                        <h1 className="font-bold">Service Provider Information:</h1>

                        <div className="flex items-center gap-5 pt-4">
                            <img src={service.providerImage} alt="" className="w-10 h-10 rounded-full border " />
                            <div>
                                <p>{service.providerName}</p>
                                <p>{service.providerEmail}</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="btn bg-[#e26d2f]">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ServiceDetails;