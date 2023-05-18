import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': 'db2f7fd5e3msh61d646e560c2751p1b74bbjsn95ecb9a6d04a',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
    console.log(process.env.REACT_APP_RAPID_API_KEY);
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};