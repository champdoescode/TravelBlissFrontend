import React from 'react';
import { useContact } from '../../../context/ContactContext'; // Adjust the path as necessary

const Users = () => {
    const { contactCount } = useContact();

    return (
        <>
            <div className='bg-white z-50'>

                <div className='w-9/12'>Users</div>
                <div>
                    Contact Count: {contactCount}
                </div>
                <div>
                    Current Path: {location.pathname}
                </div>
            </div>
        </>
    );
};

export default Users;
