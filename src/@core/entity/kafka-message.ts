export default class KafkaMessage {
  message: string;
  date: Date;

  constructor(message: string, date: Date) {
    this.message = message;
    this.date = date;
  }
}
