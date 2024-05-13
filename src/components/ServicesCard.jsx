import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
    return (
        <div className="card w-full bg-white border-2 border-[#e26d2f]">
            <figure><img src={service?.servicePhoto} alt="image" className=" duration-1000 hover:scale-150 w-full" /></figure>
            <div className="card-body text-black">
                <h2 className="card-title">{service.serviceName}</h2>
                <p>Price : {service.price} $</p>
                <div className="flex items-center gap-5">
                    <img src={service.providerImage} alt="" className="w-10 h-10 rounded-full border " />
                    <div>
                        <p>{service.providerName}</p>
                        <p>{service.providerEmail}</p>
                    </div>
                </div>
                <p> <span className="font-extrabold">Description:</span> {service.description.slice(0,100)}...</p>
                <div className="card-actions w-full">
                    <Link className="w-full" to={`/single/${service._id}`}><button className="btn bg-[#e26d2f] border-none w-full">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;