
import express from 'express';
import {details, getweather, getweatherinfo,getweatherdata} from '../controllers/weather.controller';

const router = express.Router();

router.get('/details', details);
router.post('/getweather', getweather);
router.get('/getweatherdata', getweatherdata);
router.get('/getweatherinfo', getweatherinfo);
export default router;