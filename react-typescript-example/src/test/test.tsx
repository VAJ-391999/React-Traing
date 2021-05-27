import React, {useState, useEffect} from 'react';
import TextField from '../component/TextField';


function Test() {

  const[count, setcount] = useState<number>(0);
  const[signIn, setSignIn] = useState<boolean>(false);
  const[text, setText] = useState<string>("");

  const displayMessage = (msg: any) => {
    console.log(msg);
  }

  let student : {
    id: number,
    name : {
      firstname: string;
      lastname: string;
    }
  }

  
  function fullName (name: {firstname: string, lastname: string}) {
    console.log(`${name.firstname} ${name.lastname}`);
  }

  let p = {
    firstname: 'nikita',
    lastname: 'patel'
  }

  fullName(p);

  class Employee {
    empName: string;

    constructor(name: string) {
      this.empName = name;
    }

    getName() {
      console.log(`Hello ${this.empName}`);
    }
  }

  let emp1 = new Employee('vishwas');
  console.log(emp1.empName);
 emp1.getName();

 class Manager extends Employee {
   constructor(managerName: string){
     super(managerName);
   }

   getWork() {
     console.log('My work is done');
   }
 }

 let m1 = new  Manager('fork');
 m1.getName();
 m1.getWork();
 console.log(m1.empName);

 let collection: string[] = new Array("aJvapoint", "helloworld");
 for(let i =0; i<=collection.length ; i++) {
   console.log(collection[i]);
 }

 let arr1: number[] = [1,2,3];

 let copyArrary = [...arr1, 4, 5];

 console.log(copyArrary);
 copyArrary.push(12);
 console.log(copyArrary);

 //set example

 let set1 = new Set();

 set1.add(1).add(2).add(3);
 console.log(set1);
 set1.forEach(function (value){
   console.log(value);
 })


  let first: string = 'Niti';
  const last: string = 'Lal';

  var lists: number[]= [1,2,3]

  function addition (num1: number = 12, num2: number = 13) {
    return (num1 + num2);
  }

  function genericExample<T, U>(id: T, name: U): void{
    console.log("id data  type:"+ typeof(id) + "name data type:" + typeof(name));
  }

  genericExample<number, string>(101, "neha");

  const changeHandler = () => {
    console.log('changeHandler');
    setSignIn(!signIn);
  }

  let sum: number = addition();
  useEffect(() => {
    console.log('Good morning', first, last);
  }, [first, last])
  

  return (
    <div className="App">
      <h1>{first} {last}</h1>
      <ul>
        {lists.map(list => <li key={list}>{list}</li>)}
      </ul>
      <h2>Addition: {sum}</h2>
      <button onClick={() => setcount(count + 1)}>Count {count}</button><br />
     <button onClick={() => changeHandler()  }>{signIn ? "SIGNUP" : "SIGNIN"}</button><br />
     <button onClick={() => {displayMessage(123)}}>Show message</button>
      <h1>{set1}</h1>
     

    {text}<br />
     <input type="text" onChange={(e) => setText(e.target.value)} />
      <TextField text="I am Venisha" />
    </div>
  );
}

export default Test;
