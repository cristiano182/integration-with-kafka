import KafkaMessage from '../entity/kafka-message';

export default abstract class KafkaMessageRepository {
  abstract send(message: string, date: Date): Promise<KafkaMessage>;
}
