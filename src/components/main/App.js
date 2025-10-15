import './App.css'
import MiLista from '../Lista/MiLista.js'

function App() {
  return (
    <div>
    <h1>Hola Mundo</h1>
    <h2>Este es mi primer componente React</h2>
    <div classname='parrafo'>
      <p>Bienvenido a mi aplicacion, esto fue creado con Javascript en React</p>
  </div>
  
  <br/>
  <MiLista 
  titulo="Clientes"
  nombre1="Juan"
  nombre2="Pedro"
  nombre3="Agustin"
  nombre4="Rigoberto"
  nombre5="Joaquin"
  nombre6="Federico"
  />
  <br/>
  <MiLista 
  titulo="Familiares"
  nombre1="Ana"
  nombre2="Juan"
  nombre3="Marcos"
  nombre4="Peter"
  nombre5="Maria"
  nombre6="Jimena"
  />
  <br/>
  <MiLista titulo="Amigos"
  nombre1="Pepa"
  nombre2="Pepe"
  nombre3="Paco"
  nombre4="Pablo"
  nombre5="Nicolas"
  nombre6="Alberto"
  />
  </div>
  )
}



export default App;
