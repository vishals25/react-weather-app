# Weather Application

## Overview

This project is a weather application built using React. It allows users to search for weather information by city name. The application fetches weather data from the OpenWeatherMap API and displays the current weather conditions, including temperature, humidity, and wind speed.

## Features

- Search for weather information by city name.
- Display current temperature, weather condition, humidity, and wind speed.
- Default weather information for Chennai on initial load.

## Technologies Used

- **React**: For building the user interface.
- **OpenWeatherMap API**: For fetching weather data.
- **CSS**: For styling the application.

## Setup

![alt text](src/assets/image.png)

### Prerequisites

- Node.js and npm (Node Package Manager) installed.
- OpenWeatherMap API key.

### Set Up Environment Variables

Create a `.env` file in the root directory of the project and add the following environment variable with your OpenWeatherMap API key:

```env
VITE_APP_ID=your_openweathermap_api_key
```

## Usage

1. **Search for a City**:

    - Enter the city name in the search bar.
    - Click the search icon to fetch and display the weather information.

2. **View Weather Information**:

    - The application will display the current temperature, weather condition, humidity, and wind speed for the searched city.
    - Default weather information for Chennai is displayed on initial load.

## Code Structure

- `src/Weather.js`: The main component for the weather application.
- `src/assets/`: Contains image assets used in the application.
- `src/Weather.css`: CSS file for styling the application.
- `.env`: Stores environment variables for the API key.
