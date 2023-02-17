import KafkaMessage from '../entity/kafka-message';

export default interface KafkaMessageRepository {
  send(message: string, date: Date): Promise<KafkaMessage>;
}
