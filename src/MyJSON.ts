import { PayloadData, Serializer } from 'shardy';

/**
 * Serializer example, simple JSON
 *
 * @export
 * @class MyJSON
 * @implements {Serializer}
 */
export class MyJSON implements Serializer {
  /**
   * Encode data to JSON
   *
   */
  encode(body: PayloadData): Buffer {
    const json = { type: body.type, name: body.name, id: body.id, error: body.error, data: body.data?.toString() };
    return Buffer.from(JSON.stringify(json));
  }

  /**
   * Decode received data to PayloadData
   */
  decode(body: Buffer): PayloadData {
    const json = JSON.parse(body.toString());
    return { type: json.type, name: json.name, id: json.id, error: json.error, data: json.data };
  }
}
