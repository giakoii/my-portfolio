import {React, useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {id: 1, text: 'Home', url: '/'},
        {id: 2, text: 'About', url: '/about'},
        {id: 3, text: 'Portfolio', url: '/portfolio'},
        {id: 4, text: 'Experience', url: '/experience'},
        {id: 5, text: 'Contact', url: '/contact'}
    ]

    return (
        <div className="flex ">
            <div className="flex items-center justify-between w-full h-16 bg-black shadow-md px-10">
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold text-white font-signature">Logo</h1>
                </div>
                <div className="text-white">
                    <ul className="flex items-center space-x-6 justify-center">
                        {links.map(({id, text, url}) => (
                            <li key={id}>
                                <a href={url} className="text-white hover:text-gray-800">{text}</a>
                            </li>
                        ))}
                    </ul>
                    <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden">
                        {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
                    </div>
                    {nav && (
                        <ul className="left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500
                          bg-opacity-90 flex items-center absolute justify-center flex-col top-0 space-y-6">
                            {links.map(({id, text, url}) => (
                                <li key={id} className="cursor-pointer capitalize text-3xl">
                                    <a href={url} className="text-white hover:text-gray-800">{text}</a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Navbar;