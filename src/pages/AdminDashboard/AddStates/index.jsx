import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'react-feather';

const AddStates = () => {
  const [formData, setFormData] = useState({
    stateName: '',
    categoryName: '',
    placeName: '',
    placeImage: '',
    nearbyRailwayStation: '',
    nearbyAirport: '',
    nearbyBusStop: '',
    nearbyHotel: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your actual backend endpoint
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
      if (response.status === 201) {
        setMessage('Successfully submitted the data!');
        setFormData({
          stateName: '',
          categoryName: '',
          placeName: '',
          placeImage: '',
          nearbyRailwayStation: '',
          nearbyAirport: '',
          nearbyBusStop: '',
          nearbyHotel: ''
        });
      }
    } catch (error) {
      setMessage('Failed to submit the data.');
    }
  };

  return (
    <div className="w-[calc(100%-268px)] h-screen bg-cover bg-center relative z-50" style={{ backgroundImage: 'url("https://www.irctctourism.com/famous-places-in-india/img/1stsection.jpg")' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-wrap">
        <div className="w-full h-screen lg:w-1/2 pr-4 bg-white p-6 mb-8 lg:mb-0 flex flex-col justify-center items-center shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-teal-500">Add States Form</h2>
          {message && <div className={`mb-4 text-center text-lg ${message.includes('Successfully') ? 'text-green-500' : 'text-red-500'}`}>{message}</div>}
          <form className='w-full' onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="stateName">
                  State Name
                </label>
                <input
                  type="text"
                  name="stateName"
                  value={formData.stateName}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-teal-500 hover:border-teal-500 transition-colors hover:shadow-lg"
                  id="stateName"
                  placeholder="Enter state name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="categoryName">
                  Category Name
                </label>
                <input
                  type="text"
                  name="categoryName"
                  value={formData.categoryName}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-teal-500 hover:border-teal-500 transition-colors hover:shadow-lg"
                  id="categoryName"
                  placeholder="Enter category name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="placeName">
                  Place Name
                </label>
                <input
                  type="text"
                  name="placeName"
                  value={formData.placeName}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-teal-500 hover:border-teal-500 transition-colors hover:shadow-lg"
                  id="placeName"
                  placeholder="Enter place name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="placeImage">
                  Place Image (URL)
                </label>
                <input
                  type="url"
                  name="placeImage"
                  value={formData.placeImage}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-teal-500 hover:border-teal-500 transition-colors hover:shadow-lg"
                  id="placeImage"
                  placeholder="Enter image URL"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="nearbyRailwayStation">
                  Nearby Railway Station
                </label>
                <input
                  type="text"
                  name="nearbyRailwayStation"
                  value={formData.nearbyRailwayStation}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-teal-500 hover:border-teal-500 transition-colors hover:shadow-lg"
                  id="nearbyRailwayStation"
                  placeholder="Enter nearby railway station"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="nearbyAirport">
                  Nearby Airport
                </label>
                <input
                  type="text"
                  name="nearbyAirport"
                  value={formData.nearbyAirport}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-teal-500 hover:border-teal-500 transition-colors hover:shadow-lg"
                  id="nearbyAirport"
                  placeholder="Enter nearby airport"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="nearbyBusStop">
                  Nearby Bus Stop
                </label>
                <input
                  type="text"
                  name="nearbyBusStop"
                  value={formData.nearbyBusStop}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-teal-500 hover:border-teal-500 transition-colors hover:shadow-lg"
                  id="nearbyBusStop"
                  placeholder="Enter nearby bus stop"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="nearbyHotel">
                  Nearby Hotel
                </label>
                <input
                  type="text"
                  name="nearbyHotel"
                  value={formData.nearbyHotel}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-teal-500 hover:border-teal-500 transition-colors hover:shadow-lg"
                  id="nearbyHotel"
                  placeholder="Enter nearby hotel"
                />
              </div>
            </div>
            <div className="flex items-center justify-center mt-6">
              <button
                type="submit"
                className="bg-teal-500 text-center hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className='relative w-full lg:w-1/2 flex items-center justify-center bg-cover bg-center bg-[url("https://images.pexels.com/photos/12912712/pexels-photo-12912712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")] z-20'>
          <div className='bg-black absolute top-0 w-full h-full z-10 opacity-30'>
            fasd

          </div>

          <div className="text-white text-center  p-6 w-full h-full flex items-center justify-center z-30">
            <div>
              <h3 className="text-3xl font-bold mb-4">Discover the Beauty of Our <span className='text-orange-600 text-4xl'>I</span><span className='text-orange-500 text-4xl'>N</span><span className=' text-4xl'>D</span><span className='text-green-500 text-4xl'>I</span><span className='text-green-600 text-4xl'>A</span></h3>
              <p className="text-lg px-8">Explore hidden gems, scenic landscapes, and vibrant cultures that make each state unique.</p>
              <div className='flex justify-center items-center'>
                <Link to='' className='border-b border-white flex justify-center items-center px-3 mt-1 mb-10 font-bold text-xl'>
                  <div className='mr-2 '>All States</div>
                  <div>
                    <ArrowRight size={20} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStates;