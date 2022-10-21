import { z } from 'zod';
import { IVehicle } from './IVehicle';

export const carZodSchema = z.object({
  doorsQty: z.number().int().gte(2).lte(4),
  seatsQty: z.number().gte(2).lte(7),
});

type CarType = z.infer<typeof carZodSchema>;

export interface ICar extends IVehicle, CarType {}