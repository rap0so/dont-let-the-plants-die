import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { PlantService } from './plant.service';
import { PlantController } from './plant.controller';
import validPlantMiddleware from '../common/middleware/validPlant.middleware';

@Module({
  imports: [],
  controllers: [PlantController],
  providers: [PlantService],
})
export class PlantModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(validPlantMiddleware).forRoutes('plants/:plantId');
  }
}
