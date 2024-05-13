import { useContext, useRef } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import 'sweetalert2/src/sweetalert2.scss'
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const Update = () => {
    const info=useLoaderData()
    console.log(info)


    const { user } = useContext(AuthContext)
    const emaiRef = useRef()
    const providerRef = useRef()
    const servicetitle = useRef()
    const userImage = useRef()
    const cost = useRef()
    const photo = useRef()
    const location = useRef()
    const details = useRef()
    const addServicesHandle = e => {
        e.preventDefault()
        const serviceName = servicetitle.current.value;
        const providerEmail = emaiRef.current.value;
        const price = cost.current.value;
        const providerName = providerRef.current.value;
        const servicePhoto = photo.current.value;
        const area = location.current.value;
        const providerImage = userImage.current.value;
        const description = details.current.value;
        const servicesInfo = {
            serviceName,
            providerEmail,
            price,
            providerName,
            servicePhoto,
            area,
            providerImage,
            description
        }
        console.log(servicesInfo)
        axios.put(`http://localhost:5000/single/${info?._id}`, servicesInfo)
            .then(data => {
                
                if (data.data.modifiedCount>0) {
                    Swal.fire({
                        title: "updated",
                        text: "You clicked the button!",
                        icon: "success"
                    });

                    e.target.reset();
                }
            })




    }

    return (
        <div className="container mx-auto my-10">
            <Helmet>
                <title>update services</title>
            </Helmet>





            <div>
                <div className="hero rounded-xl " style={{ backgroundImage: 'url(https://htmldemo.net/elecron/elecron/assets/images/bg/breadcrumb-bg-01.jpg)', height: '400px' }}>
                    <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold capitalize text-[#e26d2f]">Update Services</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
                    <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
                        <h2 className='text-lg font-semibold text-gray-700 capitalize '>
                            Add your Service..
                        </h2>

                        <form onSubmit={addServicesHandle}>

                            <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                                <div className='flex flex-col gap-2 '>
                                    <label className='text-gray-700 ' htmlFor='category'>
                                        Service Name
                                    </label>
                                    <select
                                        name='category'
                                        id='category'
                                        ref={servicetitle}
                                        required
                                        className='border p-2 rounded-md bg-white'
                                    >
                                        <option value={ info.serviceName }>{info.serviceName}</option>
                                        <option value='Laptop Repair'>Laptop Repair</option>
                                        <option value='SmartPhone Repair'>SmartPhone Repair</option>
                                        <option value='Camera Repair'>Camera Repair</option>
                                        <option value='iPhone Repair'>iPhone Repair</option>
                                        <option value='Desktop Repair'>Desktop Repair</option>
                                        <option value='MotherBoard Repair'>MotherBoard Repair</option>
                                        <option value='Speaker Repair'>Speaker Repair</option>
                                        <option value='light Repair'>light Repair</option>
                                        <option value='MicroPhone Repair'>MicroPhone Repair</option>
                                    </select>
                                </div>
                                <div>
                                    <label className='text-gray-700 ' htmlFor='emailAddress'>
                                        Email Address
                                    </label>
                                    <input
                                        id='emailAddress'
                                        type='email'
                                        name='email'
                                        ref={emaiRef}
                                        defaultValue={user && user.email}
                                        disabled
                                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                    />
                                </div>




                                <div>
                                    <label className='text-gray-700 ' htmlFor='min_price'>
                                        Price
                                    </label>
                                    <input
                                        id='min_price'
                                        name='price'
                                        type='number'
                                        ref={cost}
                                        defaultValue={info.price}
                                        required
                                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                    />
                                </div>
                                <div>
                                    <label className='text-gray-700 ' htmlFor='min_price'>
                                        User Name
                                    </label>
                                    <input
                                        id='min_price'
                                        name='name'
                                        ref={providerRef}
                                        type='text'
                                        required
                                        defaultValue={user && user.displayName}
                                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                    />
                                </div>
                                <div>
                                    <label className='text-gray-700 ' htmlFor='min_price'>
                                        services ImageUrl
                                    </label>
                                    <input
                                        id='min_price'
                                        name='ServicePhoto'
                                        type='text'
                                        ref={photo}
                                        defaultValue={info.servicePhoto}
                                        required
                                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                    />
                                </div>

                                <div>
                                    <label className='text-gray-700 ' htmlFor='max_price'>
                                        Service Area
                                    </label>
                                    <input
                                        id='max_price'
                                        name='serviceArea'
                                        type='text'
                                        ref={location}
                                        defaultValue={info.area}
                                        required
                                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                    />
                                </div>
                            </div>
                            <div className="md:col-span-2">
                                <label className='text-gray-700 ' htmlFor='min_price'>
                                    User Image
                                </label>
                                <input
                                    id='min_price'
                                    name='userImage'
                                    type='text'
                                    ref={userImage}
                                    defaultValue={user && user.photoURL}
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                />
                            </div>
                            <div className='flex flex-col gap-2 mt-4'>
                                <label className='text-gray-700 ' htmlFor='description'>
                                    Description
                                </label>
                                <textarea
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                    name='description'
                                    ref={details}
                                    defaultValue={info.description}
                                    id='description'
                                    required
                                ></textarea>
                            </div>
                            <div className='flex w-full mt-6'>
                                <button className='px-8 py-2.5 w-full leading-5 text-white transition-colors duration-300 transhtmlForm bg-[#e26d2f] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                                    ADD NOW
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>

        </div>
    );
};

export default Update;