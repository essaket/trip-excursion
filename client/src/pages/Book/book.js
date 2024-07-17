import React, { useState } from 'react';
import "../../styles/book.css"; // Ensure you have the appropriate styles included
import NewBook1 from "../../assets/images/newBook1.png";
import NewBook2 from "../../assets/images/newBook2.png";
import NewBook3 from "../../assets/images/newBook3.png";
import NewBook4 from "../../assets/images/newBook4.png";
import NewBook5 from "../../assets/images/newBook5.png";

const Book = () => {
    const [selectedImage, setSelectedImage] = useState(NewBook1);
    const [favorite, setFavorite] = useState(false);
  
    const handleImageClick = (image) => {
      setSelectedImage(image);
    };
  
    const toggleFavorite = () => {
      setFavorite(!favorite);
    };
  
    const renderStars = (rating) => {
      const fullStars = Math.floor(rating);
      const emptyStars = 5 - fullStars;
  
      return (
        <span className="stars">
          {'★'.repeat(fullStars)}
          {'☆'.repeat(emptyStars)}
        </span>
      );
    };
  
    return (
      <section className="bg-background text-foreground p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold mb-2 flex items-center">
              CVK Park Bosphorus Hotel Istanbul
              <span className="ml-2 text-xl font-normal">
                {renderStars(4.2)} (4.2)
              </span>
            </h1>
            <div className="flex space-x-4">
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">Book Now</button>
              <div
      className="bg-white border border-black p-2 rounded-full cursor-pointer"
      onClick={toggleFavorite}
    >
      <svg
        className="h-6 w-6"
        fill="none"
        stroke={favorite ? 'red' : 'currentColor'}
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21.5l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.68L12 21.5z"
        ></path>
      </svg>
    </div>
              <div className="bg-secondary text-secondary-foreground p-2 rounded-lg">
                <span className="text-lg font-semibold">$250</span>
              </div>
            </div>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <img 
              src={selectedImage} 
              alt="Main hotel view" 
              className="w-full h-auto rounded-lg" 
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[NewBook1, NewBook2, NewBook3, NewBook4, NewBook5].map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Hotel view ${index + 1}`}
                className={`w-full h-auto rounded-lg cursor-pointer ${selectedImage === image ? 'selected' : ''}`}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p className="text-muted-foreground mb-4">
          Located in the heart of Istanbul, CVK Park Bosphorus Hotel Istanbul offers luxurious accommodations with stunning views of the Bosphorus. The hotel features elegant rooms, a full-service spa,
          and multiple dining options. Whether you're here for business or leisure, you'll find everything you need for a comfortable and memorable stay.
        </p>
        
      </div>

      <div className="max-w-7xl mx-auto mt-8">
        <h2 className="text-xl font-semibold mb-2">Amenities</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-muted-foreground">
          <div className="flex items-center">
            <img src="https://openui.fly.dev/openui/24x24.svg?text=🏊" alt="Swimming pool" className="mr-2" />
            <span>Indoor pool</span>
          </div>
          <div className="flex items-center">
            <img src="https://openui.fly.dev/openui/24x24.svg?text=🍽️" alt="Restaurant" className="mr-2" />
            <span>Restaurant</span>
          </div>
          <div className="flex items-center">
            <img src="https://openui.fly.dev/openui/24x24.svg?text=🛏️" alt="Room service" className="mr-2" />
            <span>Room service</span>
          </div>
          <div className="flex items-center">
            <img src="https://openui.fly.dev/openui/24x24.svg?text=💼" alt="Business center" className="mr-2" />
            <span>Business center</span>
          </div>
          <div className="flex items-center">
            <img src="https://openui.fly.dev/openui/24x24.svg?text=🏋️" alt="Fitness center" className="mr-2" />
            <span>Fitness center</span>
          </div>
          <div className="flex items-center">
            <img src="https://openui.fly.dev/openui/24x24.svg?text=🚗" alt="Free parking" className="mr-2" />
            <span>Free parking</span>
          </div>
          <div className="flex items-center">
            <img src="https://openui.fly.dev/openui/24x24.svg?text=🛀" alt="Spa" className="mr-2" />
            <span>Spa</span>
          </div>
          <div className="flex items-center">
            <img src="https://openui.fly.dev/openui/24x24.svg?text=📶" alt="Free WiFi" className="mr-2" />
            <span>Free WiFi</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8">
        <h2 className="text-xl font-semibold mb-2">Reviews</h2>
        <div className="bg-card p-4 rounded-lg mb-4">
          <div className="flex items-center mb-2">
            <div className="bg-primary text-primary-foreground p-2 rounded-full mr-4">
              <span className="text-lg font-bold">4.2</span>
            </div>
            <span className="text-muted-foreground">Very good</span>
          </div>
          <div className="space-y-4">
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-muted-foreground mb-2">"Great location and service. The rooms were clean and comfortable."</p>
              <span className="text-sm text-muted-foreground">- John Doe</span>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-muted-foreground mb-2">"Amazing views of the Bosphorus. The spa was fantastic!"</p>
              <span className="text-sm text-muted-foreground">- Jane Smith</span>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-muted-foreground mb-2">"Good value for money. Will definitely stay here again."</p>
              <span className="text-sm text-muted-foreground">- Alex Johnson</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
