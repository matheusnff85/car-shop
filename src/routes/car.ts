import { Router } from 'express';
import CarController from '../controllers/Car';
import CarService from '../services/Car';
import CarModel from '../models/Car';

const route = Router();

const carModel = new CarModel();
const carService = new CarService(carModel);
const carController = new CarController(carService);

route.get('/cars/:id', (req, res) => carController.readOne(req, res));
route.get('/cars', (req, res) => carController.read(req, res));
route.post('/cars', (req, res) => carController.create(req, res));
route.delete('/cars/:id', (req, res) => carController.delete(req, res));
route.put('/cars/:id', (req, res) => carController.update(req, res));

export default route;