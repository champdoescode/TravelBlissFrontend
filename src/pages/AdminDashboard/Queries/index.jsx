import React, { useState, useEffect } from 'react';
import axios from 'axios';
import data from '../../../data/contactUsData.json';
import 'animate.css';
import './Queries.css';
import { useContact } from '../../../context/ContactContext'; // Adjust the path as necessary

const Queries = () => {
    const [contacts, setContacts] = useState([]);
    const { setContactCount } = useContact();

    useEffect(() => {
        setContacts(data);
        setContactCount(data.length);
    }, [setContactCount]);

    return (
        <div className="contact-list-container w-[calc(100%-268px)] z-50 h-screen">
            <h2 className="animate__animated animate__fadeInDown animate__delay-0.5s h-fit">
                Contact List ({data.length})
            </h2>
            <div className="contact-grid">
                {contacts.map((contact, index) => (
                    <div
                        key={index}
                        className={`h-fit contact-note animate__animated animate__fadeInUp animate__delay-${
                            index * 0.2
                        }s`}
                    >
                        <h3>Name : {contact.name}</h3>
                        <p>
                            <a href={`mailto:${contact.email}`}>Email : {contact.email}</a>
                        </p>
                        <p>Message : {contact.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Queries;
