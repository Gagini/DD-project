import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import mylogo from "../../assets/images/banner/302464367_378484604487078_5572038024663205153_n.jpg";
import { BsCheckCircleFill } from 'react-icons/bs';

const SignIn = () => {
    // ============= Initial State Start here =============
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errEmail, setErrEmail] = useState("");
    const [errPassword, setErrPassword] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    
    const navigate = useNavigate();

    // ============= Event Handler Start here =============
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        if (e.target.name === 'email') {
            setErrEmail("");
        }
        if (e.target.name === 'password') {
            setErrPassword("");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.email) {
            setErrEmail("Enter your email");
        }
        if (!formData.password) {
            setErrPassword("Create a password");
        }
        
        if (formData.email && formData.password) {
            try {
                // Replace with your sign-in endpoint
                const response = await axios.post('http://localhost:8080/login', formData);
                console.log('Sign In Successful:', response.data);
                setSuccessMsg(
                    `Hello dear, Thank you for signing in. You have successfully logged in with ${formData.email}.`
                );
                setFormData({
                    email: '',
                    password: ''
                });
                navigate('/');
            } catch (error) {
                console.error('Error signing in:', error);
                setErrEmail("An error occurred while signing in.");
            }
        }
    };
    // ============= Event Handler End here ===============

    return (
        <div className="w-full h-screen flex items-center justify-center" style={{ backgroundColor: '#D5F0C1' }} >
            <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
                <div className="w-[450px] h-full bg-primeColor px-10 flex flex-col gap-6 justify-center">
                    <Link to="/">
                        <img src={mylogo} alt="logoImg" className="w-28" />
                    </Link>
                    <div className="flex flex-col gap-1 -mt-1">
                        <h1 className="font-titleFont text-xl font-medium">
                            Stay signed in for more
                        </h1>
                        <p className="text-base">When you sign in, you are with us!</p>
                    </div>
                    <h1>Unwrap the Joy of Gifting</h1>
                    <p>Become a member and enjoy special discounts, early access to new arrivals, and more.</p>
                    <h2>Unique Gifts for Every Occasion</h2>
                    <p>Find the perfect gift for any recipient</p>
                    <h3>Handpicked Gifts</h3>
                    <p>Curated collection of special presents.</p>
                    <h4>Personalized Gifts</h4>
                    <p>Create a truly unique and memorable gift.</p>
                    <h5>Luxury Gifts</h5>
                    <p>Indulge in exquisite and sophisticated presents.</p>
                    <h6>Your Gift Destination</h6>
                    <p>Find the ideal gift with ease and joy.
Expertly curated collections for every taste.
Exceptional customer service to assist you every step of the way.







</p>
                </div>
            </div>
            <div className="w-full lgl:w-1/2 h-full">
                {successMsg ? (
                    <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
                        <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
                            {successMsg}
                        </p>
                        <Link to="/signin">
                            <button
                                className="w-full h-10 bg-primeColor text-gray-200 rounded-md text-base font-titleFont font-semibold 
                                tracking-wide hover:bg-black hover:text-white duration-300"
                            >
                                Sign In
                            </button>
                        </Link>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="w-full lgl:w-[450px] h-screen flex items-center justify-center">
                        <div className="px-6 py-4 w-full h-[90%] flex flex-col justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
                            <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-3xl mdl:text-4xl mb-4">
                                Sign In
                            </h1>
                            <div className="flex flex-col gap-3">
                                {/* Email */}
                                <div className="flex flex-col gap-.5">
                                    <p className="font-titleFont text-base font-semibold text-gray-600">
                                        Work Email
                                    </p>
                                    <input
                                        name="email"
                                        onChange={handleChange}
                                        value={formData.email}
                                        className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                                        type="email"
                                        placeholder="delightfuldelivers.com"
                                    />
                                    {errEmail && (
                                        <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                                            <span className="font-bold italic mr-1">!</span>
                                            {errEmail}
                                        </p>
                                    )}
                                </div>

                                {/* Password */}
                                <div className="flex flex-col gap-.5">
                                    <p className="font-titleFont text-base font-semibold text-gray-600">
                                        Password
                                    </p>
                                    <input
                                        name="password"
                                        onChange={handleChange}
                                        value={formData.password}
                                        className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                                        type="password"
                                        placeholder="Create password"
                                    />
                                    {errPassword && (
                                        <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                                            <span className="font-bold italic mr-1">!</span>
                                            {errPassword}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="bg-primeColor hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md  duration-300"
                                >
                                    Sign In
                                </button>
                                <p className="text-sm text-center font-titleFont font-medium">
                                    Don't have an Account?{" "}
                                    <Link to="/signup">
                                        <span className="hover:text-blue-600 duration-300">
                                            Sign Up
                                        </span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default SignIn;





