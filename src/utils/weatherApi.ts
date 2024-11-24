import axios from 'axios';

const API_KEY = '6e998ff49e5aacdd4dfd696ac4c3f06f';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (city: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    if (axios.isAxiosError(error) && error.response) {
      // Handle specific error codes or messages
      switch (error.response.status) {
        case 401:
          return { error: 'Invalid API key' };
        case 404:
          return { error: 'City not found' };
        default:
          return { error: 'An error occurred while fetching weather data' };
      }
    }
    return { error: 'Network error or server is down' };
  }
};
