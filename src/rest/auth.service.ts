import axios from 'axios';

import { Credentials, UserModel } from '../types';

const baseUrl = 'http://daria.speople.pro';

class AuthService {
  login({
    email,
    password,
  }: Credentials): Promise<{ data: UserModel; Authorization: string }> {
    return axios({
      method: 'post',
      url: `${baseUrl}/api/auth/login`,
      data: { email, password },
    }).then(({ data }) => data);
  }
}

const authService: AuthService = new AuthService();

export default authService;
