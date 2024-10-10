import { Commander, PayloadData } from 'shardy';

/**
 * Return data received in request
 */
export const echo = (commander: Commander, payload: PayloadData) => {
  commander.response(payload, payload.data);
};
