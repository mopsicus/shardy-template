import { Commander, PayloadData } from 'shardy';
import { MyService } from '../MyService';

/**
 * Communication with MyService data
 */
export const db = (commander: Commander, payload: PayloadData, service: MyService) => {
  commander.response(payload, Buffer.from(service.db));
};
