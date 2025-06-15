
import './App.css'
import IMG from './assets/download.jpeg'
import {Header,Footer} from './components/index.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

let name="Ayesha";

function App() {
  let fatherName="Enayat"
  let func=()=>{
    console.log("Hello World");
  }
  let func2=(name)=>{
    console.log("Hello World "+name);
  }
  const students=[{
    name:"Ayesha",
    age:20,
    class:"BSCS",
    fatherName:"Enayat"
  },
{
    name:"Ali",
    age:22,
    class:"BSCS",
    fatherName:"Khan"
  },
{
    name:"Sara",
    age:21,
    class:"BSCS",
    fatherName:"Khan"
  },
{
    name:"Ahmed",
    age:23,
    class:"BSCS",
    fatherName:"Ali"
}
]
const arr=[1,2,3,4,5,6,7,8,9,10];


  return (
    <>
      <h3>{name}{fatherName}</h3>
      <h1 style={{ background: "red" }}>React Class 01</h1>
      <button onClick={() => func()}>Click me</button>
      <img src={IMG} alt="" />
      {/* <h1>{student.name}</h1>
      <h1>{student.age}</h1>
      <h1>{student.class}</h1>
      <h1>{student.fatherName}</h1>
    */}
    <ul>
        {students.map((v, i) => 
          <li key={i}>{v.name}</li>
)}
      </ul>
      <p>{arr}</p>


      <Header />
      <Footer />
       <Button variant="primary">
    Boostrap Button
  </Button>
      </>

      
  )
}

export default App
