import logo from './logo.svg';
import './App.css';
import SignUp from './pages/signup';
import Navbar from './components/navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs';
import Contact from './pages/contact';
//classes
// class Car{
//   constructor(name){
//     this.brand=name;
//   }
//   present(){
//     return 'I have a' + this.brand;
//   }
// }
//Inheritance
// class Model extends Car{
//   constructor(name,mod){
//     super(name);
//     this.model=mod;
//   }
//   show(){
//     return this.present() + ', it is a' + this.model
//   }
//   hello=(val)=>"hello"+val;
// }
//arrow function
// const hello=() =>{
//   return "hello world";
// }
//more shortcut
//hello=() => "hello world";
// const mycar=new Car("Ford");

// class Header{
//   constructor(){
//     this.color = "Red";
//   }
  //Regular function
//   changeColor = ()=>{
//     document.getElementById("demo").innerHTML += this;
//   }
// }
//const myheader = new Header();

//Array
// const myArray=['Apple','banana','cat','dog'];
// const myList = myArray.map((item)=><p>{item}</p>);


// const mycar=new Model("Ford","Mustang");



// function App() {
//   return (
//     <div className="App">
//       <h1>My React App</h1>
//       <img src={logo} className="App-logo"/>
//       <p>{mycar.show()}</p>
//       <p>{mycar.hello(5)}</p>
//        */}
//      {/* {window.addEventListener('load',myheader.changeColor)}
//      <p id="demo">this is text</p>
//      {/* {myList} */}

//     </div>
//   );
// }
function App(){
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
      </Routes>
       
    </Router>
  )
}

export default App;
