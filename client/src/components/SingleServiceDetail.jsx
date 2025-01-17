import React from 'react'
import { useParams } from 'react-router-dom'
import useService from '../hooks/useService'

export default function SingleServiceDetail() {
    const { id } = useParams();
    console.log(id);
    const [services] = useService();
    // console.log(services)
    const service = services?.find(ser => ser.sid == id);
    // console.log(service);
    return (
        <div className="">
            <div className="container mx-auto md:mb-24 border md:w-3/6 p-12 md:p-20">
                <div className="text-justify">
                    <img className="md:w-40 w-20 mx-auto" src={service?.image} alt="" />
                    <h2 className="text-2xl text-center md:text-justify md:text-4xl py-8">{service?.title}</h2>
                    <p className="text-lg md:text-xl">{service?.description}</p>
                </div>
            </div>
            h1
        </div>
    )
}
