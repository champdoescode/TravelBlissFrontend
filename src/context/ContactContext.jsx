import React, { createContext, useContext, useState } from 'react';

const ContactContext = createContext();

export const useContact = () => useContext(ContactContext);

export const ContactProvider = ({ children }) => {
    const [contactCount, setContactCount] = useState(0);

    return (
        <ContactContext.Provider value={{ contactCount, setContactCount }}>
            {children}
        </ContactContext.Provider>
    );
};
