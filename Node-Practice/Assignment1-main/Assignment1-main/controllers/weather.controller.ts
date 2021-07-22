import { Response, Request, NextFunction } from 'express';
import { db } from '../utils/db';
import fs from "fs";
'use strict';

//Select city to get the details added to the local db 
export const details = async (req: Request, res: Response) => {
  try {
    const rawdata:any = fs.readFileSync('cities_20000.json');
    const citydata = JSON.parse(rawdata);

    res.render('home', {
      cities: citydata,
      path: '/home'
    });

  } catch (error) {
    console.log(error);
    return res.status(500).send({ Error: error });
  }
};

export const getweather = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const city = req.body.city as HTMLSelectElement;
  const rawdata:any = fs.readFileSync('cities_20000.json');
  const citydata = JSON.parse(rawdata);
  const pathvalue = 'https://api.weatherbit.io/v2.0/current/?key=05a15153fe924e8fad885b8b4452dd64&lang=en&city='+city+'';
  const axios = require('axios').default;
  axios.get(pathvalue).then((response: { data: any; }) => {
      db.addCollection("weatherData").insert(response.data);
      db.saveDatabase();
      res.render('home', {
        cities: citydata,
        path: '/home'
      });
    })
    .catch((error: any) => {
      console.log(error);
    });
 
  
};

export const getweatherdata = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try{
    res.render('weatherdata', {
      path: '/weatherdata'
    });
  }
  catch(error) {
    console.log(error);
  }
  
};

function paginator(items: string | any[], current_page: number | any) {
	let page = +current_page || 1 as number,
	per_page = 4,
	offset = (page - 1) * per_page,

	paginatedItems = items.slice(offset).slice(0, per_page),
	total_pages = Math.ceil(items.length / per_page);

	return {
		page: page,
		per_page: per_page,
		pre_page: page - 1 ? page - 1 : null,
		next_page: (total_pages > page) ? page + 1 : null,
		total: items.length,
    hasNextPage: per_page * page < items.length,
    hasPreviousPage: page > 1,
    lastPage: Math.ceil(items.length/per_page),
		total_pages: total_pages,
		data: paginatedItems
	};
}

//Page to see the weather details of the city between the temprature given
export const getweatherinfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {  
  try {
    const page = req.query.page || 1;
    const rawdata:any = fs.readFileSync('db.json');
    const weatherdata = JSON.parse(rawdata);
    const data: any[] = weatherdata.collections[0].data;
    const min=20;
    const max=30;
    var weather:any[] = [];
    data.forEach(element => {
      const temp=element.data[0].temp;
      if(temp <= max && temp >= min){
        weather.push(element.data[0]);
      }
    });
    const pageditems = paginator(weather,page);
    res.render('weatherinfo', {
      weather: pageditems.data,
      pagedata:pageditems,
      path: '/weatherinfo'
    });
  } catch (error) {
    console.log(error);
  }
};
