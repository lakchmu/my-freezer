import CookieManager from '@react-native-cookies/cookies'; // TODO change store

const baseUrl = process.env.BASE_URL || '';
const IS_AUTHENTICATED = 'authenticated';
const USER_TOKEN = 'userToken';
const PROFILE = 'profile';

const CookieService = {
  async isUserAuthenticated(): Promise<boolean> {
    const res = await CookieManager.get(baseUrl);
    return !!(res[IS_AUTHENTICATED] && res[IS_AUTHENTICATED].value === 'true');
  },

  async setAuthStatus(status: string): Promise<void> {
    await CookieManager.set(baseUrl, {
      name: IS_AUTHENTICATED,
      value: status,
    });
  },

  async getUserToken(): Promise<string> {
    const res = await CookieManager.get(baseUrl);
    return res[USER_TOKEN].value;
  },

  async setUserToken(accessToken: string): Promise<void> {
    await CookieManager.set(baseUrl, {
      name: USER_TOKEN,
      value: accessToken,
    });
    await this.setAuthStatus('true');
  },

  async getProfile(): Promise<{ name: string; email: string }> {
    const res = await CookieManager.get(baseUrl);
    console.log('Profile: ', res[PROFILE].value);
    return JSON.parse(res[PROFILE].value);
  },

  async setProfile(profile: { name: string; email: string }): Promise<void> {
    await CookieManager.set(baseUrl, {
      name: PROFILE,
      value: JSON.stringify(profile),
    });
  },
};

export default CookieService;
