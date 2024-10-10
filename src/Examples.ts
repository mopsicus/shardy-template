import { Bot, PayloadData, TransportType } from 'shardy';
import { MyHandshake } from './MyHandshake';
import { MyJSON } from './MyJSON';
import { setTimeout } from 'timers';

/**
 * Some examples for Shardy
 *
 * @export
 * @class Examples
 */
export class Examples {
  /**
   * Bot instance
   *
   * @private
   * @type {Bot}
   */
  private bot: Bot;

  /**
   * Creates an instance of Examples
   */
  constructor() {
    const validator = new MyHandshake();
    const serializer = new MyJSON();
    this.bot = new Bot(process.env.SERVICE_HOST, process.env.SERVICE_PORT, process.env.SERVICE_TRANSPORT as TransportType, { validator, serializer });
    this.bot.onConnect = () => {
      this.bot.handshake();
    };
    this.bot.onReady = () => {
      this.bot.log.info(`----------------------`);
      this.bot.log.info(`|                    |`);
      this.bot.log.info(`|       fetch >      |`);
      this.bot.log.info(`|                    |`);
      this.bot.log.info(`----------------------`);
      this.fetch();
      this.bot.log.info(`----------------------`);
      this.bot.log.info(`|                    |`);
      this.bot.log.info(`|      request >     |`);
      this.bot.log.info(`|                    |`);
      this.bot.log.info(`----------------------`);
      this.request();
      this.bot.log.info(`----------------------`);
      this.bot.log.info(`|                    |`);
      this.bot.log.info(`|   request data >   |`);
      this.bot.log.info(`|                    |`);
      this.bot.log.info(`----------------------`);
      this.requestWithData();
      this.bot.log.info(`----------------------`);
      this.bot.log.info(`|                    |`);
      this.bot.log.info(`|   request error >  |`);
      this.bot.log.info(`|                    |`);
      this.bot.log.info(`----------------------`);
      this.requestError();
      this.bot.log.info(`----------------------`);
      this.bot.log.info(`|                    |`);
      this.bot.log.info(`| request service >  |`);
      this.bot.log.info(`|                    |`);
      this.bot.log.info(`----------------------`);
      this.requestService();
      this.bot.log.info(`----------------------`);
      this.bot.log.info(`|                    |`);
      this.bot.log.info(`|      command >     |`);
      this.bot.log.info(`|                    |`);
      this.bot.log.info(`----------------------`);
      this.command();
      this.bot.log.info(`----------------------`);
      this.bot.log.info(`|                    |`);
      this.bot.log.info(`|   command data >   |`);
      this.bot.log.info(`|                    |`);
      this.bot.log.info(`----------------------`);
      this.commandWithData();
      this.bot.log.info(`----------------------`);
      this.bot.log.info(`|                    |`);
      this.bot.log.info(`|    on request >    |`);
      this.bot.log.info(`|                    |`);
      this.bot.log.info(`----------------------`);
      this.subscribeOnRequest();
      this.bot.log.info(`----------------------`);
      this.bot.log.info(`|                    |`);
      this.bot.log.info(`|     subscribe >    |`);
      this.bot.log.info(`|                    |`);
      this.bot.log.info(`----------------------`);
      this.subscribeOnCommand();
      setTimeout(() => {
        // unsubscribe from command after 20 seconds
        this.bot.log.info(`----------------------`);
        this.bot.log.info(`|                    |`);
        this.bot.log.info(`|    unsubscribe >   |`);
        this.bot.log.info(`|                    |`);
        this.bot.log.info(`----------------------`);
        this.unsubscribeOnCommand();
      }, 20000);
    };
  }

  /**
   * Test request with answer
   */
  async fetch(): Promise<void> {
    const response = await this.bot.fetch('status');
    this.bot.log.info(`----------------------`);
    this.bot.log.info(`|                    |`);
    this.bot.log.info(`|      < fetch       |`);
    this.bot.log.info(`|                    |`);
    this.bot.log.info(`----------------------`);
    this.bot.log.info(`test fetch answer: ${response.data}`);
  }

