import axios, { HeadersDefaults } from 'axios';

import TokenService from '../utils/token.service';

const baseURL = `${process.env.BASE_URL}/api`;

const getHttpClient = async ({ headers }: any) => {
  const bearer = await TokenService.getUserToken();
  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${bearer}`,
      ...(headers || {}),
    },
  });
};

export default getHttpClient;
