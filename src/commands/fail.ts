import { Commander, PayloadData } from 'shardy';

/**
 * Test error on request
 */
export const fail = (commander: Commander, payload: PayloadData) => {
  commander.error(payload, 'fail_error_code');
};
