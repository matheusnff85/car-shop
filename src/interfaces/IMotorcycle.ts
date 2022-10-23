import { z } from 'zod';
import { IVehicle } from './IVehicle';

const motorcycleZodSchema = z.object({
  _id: z.string().optional(),
  model: z.string().min(3),
  year: z.number().int().gte(1900).lte(2022),
  color: z.string().min(3),
  status: z.boolean().optional(),
  buyValue: z.number().int(),
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().int().lte(2500),
});

type MotorcycleType = z.infer<typeof motorcycleZodSchema>;

export interface IMotorcycle extends IVehicle, MotorcycleType {}