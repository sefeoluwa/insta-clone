import './App.css'
import Button from './Button'
function App() {
   const myName = "Sefeoluwa";
   const myAge = 22
  return (
    <>
      <h1>Hello {myName} and my age is {myAge}</h1>
     <Button alertText="Hello Everyone"/>
     
    </>
  )
}

export default App
