import { Validator, ValidatorState } from 'shardy';

/**
 * Validator example, use stubs
 *
 * @export
 * @class MyHandshake
 * @implements {Validator}
 */
export class MyHandshake implements Validator {
  /**
   * Verify client handshake
   *
   * For example just return success
   *
   * @param {Buffer} body Data from client
   * @return {*}  {ValidatorState} Validation result
   */
  verifyHandshake(body: Buffer): ValidatorState {
    console.log(`[MyHandshake] verify handshake: ${body}`);
    //
    // validate as you wish here
    //
    return ValidatorState.Success;
  }

  /**
   * Verify acknowledgement
   *
   * For example just return success
   *
   * @param {Buffer} body Data to verify
   * @return {*}  {ValidatorState} Validation result
   */
  verifyAcknowledgement(body: Buffer): ValidatorState {
    console.log(`[MyHandshake] verify acknowledgement: ${body}`);
    //
    // validate as you wish here
    //
    return ValidatorState.Success;
  }

  /**
   * Data for acknowledgement
   *
   * You can get input data and transport it onwards
   * Or you can replace it
   * Or you can mix input data with some salt
   *
   * For example, just return input data as it is
   *
   * @param {Buffer} body Input data
   * @return {*}  {Buffer} Output data
   */
  acknowledgement(body: Buffer): Buffer {
    //
    // generate as you wish here
    //
    return body;
  }

  /**
   * Data for initial handshake
   *
   * You can get input data and transport it onwards
   * Or you can replace it
   * Or you can mix input data with some salt
   *
   * For example, just return simple string
   *
   * @param {Buffer} [body] Input data
   * @return {*}  {Buffer} Output data
   */
  handshake(body?: Buffer): Buffer {
    console.log(`[MyHandshake] handshake data: ${body}`);
    //
    // generate as you wish here
    //
    return Buffer.from('handshake_data');
  }
}
