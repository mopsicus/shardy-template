import { Commander, PayloadData } from 'shardy';

/**
 * Get memory status and respond to request
 */
export const status = (commander: Commander, payload: PayloadData) => {
  commander.response(payload, Buffer.from(JSON.stringify(process.memoryUsage())));
};
