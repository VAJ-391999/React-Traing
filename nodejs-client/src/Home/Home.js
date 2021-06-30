import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import 
{ 
    Card,
    InputLabel,
    Select,
    MenuItem,
    FormControl  } from '@material-ui/core';
import './Home.css'


const Home = () => {

    const [day, setDay] = useState("")
    const [cityName, setCityName] = useState({cName: ""});
    const [collectedData, setCollectedData] = useState({
       location: "",
       country: "",
       temperature: 0,
       tempMin: 0,
       tempMax: 0
        
        });

        let currentTime = new Date();

        let month = currentTime.getMonth();
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
        weekdays[0] = "Sun";
        weekdays[1] = "Mon";
        weekdays[2] = "Tue";
        weekdays[3] = "Wed";
        weekdays[4] = "Thu";
        weekdays[5] = "Fri";
        weekdays[6] = "Sat";

        let date = currentTime.getDate();
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();

        let period = "AM";

        if (hours > 11) {
            period = "PM"
            if (hours > 12) {
                hours -= 12
            }
        }

    useEffect(() => {
       

        let dayName = weekdays[currentTime.getDay()] + " | " + months[month] + " " + date + " | " + hours + ":" + minutes + period;
        setDay(dayName);

        axios.get('http://localhost:4002')
            .then(res => {
                const sData = res.data;
                console.log(typeof sData, sData)
                setCollectedData({
                    ...collectedData, 
                    location:sData.name,
                    country: sData.sys.country,
                    temperature: sData.main.temp,
                    tempMin: sData.main.temp_min,
                    tempMax: sData.main.temp_max
                })
            })
            //console.log(cityName.cName)
    },[])

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
      };
     
      console.log(cityName)
    
    const handleCity = (event) => {
        event.preventDefault();
        console.log("Post")
        const jsonData = axios.post('http://localhost:4000/app', {cName: cityName.cName}, {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
      
          })
        .then(res => {
            const resJson = JSON.parse(res.data)
            console.log(resJson)
        })
        
        console.log(jsonData)
    }

    return (
        <div className="Home">
            <h1>Hello you are at home</h1>
            
            {<form>
            <FormControl style={{width: '200px'}}>
                <InputLabel id="demo-simple-select-label">City Name</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={cityName.cName}
                    name="city"
                    onChange={(event) => {setCityName({cName : event.target.value})}}
                >
                    <MenuItem value="pune">Pune</MenuItem>
                    <MenuItem value="gujarat">Gujarat</MenuItem>
                    <MenuItem value="mumbai">Mumbai</MenuItem>
                </Select>
            </FormControl>
    </form>}<br />
            <button type="submit" onClick={(event)=>handleCity(event)} >Click</button>
            <Card>
                <div className="weathercon">
                    <i className="fas fa-sun"></i>
                </div>
                <div className="cityinfo">
                    <h2 className="location">{collectedData.location} , {collectedData.country}</h2>
                    <h4>{day}</h4>
                    <h3>{eval(((collectedData.temperature -32) * (5/9)).toFixed(2))} C</h3>
                    <h4>Temp_Min {collectedData.tempMin} | Temp_Max {collectedData.tempMax}</h4>
                </div>
            </Card>
           Have an Account ? <NavLink to="/login">Login</NavLink>
        </div>
    )
}

export default Home;