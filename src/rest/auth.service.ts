import axios from 'axios';

import { Credentials, UserModel } from '../types';

const baseUrl = process.env.BASE_URL;

class AuthService {
  login({ email, password }: Credentials): Promise<{ data: UserModel; Authorization: string }> {
    console.log('Auth Service -> login: ', JSON.stringify({ email, password }));
    console.log('BaseUrl: ', baseUrl);
    return axios({
      method: 'post',
      url: `${baseUrl}/api/auth/login`,
      data: { email, password },
    })
      .then(res => {
        return res.data;
      })
      .catch(e => JSON.stringify(e));
  }
}

const authService: AuthService = new AuthService();

export default authService;
