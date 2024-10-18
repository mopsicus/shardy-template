import { Client, DisconnectReason, Extension, ExtensionMode, Logger, LoggerScope } from 'shardy';

/**
 * Example for 'after' extension
 *
 * @export
 * @class AfterExtension
 * @typedef {AfterExtension}
 * @implements {Extension}
 */
export class AfterExtension implements Extension {
  /**
   * Extension name
   */
  name: string = 'after-extension';

  /**
   * Extension mode, after selected
   */
  mode: ExtensionMode = ExtensionMode.After;

  /**
   * Logger instance
   *
   * @type {Logger}
   */
  log!: Logger;

  /**
   * Init extension
   */
  async init(): Promise<void> {
    this.log = new Logger([], this.name);
    this.log.info(`init`, LoggerScope.Debug);
  }

  /**
   * Event when new client connected
   */
  async onClientConnect(client: Client): Promise<void> {
    this.log.info(`connected ${client.id}`, LoggerScope.Debug);
  }

  /**
   * Event when client disconnected
   */
  async onClientDisconnect(client: Client, reason: DisconnectReason): Promise<void> {
    this.log.info(`disconnected ${client.id} with ${reason}`, LoggerScope.Debug);
  }

  /**
   * Event when client made a handshake
   */
  async onClientReady(client: Client): Promise<void> {
    this.log.info(`ready ${client.id}`, LoggerScope.Debug);
  }

  /**
   * Event when service started
   */
  async onServiceListening(): Promise<void> {
    this.log.info(`on listening`, LoggerScope.Debug);
  }

  /**
   * Event when service closed
   */
  async onServiceClose(): Promise<void> {
    this.log.info(`on close`, LoggerScope.Debug);
  }
}
