import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import {
  CreatePlantDto,
  PlantDto,
  UpdatePlantDto,
} from 'src/plant/dto/plant.dto';
import plantsDb from '../db.json';

@Injectable()
export class PlantService {
  /* to protect the data from being accessed we're setting it to private */
  private plants = plantsDb;

  add(payload: CreatePlantDto) {
    const newPlant = {
      ...payload,
      id: randomUUID(),
    };

    this.plants.unshift(newPlant);

    return this.plants;
  }

  delete(plantId): PlantDto[] {
    this.plants = this.plants.filter(({ id }) => id !== plantId);

    return this.plants;
  }

  update(plantId: string, payload: UpdatePlantDto) {
    this.plants = this.plants.map((plant) => {
      if (plant.id === plantId) {
        return { ...plant, ...payload };
      }

      return plant;
    });
  }

  find(plantId): PlantDto {
    return this.plants.find(({ id }) => id === plantId);
  }

  findAll(): PlantDto[] {
    return this.plants;
  }
}
