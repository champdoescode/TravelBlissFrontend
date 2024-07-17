import React, { useState } from 'react';
import tourPackageData from '../../data/tourPackage.json'; // Import your JSON data

const TourPackages = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter tourPackageData based on search term
  const filteredPackages = tourPackageData.filter((tourPackage) => {
    return (
      tourPackage.tripName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tourPackage.tripAddress.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tourPackage.tripPrice.toString().includes(searchTerm.toLowerCase()) ||  // Convert tripPrice to string for easy search
      tourPackage.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Tour Packages</h1>
      
      {/* Search input field */}
      <div className="mb-4 w-full flex justify-center">
        <input
          type="text"
          placeholder="Search the Place you are going to visit......"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-7/12 px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-teal-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Use filteredPackages instead of tourPackageData */}
        {filteredPackages.map((tourPackage) => (
          <div key={tourPackage.tripId} className="relative bg-white rounded-lg shadow-md overflow-hidden group">
            <div className='h-48 object-cover object-center overflow-hidden'>
                <img src={tourPackage.url} alt={tourPackage.tripName} className="w-full h-48 object-cover object-center hover:scale-125 w-full h-50 object-cover transition-transform duration-500 transform group-hover:scale-125 " />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{tourPackage.tripName}</h2>
              <p className="text-gray-600 mb-2">{tourPackage.tripAddress}</p>
              <p className="text-gray-800 font-bold mb-2">Price: ${tourPackage.tripPrice}</p>
              <p className="text-gray-600 mb-2">{tourPackage.categoryName}</p>
            </div>
            <div className='absolute bottom-0 right-0'>
                <button className='bg-teal-500 text-white px-8 py-2 rounded-tl hover:bg-teal-600 transition-all duration-500'>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourPackages;
