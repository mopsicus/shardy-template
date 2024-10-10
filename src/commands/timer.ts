import { Commander, PayloadData } from 'shardy';
import { MyService } from '../MyService';

/**
 * Return current time with interval
 *
 * Simple check received data: yes or no, to subscribe or unsubscribe
 * Communicate with main service class
 */
export const timer = (commander: Commander, payload: PayloadData, service: MyService) => {
  const status = payload.data.toString();
  if (status === 'yes') {
    service.addToTimer(commander.cid);
  } else {
    service.removeFromTimer(commander.cid);
  }
};
