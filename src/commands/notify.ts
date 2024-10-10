import { Commander, PayloadData } from 'shardy';

/**
 * Simple notification
 */
export const notify = (commander: Commander, payload: PayloadData) => {
  console.log(`[SERVICE] this is notify, data: ${payload.data}`);
};
