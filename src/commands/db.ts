import { Commander, PayloadData, Service } from 'shardy';
import { MyService } from '../MyService';

/**
 * Communication with MyService data
 */
export const db = (commander: Commander, payload: PayloadData, service: Service) => {
  if (!(service instanceof MyService)) {
    throw new TypeError('db command requires MyService');
  }
  commander.response(payload, Buffer.from(service.db));
};
