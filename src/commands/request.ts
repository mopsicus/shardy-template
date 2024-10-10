import { Commander } from 'shardy';

/**
 * Make test request to server and wait response
 *
 * Do it only if received 'yes' data
 */
export const request = (commander: Commander) => {
  commander.request('request', (response) => {
    if (response.error.length > 0) {
      console.error('request error:', response.error);
    } else {
      console.log('request response:', response.data);
    }
  });
};
