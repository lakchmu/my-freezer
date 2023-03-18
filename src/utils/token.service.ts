import CookieManager from '@react-native-cookies/cookies';

const baseUrl = 'http://daria.speople.pro';
const IS_AUTHENTICATED = 'authenticated';
const USER_TOKEN = 'userToken';

const TokenService = {
  async isUserAuthenticated(): Promise<boolean> {
    const res = await CookieManager.get(baseUrl);
    return res[IS_AUTHENTICATED].value === 'true';
  },

  async getUserToken(): Promise<string> {
    const res = await CookieManager.get(baseUrl);
    return res[USER_TOKEN].value;
  },

  async setAuthStatus(status: string): Promise<void> {
    await CookieManager.set(baseUrl, {
      name: IS_AUTHENTICATED,
      value: status,
    });
  },

  async setUserToken(accessToken: string): Promise<boolean> {
    return await CookieManager.set(baseUrl, {
      name: USER_TOKEN,
      value: accessToken,
    });
  },
};

export default TokenService;
