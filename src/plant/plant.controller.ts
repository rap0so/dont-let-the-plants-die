import {
  Controller,
  Delete,
  Get,
  Put,
  Post,
  Param,
  Body,
  ParseUUIDPipe,
} from '@nestjs/common';
import { PlantService } from 'src/plant/plant.service';
import { CreatePlantDto, UpdatePlantDto, PlantDto } from './dto/plant.dto';

@Controller('plants')
export class PlantController {
  constructor(private readonly plantService: PlantService) {}

  @Get()
  getAllPlants(): PlantDto[] {
    return this.plantService.findAll();
  }

  @Get('/:plantId')
  getPlantById(
    @Param('plantId', new ParseUUIDPipe()) plantId: string,
  ): PlantDto {
    return this.plantService.find(plantId);
  }

  @Post()
  createPlant(@Body() plant: CreatePlantDto) {
    return this.plantService.add(plant);
  }

  @Put('/:plantId')
  updatePlant(
    @Param('plantId', new ParseUUIDPipe()) plantId: string,
    @Body() plant: UpdatePlantDto,
  ) {
    this.plantService.update(plantId, plant);

    return true;
  }

  @Delete('/:plantId')
  deletePlant(@Param('plantId', new ParseUUIDPipe()) plantId: string) {
    this.plantService.delete(plantId);

    return true;
  }
}
