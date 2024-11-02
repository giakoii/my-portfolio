import React from 'react';
import Me from '../assets/me.jpg'
import {BsFillArrowRightSquareFill} from "react-icons/bs";

const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-700">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div>
                    <h1 className="text-4xl font-bold sm:text-6xl text-white">
                        Hello everyone, I am Back-End Developer with C#
                    </h1>
                    <p className="my-5 text-gray-500">
                        I have 3 months of experience working with C# at <b className="text-gray-200">FPT Software </b>.<br/>
                        In FPT Software, I have learned work with C# use restful API, WPF, Entity Framework, SQL Server, and
                        some other technologies.<br/>
                        This portfolio is project I'm studying to improve my skills.<br/>
                    </p>
                    <div>
                        <button className="text-white bg-gradient-to-r from-blue-500 to-green-300 w-fit px-6 py-3
                                            rounded-md flex items-center justify-center cursor-pointer">
                            About me
                                <span className="hover:rotate-90 duration-300">
                                    <BsFillArrowRightSquareFill/>
                                </span>
                        </button>
                    </div>
                </div>
                <div className="w-4/5 mx-auto md:w-full">
                    <img src={Me} alt="my avatar" className="rounded-2xl "/>
                </div>
            </div>
        </div>
    );
};

export default Home;
