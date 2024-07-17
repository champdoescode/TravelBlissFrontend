import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'react-feather'; 
import { CheckCircleIcon } from '@heroicons/react/solid'; 

const AddHotelForm = ({ hotelData, setHotelData }) => {
  const [formData, setFormData] = useState({
    stateName: '',
    cityName: '',
    hotelRating: '',
    hotelName: '',
    hotelImage: '',
    hotelAddress: '',
    roomType: '',
    price: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear form fields
    setFormData({
      stateName: '',
      cityName: '',
      hotelRating: '',
      hotelName: '',
      hotelImage: '',
      hotelAddress: '',
      roomType: '',
      price: ''
    });

    // Show success message
    setShowSuccess(true);

    // Reset success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full h-full flex flex-col justify-center max-w-4xl mx-auto p-8 border shadow-md ">
      <h3 className="text-3xl font-semibold mb-4 text-center text-teal-700">Add New Hotel</h3>
      {/* First Row: stateName and cityName */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="stateName" className="block mb-2 text-sm font-bold text-gray-700">State Name:</label>
          <input type="text" id="stateName" name="stateName" value={formData.stateName} onChange={handleChange} required className="px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-teal-500" />
        </div>
        <div>
          <label htmlFor="cityName" className="block mb-2 text-sm font-bold text-gray-700">City Name:</label>
          <input type="text" id="cityName" name="cityName" value={formData.cityName} onChange={handleChange} required className="px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-teal-500" />
        </div>
      </div>
      {/* Second Row: hotelName */}
      <div className="mb-4">
        <label htmlFor="hotelName" className="block mb-2 text-sm font-bold text-gray-700">Hotel Name:</label>
        <input type="text" id="hotelName" name="hotelName" value={formData.hotelName} onChange={handleChange} required className="px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-teal-500" />
      </div>
      {/* Third Row: hotelAddress and hotelRating */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="hotelAddress" className="block mb-2 text-sm font-bold text-gray-700">Hotel Address:</label>
          <input type="text" id="hotelAddress" name="hotelAddress" value={formData.hotelAddress} onChange={handleChange} required className="px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-teal-500" />
        </div>
        <div>
          <label htmlFor="hotelRating" className="block mb-2 text-sm font-bold text-gray-700">Hotel Rating:</label>
          <input type="text" id="hotelRating" name="hotelRating" value={formData.hotelRating} onChange={handleChange} required className="px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-teal-500" />
        </div>
      </div>
      {/* Fourth Row: hotelImage */}
      <div className="mb-4">
        <label htmlFor="hotelImage" className="block mb-2 text-sm font-bold text-gray-700">Hotel Image URL:</label>
        <input type="text" id="hotelImage" name="hotelImage" value={formData.hotelImage} onChange={handleChange} required className="px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-teal-500" />
      </div>
      {/* Fifth Row: roomType and price */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="roomType" className="block mb-2 text-sm font-bold text-gray-700">Room Type:</label>
          <input type="text" id="roomType" name="roomType" value={formData.roomType} onChange={handleChange} required className="px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-teal-500" />
        </div>
        <div>
          <label htmlFor="price" className="block mb-2 text-sm font-bold text-gray-700">Price:</label>
          <input type="text" id="price" name="price" value={formData.price} onChange={handleChange} required className="px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-teal-500" />
        </div>
      </div>
      {/* Submit Button */}
      <div className="flex justify-center">
        <button type="submit" className="bg-teal-700 hover:bg-teal-600 text-white px-8 py-3 rounded-lg transition-all duration-300">Add Hotel</button>
      </div>

      {/* Success Message Popup */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg flex items-center flex-col">
            <CheckCircleIcon className="text-teal-500 h-20 w-20 mb-4" />
            <p className="text-2xl text-teal-700 text-center">Successfully added the hotel..!</p>
          </div>
        </div>
      )}
    </form>
  );
};

const LeftSection = () => (
    <div className='flex flex-col  bg-black h-full bg-opacity-30 text-black w-full text-white flex justify-center '>
      <div className='text-neutral-300 text-center mt-5 font-bold text-xl' >
        Let's Add Some Latest Hotel
      </div>
      <div className='text-center text-5xl mt-8 '>
        MANAGE YOUR PROPERTIES WITH THE <span className='logo text-teal-500 tracking-wider font-bold'>HOTEL NETWORK</span>
      </div>
      <div className='mt-20 flex flex-col items-center '>
        <div className='text-center text-neutral-300 mb-2 text-black font-bold'>
          Ready to add a new hotel?
        </div>
        <Link to='' className='border-b border-white flex justify-center items-center px-4 mt-1 mb-10 font-bold text-xl'>
          <div className='mr-2'>See All</div>
          <div>
            <ArrowRight size={20} />
          </div>
        </Link>
      </div>
    </div>
  );
  

const AddHotels = () => (
  <div className="flex h-screen  w-[calc(100%-268px)] z-50">
    <div className="rounded-sm text-center items-center w-full flex justify-center items-center" style={{
      backgroundImage: `url('https://foodeezjunction.com/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGZm9vZGVlemp1bmN0aW9uLmNvbSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyNCUyRjAyJTJGcmx3ZThmOGFub2MtMTUzNngxMDI0LmpwZyZjYWNoZU1hcmtlcj0xNzA5NjcyNDM5LTI5NTc3MiZ0b2tlbj1jYTYyZmVhMWY1ZWYxZjdj.q.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat' 
    }}>
        <LeftSection />
      </div>
    
   
    <div className="w-full h-screen  bg-white" >
      <AddHotelForm />
    </div>
  </div>
);

export default AddHotels;
