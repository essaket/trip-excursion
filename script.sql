CREATE DATABASE trip_excursion;

USE trip_excursion;

CREATE TABLE Users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Agencies (
  agency_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Trips (
  trip_id INT AUTO_INCREMENT PRIMARY KEY,
  agency_id INT,
  title VARCHAR(100),
  description TEXT,
  itinerary TEXT,
  price DECIMAL(10, 2),
  accommodations TEXT,
  restaurants TEXT,
  activities TEXT,
  number_of_places INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (agency_id) REFERENCES Agencies(agency_id)
);

CREATE TABLE Bookings (
  booking_id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  trip_id INT,
  number_of_people INT,
  total_price DECIMAL(10, 2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES Users(user_id),
  FOREIGN KEY (trip_id) REFERENCES Trips(trip_id)
);