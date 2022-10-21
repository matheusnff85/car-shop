import { z } from 'zod';
import { IVehicle } from './IVehicle';

const motorcycleZodSchema = z.object({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().int().lte(2500),
});

type MotorcycleType = z.infer<typeof motorcycleZodSchema>;

export interface IMotorcycle extends IVehicle, MotorcycleType {}