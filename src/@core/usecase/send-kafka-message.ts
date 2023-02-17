import KafkaMessage from '../entity/kafka-message';
import KafkaMessageRepository from '../repository/kafka-message-repository';

export default class SaveKafkaMessage {
  kafkaMessageRepository: KafkaMessageRepository;

  constructor(kafkaMessageRepository: KafkaMessageRepository) {
    this.kafkaMessageRepository = kafkaMessageRepository;
  }

  async execute(message: string, date: Date) {
    const kafkaMessage = new KafkaMessage(message, date);
    await this.kafkaMessageRepository.send(
      kafkaMessage.message,
      kafkaMessage.date,
    );
    return kafkaMessage;
  }
}
