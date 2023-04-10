import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import Person from './person'
//Class component
// class Person extends React.Component{
//   render(){
//     return <h2>Hi I am a John</h2>;
//   }
// }
//function component
// function Bike(){
//   return <h2>Hi, I am a Bike!</h2>;
// }
//    props and components in components
//components in file create new js file and create commponet and export 
// function Car(props){
//   return <h2>I am a {props.color} Car!</h2>;
 
// }
//  function Garage(){
//     return(<>
//     <h1>who lives in my garage?</h1>
//     <Car/>
//     </>);
//   }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

    {/* <Bike/>
    <Person/>
    <Car color="red"/>
    <Garage/>
    <Person/> */}

  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
