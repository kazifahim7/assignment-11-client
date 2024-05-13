import { useLoaderData, useNavigate } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { MdCancel } from "react-icons/md";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ServiceDetails = () => {
    const service=useLoaderData()
    const navigate=useNavigate()
    const {user}=useContext(AuthContext)
    const bookingHandler=e=>{
        e.preventDefault()
        const id = e.target.service_id.value;
        const serviceName = e.target.service_name.value;
        const img = e.target.services_image.value;
        const providerEmail = e.target.provider_email.value;
        const cost = e.target.price.value;
        const providerName = e.target.provider_name.value;
        const customerEmail = e.target.customer_email.value;
        const customerName = e.target.customer_name.value;
        const dates = e.target.data.value;
        const comments = e.target.comment.value;

        const bookingInfo={
            id,
            serviceName,
            img,
            providerEmail,
            cost,
            providerName,
            status : 'Pending',
            customerEmail,
            customerName,
            comments,
            dates
        }
        
        axios.post('http://localhost:7000/bookings',bookingInfo)
        .then((data)=>{
            if (data.data.insertedId) {
               toast.success('booking success')

                e.target.reset();
                navigate('/BookedServices')
            }
        })



    }






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
                            {/* <button className="btn bg-[#e26d2f]">Book Now</button> */}
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <button className="btn bg-[#e26d2f]" onClick={() => document.getElementById('my_modal_1').showModal()}>Book Now</button>
                            <dialog id="my_modal_1" className="modal">
                                <div className="modal-box">
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="text-2xl"><MdCancel></MdCancel></button>
                                        </form>
                                    </div>




                                    <h3 className="font-bold text-lg text-center">Purchase Now</h3>
                                    {/* form */}

                                    <div>
                                        <form onSubmit={bookingHandler} className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">ServiceId</span>
                                                </label>
                                                <input type="text" name="service_id" placeholder="" value={service._id} className="input input-bordered" required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Service Name</span>
                                                </label>
                                                <input type="text" name="service_name" placeholder="" value={service.serviceName} className="input input-bordered" required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Service Image</span>
                                                </label>
                                                <input type="text" name="services_image" placeholder="" value={service.servicePhoto} className="input input-bordered" required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Provider email</span>
                                                </label>
                                                <input type="email" name="provider_email" placeholder=""
                                                    value={service.providerEmail}
                                                    className="input input-bordered" required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">price</span>
                                                </label>
                                                <input type="number" name="price" placeholder="" value={service.price} className="input input-bordered" required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Provider Name</span>
                                                </label>
                                                <input type="text" name="provider_name" value={service.providerName} className="input input-bordered" required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Current User email</span>
                                                </label>
                                                <input type="email" name="customer_email" value={user?.email} className="input input-bordered" required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Current User Name</span>
                                                </label>
                                                <input type="text" name="customer_name" value={user?.displayName} className="input input-bordered" required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Date</span>
                                                </label>
                                                <input type="date" name="data" placeholder="email" className="input input-bordered" required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">comment</span>
                                                </label>
                                                <input type="text" name="comment" placeholder="add a comment" className="input input-bordered" required />
                                            </div>
                                            <button className="btn lg:col-span-2 w-full mt-5 bg-[#e26d2f]">Purchase Now</button>

                                        </form>
                                        <ToastContainer></ToastContainer>
                                    </div>









                                    
                                </div>
                            </dialog>






                        </div>
                        

                        
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ServiceDetails;