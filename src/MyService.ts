import { TransportType, Logger, LoggerScope, Tools, Service, Client } from 'shardy';
import { Examples } from './Examples';

/**
 * Service example
 *
 * On listening run examples
 *
 * @export
 * @class MyService
 * @implements {Service}
 */
export class MyService implements Service {
  /**
   * Custom var
   */
  db: string = 'db_data';

  /**
   * List of user
   *
   * @private
   * @type {Map<string, Client>}
   */
  users: Map<string, Client> = new Map<string, Client>();

  /**
   * List of users for timer example
   *
   * @type {string[]}
   */
  subscribers: string[] = [];

  /**
   * Timer for example
   *
   * @private
   * @type {NodeJS.Timer}
   */
  private timer!: NodeJS.Timer;

  /**
   * Current service name
   */
  name = process.env.SERVICE_NAME;

  /**
   * Service transport type
   */
  transport = process.env.SERVICE_TRANSPORT as TransportType;

  /**
   * Service logger
   *
   * @private
   * @type {Logger}
   */
  private log: Logger;

  /**
   * Creates an instance of MyService
   */
  constructor() {
    this.log = new Logger([], Tools.getTag(module));
    this.log.info(`initialization`, LoggerScope.System);
  }

  /**
   * Event when new client connected to service
   *
   * @param {Client} client Client instance
   */
  async onConnect(client: Client): Promise<void> {
    this.log.info(`client ${client.id} connected`, LoggerScope.System);
    this.users.set(client.id, client);
  }

  /**
   * Event when new client connected to service
   *
   * @param {Client} client Client instance
   */
  async onReady(client: Client): Promise<void> {
    this.log.info(`client ${client.id} ready`, LoggerScope.System);
  }

  /**
   * Event when client disconnected
   *
   * @param {Client} client
   */
  async onDisconnect(client: Client): Promise<void> {
    this.log.info(`client ${client.id} disconnected`, LoggerScope.System);
    this.users.delete(client.id);
    this.removeFromTimer(client.id);
  }

  /**
   * Event when service successfully run
   *
   * Run timer example, send current time each 5 seconds to subscribers
   * Comment examples.run(); to disable examples
   */
  async onListening(host: string, port: number): Promise<void> {
    this.log.info(`listening on ${host}:${port}`, LoggerScope.System);
    const examples = new Examples();
    examples.run();
    this.timer = setInterval(() => {
      this.subscribers.forEach((id) => {
        if (this.users.has(id)) {
          this.users.get(id)!.command('timer', Buffer.from(Date.now().toString()));
        }
      });
    }, 5000);
  }

  /**
   * Event when service get error
   *
   * @param {Error} error Error with data
   */
  async onError(error: Error): Promise<void> {
    this.log.error(`error: ${error}`, LoggerScope.System);
  }

  /**
   * Event when service close
   */
  async onClose(): Promise<void> {
    this.log.info(`closed`, LoggerScope.System);
  }

  /**
   * Add client to timer example
   *
   * @param string Client id
   */
  async addToTimer(id: string): Promise<void> {
    const index = this.subscribers.indexOf(id, 0);
    if (index < 0) {
      this.subscribers.push(id);
    }
  }

  /**
   * Remove client from timer example
   *
   * @param string Client id
   */
  async removeFromTimer(id: string): Promise<void> {
    const index = this.subscribers.indexOf(id, 0);
    if (index > -1) {
      this.subscribers.splice(index, 1);
    }
  }
}
