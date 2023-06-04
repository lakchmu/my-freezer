import axios from 'axios';

import CookieService from '../utils/token.service';

const getHttpClient = async ({ headers }: any) => {
  const baseURL = `${process.env.BASE_URL}/api`;
  console.log('API baseURL: ', baseURL);

  const bearer = await CookieService.getUserToken();

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
