import { Controller, Post, Body, Inject } from '@nestjs/common';
//import { saveKafkaMessageFactory } from '../factories/controllers/save-kafka-message-factory';
import { Producer } from 'kafkajs';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { KafkaMessage } from '@nestjs/microservices/external/kafka.interface';

@Controller('kafka')
export class AppController {
  constructor(
    @Inject('KAFKA_PRODUCER')
    private kafkaProducer: Producer,
  ) {}
  // @Post()
  // async create(@Body() payload: any) {
  //   const saveKafkaMessage = saveKafkaMessageFactory();
  //   const response = await saveKafkaMessage.execute(payload.code);
  //   return response;
  // }

  @Post('producer')
  async producer(@Body() body) {
    await this.kafkaProducer.send({
      topic: 'topico-exemplo',
      messages: [{ key: 'pagamentos', value: JSON.stringify(body) }],
    });
    return 'Mensagem publicada';
  }

  @MessagePattern('topico-exemplo')
  consumer(@Payload() message: KafkaMessage) {
    console.log(message.value);
  }
}
