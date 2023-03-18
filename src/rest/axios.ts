import axios from 'axios';

import TokenService from '../utils/token.service';

const baseURL = 'http://daria.speople.pro/api';

const getHttpClient = async () => {
  const bearer = await TokenService.getUserToken();
  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${bearer}`,
    },
  });
};

export default getHttpClient;