  /**
   * Test request and show answer
   */
  async request(): Promise<void> {
    const id = await this.bot.request('status', (response) => {
      this.bot.log.info(`----------------------`);
      this.bot.log.info(`|                    |`);
      this.bot.log.info(`|     < request      |`);
      this.bot.log.info(`|                    |`);
      this.bot.log.info(`----------------------`);
      this.bot.log.info(`test request answer: ${response.data}`);
    });
    this.bot.log.info(`test request id for cancel: ${id}`);
    //
    // you can try cancelling the request if it's taking a lot of time
    //
    // this.bot.cancel(id);
  }

  /**
   * Test request with data
   */
  async requestWithData(): Promise<void> {
    this.bot.request(
      'status',
      (response) => {
        this.bot.log.info(`----------------------`);
        this.bot.log.info(`|                    |`);
        this.bot.log.info(`|  < request data    |`);
        this.bot.log.info(`|                    |`);
        this.bot.log.info(`----------------------`);
        this.bot.log.info(`test request with data, answer: ${response.data}`);
      },
      Buffer.from('request_data'),
    );
  }

  /**
   * Test request with fail handler
   */
  async requestError(): Promise<void> {
    this.bot.request('fail', (response) => {
      this.bot.log.info(`----------------------`);
      this.bot.log.info(`|                    |`);
      this.bot.log.info(`|  < request error   |`);
      this.bot.log.info(`|                    |`);
      this.bot.log.info(`----------------------`);
      if (response.error.length > 0) {
        this.bot.log.error(`test request fail: ${response.data}`);
      }
    });
  }

  /**
   * Command with MyService communication
   */
  async requestService(): Promise<void> {
    this.bot.request('db', (response) => {
      this.bot.log.info(`----------------------`);
      this.bot.log.info(`|                    |`);
      this.bot.log.info(`| < request service  |`);
      this.bot.log.info(`|                    |`);
      this.bot.log.info(`----------------------`);
      this.bot.log.info(`test request service db: ${response.data}`);
    });
  }

  /**
   * Test command/event/notification
   */
  async command(): Promise<void> {
    this.bot.command('notify');
  }

  /**
   * Test command with data
   */
  async commandWithData(): Promise<void> {
    this.bot.command('notify', Buffer.from('command_data'));
  }

  /**
   * Test subscribe
   */
  async subscribeOnCommand(): Promise<void> {
    this.bot.on('timer', this.subscribeCallback);
    this.bot.command('timer', Buffer.from('yes'));
  }

  /**
   * Subscribe on request from server
   *
   * Send command to initiate this example
   */
  async subscribeOnRequest(): Promise<void> {
    this.bot.onRequest('request', (payload) => {
      this.bot.log.info(`----------------------`);
      this.bot.log.info(`|                    |`);
      this.bot.log.info(`|    < on request    |`);
      this.bot.log.info(`|                    |`);
      this.bot.log.info(`----------------------`);
      // make response on this request id
      //
      // if comment this, you will give timeout on your request side
      this.bot.response(payload, Buffer.from('some_data_on_request'));
    });
    this.bot.command('request');
  }

  /**
   * Unsubscribe from command timer
   */
  async unsubscribeOnCommand(): Promise<void> {
    this.bot.off('timer', this.subscribeCallback);
    this.bot.command('timer', Buffer.from('no'));
  }

  /**
   * Callback for subscribe command
   */
  subscribeCallback = async (response: PayloadData) => {
    this.bot.log.info(`----------------------`);
    this.bot.log.info(`|                    |`);
    this.bot.log.info(`|  < subscribe data  |`);
    this.bot.log.info(`|                    |`);
    this.bot.log.info(`----------------------`);
    this.bot.log.info(`test subscribe timer: ${response.data}`);
  };

  /**
   * Connect bot and run all examples
   *
   * After connect and ready, bot will send few requests and commands
   * First, you'll see commands from bot
   * After, see received commands by service and sent responses
   * Finally, see received responses to bot
   */
  async run(): Promise<void> {
    this.bot.start();
  }
}
