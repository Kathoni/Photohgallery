import axios from 'axios';

const ACCESS_KEY = 'Ax8EQfM_ZDPXJrCBm_oLGIKdThpa73hTEdKC0nnyzxA';

const unsplashService = axios.create({
    baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
});

export const fetchPhotos = async (query = 'nature', perPage = 12) => {
  const response = await unsplashService.get('/search/photos', {
    params: { query, per_page: perPage },
  });
  return response.data.results;
};
