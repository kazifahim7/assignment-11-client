import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'


const Register = () => {
    const [display, setDisplay] = useState(false);
    const { createUser } = useContext(AuthContext)

    const location = useLocation()
    const navigated = useNavigate()

    const handleCreateUser =e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        console.log(name,email,photo,password)
        if (!name) {
            return toast.warning('please Enter a name')
        }
        else if (!email) {
            return toast.warning('please Enter a EMail')
        }
        else if (!password) {
            return toast.warning('please Enter a password')
        }
        else if (!photo) {
            return toast.warning('please Enter a photoUrl')
        }






        else if (password.length < 6) {
            return toast.warning('Length must be at least 6 character')
        }
        else if (!/^(?=.*[A-Z])/.test(password)) {
            return toast.warning('Must have an Uppercase letter in the password')
        }

        createUser(email, password)
            .then((result) => {
                const currentUser = result.user
                console.log(currentUser)


                // update profile:
                updateProfile(currentUser, {
                    displayName: name, photoURL: photo
                })
                    .then(() => {

                        Swal.fire({
                            title: "register success",
                            text: "You clicked the button!",
                            icon: "success"
                        });

                        e.target.reset()

                        setTimeout(() => {
                            navigated(location?.state ? location.state : '/')
                        }, 2000)





                    })
                    .catch()












            })
            .catch(() => {
                Swal.fire({
                    title: 'invalid information',
                    text: "You clicked the button!",
                    icon: "error"
                });
            })
       

    }






    return (
        <div className='flex my-10 justify-center items-center min-h-[calc(100vh-306px)]'>
            <div className='flex w-full gap-12 max-w-sm mx-auto overflow-hidden bg-white rounded-lg  lg:max-w-4xl '>
                <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
                    <div className='flex justify-center mx-auto'>
                        <img
                            className='w-auto h-7 sm:h-8'
                            src='https://htmldemo.net/elecron/elecron/assets/images/logo/logo.png'
                            alt=''
                        />
                    </div>

                    <p className='mt-3 text-xl text-center text-gray-600 '>
                        Get Your Free Account Now.
                    </p>

                 

                    
                    <form onSubmit={handleCreateUser}>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='name'
                            >
                                Username
                            </label>
                            <input
                                id='name'
                                autoComplete='name'
                                name='name'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='text'
                                required
                            />
                        </div>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='photo'
                            >
                                Photo URL
                            </label>
                            <input
                                id='photo'
                                autoComplete='photo'
                                name='photo'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='text'
                                required
                            />
                        </div>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='LoggingEmailAddress'
                            >
                                Email Address
                            </label>
                            <input
                                id='LoggingEmailAddress'
                                autoComplete='email'
                                name='email'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='email'
                                required
                            />
                        </div>

                        <div className='mt-4'>
                            <div className='flex justify-between'>
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='loggingPassword'
                                >
                                    Password
                                </label>
                            </div>

                            <div className="flex relative items-center">
                                <input
                                    id='loggingPassword'
                                    autoComplete='current-password'
                                    name='password'
                                    className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                    type={display ? 'text' : 'password'} 
                                    required
                                />
                                <p onClick={() => setDisplay(!display)} className="absolute left-[90%]">{display ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</p>
                           </div>
                        </div>
                        <div className='mt-6'>
                            <button
                                type='submit'
                                className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  md:w-1/4'></span>

                        <Link
                            to='/login'
                            className='text-xs text-gray-500 uppercase  hover:underline'
                        >
                            or sign in
                        </Link>


                        <span className='w-1/5 border-b  md:w-1/4'></span>
                    </div>
                    <ToastContainer></ToastContainer>
                </div>
                <div
                    className='hidden bg-contain bg-no-repeat bg-center lg:block lg:w-1/2'
                    style={{
                        backgroundImage: `url('https://i.ibb.co/4RtM80N/4498897.jpg')`,
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Register;