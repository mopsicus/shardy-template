import { Task } from 'shardy';
import { db } from './commands/db';
import { echo } from './commands/echo';
import { fail } from './commands/fail';
import { notify } from './commands/notify';
import { status } from './commands/status';
import { timer } from './commands/timer';
import { request } from './commands/request';

/**
 * Commands map
 */
type List = Map<string, Task>;

/**
 * Demo for manual loading commands
 *
 * @export
 * @class Commands
 */
export class Commands {
  /**
   * Load commands and return to app
   *
   * @static
   * @return {*}  {Promise<List>} Map with Tasks
   */
  static async load(): Promise<List> {
    const list = new Map<string, Task>();
    list.set('db', db);
    list.set('echo', echo);
    list.set('fail', fail);
    list.set('notify', notify);
    list.set('status', status);
    list.set('timer', timer);
    list.set('request', request);
    return list;
  }
}
