Weather Portfolio App
A React application that demonstrates external API consumption, state management, reusable components, and client-side routing.

Overview

    This project allows users to search for weather data by city. It fetches real-time weather information from the OpenWeather API and displays the results in a structured table format.
    The application is structured as a small portfolio project to demonstrate frontend development  fundamentals.

Features
Search weather data by city name

Displays:
City
Weather condition
Temperature (°C)
Wind speed (m/s)

React Router navigation between pages
Environment-based API configuration
Conditional rendering of API results

Routing

    Routing is handled with react-router-dom.

    / renders the Home page.
    /weatherapp renders the Weather application.

API Integration
Weather data is retrieved using environment variables:
const url = `${import.meta.env.VITE_API_BASE_URL}/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`;

The application fetches data when the user submits a city name and passes the response to the table component for rendering.

Environment Variables
Create a .env file in the project root:
VITE_API_BASE_URL=https://api.openweathermap.org/data/2.5
VITE_WEATHER_API_KEY=your_api_key_here

Do not commit the .env file to version control.

Installation
Clone the repository:
git clone https://github.com/yourusername/weather-portfolio-app.git

Install dependencies:
npm install

Run the development server:
npm run dev

Technologies Used
React
Vite
React Router DOM
OpenWeather API
JavaScript (ES6+)
CSS
Purpose

This project demonstrates:
Consuming third-party APIs
Controlled components
React state management using useState
Conditional rendering
Component-based architecture
