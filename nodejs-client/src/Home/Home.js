import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from '@material-ui/core';
import './Home.css'


const Home = () => {

    const [day, setDay] = useState("")

    useEffect(() => {
        let currentTime = new Date();

        let month = currentTime.getMonth() + 1;
       var months = [
           "Jan",
           "Feb",
           "Mar",
           "Apr",
           "May",
           "Jun",
           "Jul",
           "Oug",
           "Sep",
           "Oct",
           "Nov",
           "Dec"
       ]

        let weekdays = new Array(7);
        weekdays[0] = "Sunday";
        weekdays[1] = "Monday";
        weekdays[2] = "Tuesday";
        weekdays[3] = "Wednesday";
        weekdays[4] = "Thursday";
        weekdays[5] = "Friday";
        weekdays[6] = "Saturday";
       
        let dayName = weekdays[currentTime.getDay()] +" " + months[month];
        console.log(weekdays[currentTime.getDay()])
        setDay(dayName);

        axios.get('http://api.openweathermap.org/data/2.5/weather?q=pune&appid=5ae591762ca1938ecc9cddeafe00f8d4')
        .then(res => {
            const sData = res.data;
            console.log(sData)
        })
    }, [])

   
   return (
       <div className="Home">
           <h1>Hello you are at home</h1>
           
           <Card>
               <div className="weathercon">
               <i className="fas fa-sun"></i>
               </div>
               <div className="cityinfo">
                   <h2 className="location">Cityname</h2>
                    <h4>{day}</h4>
                   <h3>Temperature</h3>
                   <h4>Temperature min max</h4>
               </div>
           </Card>
           Have an Account ? <NavLink to="/login">Login</NavLink>
       </div>
   )
}

export default Home;