import KafkaMessage from '../../../@core/entity/kafka-message';
import KafkaMessageRepository from '../../../@core/repository/kafka-message-repository';
//import database from '../database/database';

export default class KafkaMessageRepositorySQL
  implements KafkaMessageRepository
{
  async send(message: string, date: Date): Promise<KafkaMessage> {
    throw new Error('Method not implemented.');
  }
}
