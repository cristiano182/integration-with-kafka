import KafkaMessage from '../../../@core/entity/kafka-message';
import KafkaMessageRepository from '../../../@core/repository/kafka-message-repository';
//import database from '../database/database';

export default class KafkaMessageRepositorySQL
  implements KafkaMessageRepository
{
  async send(message: string, date: Date): Promise<KafkaMessage> {
    return;
    //await database.none("insert into example.parked_car (code, plate, date) values ($1, $2, $3)", [code, plate, date]);
  }
}
