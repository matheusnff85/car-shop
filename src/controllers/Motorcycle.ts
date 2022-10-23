import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';
import { IMotorcycle } from '../interfaces/IMotorcycle';

export default class MotorcycleController {
  constructor(private _carService: IService<IMotorcycle>) {}

  public async create(
    req: Request,
    res: Response<IMotorcycle>,
  ) {
    const result = await this._carService.create(req.body);
    return res.status(201).json(result);
  }

  public async read(
    _req: Request,
    res: Response<IMotorcycle[]>,
  ) {
    const result = await this._carService.read();
    return res.status(200).json(result);
  }

  public async readOne(
    req: Request,
    res: Response<IMotorcycle>,
  ) {
    const { id } = req.params;
    const result = await this._carService.readOne(id);
    return res.status(200).json(result);
  }

  public async delete(
    req: Request,
    res: Response<IMotorcycle>,
  ) {
    const { id } = req.params;
    await this._carService.delete(id);
    return res.status(204).end();
  }

  public async update(
    req: Request,
    res: Response<IMotorcycle>,
  ) {
    const { id } = req.params;
    const result = await this._carService.update(id, req.body);
    return res.status(200).json(result);
  }
}