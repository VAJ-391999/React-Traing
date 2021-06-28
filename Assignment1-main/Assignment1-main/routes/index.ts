import express from 'express';
import weatherRoute from './weather.route';

const router = express.Router();

const defaultRoutes = [
  {
    path: '/weather',
    route: weatherRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
