import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Singleservice({ service }) {
    const { title, description, image, sid } = service;
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col">
            <img
                className="w-40 h-40 mx-auto mt-4 mb-4 object-cover rounded-full shadow-lg"
                src={image}
                alt={title}
            />
            <div className="p-6 flex-grow">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h2>
                <p className="text-justify text-gray-600">{description}</p>
                <div className="mt-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-full focus:outline-none focus:ring focus:ring-blue-300">
                        <NavLink to={`/services/${sid}`} className="text-white">More Info</NavLink>
                    </button>
                </div>
            </div>
        </div>
    );
}
