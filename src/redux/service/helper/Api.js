import { BASE_URL } from '../../../utils/filehandler.js';
import NetworkUtils from './NetworkUtils';

const Api = new NetworkUtils({
  baseUrl: BASE_URL,
  // baseUrl: PRODUCTION_URL,
});

export default Api;
