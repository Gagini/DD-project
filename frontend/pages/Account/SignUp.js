import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './SignUp.css';
import mylogo from "../../assets/images/banner/302464367_378484604487078_5572038024663205153_n.jpg";

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        pno: '',
        password: '',
        address: '',
        city: '',
        country: '',
        zip: ''
    });


    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/reg', formData);
            console.log('Sign Up Successful:', response.data);
            navigate('/signin'); // Redirect to the Sign In page
        } catch (error) {
            console.error('Error signing up:', error);
        }

        
    };
    
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
            <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
            <div className="px-6 py-4 w-full h-[90%] flex flex-col justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
            <center><h2 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-3xl mdl:text-4xl mb-4">Sign Up</h2></center> 
            <form onSubmit={handleSubmit} className="sign-up-form">
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"/>
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}  className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none" />
                <input type="text" name="pno" placeholder="Phone Number" value={formData.pno} onChange={handleChange}  className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"/>
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}  className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none" />
                <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange}  className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"/>
                <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange}  className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none" />
                <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange}  className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"/>
                <input type="text" name="zip" placeholder="Zip Code" value={formData.zip} onChange={handleChange} className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none" />
                <button type="submit">Sign Up</button>
            </form>
           <center> <p>Already have an account? <Link to="/signin">Sign In</Link></p></center>
            </div>
            </div>
            </div>   
        </div>
        
    );
};



export default SignUp;






