import { useEffect, useState } from "react";
import  reception  from "../img/reception.gif";
import  syringe  from "../img/syringe.gif";
import  ambulance  from "../img/ambulance.gif";
import  checklist  from "../img/checklist.gif"
import  healthcheckup from "../img/healthcheckup.gif";
import  medicine  from "../img/medicine.gif";

export default function useService() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        // Add a dummy API endpoint or URL here (replace with your actual API endpoint)
        const API_URL = "https://example.com/api/services";

        // Dummy data for testing
        const dummyData = [
            {
                sid: 1,
                 image:reception,
                title: "Medical Advices & Check Ups",
                description: "Complications and failures from dental implant surgeries are few and far between, but they do occur. Causes of implant failure include gum disease.",
            },
            {
                sid: 2,
                image:ambulance,
                title: "Trusted Medical Treatment",
                description: "A place where blood is collected from donors, typed, separated into components, stored, and prepared for transfusion to recipients.",
            },
            {
                sid: 3,
                title: "Emergency Help Available 24/7",
                 image:syringe,
                description: "A tooth extraction, or dental extraction, is the removal of a tooth from its socket in the bone. There are a number of reasons why tooth clean",
            },
            {
                sid: 4,
                title: "Medical Research Professionals",
                image:healthcheckup,
                description: "You should visit the dentist every six months for teeth cleanings. Tartar is a hard buildup of plaque that forms on the teeth.",
            },
            {
                sid: 5,
                image:checklist,
                title: "Only Qualified Doctors Support",
                description: "Many people are discovering the benefits of veneers. Veneers are thin coverings that are placed over the front part of the teeth.",
            },
            {
                sid: 6,
                title: "Cutting Edge Facility Implement",
                image:medicine,
                description: "Medical scientists typically need a Ph. D. or medical degree. Applicants to either of these programs typically need a bachelor's degree in biology.",
            },
            // Add more dummy services as needed
        ];

        // Simulate fetch (replace with actual fetch call)
        // setTimeout(() => {
            setServices(dummyData);
    //     }, 100); // Simulate a 1-second delay
    }, []);

    return [services];
};