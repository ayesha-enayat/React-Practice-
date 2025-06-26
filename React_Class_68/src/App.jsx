import './App.css'
import Card from './components/Card'
function App() {
  let arr = [11, 23, 35, 47, 45, 36, 27, 78, 89, 101]
  const getData = (name) => {
    console.log(name)
  }
return (
   <>
    {
      arr.map((v, i) =>
        <Card key={i} v={v} getData={getData} />
      )
    }
   </>
  )
}


export default App


