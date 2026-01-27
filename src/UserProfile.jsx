import React from 'react';

// Reusable component for the read-only data fields
const ReadOnlyField = ({ label, value, isPassword = false }) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-semibold text-gray-700 mb-1.5">
        {label}
      </label>
      <div className="bg-gray-100 border border-gray-300 text-[#2F5233] text-sm rounded-md px-4 py-2.5 font-medium font-[Roboto]">
        {isPassword ? '••••••••••••' : value}
      </div>
    </div>
  );
};

function UserProfile() {
  // Hardcoded data based on the image
  const userData = {
    firstName: 'Rits',
    lastName: 'Malayo',
    role: 'MSME',
    location: 'Angeles City, Pampanga 2009',
    businessType: 'Trading & Manufacturing',
    productTypes: 'Vegetable Chips / Meryenda',
    username: 'MSME-0001',
    accessCode: 'password123', // Value doesn't matter, it will be masked
  };

  return (
    // Main Page Container with light gray background font Inter or Roboto
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 font-[Roboto]">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">User Profile</h1>
          <p className="text-gray-600 text-sm mt-1">
            View your photo and account details here.
          </p>
        </div>
        <hr className="border-gray-300 mb-8" />

        {/* Profile Picture Section */}
        <div className="flex items-center gap-5 mb-10">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover border-[3px] border-white shadow-sm"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-gray-900 text-lg">Profile Picture</span>
            <span className="text-gray-500 text-sm">MSME_0001.png</span>
          </div>
        </div>

        {/* User Details Section - 3 Column Grid */}
        <div className="mb-10">
          <h2 className="text-lg font-bold text-gray-900 mb-5">User Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-8">
            <ReadOnlyField label="First Name" value={userData.firstName} />
            <ReadOnlyField label="Last Name" value={userData.lastName} />
            <ReadOnlyField label="Role" value={userData.role} />
            
            {/* Second Row */}
            <ReadOnlyField label="Location" value={userData.location} />
            <ReadOnlyField label="Type of Business" value={userData.businessType} />
            <ReadOnlyField label="Product Types" value={userData.productTypes} />
          </div>
        </div>
        <hr className="border-gray-300 mb-8" />

        {/* Account Details Section */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-5">Account Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-8">
            <ReadOnlyField label="Username" value={userData.username} />
            <ReadOnlyField label="Access Code" value={userData.accessCode} isPassword={true} />
            {/* Empty div to maintain grid structure if needed, though not strictly necessary with 2 items */}
            <div className="hidden md:block"></div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default UserProfile;