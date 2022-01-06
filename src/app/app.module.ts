import { Module } from '@nestjs/common';

import { PlantService } from '../plant/plant.service';
import { PlantController } from '../plant/plant.controller';

@Module({
  imports: [],
  controllers: [PlantController],
  providers: [PlantService],
})
export class AppModule {}
