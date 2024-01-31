import './App.css'
import NavBar from './components/NavBar/NavBar'
import Products from './components/Products/Products'
import Button from './components/Button/Button'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <NavBar/>
      <Products titulo ={"soy un titulo"}/>
      <Button/>
      <Products titulo ={"soy un titulo 2"}/>
      <Button/>
      <Footer/>
       
    </>
  )
}

export default App
