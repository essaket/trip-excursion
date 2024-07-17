import React from 'react';
import '../../styles/user.css'; // Ensure you have the appropriate styles included
import user1 from "../../assets/images/user1.png";
import trip1 from "../../assets/images/trip1.png";
import trip2 from "../../assets/images/trip2.png";
import trip3 from "../../assets/images/trip3.png";

const User = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <div className="relative">
          <div className="bg-gradient-to-r from-orange-400 to-blue-500 h-48 rounded-lg"></div>
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
            <img className="h-24" src={user1} alt="User" />
          </div>
        </div>
        <div className="text-center mt-16">
          <h1 className="text-2xl font-bold">John Doe</h1>
          <p className="text-gray-600">john.doe@gmail.com</p>
        </div>

        <div className="mt-8 p-4 shadow rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">My Bookings</h2>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {/* Ticket 1 */}
            <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
              <div className="flex items-center">
                <img className="h-16 w-16 rounded-lg" src={trip1} alt="Hotel" />
                <div className="ml-4">
                  <p className="font-semibold">CVK Park Bosphorus Hotel Istanbul</p>
                  <p className="text-sm text-gray-600">Check-In: Thur, Dec 8 — Check Out: Fri, Dec 9</p>
                  <p className="text-sm text-gray-600">Check-in time: 12:00pm — Check-out time: 11:30am</p>
                  <p className="text-sm text-gray-600">Room no.: On arrival</p>
                </div>
              </div>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Booking Information</button>
            </div>

            {/* Ticket 2 */}
            <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
              <div className="flex items-center">
                <img className="h-16 w-16 rounded-lg" src={trip2} alt="Hotel" />
                <div className="ml-4">
                  <p className="font-semibold">CVK Park Bosphorus Hotel Istanbul</p>
                  <p className="text-sm text-gray-600">Check-In: Thur, Dec 8 — Check Out: Fri, Dec 9</p>
                  <p className="text-sm text-gray-600">Check-in time: 12:00pm — Check-out time: 11:30am</p>
                  <p className="text-sm text-gray-600">Room no.: On arrival</p>
                </div>
              </div>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Booking Information</button>
            </div>

            {/* Ticket 3 */}
            <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
              <div className="flex items-center">
                <img className="h-16 w-16 rounded-lg" src={trip3} alt="Hotel" />
                <div className="ml-4">
                  <p className="font-semibold">CVK Park Bosphorus Hotel Istanbul</p>
                  <p className="text-sm text-gray-600">Check-In: Thur, Dec 8 — Check Out: Fri, Dec 9</p>
                  <p className="text-sm text-gray-600">Check-in time: 12:00pm — Check-out time: 11:30am</p>
                  <p className="text-sm text-gray-600">Room no.: On arrival</p>
                </div>
              </div>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Booking Information</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
